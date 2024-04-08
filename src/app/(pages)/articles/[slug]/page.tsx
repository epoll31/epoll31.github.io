import fs from 'fs'
import path from 'path'
import React from 'react'
import Page, { PageMajor } from '@/app/components/major/Page'
import Article, { ArticleData } from '../components/Article'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import H1 from '../components/Markdown/components/H1'
import H2 from '../components/Markdown/components/H2'
import H3 from '../components/Markdown/components/H3'
import H4 from '../components/Markdown/components/H4'
import H5 from '../components/Markdown/components/H5'
import H6 from '../components/Markdown/components/H6'
import A from '../components/Markdown/components/A'
import Code from '../components/Markdown/components/Code'
import LI from '../components/Markdown/components/LI'
import UL from '../components/Markdown/components/UL'
import OL from '../components/Markdown/components/OL'
import P from '../components/Markdown/components/P'
import NextImage from '../components/Markdown/components/NextImage'
import Image from '../components/Markdown/components/Image'
import Video from '../components/Markdown/components/Video'
import Pre from '../components/Markdown/components/Pre'
import Table from '../components/Markdown/components/Table'

export const dynamicParams = false

export async function generateStaticParams() {
    const articles = path.resolve(process.cwd(), 'public', 'articles')
    const slugs = fs.readdirSync(articles)

    return slugs.map((slug) => {
        slug
    });
}

export interface ArticlePageProps {
    source: string;
    slug: string;
    folder: string;
}

export default async function ArticlePage({ params }: { params: { slug: string; }; }) {

    const { content: mdx, frontmatter } = await compileMDX<{
        title: string;
        date: string;
        author: string;
        showTOC: boolean;
    }>({
        source: fs.readFileSync(path.resolve(process.cwd(), 'public', 'articles', params.slug, 'article.mdx')).toString(),
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                remarkPlugins: [remarkGfm],
            }
        },
        components: {
            h1: H1,
            h2: H2,
            h3: H3,
            h4: H4,
            h5: H5,
            h6: H6,
            p: P,
            pre: Pre,
            a: A,
            code: Code,
            ul: UL,
            ol: OL,
            li: LI,
            Image: Image,
            Video: Video,
            NextImage: NextImage,
            table: Table
        }
    });

    const article = {
        mdx: mdx,
        slug: params.slug,
        folder: `/articles/${params.slug}`,
        title: frontmatter.title,
        date: frontmatter.date,
        author: frontmatter.author,
        showTOC: frontmatter.showTOC
    } as ArticleData;
    // console.log(article);

    return (
        <Page layout='article'>
            <PageMajor type='article'>
                <Article article={article} />
            </PageMajor>
        </Page >
    );

    // const articleFolder = `/articles/${params.slug}`;
    // const article = matter(fs.readFileSync(path.resolve(process.cwd(), 'public', 'articles', params.slug, 'article.mdx')).toString());

    // return (
    //     <Page layout="article" className='relative scroll-smooth'>
    //         <PageMajor type='article'>
    //             <Article articleJSON={JSON.stringify(article)} articleFolder={articleFolder} />
    //         </PageMajor>
    //     </Page >
    // );
}
