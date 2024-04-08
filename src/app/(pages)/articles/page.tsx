
import { Metadata } from "next";
import { getValidArticleMetaData } from "./utils/getValidArticles";

export const metadata: Metadata = {
    title: "Articles",
    description: "A list of articles written by Ethan Pollack",
};

export default function ArticlesPage() {
    const articles = getValidArticleMetaData();

    return (
        <div className="w-full flex flex-col items-center">
            <h1>Articles</h1>
            <div className="grid gap-2 grid-cols-3">
                {articles.map((article, i) => (
                    <div key={i} className="bg-black-100 p-4 rounded-xl aspect-[3/2]">
                        <h2>{article.title}</h2>
                        <p>{article.date}</p>
                        <p>{article.abstract}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}