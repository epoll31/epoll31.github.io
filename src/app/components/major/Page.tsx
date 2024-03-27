
"use client"
import CustomButton, { CustomButtonType } from "@/app/components/CustomButton/CustomButton";
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
    tabs?: Tab[];
}) {

    return (
        <div className={twMerge(className, "m-10 mb-0 md:top-10 md:sticky flex flex-row md:w-fit justify-center md:justify-end")}>
            <div className="flex flex-col">
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

export type PageLayout = "Side" | "Main";

export default function Page({
    children,
    customButtonType,
    tabs,
    layout = "Side"
}:
    {
        children?: React.ReactNode;
        customButtonType?: CustomButtonType;
        tabs?: Tab[];
        layout?: PageLayout;
    }) {

    // const sideChildren: React.ReactNode[] = [];
    // const mainChildren: React.ReactNode[] = [];
    const [sideChildren, setSideChildren] = React.useState<React.ReactNode[]>([]);
    const [mainChildren, setMainChildren] = React.useState<React.ReactNode[]>([]);
    const [layoutClassName, setLayoutClassName] = React.useState<string>("");

    useEffect(() => {
        if (layout !== "Side") return;

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
    }, [children, layout]);

    useEffect(() => {
        if (layout === "Side") {
            setLayoutClassName("md:flex-row");
        } else {
            setLayoutClassName("items-center");
        }
    }, [layout]);

    return (
        <>
            <main className={twMerge("fixed w-full h-full flex flex-col overflow-x-hidden overflow-y-scroll", layoutClassName)}>
                <Fade />
                {layout === "Side" &&
                    <>
                        <Side className="md:flex-1" tabs={tabs} >
                            <Heading tabs={tabs} />
                            {...sideChildren}
                        </Side>
                        <div className="md:flex-2 ">
                            {...mainChildren}
                        </div>
                        <div className="md:flex-1" />
                    </>
                }
                {
                    layout === "Main" &&
                    <>
                        <Heading tabs={tabs} />
                        {children}
                    </>

                }

                <CustomButton type={customButtonType} />
            </main >
            {/* <CursorFollower /> */}
        </>
    );
}