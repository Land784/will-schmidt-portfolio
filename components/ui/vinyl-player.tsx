"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Minimal types for Spotify's iFrame API (https://developer.spotify.com/documentation/embeds/references/iframe-api)
type SpotifyController = {
    addListener(
        event: "playback_update",
        cb: (e: { data: { isPaused: boolean; position: number; duration: number } }) => void,
    ): void;
    destroy(): void;
};
type SpotifyIFrameAPI = {
    createController(
        el: HTMLElement,
        options: { uri: string; width: string; height: number },
        cb: (controller: SpotifyController) => void,
    ): void;
};

declare global {
    interface Window {
        onSpotifyIframeApiReady?: (api: SpotifyIFrameAPI) => void;
    }
}

// The API script can only be loaded once per page, so every player shares one promise.
let apiPromise: Promise<SpotifyIFrameAPI> | null = null;
function loadSpotifyApi(): Promise<SpotifyIFrameAPI> {
    apiPromise ??= new Promise((resolve, reject) => {
        window.onSpotifyIframeApiReady = resolve;
        const script = document.createElement("script");
        script.src = "https://open.spotify.com/embed/iframe-api/v1";
        script.async = true;
        script.onerror = () => {
            apiPromise = null;
            reject(new Error("Spotify embed failed to load"));
        };
        document.body.appendChild(script);
    });
    return apiPromise;
}

type Props = {
    trackId: string;
    cover: string;
    title: string;
    artist: string;
};

export default function VinylPlayer({ trackId, cover, title, artist }: Props) {
    const embedRef = useRef<HTMLDivElement>(null);
    const [playing, setPlaying] = useState(false);
    const [apiFailed, setApiFailed] = useState(false);

    useEffect(() => {
        const host = embedRef.current;
        if (!host) return;
        let cancelled = false;
        let controller: SpotifyController | undefined;

        loadSpotifyApi()
            .then((api) => {
                if (cancelled) return;
                // Spotify replaces the element it's given, so hand it a child React doesn't own.
                const target = document.createElement("div");
                host.appendChild(target);
                api.createController(target, { uri: `spotify:track:${trackId}`, width: "100%", height: 152 }, (c) => {
                    if (cancelled) return c.destroy();
                    controller = c;
                    // At the end Spotify reports position === duration but never isPaused, so check both.
                    c.addListener("playback_update", ({ data }) =>
                        setPlaying(!data.isPaused && data.position < data.duration),
                    );
                });
            })
            .catch(() => setApiFailed(true));

        return () => {
            cancelled = true;
            controller?.destroy();
            host.replaceChildren();
        };
    }, [trackId]);

    return (
        <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Turntable */}
            <div className="relative h-60 w-60 shrink-0" aria-hidden="true">
                <div className={cn("vinyl absolute inset-0 rounded-full shadow-2xl ring-1 ring-white/15", playing && "vinyl-playing")}>
                    <Image
                        src={cover}
                        alt=""
                        width={120}
                        height={120}
                        className="absolute inset-[32%] h-[36%] w-[36%] rounded-full object-cover"
                    />
                    <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black" />
                </div>
                {/* Fixed light sheen, so the grooves catch light while the record turns underneath */}
                <div className="pointer-events-none absolute inset-0 rounded-full bg-[conic-gradient(from_30deg,transparent_0deg,rgb(255_255_255/0.07)_25deg,transparent_50deg,transparent_180deg,rgb(255_255_255/0.05)_205deg,transparent_230deg)]" />
                {/* Tonearm: rests beside the record, swings onto it while the song plays */}
                <div
                    className={cn(
                        "absolute -right-3 top-2 h-[150px] w-1.5 origin-top rounded-full bg-gray-400 transition-transform duration-700 ease-out",
                        playing ? "rotate-[25deg]" : "rotate-0",
                    )}
                >
                    <div className="absolute -left-1 -top-1 h-3.5 w-3.5 rounded-full bg-gray-300" />
                    <div className="absolute -bottom-1 -left-1 h-4 w-3.5 rounded-sm bg-gray-300" />
                </div>
            </div>

            {/* Player */}
            <div className="w-full max-w-md">
                <p className="text-sm text-gray-400 mb-4">
                    My current favorite track: <span className="text-white font-semibold">{title}</span> by {artist}.
                    Press play to drop the needle.
                </p>
                <div ref={embedRef} className={apiFailed ? undefined : "min-h-[152px]"} />
                {apiFailed && (
                    <iframe
                        title={`Spotify: ${title}`}
                        src={`https://open.spotify.com/embed/track/${trackId}`}
                        width="100%"
                        height="152"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="rounded-xl"
                    />
                )}
            </div>
        </div>
    );
}
