"use client";

import Link from "next/link";
import { CursorLock } from "../components/CursorFollower";
import React, { useEffect } from "react";

export interface TabProps {
    title: string;
    link: string;
    width: string;
}

export type Tab = TabProps | "Education" | "Work" | "Projects" | "Early Years" | "About";

const defaultTabs: TabProps[] = [
    {
        title: "Education",
        link: "../education",
        width: "w-[5rem]"
    },
    {
        title: "Work",
        link: "../work",
        width: "w-[2.3rem]"
    },
    {
        title: "Projects",
        link: "https://github.com/epoll31",
        width: "w-[4rem]"
    },
    {
        title: "Early Years",
        link: "../early",
        width: "w-[5rem]"
    },
    {
        title: "About",
        link: "../about",
        width: "w-[2.7rem]"
    },
];

export function Heading({
    tabs
}: {
    tabs?: Tab[];
}) {
    const [usableTabs, setUsableTabs] = React.useState(defaultTabs);

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
    }, [tabs]);

    return (
        <>
            <Link href={"./"} className="text-nowrap md:text-wrap md:w-min font-lilita text-5xl md:text-8xl">
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
        </>
    );
}
