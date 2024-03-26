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
        ...props
    }: {
        dotInfo?: Partial<DotInfo>;
        lineInfo?: Partial<LineInfo>;
    } & React.HTMLAttributes<HTMLDivElement>,
    ref: React.Ref<HTMLDivElement>
) => {
    const { largestDotSize, topDotSize, defaultDotInfo, defaultLineInfo } = useContext(TimeLineContext);
    const [dotColor, setDotColor] = useState<string>(dotInfo?.color || defaultDotInfo.color);
    const [dotSize, setDotSize] = useState<string>(dotInfo?.size || defaultDotInfo.size);
    const [dotIcon, setDotIcon] = useState<React.ReactNode>(dotInfo?.icon || defaultDotInfo.icon);
    const [dotIconColor, setDotIconColor] = useState<string>(dotInfo?.iconColor || defaultDotInfo.iconColor);
    const [lineInfoState, setLineInfoState] = useState<LineInfo>({
        color: lineInfo?.color || defaultLineInfo.color,
        size: lineInfo?.size || defaultLineInfo.size,
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

    return (
        <div className={`group/item relative w-1/2 even:self-end`} ref={ref}>
            <div className={` translate-x-1/2 group-odd/item:right-0  group-even/item:-translate-x-1/2 absolute -translate-y-1/2 rounded-full aspect-square z-10 flex justify-center items-center`}
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
            <div className={`group-odd/item:right-0 translate-x-1/2 group-even/item:-translate-x-1/2 group-last/item:hidden absolute top-0 h-full`}
                style={{
                    width: lineInfoState.size,
                    background: lineInfoState.color,
                }}
            />
            <div className={twMerge("w-full h-full", props.className, "group-odd/item:mr-[${dotSize}]")}
                style={{
                    minHeight: `calc(${dotSize})`,
                    padding: `calc(${largestDotSize} / 2)`,
                }}
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
});

export default function TimeLine(
    {
        children,
        defaultDotInfo = DefaultDotInfo,
        defaultLineInfo = DefaultLineInfo
    }: {
        children?: React.ReactNode;
        defaultDotInfo?: DotInfo;
        defaultLineInfo?: LineInfo;
    }
) {
    const [largestDotSize, setLargestDotSize] = useState<string>(defaultDotInfo.size);
    const [topDotSize, setTopDotSize] = useState<string>(defaultDotInfo.size);


    useEffect(() => {
        const allItems = React.Children.toArray(children).filter((child) => React.isValidElement(child) && child.type === TimeLineItem);
        console.log(allItems);


        let largest = { px: -Infinity, raw: '' };
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
        <TimeLineContext.Provider value={{ largestDotSize, topDotSize, defaultDotInfo, defaultLineInfo }}>
            <div className={`relative w-full h-fit flex flex-col justify-center`}
                style={{
                    paddingTop: `calc(${topDotSize} / 2)`,
                }}
            >
                {children}
            </div >
        </TimeLineContext.Provider>
    );
};