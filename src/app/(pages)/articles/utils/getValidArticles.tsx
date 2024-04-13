import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { ArticleMetaData } from "../[slug]/Article";

export function getValidArticleSlugs(): { slug: string; }[] {
    const articles = path.resolve(process.cwd(), 'public', 'articles');
    const slugs = fs.readdirSync(articles);

    const valid = [];
    for (const slug of slugs) {
        const article = matter(fs.readFileSync(path.resolve(articles, slug, 'article.mdx')).toString());

        if (article.data.published) {
            valid.push({ slug: slug.replaceAll(' ', '%20') });
        }
    }

    return valid;
}

export function getValidArticleMetaData(): ArticleMetaData[] {
    const articles = path.resolve(process.cwd(), 'public', 'articles');
    const slugs = fs.readdirSync(articles);

    const valid: ArticleMetaData[] = [];
    for (const slug of slugs) {
        const article = matter(fs.readFileSync(path.resolve(articles, slug, 'article.mdx')).toString());

        if (article.data.published) {
            valid.push({
                ...article.data,
                slug,
                slugNoSpace: slug.replaceAll(" ", "%20"),
                folder: `/articles/${slug}`
            } as ArticleMetaData);
        }
    }

    return valid;
}

export function getArticleMetaData(slugNoSpace: string): ArticleMetaData {
    const slug = slugNoSpace.replaceAll("%20", " ");
    const article = matter(fs.readFileSync(path.resolve(process.cwd(), 'public', 'articles', slug, 'article.mdx')).toString());

    return {
        ...article.data,
        slug,
        slugNoSpace: slugNoSpace,
        folder: `/articles/${slug}`
    } as ArticleMetaData;
}