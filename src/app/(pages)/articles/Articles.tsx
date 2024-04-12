"use client"

import Link from "next/link";
import { ArticleMetaData } from "./[slug]/Article";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { ThemeContext } from "@/app/utils/ThemeContext";
import { twMerge } from "tailwind-merge";

function ArticleCard({
    article
}: {
    article: ArticleMetaData
}) {
    // console.log("article", article)
    // console.log("href", `/articles/${article.slug}`)
    return (
        <Link
            href={`/articles/${article.slugNoSpace}`}
            className="bg-black-100 p-4 rounded-xl font-sans"
        >
            <h2>{article.title}</h2>
            <p>{article.date}</p>
            <p className="font-serif">{article.abstract}</p>
        </Link>
    );
}

export default function Articles({
    articles
}: {
    articles: ArticleMetaData[]
}) {
    const themeContext = useContext(ThemeContext);
    const [themedClassName, setThemedClassName] = useState<string>("text-transparent bg-transparent opacity-0  scrollbar-thumb-transparent scrollbar-track-transparent");
    useLayoutEffect(() => {
        if (themeContext.theme === "light") {
            setThemedClassName("bg-foreground text-black scrollbar-thumb-black-100 scrollbar-track-foreground");
        } else {
            setThemedClassName("bg-black text-foreground scrollbar-thumb-foreground-200 scrollbar-track-black");
        }

    }, [themeContext.theme]);

    return (
        <div
            className={twMerge(
                "flex flex-col items-center p-10 gap-4 transition-all",
                "w-full h-full overflow-x-hidden overflow-y-scroll scroll-smooth scrollbar-none md:scrollbar scrollbar-thumb-rounded-x",
                themedClassName
            )}
        >
            <div className="w-full max-w-[min(1100px,100%)] flex justify-between items-baseline">
                <h1 className={"text-4xl "}>Latest Articles</h1>
                <p className={""}>{articles.length} articles</p>
            </div>
            <div className="w-full max-w-[min(1100px,100%)] grid gap-10 grid-cols-articleCards">
                {articles.map((article, i) => (
                    <ArticleCard key={i} article={article} />
                ))}
            </div>
        </div>
    );
}
