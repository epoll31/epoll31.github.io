
"use client"
import CustomButton, { CustomButtonType } from "../components/CustomButton/CustomButton";
import Fade from "./Fade";
import { twMerge } from "tailwind-merge";
import React, { useEffect } from "react";
import { Heading, Tab } from "./Heading";

function Side({
    className,
    children,
    tabs
}: {
    className?: string;
    children?: React.ReactNode;
    tabs: Tab[];
}) {

    return (
        <div className={twMerge(className, "m-10 text-black md:top-10 md:sticky flex flex-row md:w-fit justify-center md:justify-end")}>
            <div className="flex flex-col w-min">
                <Heading tabs={tabs} />
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

export default function Page({
    children,
    customButtonType,
    tabs
}:
    {
        children?: React.ReactNode;
        customButtonType?: CustomButtonType;
        tabs: Tab[];
    }) {

    // const sideChildren: React.ReactNode[] = [];
    // const mainChildren: React.ReactNode[] = [];
    const [sideChildren, setSideChildren] = React.useState<React.ReactNode[]>([]);
    const [mainChildren, setMainChildren] = React.useState<React.ReactNode[]>([]);

    useEffect(() => {
        const sideChildren: React.ReactNode[] = [];
        const mainChildren: React.ReactNode[] = [];
        React.Children.forEach(children, (child) => {
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
        setSideChildren(sideChildren);
        setMainChildren(mainChildren);
    }, [children]);

    return (
        <>
            <main className="fixed w-full h-full flex flex-col md:flex-row overflow-x-hidden overflow-y-scroll">
                <Fade />
                <Side className="md:flex-1" tabs={tabs} >
                    {...sideChildren}
                </Side>
                <div className="md:flex-2 ">
                    {...mainChildren}
                </div>
                <div className="md:flex-1">

                </div>
                <CustomButton type={customButtonType} />
            </main >
            {/* <CursorFollower /> */}
        </>
    );
}