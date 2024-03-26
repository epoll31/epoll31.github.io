

import Link from "next/link";
import { CursorLock } from "../components/CursorFollower";
import Home from "../components/Home";
import Fade from "./Fade";
import { twMerge } from "tailwind-merge";
import React from "react";

function Side({
    className,
    children
}: {
    className?: string;
    children?: React.ReactNode;
}) {
    const tabs = [
        {
            title: "Projects",
            link: "https://github.com/epoll31",
            width: "w-[4rem]"
        },
        {
            title: "Work",
            link: "../work",
            width: "w-[2.3rem]"
        },
        {
            title: "About",
            link: "../about",
            width: "w-[2.7rem]"
        },
        {
            title: "Early Years",
            link: "../early",
            width: "w-[5rem]"
        },
    ]
    return (
        <div className={twMerge(className, "m-10 text-black")}>
            <div className="flex flex-col w-min  top-10 fixed">
                <Link href={"./"} className="w-min font-lilita text-8xl">Ethan Pollack</Link>
                <div className="flex flex-row justify-between flex-wrap">
                    {
                        tabs.map((tab, i) => {
                            return (
                                <CursorLock className="underline hover:no-underline" cursorLockedClassName={` hidden sm:[display:inherit] h-1 ${tab.width} rounded-full bg-foreground translate-y-2 z-40`} key={i}>
                                    <Link key={i} href={tab.link} className="font-k2d text-md">{tab.title}</Link>
                                </CursorLock>
                            )
                        })
                    }
                </div>
                {children}
            </div>
        </div>
    );
}
export type PageMajorType = "Main" | "Side";

export function PageMajor({
    as: Tag = "div",
    type = "Main",
    children,
    ...props
}:
    {
        as?: React.ElementType
        type?: PageMajorType;
    } & React.HTMLAttributes<HTMLElement>) {
    return (
        <Tag {...props}>
            {children}
        </Tag>
    );
}

export default function Page(props:
    {
        children?: React.ReactNode;
    }) {

    const sideChildren: React.ReactNode[] = [];
    const mainChildren: React.ReactNode[] = [];

    React.Children.forEach(props.children, (child) => {
        if (React.isValidElement(child)) {
            if (child.type === PageMajor) {
                if (child.props.type === "Side") {
                    sideChildren.push(child);
                } else {
                    mainChildren.push(child);
                }
            } else {
                mainChildren.push(child);
            }
        }
    });

    return (
        <>
            <main className="fixed w-full h-full flex flex-row overflow-x-hidden overflow-y-scroll">
                <Fade />
                <Side className="flex-1" >
                    {...sideChildren}
                </Side>
                <div className="flex-2 ">
                    {...mainChildren}
                </div>
                <div className="flex-1">

                </div>
                <Home />
            </main >
            {/* <CursorFollower /> */}
        </>
    );
}