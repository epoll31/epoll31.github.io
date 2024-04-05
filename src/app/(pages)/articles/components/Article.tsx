"use client";

import { PageContext } from "@/app/components/major/Page";
import matter from "gray-matter";
import { useContext } from "react";
import Markdown from "./Markdown/Markdown";

export default function Article({
    article,
    articlePath,
}: {
    article: matter.GrayMatterFile<string>,
    articlePath: string,
}) {
    const pageInfo = useContext(PageContext);

    return (
        <div className={`max-w-prose my-10font-sans ${pageInfo.theme === "dark" ? "text-foreground" : "text-black"}`}>
            <div className='w-full my-5 flex flex-col gap-2' >
                <h1 className='text-4xl font-bold font-sans'>{article.data.title}</h1>
                <div className='flex flex-row justify-between '>
                    <p className='text-xl font-light'>{article.data.author}</p>
                    <p className='text-lg font-light'>{article.data.date}</p>
                </div>
                <hr className={(pageInfo.theme === "light" ? 'border-background' : 'border-foreground')}></hr>
            </div>
            <Markdown articlePath={articlePath} theme={pageInfo.theme}>
                {article.content}
            </Markdown>
        </div >
    );
}