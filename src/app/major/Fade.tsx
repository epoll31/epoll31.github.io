"use client";

import { useEffect, useState } from "react";

export default function Fade({
    color,
    duration,
}: {
    color?: string,
    duration?: number,
}) {
    const [opacity, setOpacity] = useState("opacity-100");
    const [state, setState] = useState<"setup" | "started" | "ended">("setup");
    useEffect(() => {
        if (state === "setup") {
            setOpacity("opacity-0");
            setState("started");
            setTimeout(() => {
                setOpacity("opacity-100");
                setState("ended");
            }, duration ?? 500);
        }
    }, [state]);

    return state !== "ended" && (
        <div className={`fixed w-screen h-screen bg-${color ?? "background"} z-50 ${opacity}`}
            style={{
                transition: `opacity ${duration ?? 500}ms ease-in-out`,
            }
            }
        ></div >
    );
}