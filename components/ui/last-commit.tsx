"use client";

import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

const UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
    ["year", 365 * 24 * 3600],
    ["month", 30 * 24 * 3600],
    ["week", 7 * 24 * 3600],
    ["day", 24 * 3600],
    ["hour", 3600],
    ["minute", 60],
];

export function relativeTime(date: Date, now: number): string {
    const seconds = Math.round((date.getTime() - now) / 1000);
    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
    for (const [unit, size] of UNITS) {
        if (Math.abs(seconds) >= size) return rtf.format(Math.round(seconds / size), unit);
    }
    return "just now";
}

// One clock reading per page load; null on the server so the cached HTML holds the plain date.
let pageLoadTime: number | null = null;
const subscribe = () => () => {};
const getNow = () => (pageLoadTime ??= Date.now());
const getServerNow = () => null;

// The page is cached, so "3 hours ago" is computed in the browser; the server renders the plain date.
export default function LastCommit({ date }: { date: string }) {
    const now = useSyncExternalStore(subscribe, getNow, getServerNow);

    const d = new Date(date);
    const label = now === null
        ? d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })
        : relativeTime(d, now);
    const recent = now !== null && now - d.getTime() < 30 * 24 * 3600 * 1000;

    return (
        <p className="flex items-center gap-2 text-xs text-gray-500 mb-4">
            <span className={cn("h-1.5 w-1.5 rounded-full", recent ? "bg-green-400" : "bg-gray-600")} aria-hidden="true" />
            Last commit <time dateTime={date}>{label}</time>
        </p>
    );
}
