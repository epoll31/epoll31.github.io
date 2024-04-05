"use client";

import Link from "next/link";
import { CursorLock } from "@/app/components/CursorFollower";
import React, { useEffect } from "react";
import { PageContext } from "./Page";
import { twMerge } from "tailwind-merge";

export interface TabProps {
    title: string;
    link: string;
    width: string;
}

export type Tab = TabProps | "Education" | "Work" | "Projects" | "Early Years";

const defaultTabs: TabProps[] = [
    {
        title: "Education",
        link: "https://epoll31.github.io/education",
        width: "w-[5rem]"
    },
    {
        title: "Work",
        link: "https://epoll31.github.io/work",
        width: "w-[2.3rem]"
    },
    {
        title: "Projects",
        link: "https://github.com/epoll31",
        width: "w-[4rem]"
    },
    {
        title: "Early Years",
        link: "https://epoll31.github.io/early",
        width: "w-[5rem]"
    },
];

export function Heading({
    tabs
}: {
    tabs?: Tab[];
}) {
    const [usableTabs, setUsableTabs] = React.useState(defaultTabs);
    const pageInfo = React.useContext(PageContext);
    const [themedClassName, setThemedClassName] = React.useState("text-black");
    useEffect(() => {
        if (pageInfo.theme === "light") {
            setThemedClassName("text-black");
        }
        else if (pageInfo.theme === "dark") {
            setThemedClassName("text-foreground");
        }
        else if (pageInfo.theme === "red") {
            setThemedClassName("text-black");
        }
    }, [pageInfo.theme]);


    useEffect(() => {
        if (tabs) {
            const usableTabs: TabProps[] = [];
            tabs.filter((v, i, a) => a.indexOf(v) === i).forEach(t => {
                if (typeof t === "string") {
                    const tab = defaultTabs.find(tab => tab.title === t);
                    if (tab) {
                        usableTabs.push(tab);
                    }
                }
                else {
                    usableTabs.push(t);
                }
            });
            setUsableTabs(usableTabs);
        }
        else {
            setUsableTabs(defaultTabs);
        }
    }, [tabs]);

    return (
        <div className={twMerge(`flex flex-col w-min mt-5`, themedClassName)}>
            <Link href={"./"} className="text-nowrap md:text-wrap font-lilita text-5xl md:text-8xl">
                <h1>
                    Ethan Pollack
                </h1>
            </Link>
            <div className="flex flex-row justify-between flex-wrap gap-1">
                {usableTabs.map((tab, i) => {
                    return (
                        // <CursorLock className="underline hover:no-underline" cursorLockedClassName={` hidden sm:[display:inherit] h-1 ${tab.width} rounded-full bg-foreground translate-y-2 z-40`} key={i}>
                        <Link key={i} href={tab.link} className="font-k2d text-md underline hover:no-underline">{tab.title}</Link>
                        // </CursorLock>
                    );
                })}
            </div>
        </div>
    );
}
