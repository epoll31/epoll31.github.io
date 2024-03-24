"use client";

import React, { HTMLAttributes, use, useEffect, useState } from "react";
import "../utils/useMouse";
import useMouse from "../utils/useMouse";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { twMerge } from "tailwind-merge";
import { setClassName, setFollowMouse, setPosition, setStyle } from "@/lib/features/mouse/mouseSlice";



export interface CursorLockProps {
    cursorLockedClassName?: string,
    cursorStyle?: React.CSSProperties,
    noLock?: boolean,
    holdLock?: boolean
}

export function useCursorLock({
    cursorLockedClassName,
    cursorStyle,
    noLock,
    holdLock
}: CursorLockProps = {}) {
    const dispatch = useAppDispatch();
    const handleMouseEnter = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const buttonRect = event.currentTarget.getBoundingClientRect();
        const centerX = buttonRect.left + buttonRect.width / 2;
        const centerY = buttonRect.top + buttonRect.height / 2;
        dispatch(setPosition({ x: centerX, y: centerY }));
        dispatch(setClassName(cursorLockedClassName));
        dispatch(setStyle(cursorStyle));
        if (noLock == undefined || noLock == false) {
            dispatch(setFollowMouse(false));
        }
    }
    const handleMouseLeave = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (holdLock == undefined || holdLock == false) {
            dispatch(setFollowMouse(true));
        }
    }

    return { handleMouseEnter, handleMouseLeave };
}

export const CursorLock = React.forwardRef(({
    as: Tag = "div",
    ...props
}: {
    as?: React.ElementType,
} & CursorLockProps & HTMLAttributes<HTMLElement>
    , ref) => {

    const { onMouseEnter, onMouseLeave, cursorLockedClassName, cursorStyle, noLock, holdLock, ...rest } = props;

    const cursorLock = useCursorLock({ cursorLockedClassName, cursorStyle, noLock, holdLock });
    const handleMouseEnter = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        cursorLock.handleMouseEnter(e);
        if (onMouseEnter) {
            onMouseEnter(e);
        }
    }
    const handleMouseLeave = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        cursorLock.handleMouseLeave(e);
        if (onMouseLeave) {
            onMouseLeave(e);
        }
    }

    return (
        <Tag className={props.className} style={props.style} ref={ref}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...rest}
        >
            {props.children}
        </Tag>
    );
});


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
    let style = {
        top: `${position.y}px`,
        left: `${position.x}px`
    };
    if (following) {
        className = twMerge(className, " w-4 h-4 backdrop-invert rounded-full z-40");
    }
    else {
        if (mouse_slice.className) {
            className = twMerge(className, mouse_slice.className);
        }
        else {
            className = twMerge(className, "w-8 h-8 backdrop-invert rounded-full z-10");
        }
        const { top, left, ...rest } = mouse_slice.style || {};
        style = {
            ...style,
            ...rest
        };
        // console.log(style);
    }
    return (
        <div className={className}
            style={style}
        >
        </div >
    );
}
