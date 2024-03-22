"use client";

import { MutableRefObject, RefCallback, UIEventHandler, forwardRef, useEffect, useRef, useState } from "react";
import { CursorLock } from "../components/CursorFollower";
import React from "react";
import mergeRefs from "../utils/mergeRefs";
import { transform } from "next/dist/build/swc";

export interface SectionInfo {
    lines:
    {
        text: string,
        size?: 1 | 2 | 3,
    }[],
    year: string,
}

const Section = React.forwardRef((section: SectionInfo, ref: React.ForwardedRef<HTMLLIElement>) => {
    const myRef = useRef<HTMLLIElement>(null);
    const { isHovered, onMouseEnter, onMouseLeave } = useHover();

    return (
        <li
            className="w-full h-fit hover:text-background font-lilita text-right ease-in-out snap-always snap-center  -z-20 hover:-z-10"
            style={{
                transformStyle: "preserve-3d",
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            ref={mergeRefs(ref, myRef)}
        >
            <div className="  origin-right cursor-none select-none h-full w-full flex flex-col justify-center items-end"
                style={{
                    transformStyle: "preserve-3d",
                    transform: `rotateY(${isHovered ? -20 : -30}deg)`,
                    WebkitTextStroke: `${isHovered ? "2px" : "0px"} white`,
                    willChange: "transform",
                    transition: "transform 1.5s cubic-bezier(0.075, 0.82, 0.165, 1), color 0.25s ease-in-out",
                }}
            >
                {
                    section.lines.map((line, i) => {
                        const size = line.size == 1 ? "text-6xl md:text-[8rem] lg:text-[10rem] xl:text-[16rem]" :
                            line.size == 2 ? "text-3xl md:text-[4rem] lg:text-[6rem] xl:text-[8rem]" :
                                "text-2xl md:text-[2.5rem] lg:text-[3.2rem] xl:text-[5rem]";
                        const yearSize = "text-2xl md:text-[2.5rem] lg:text-[3.2rem] xl:text-[5rem]";

                        return (
                            <p key={i} className={`${size} w-fit relative uppercase text-nowrap`}
                                style={{
                                    transition: "font-size 0.5s ease-in-out, top 0.5s ease-in-out, left 0.5s ease-in-out",
                                }}>
                                {
                                    i !== 0 ? <></> :
                                        <>
                                            <span className="text-foreground text-xl absolute text-left top-1 md:top-3 lg:top-5 xl:top-7 -left-[4rem]  xl:-left-20" aria-hidden="true"
                                                style={{
                                                    transition: "font-size 0.5s ease-in-out, top 0.5s ease-in-out, left 0.5s ease-in-out, width 0.5s ease-in-out, height 0.5s ease-in-out",
                                                }}
                                            >
                                                {section.year}
                                            </span>
                                            <span className="w-[4px] h-[3.5rem] md:h-[6.5rem] lg:h-[8.2rem] xl:h-[13rem] top-1 md:top-3 xl:top-5 -left-3 md:-left-4 xl:-left-6 bg-white absolute -skew-x-12"
                                                style={{
                                                    transition: "font-size 0.5s ease-in-out, top 0.5s ease-in-out, left 0.5s ease-in-out, width 0.5s ease-in-out, height 0.5s ease-in-out",
                                                }} />
                                        </>
                                }
                                {line.text}
                            </p>
                        )
                    })
                }
            </div>
        </li >
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

        <div className="fixed w-screen h-screen overflow-y-auto scroll-smooth snap-mandatory snap-y "
            style={{
                // transform: `rotateY(-50deg)`,
                transformStyle: "preserve-3d",
                perspectiveOrigin: "50% 50%",
                perspective: "100vw",
                willChange: "transform perspective",
            }}
        >
            <ul className="w-full h-fit my-32 pr-12 flex flex-col justify-center items-end gap-4"
                style={{
                    transformStyle: "preserve-3d",
                }}
            >
                {
                    sections.map((section, i) => {
                        const getRef = (element: HTMLLIElement) => (sectionRefs.current.push(element));
                        return (<Section key={i} ref={getRef} {...section} />)
                    })
                }
            </ul>
        </div>
    )
}
