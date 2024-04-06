"use client";

import { twMerge } from "tailwind-merge";
import { HeaderNode } from "../utils/headerHelpers";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { PageContext } from "@/app/components/major/Page";
import { ArticleContext } from "./Article";

function Node({
    node,
    className,
}: {
    node: HeaderNode;
    className?: string;
}) {
    const pageContext = useContext(PageContext);
    const articleContext = useContext(ArticleContext);
    const [themeClassName, setThemeClassName] = useState<string>("text-forground hover:decoration-foreground");
    const [themeTextColor, setThemeTextColor] = useState<string>(node.level === 1 ? "text-foreground" : "text-foreground-200");
    const [activeClassName, setActiveClassName] = useState<string>("");

    useEffect(() => {
        if (pageContext.pageInfo.theme === "light") {
            setThemeClassName("text-black hover:decoration-black");
            setThemeTextColor(node.level === 1 ? "text-black" : "text-black-100");
        }
        else if (pageContext.pageInfo.theme === "dark") {
            setThemeClassName("text-foreground hover:decoration-foreground");
            setThemeTextColor(node.level === 1 ? "text-foreground" : "text-foreground-200");
        }
    }, [pageContext.pageInfo.theme]);


    useEffect(() => {
        if (!articleContext.activeHeader) {
            return;
        }

        if (articleContext.activeHeader.uid === node.uid) {
            setActiveClassName("text-background");
        }
        else {
            setActiveClassName("");
        }
    }, [articleContext.activeHeader]);

    return (
        <li className={twMerge(`mb-2`, className, 'w-full')}>
            <Link
                href={`#${node.text.toLowerCase()}`}
                onClick={() => {
                    // articleContext.setActiveHeader(node);
                }}
                className={twMerge(`block leading-10 text-base font-normal hover:font-semibold transition-all decoration-transparent`, themeClassName, themeTextColor, activeClassName)}
                style={{
                    fontSize: `${1 - (node.level - 1) * 0.1}rem`,
                    paddingLeft: `${node.level - 1}rem`,
                }}
            >
                {node.text}
            </Link>
            {
                node.children && (
                    <ul>
                        {node.children.map((child, i) => (
                            <Node key={i} node={child} className="" />
                        ))}
                    </ul>
                )
            }
        </li >
    );
};


export default function Contents({
    headers
}: {
    headers: HeaderNode[];
}) {
    const [lastActiveHeader, setLastActiveHeader] = useState<HeaderNode>(headers[0]);

    // useEffect(() => {
    //     if (!activeHeader || activeHeader === "") {
    //         return;
    //     }
    //     const iterate = (headers: HeaderNode[]) => {
    //         for (const header of headers) {
    //             const curr = getHeaderTag(header.text) as string;
    //             if (curr === activeHeader) {
    //                 setLastActiveHeader(header);
    //                 // console.log("setLastActiveHeader", header);
    //             }
    //             else if (header.children) {
    //                 iterate(header.children);
    //             }
    //         }
    //     }
    //     iterate(headers);
    // }, [activeHeader]);

    return (
        <div className="mt-4 font-sans w-min">
            <h2 className="font-[500] text-xl tracking-wider mb-4 text-nowrap">TABLE OF CONTENTS</h2>
            <ul>
                {headers.map(header => (
                    <Node key={header.text} node={header} />
                ))}
            </ul>
        </div>
    );
}