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
    const rotateZRegex = /rotateZ\((.*?)\)/
    const [transform, setTransform] = useState("");
    const [size, setSize] = useState({
        width: 0,
        height: 0
    });
    const [hovering, setHovering] = useState(false);
    useEffect(() => {
        const rotateZ = myRef.current?.style.transform.match(rotateZRegex)?.[1] ?? "0deg";
        const rotateZNum = parseFloat(rotateZ);
        const yFactor = Math.cos((rotateZNum * 8) * (Math.PI / 180));
        const translateX = `${-50}%`;
        const translateY = `-${rotateZNum >= 0 ? 50 * yFactor : 100 - 50 * yFactor}%`;
        const rotateX = `${hovering ? -50 : 0}deg`;
        const newTransform = `rotateZ(${rotateZ}) rotateX(${rotateX}) translateX(${translateX}) translateY(${translateY})`;
        console.log(newTransform);
        // console.log(rotateZNum, yFactor, translateY);
        setTransform(newTransform);
    }, [myRef.current?.style.transform, hovering]);

    useEffect(() => {
        setSize({
            width: myRef.current?.clientWidth ?? 0,
            height: myRef.current?.clientHeight ?? 0
        });
    }, [myRef.current?.clientWidth, myRef.current?.clientHeight])//, window.innerWidth])

    // useEffect(() => {
    //     if (hovering) {
    //         console.log("hovering: ", title);
    //     } else {
    //         console.log("not hovering: ", title);
    //     }
    // }, [hovering]);

    return (
        <CursorLock
            className="w-fit h-fit header transition-transform duration-150 ease-in-out origin-right snap-always snap-center select-none cursor-none"
            cursorLockedClassName={`backdrop-invert rounded-full z-10`}
            cursorStyle={{
                width: `calc(${size.width}px + 3rem)`,
                height: `${size.height}px`,
                transform: transform
            }}
            ref={mergeRefs(ref, myRef)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            <h1 className="text-6xl md:text-[10rem] xl:text-[15rem] leading-none font-bold"> {title}</h1>
        </CursorLock >
    );
});

export default function SideSections(
    { sections }:
        { sections: SectionInfo[] }
) {
    const outerRef = useRef<HTMLDivElement>(null);
    const sectionRefs = useRef(new Array());
    const [scroll, setScroll] = useState(0);

    const handleScroll: UIEventHandler<HTMLElement> = (e) => {
        setScroll(e.currentTarget.scrollTop);
    }

    useEffect(() => {

        sectionRefs.current.forEach((section: HTMLDivElement, i: number) => {
            if (section) {
                const scrollY = scroll - section.offsetTop + (outerRef.current?.clientHeight ?? 0) / 2 - section.scrollTop;
                section.style.transform = `rotateZ(${scrollY / 100}deg)`;
            }
        });
    }, [scroll]);

    return (
        <div className="fixed w-screen h-screen flex flex-col items-end py-32 px-8 md:py-72 md:px-24 xl:py-96 overflow-y-scroll snap-mandatory snap-y scroll-smooth"
            onScroll={handleScroll}
            ref={outerRef}
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
