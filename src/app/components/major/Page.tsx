
"use client"
import CustomButton, { CustomButtonType } from "@/app/components/CustomButton/CustomButton";
import Fade from "./Fade";
import { twMerge } from "tailwind-merge";
import React, { forwardRef, useEffect } from "react";
import { Heading, Tab } from "./Heading";
import NavBar from "./NavBar";



export type Theme = "light" | "dark" | "red";
export type PageMajorType = "main" | "side" | "article";

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

export function PageMajor({
    as: Tag = "div",
    type = "main",
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

export type PageLayout = "side" | "main" | "article";

export interface PageInfo {
    theme: Theme;
    layout: PageLayout;
}

export const PageContext = React.createContext<{
    pageInfo: PageInfo;
    setTheme: (theme: Theme) => void;
}>({
    pageInfo: { theme: "red", layout: "side" },
    setTheme: (theme: Theme) => { },
});

function getTheme(theme?: Theme) {
    if (theme) {
        return theme;
    }

    // check local storage
    if (typeof window !== 'undefined') {
        const local = localStorage.getItem("prefTheme");
        if (local) {
            return local as Theme;
        }

        // check system theme
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    else {
        console.log("window is undefined");
    }

    // default to dark
    return "dark";
}

const Page = forwardRef(function Page({
    theme,
    layout = "side",
    children,
    customButtonType,
    tabs,
    className,
}:
    {
        theme?: Theme;
        className?: string;
        children?: React.ReactNode;
        customButtonType?: CustomButtonType;
        tabs?: Tab[];
        layout?: PageLayout;
    }, ref: React.Ref<HTMLDivElement>) {

    // const sideChildren: React.ReactNode[] = [];
    // const mainChildren: React.ReactNode[] = [];
    const [sideChildren, setSideChildren] = React.useState<React.ReactNode[]>([]);
    const [mainChildren, setMainChildren] = React.useState<React.ReactNode[]>([]);
    const [layoutClassName, setLayoutClassName] = React.useState<string>("");
    const [pageContext, setPageContext] = React.useState<{
        pageInfo: PageInfo;
        setTheme: (theme: Theme) => void;
    }>({
        pageInfo: {
            theme: getTheme(theme),
            layout
        },
        setTheme: (theme: Theme) => {
            localStorage.setItem("prefTheme", theme);
            setPageContext((prev) => {
                return {
                    ...prev,
                    pageInfo: {
                        ...prev.pageInfo,
                        theme,
                    },
                };
            });
        },
    });

    const [themedClassName, setThemedClassName] = React.useState("bg-black text-foreground");
    useEffect(() => {
        if (pageContext.pageInfo.theme === "light") {
            setThemedClassName("bg-foreground text-black");
        }
        else if (pageContext.pageInfo.theme === "dark") {
            setThemedClassName("bg-black text-foreground");
        }
        else if (pageContext.pageInfo.theme === "red") {
            setThemedClassName("bg-background text-black");
        }
    }, [pageContext.pageInfo.theme]);

    useEffect(() => {
        if (layout !== "side") return;

        const sideChildren: React.ReactNode[] = [];
        const mainChildren: React.ReactNode[] = [];
        React.Children.forEach(children, (child) => {
            if (React.isValidElement(child)) {
                if (child.props.type === "Side") {
                    sideChildren.push(child);
                } else {
                    mainChildren.push(child);
                }
            }
        });

        setSideChildren(sideChildren);
        setMainChildren(mainChildren);
    }, [children, layout]);

    useEffect(() => {
        if (layout === "side") {
            setLayoutClassName("md:flex-row");
        } else {
            setLayoutClassName("items-center");
        }
    }, [layout]);

    if (layout === "article") {
        return (
            <PageContext.Provider value={pageContext}>
                <div className={twMerge("fixed w-full h-full flex flex-col overflow-hidden transition-colors", themedClassName)}>
                    <NavBar />
                    <main id="page" className="w-full h-full overflow-x-hidden overflow-y-scroll scroll-smooth">
                        {children}
                    </main>
                </div>
            </PageContext.Provider>
        );
    }

    return (
        <PageContext.Provider value={pageContext}>
            <div id="page" className={twMerge(className, "fixed w-full h-full flex flex-col overflow-x-hidden overflow-y-scroll transition-colors", layoutClassName, themedClassName)}
                ref={ref}
            >
                <Fade />
                {layout === "side" &&
                    <>
                        <Side className="md:flex-1" tabs={tabs} >
                            <Heading tabs={tabs} />
                            {...sideChildren}
                        </Side>
                        <div className="md:flex-2 ">
                            {...mainChildren}
                        </div>
                        <div className="md:flex-1" />
                        <CustomButton type={customButtonType} />
                    </>
                }
                {
                    layout === "main" &&
                    <>
                        <Heading tabs={tabs} />
                        {children}
                        <CustomButton type={customButtonType} />
                    </>

                }

            </div >
            {/* <CursorFollower /> */}
        </PageContext.Provider>
    );
});

export default Page;