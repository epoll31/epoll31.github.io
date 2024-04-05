import Page, { PageMajor } from '@/app/components/major/Page'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import React from 'react'
import Contents from '../components/Contents'
import Article from '../components/Article'


export const dynamicParams = false

export function generateStaticParams() {
    const articles = path.resolve(process.cwd(), 'public', 'articles')
    const folders = fs.readdirSync(articles)

    return folders.map(folder => {
        return { slug: folder }
    });
}

export default function ArticlePage({ params }: {
    params: {
        slug: string
    }
}) {
    const article = matter(fs.readFileSync(path.resolve(process.cwd(), 'public', 'articles', params.slug, 'article.md')).toString());
    const articlePath = `/articles/${params.slug}`;

    return (
        <Page theme={"red"}>
            <PageMajor type='Side'>
                <Contents markdown={article.content} maxLevel={2} />
            </PageMajor>
            <PageMajor type='Main'>
                <Article article={article} articlePath={articlePath} />
            </PageMajor>
        </Page >
    );
}
