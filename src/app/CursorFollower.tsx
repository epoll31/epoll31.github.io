"use client";

import React, { use, useEffect, useState } from "react";
import "./useMouse";
import useMouse from "./useMouse";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { twMerge } from "tailwind-merge";
import { setClassName, setFollowMouse, setPosition } from "@/lib/features/mouse/mouseSlice";



export interface CursorLockProps {
    cursorLockedClassName?: string,
    noLock?: boolean,
    holdLock?: boolean
}

export function useCursorLock({
    cursorLockedClassName,
    noLock,
    holdLock
}: CursorLockProps = {}) {
    const dispatch = useAppDispatch();
    const handleMouseEnter = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const buttonRect = event.currentTarget.getBoundingClientRect();
        const centerX = buttonRect.left + buttonRect.width / 2;
        const centerY = buttonRect.top + buttonRect.height / 2;
        dispatch(setPosition({ x: centerX, y: centerY }));
        dispatch(setClassName(cursorLockedClassName))
        if (noLock == undefined || noLock == false) {
            dispatch(setFollowMouse(false));
        }
    }
    const handleMouseLeave = () => {
        if (holdLock == undefined || holdLock == false) {
            dispatch(setFollowMouse(true));
        }
    }

    return { handleMouseEnter, handleMouseLeave };
}

export function CursorLock({
    children,
    className,
    ...cursorLockProps
}: {
    children?: React.ReactNode,
    className?: string,
} & CursorLockProps
) {
    const { handleMouseEnter, handleMouseLeave } = useCursorLock(cursorLockProps);

    return (
        <div className={className}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            {children}
        </div>
    );
}


export function CursorFollower() {
    const mouse_slice = useAppSelector(s => s.mouse);
    const mouse_true = useMouse();
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [following, setFollowing] = useState(mouse_slice.followMouse);

    useEffect(() => {
        if (mouse_slice.followMouse) {
            setPosition({ x: mouse_true.x, y: mouse_true.y });
            setFollowing(true);
        }
    }, [mouse_true]);

    useEffect(() => {
        if (!mouse_slice.followMouse) {
            setPosition({ x: mouse_slice.x, y: mouse_slice.y });
            setFollowing(false);
        }
    }, [mouse_slice.followMouse, mouse_slice]);

    let className = `fixed -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-150 ease-out -z-10`;
    if (following) {
        className = twMerge(className, " w-4 h-4 backdrop-invert rounded-full ");
    }
    else {
        if (mouse_slice.className) {
            className = twMerge(className, mouse_slice.className);
        }
        else {
            className = twMerge(className, "w-8 h-8 backdrop-invert rounded-full z-10");
        }
    }

    return (
        <div className={className}
            style={{ top: `${position.y}px`, left: `${position.x}px` }
            }>
        </div >
    );
}
// export function CursorFollower() {
//     const { x, y, dx, dy } = useMouse();

//     const w = Math.sqrt(dx * dx + dy * dy) > 50 ? "w-10" : "w-20";

//     return (
//         <div className={`fixed -translate-x-1/2 -translate-y-1/2 cursor-none  aspect-square ${w} border-4 border-blue backdrop-invert rounded-full transition-all duration-75`}
//             style={{ top: `${y}px`, left: `${x}px` }
//             }>
//         </div >
//     );
// }