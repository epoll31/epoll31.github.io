"use client";

import { PageContext } from "@/app/components/major/Page";
import matter from "gray-matter";
import { createRef, use, useContext, useEffect, useState } from "react";
import Markdown from "./Markdown/Markdown";
import { twMerge } from "tailwind-merge";
import Contents from "./Contents";
import useWindowSize from "@/app/utils/useWindowSize";
import React from "react";
import { HeaderNode, containsHeader, generateHeaders, getHeader } from "../utils/headerHelpers";



export interface ArticleContextData {
    activeHeader: HeaderNode;
    setActiveHeader: (header: HeaderNode) => void;
}
export const ArticleContext = React.createContext<ArticleContextData>({
    activeHeader: {} as HeaderNode,
    setActiveHeader: () => { },
});

export default function Article({
    articleJSON,
    articlePath,
}: {
    articleJSON: string,
    articlePath: string,
}) {
    const article: matter.GrayMatterFile<string> = JSON.parse(articleJSON);
    const headers = generateHeaders(article.content, 2);

    const pageContext = useContext(PageContext);
    const [hrColor, setHRColor] = useState("");
    const { width } = useWindowSize();

    const [articleContext, setArticleContext] = useState<ArticleContextData>({
        activeHeader: {} as HeaderNode,
        setActiveHeader: (header: HeaderNode) => {
            setArticleContext({
                ...articleContext,
                activeHeader: header,
            });
        },
    });

    useEffect(() => {
        const pageDiv = document.getElementById("page");

        if (!pageDiv) {
            return;
        }

        const handleScroll = () => {
            const rawHeaders = pageDiv.querySelectorAll("h1, h2, h3, h4, h5, h6");
            const target = 100;
            let minDistance = Infinity;
            let currentHeader = "";

            rawHeaders.forEach(raw => {
                const header = getHeader(headers, raw.id);
                if (!header) {
                    return;
                }

                const headerRect = raw.getBoundingClientRect();
                // const pos = (headerRect.top + headerRect.bottom) / 2;
                const pos = headerRect.bottom;
                const dist = Math.abs(pos - target);
                if (dist < minDistance) {
                    minDistance = dist;
                    currentHeader = raw.id;
                }
            });

            const header = getHeader(headers, currentHeader);
            if (header && header !== articleContext.activeHeader) {

                articleContext.setActiveHeader(header);
            }
        };

        pageDiv.addEventListener("scroll", handleScroll);

        return () => {
            pageDiv.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (pageContext.pageInfo.theme === "light") {
            setHRColor("border-background");
        } else {
            setHRColor("border-foreground");
        }

    }, [pageContext.pageInfo.theme]);

    return (
        <ArticleContext.Provider value={articleContext}>
            <div className="flex w-full h-100% justify-center">
                <div className={` lex-grow max-w-[min(42.875rem,100%)] m-4 my-10 font-sans transition-colors`}>
                    <div className='my-5 flex flex-col gap-2'>
                        <h1 className='text-4xl font-bold font-sans'>{article.data.title}</h1>
                        <div className='flex flex-row justify-between '>
                            <p className='text-xl font-light'>{article.data.author}</p>
                            <p className='text-lg font-light'>{article.data.date}</p>
                        </div>
                        <hr className={twMerge("transition-colors", hrColor)}></hr>
                    </div>
                    <Markdown articlePath={articlePath} theme={pageContext.pageInfo.theme}>
                        {article.content}
                    </Markdown>
                </div>
                {
                    (width ? width > 850 : true) && article.data.tableOfContents === "visible" &&
                    <aside className="sticky top-[100px] w-fit h-fit ml-10">
                        <Contents headers={headers} />
                    </aside>
                }
            </div>
        </ArticleContext.Provider>
    );
}
