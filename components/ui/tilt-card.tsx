"use client";

import type { PointerEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

const MAX_TILT_DEG = 9;

// Tilts toward the mouse cursor; the transform itself lives in globals.css (.tilt-card) so reduced-motion users opt out.
export default function TiltCard({ className, children }: { className?: string; children: ReactNode }) {
    function handleMove(e: PointerEvent<HTMLDivElement>) {
        if (e.pointerType !== "mouse") return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        e.currentTarget.style.setProperty("--tilt-x", `${-y * MAX_TILT_DEG}deg`);
        e.currentTarget.style.setProperty("--tilt-y", `${x * MAX_TILT_DEG}deg`);
    }

    function handleLeave(e: PointerEvent<HTMLDivElement>) {
        e.currentTarget.style.removeProperty("--tilt-x");
        e.currentTarget.style.removeProperty("--tilt-y");
    }

    return (
        <div className={cn("tilt-card", className)} onPointerMove={handleMove} onPointerLeave={handleLeave}>
            {children}
        </div>
    );
}
