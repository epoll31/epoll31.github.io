
import { Metadata } from "next";
import { getValidArticleMetaData } from "./utils/getValidArticles";
import Articles from "./Articles";

export const metadata: Metadata = {
    title: "Articles",
    description: "A list of articles written by Ethan Pollack",
};

export default function ArticlesPage() {
    const articles = getValidArticleMetaData();

    return (
        <Articles articles={articles} />
    );
}