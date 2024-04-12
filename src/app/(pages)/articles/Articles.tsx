"use client"

import Link from "next/link";
import { ArticleMetaData } from "./[slug]/Article";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { ThemeContext } from "@/app/utils/ThemeContext";
import { twMerge } from "tailwind-merge";
import { CardBody, CardContainer, CardItem } from "@/app/components/3d-card";
import { IconArrowRight } from "@tabler/icons-react";

function ArticleCard({
    article
}: {
    article: ArticleMetaData
}) {
    const themeContext = useContext(ThemeContext);
    const [themedClassName, setThemedClassName] = useState<string>("bg-transparent text-transparent opacity-0");
    const [hrClassName, setHrClassName] = useState<string>("border-transparent");
    useLayoutEffect(() => {
        if (themeContext.theme === "light") {
            setThemedClassName("bg-foreground-100 text-black");
            setHrClassName("border-foreground-200");
        } else {
            setThemedClassName("bg-zinc-800 text-foreground");
            setHrClassName("border-zinc-700");
        }

    }, [themeContext.theme]);

    return (
        <Link href={`/articles/${article.slug}`}>
            <CardContainer
                className={twMerge("p-6 rounded-xl font-sans", themedClassName)}
                containerClassName="group m-0 p-0 hover:scale-110 transition-transform [transition-timing-function:cubic-bezier(0.250, 0.250, 0.635, 1.565)]"
            >
                <CardBody className="flex flex-col items-start">
                    <div className="w-full flex justify-between items-baseline">
                        <CardItem
                            as="h2"
                            className="text-xl font-bold group-hover:text-background"
                            translateZ={40}
                        >{article.title}</CardItem>
                        {/* <p>{article.date}</p> */}
                        <CardItem
                            as="p"
                            className="text-sm"
                            translateZ={20}
                        >{article.date}</CardItem>
                    </div>
                    <hr className={twMerge("w-full mb-3 transition-colors", hrClassName)}></hr>

                    {/* <p className="font-serif">{article.abstract}</p> */}
                    <CardItem
                        as="p"
                        className="font-serif"
                        translateZ={20}
                    >{article.abstract}</CardItem>
                    <CardItem
                        className="text-sm mt-3 flex "
                        translateZ={20}
                    >
                        <p>Read More</p>
                        <IconArrowRight size={20} className="inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-background" />
                    </CardItem>
                </CardBody>
            </CardContainer>
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
            <div className="w-full max-w-[min(1100px,100%)] flex justify-between items-baseline text-sans">
                <h1 className={"text-4xl "}>Latest Articles</h1>
                <p className={""}>{articles.length} Articles</p>
            </div>
            <div className="w-full max-w-[min(1100px,100%)] grid gap-10 grid-cols-articleCards">
                {articles.map((article, i) => (
                    <ArticleCard key={i} article={article} />
                ))}
            </div>
        </div>
    );
}
