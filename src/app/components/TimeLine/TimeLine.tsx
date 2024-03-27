"use client";

import React, { createContext, forwardRef, useContext, useState } from "react";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
// import units from "units-css";
var units = require("units-css");

export interface DotInfo {
    color: string;
    size: string;
    icon: React.ReactNode;
    iconColor: string;
}

export interface LineInfo {
    color: string;
    size: string;
}

export const TimeLineItem = forwardRef((
    {
        dotInfo,
        lineInfo,
        alignment = "left",
        ...props
    }: {
        dotInfo?: Partial<DotInfo>;
        lineInfo?: Partial<LineInfo>;
        alignment?: "left" | "right";
    } & React.HTMLAttributes<HTMLDivElement>,
    ref: React.Ref<HTMLDivElement>
) => {

    const { largestDotSize, defaultDotInfo, defaultLineInfo, gap, willAlternate } = useContext(TimeLineContext);
    const [dotColor, setDotColor] = useState<string>(dotInfo?.color || defaultDotInfo.color);
    const [dotSize, setDotSize] = useState<string>(dotInfo?.size || defaultDotInfo.size);
    const [dotIcon, setDotIcon] = useState<React.ReactNode>(dotInfo?.icon || defaultDotInfo.icon);
    const [dotIconColor, setDotIconColor] = useState<string>(dotInfo?.iconColor || defaultDotInfo.iconColor);
    const [lineInfoState, setLineInfoState] = useState<LineInfo>({
        color: lineInfo?.color || defaultLineInfo.color,
        size: lineInfo?.size || defaultLineInfo.size,
    });
    const [alignmentClassName, setAlignmentClassName] = useState({
        container: "",
        dot: "",
        line: "",
        body: {
            className: "",
            style: {} as React.CSSProperties,
        }
    });

    useEffect(() => {
        setDotColor(dotInfo?.color || defaultDotInfo.color);
        setDotSize(dotInfo?.size || defaultDotInfo.size);
        setDotIcon(dotInfo?.icon || defaultDotInfo.icon);
        setDotIconColor(dotInfo?.iconColor || defaultDotInfo.iconColor);
    }, [dotInfo, defaultDotInfo]);

    useEffect(() => {
        setLineInfoState({
            color: lineInfo?.color || defaultLineInfo.color,
            size: lineInfo?.size || defaultLineInfo.size,
        });
    }, [lineInfo, defaultLineInfo]);

    useEffect(() => {
        switch (alignment) {
            case "left":
                setAlignmentClassName({
                    container: twMerge(willAlternate ? "w-1/2" : "w-full"),
                    dot: "left-full -translate-x-1/2",
                    line: "left-full -translate-x-1/2",
                    body: {
                        className: "",
                        style: {
                            paddingRight: `calc(${largestDotSize} / 2)`,
                            paddingTop: `calc(${gap} / 2)`,
                            paddingBottom: `calc(${gap} / 2)`,
                        },
                    }
                });
                break;
            case "right":
                setAlignmentClassName({
                    container: twMerge(willAlternate ? "w-1/2 self-end" : "w-full", ""),
                    dot: "left-0 -translate-x-1/2",
                    line: "left-0 -translate-x-1/2",
                    body: {
                        className: "",
                        style: {
                            paddingLeft: `calc(${largestDotSize} / 2)`,
                            paddingTop: `calc(${gap} / 2)`,
                            paddingBottom: `calc(${gap} / 2)`,
                        },
                    }
                });
                break;
        }
    }, [alignment, willAlternate]);

    return (
        <div className={`${alignmentClassName.container} group/item relative transition-all`} ref={ref}>
            <div className={`${alignmentClassName.dot} absolute -translate-y-1/2 rounded-full aspect-square z-10 flex justify-center items-center transition-all`}
                style={{
                    background: dotColor,
                    width: dotSize,
                }}>
                <span style={{
                    color: dotIconColor,
                }}>
                    {dotIcon}
                </span>
            </div>
            <div className={`${alignmentClassName.line} group-last/item:hidden absolute top-0 h-full transition-all`}
                style={{
                    width: lineInfoState.size,
                    background: lineInfoState.color,
                }}
            />
            <div className={twMerge("w-full h-full", props.className, `${alignmentClassName.body.className} transition-all`)}
                style={alignmentClassName.body.style}
            >
                {props.children}
            </div>
        </div>
    );
});

interface TimeLineContextInfo {
    largestDotSize: string;
    topDotSize: string;
    defaultDotInfo: DotInfo;
    defaultLineInfo: LineInfo;
    gap?: string;
    willAlternate: boolean;
}

const DefaultDotInfo: DotInfo = {
    color: "var(--black)",
    size: "1.25rem",
    icon: <></>,
    iconColor: "var(--foreground)",
};
const DefaultLineInfo: LineInfo = {
    color: "var(--black)",
    size: "0.25rem",
};

const TimeLineContext = createContext<TimeLineContextInfo>({
    largestDotSize: DefaultDotInfo.size,
    topDotSize: DefaultDotInfo.size,
    defaultDotInfo: DefaultDotInfo,
    defaultLineInfo: DefaultLineInfo,
    willAlternate: false,
});

export default function TimeLine(
    {
        children,
        defaultDotInfo = DefaultDotInfo,
        defaultLineInfo = DefaultLineInfo,
        className,
        gap,
        willAlternate,
    }: {
        children?: React.ReactNode;
        defaultDotInfo?: DotInfo;
        defaultLineInfo?: LineInfo;
        className?: string;
        gap?: string;
        willAlternate: boolean;
    }
) {
    const [largestDotSize, setLargestDotSize] = useState<string>(defaultDotInfo.size);
    const [topDotSize, setTopDotSize] = useState<string>(defaultDotInfo.size);

    useEffect(() => {
        const allItems = React.Children.toArray(children).filter((child) => React.isValidElement(child) && child.type === TimeLineItem);

        let largest = { px: -Infinity, raw: '' };
        let lastAlignment: undefined | "left" | "right" = undefined;

        for (let i = 0; i < allItems.length; i++) {
            const el = (allItems[i] as React.ReactElement<typeof TimeLineItem>);
            if (!el) {
                continue;
            }

            const size = (el.props as { dotInfo?: DotInfo }).dotInfo?.size || defaultDotInfo.size;

            if (i === 0) {
                setTopDotSize(size);
            }

            const { value, unit } = units.parse(size);
            const px = units.convert('px', size);
            if (px > largest.px) {
                largest = { px, raw: size };
            }
        }
        setLargestDotSize(largest.raw);

    }, [children]);


    return (
        <TimeLineContext.Provider value={{ largestDotSize, topDotSize, defaultDotInfo, defaultLineInfo, gap, willAlternate }}>
            <div className={twMerge(className, `relative  h-fit flex flex-col`)}    >
                {children}
            </div >
        </TimeLineContext.Provider >
    );
};