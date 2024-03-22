"use client";

import { MutableRefObject, RefCallback, UIEventHandler, forwardRef, useEffect, useRef, useState } from "react";
import { CursorLock } from "../components/CursorFollower";
import React from "react";
import mergeRefs from "../utils/mergeRefs";
import { transform } from "next/dist/build/swc";

export interface SectionInfo {
    title: string
}

const Section = React.forwardRef(({ title }: SectionInfo, ref: React.ForwardedRef<HTMLDivElement>) => {
    const myRef = useRef<HTMLDivElement>(null);
    const { isHovered, onMouseEnter, onMouseLeave } = useHover();

    return (
        <div
            className="w-full h-fit hover:text-background font-lilita text-right ease-in-out snap-always snap-center  z-0 hover:z-10"
            style={{
                transformStyle: "preserve-3d",
                // transform: `rotateY(${isHovered ? -20 : -40}deg)`,
                // WebkitTextStroke: `${isHovered ? "1px" : "0px"} white`
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            ref={mergeRefs(ref, myRef)}
        >
            <h1 className="text-6xl md:text-[10rem] xl:text-[10rem] leading-none origin-right cursor-none select-none"
                style={{
                    transformStyle: "preserve-3d",
                    transform: `rotateY(${isHovered ? -20 : -40}deg)`,
                    WebkitTextStroke: `${isHovered ? "1px" : "0px"} white`,
                    willChange: "transform",
                    transition: "transform 1.5s cubic-bezier(0.075, 0.82, 0.165, 1), color 0.25s ease-in-out",
                }}
            > {title}</h1>
        </div >
    );
});

const useHover = () => {
    const [isHovered, setIsHovered] = useState(false);

    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    return { isHovered, onMouseEnter, onMouseLeave };
}

export default function SideSections(
    { sections }:
        { sections: SectionInfo[] }
) {
    const sectionRefs = useRef(new Array());
    const { isHovered, onMouseEnter, onMouseLeave } = useHover();

    return (

        <div className="fixed w-screen h-screen py-24 px-24 overflow-y-auto scroll-smooth snap-mandatory snap-y flex flex-col justify-center items-end"
            style={{
                // transform: `rotateY(-50deg)`,
                transformStyle: "preserve-3d",
                perspectiveOrigin: "50% 50%",
                perspective: "100vw",
                willChange: "transform perspective",
            }}
        >
            {
                sections.map((section, i) => {
                    const getRef = (element: HTMLDivElement) => (sectionRefs.current.push(element));
                    return (<Section key={i} ref={getRef} {...section} />)
                })
            }
        </div>
    )
}
