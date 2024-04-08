"use client";

import { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { HeaderNode, generateHeaders, getHeader } from "./utils/headerHelpers";
import useWindowSize from "@/app/utils/useWindowSize";
import Contents from "./Contents";
import { ThemeContext } from "@/app/utils/ThemeContext";

export interface ArticleMetaData {
    slug: string;
    folder: string;
    title: string;
    date: string;
    author: string;
    showTOC: boolean;
    published: boolean;
    abstract: string;
}

export interface ArticleData extends ArticleMetaData {
    mdx: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

export interface ArticleContextData {
    article: ArticleData;
    activeHeader: HeaderNode;
    setActiveHeader: (header: HeaderNode) => void;
}
export const ArticleContext = createContext<ArticleContextData>({
    article: {} as ArticleData,
    activeHeader: {} as HeaderNode,
    setActiveHeader: () => { },
});

export default function Article({
    article
}: {
    article: ArticleData
}) {
    const themeContext = useContext(ThemeContext);
    const [themedClassName, setThemedClassName] = useState<string>("text-transparent bg-transparent opacity-0  scrollbar-thumb-transparent scrollbar-track-transparent");
    const { width } = useWindowSize();
    // const headers = generateHeaders(article.content, 2);
    const headers = generateHeaders(article, 2);

    const [articleContext, setArticleContext] = useState<ArticleContextData>({
        article: article,
        activeHeader: headers[0] as HeaderNode,
        setActiveHeader: (header: HeaderNode) => {
            setArticleContext({
                ...articleContext,
                activeHeader: header,
            });
        },
    });

    useEffect(() => {
        const articleDiv = document.getElementById("article");

        if (!articleDiv) {
            return;
        }

        const handleScroll = () => {
            const rawHeaders = articleDiv.querySelectorAll("h1, h2, h3, h4, h5, h6");
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

        articleDiv.addEventListener("scroll", handleScroll);

        return () => {
            articleDiv.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useLayoutEffect(() => {
        if (themeContext.theme === "light") {
            setThemedClassName("bg-foreground text-black scrollbar-thumb-black-100 scrollbar-track-foreground");
        } else {
            setThemedClassName("bg-black text-foreground scrollbar-thumb-foreground-200 scrollbar-track-black");
        }

    }, [themeContext.theme]);

    return (
        <ArticleContext.Provider value={articleContext}>
            <div
                id="article"
                className={twMerge(
                    "p-4 flex justify-center transition-all",
                    "w-full h-full overflow-x-hidden overflow-y-scroll scroll-smooth md:scrollbar scrollbar-thumb-rounded-x",
                    themedClassName,
                )}
            >
                <div className={`flex-grow max-w-[min(42.875rem,100%)] mb-10 font-sans`}>
                    <div className='my-5 flex flex-col gap-2'>
                        <h1 className='text-4xl font-bold font-sans'>{article.title}</h1>
                        <div className='flex flex-row justify-between '>
                            <p className='text-xl font-light'>{article.author}</p>
                            <p className='text-lg font-light'>{article.date}</p>
                        </div>
                        <hr className={twMerge("transition-colors border-background")}></hr>
                    </div>
                    {article.mdx}
                </div>
                {
                    (width ? width > 850 : true) && article.showTOC &&
                    <aside className="sticky top-[0px] w-fit h-fit ml-10">
                        <Contents headers={headers} />
                    </aside>
                }
            </div>
        </ArticleContext.Provider>
    );
}
