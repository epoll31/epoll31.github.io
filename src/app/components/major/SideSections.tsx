"use client";

import { MutableRefObject, RefCallback, UIEventHandler, forwardRef, useEffect, useRef, useState } from "react";
import { CursorLock } from "@/app/components/CursorFollower";
import React from "react";
import mergeRefs from "@/app/utils/mergeRefs";
import { transform } from "next/dist/build/swc";
import useHover from "@/app/utils/useHover";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import Link from "next/link";

export interface SectionInfo {
    lines:
    {
        text: string,
        size?: 1 | 2 | 3,
    }[],
    years: string[],
    redirect: string,
}

const Section = React.forwardRef((
    section: SectionInfo,
    ref: React.ForwardedRef<HTMLLIElement>) => {
    const myRef = useRef<HTMLLIElement>(null);
    const { isHovered, onMouseEnter, onMouseLeave } = useHover();
    const dispatch = useAppDispatch();
    const router = useRouter();

    return (
        <>
            <li
                className="w-full h-fit text-foreground hover:text-background font-lilita text-right ease-in-out snap-always snap-center -z-20 hover:-z-10 m-4"
                style={{
                    transformStyle: "preserve-3d",
                }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ref={mergeRefs(ref, myRef)}
            >
                <Link className="  origin-right cursor-none select-none h-full w-full flex flex-col justify-center items-end"
                    style={{
                        transformStyle: "preserve-3d",
                        transform: `rotateY(${isHovered ? -20 : -30}deg)`,
                        WebkitTextStroke: `${isHovered ? "2px" : "0px"} var(--foreground)`,
                        willChange: "transform",
                        transition: "transform 1.5s cubic-bezier(0.075, 0.82, 0.165, 1), color 0.25s ease-in-out",
                    }}
                    href={section.redirect}
                >
                    {
                        section.lines.map((line, i) => {
                            const size = line.size == 1 ? "text-6xl md:text-[8rem] lg:text-[10rem] xl:text-[16rem]" :
                                line.size == 2 ? "text-3xl md:text-[4rem] lg:text-[6rem] xl:text-[8rem]" :
                                    "text-2xl md:text-[2.5rem] lg:text-[3.2rem] xl:text-[5rem]";

                            const color = `${line.size == 1 ? "foreground" : "foreground-100"}`;
                            // line.size == 2 ? "foreground-100" :
                            //     "foreground-200"}`;

                            return (
                                <p key={i} className={`${size} w-fit relative uppercase text-nowrap`}
                                    style={{
                                        transition: "font-size 0.5s ease-in-out, top 0.5s ease-in-out, left 0.5s ease-in-out",
                                        color: `var(--${isHovered ? 'background' : color})`,
                                        WebkitTextStroke: `${isHovered ? "2px" : "0px"} var(--${color})`,
                                    }}
                                >
                                    {
                                        i !== 0 ? <></> :
                                            <>
                                                {
                                                    <span className={`text-${color} text-xl absolute text-left top-1 md:top-3 lg:top-5 xl:top-7 -left-[4rem] xl:-left-20 flex flex-col`}
                                                        aria-hidden="true"
                                                        style={{
                                                            WebkitTextStroke: "0px",
                                                            transition: "font-size 0.5s ease-in-out, top 0.5s ease-in-out, left 0.5s ease-in-out, width 0.5s ease-in-out, height 0.5s ease-in-out",
                                                        }}
                                                    >
                                                        {
                                                            section.years.map((year, j) => {
                                                                return (
                                                                    <span key={j} className="">
                                                                        {year}
                                                                    </span>
                                                                )
                                                            })
                                                        }
                                                    </span>
                                                }
                                                <span className={`bg-${color} w-[4px] h-[3.5rem] md:h-[6.5rem] lg:h-[8.2rem] xl:h-[13rem] top-1 md:top-3 xl:top-5 -left-3 md:-left-4 xl:-left-6 absolute -skew-x-12`}
                                                    style={{
                                                        // transformStyle: "preserve-3d",
                                                        // translate: `0 0 20px`,
                                                        transition: "font-size 0.5s ease-in-out, top 0.5s ease-in-out, left 0.5s ease-in-out, width 0.5s ease-in-out, height 0.5s ease-in-out",
                                                    }} />
                                            </>
                                    }
                                    {line.text}
                                </p>
                            )
                        })
                    }
                </Link>
            </li>
        </>
    );
});

export default function SideSections(
    { sections }:
        { sections: SectionInfo[] }
) {
    const sectionRefs = useRef(new Array());


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
            <ul className="w-full h-fit my-32 pr-4 md:pr-12 flex flex-col justify-center items-end"
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
