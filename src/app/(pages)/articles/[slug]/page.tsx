import fs from 'fs'
import path from 'path'
import React from 'react'
import Page from '@/app/components/major/Page'
import Article, { ArticleData, ArticleMetaData } from './Article'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import A from '@/app/(pages)/articles/[slug]/mdxComponents/components/A'
import Code from '@/app/(pages)/articles/[slug]/mdxComponents/components/Code'
import H1 from '@/app/(pages)/articles/[slug]/mdxComponents/components/H1'
import H2 from '@/app/(pages)/articles/[slug]/mdxComponents/components/H2'
import H3 from '@/app/(pages)/articles/[slug]/mdxComponents/components/H3'
import H4 from '@/app/(pages)/articles/[slug]/mdxComponents/components/H4'
import H5 from '@/app/(pages)/articles/[slug]/mdxComponents/components/H5'
import H6 from '@/app/(pages)/articles/[slug]/mdxComponents/components/H6'
import Image from '@/app/(pages)/articles/[slug]/mdxComponents/components/Image'
import LI from '@/app/(pages)/articles/[slug]/mdxComponents/components/LI'
import NextImage from '@/app/(pages)/articles/[slug]/mdxComponents/components/NextImage'
import OL from '@/app/(pages)/articles/[slug]/mdxComponents/components/OL'
import P from '@/app/(pages)/articles/[slug]/mdxComponents/components/P'
import Pre from '@/app/(pages)/articles/[slug]/mdxComponents/components/Pre'
import Table from '@/app/(pages)/articles/[slug]/mdxComponents/components/Table'
import UL from '@/app/(pages)/articles/[slug]/mdxComponents/components/UL'
import Video from '@/app/(pages)/articles/[slug]/mdxComponents/components/Video'
import { getArticleMetaData, getValidArticleSlugs } from '../utils/getValidArticles'

export const dynamicParams = false

export async function generateStaticParams() {
    const valid = getValidArticleSlugs();
    console.log("valid", valid)
    return valid;
}

export interface ArticlePageProps {
    source: string;
    slug: string;
    folder: string;
}

export async function generateMetadata({ params }: { params: { slug: string; }; }) {
    const article = getArticleMetaData(params.slug);
    // console.log("article", article)
    return {
        title: article.title,
        description: article.abstract,
    }
}

export default async function ArticlePage({ params }: { params: { slug: string; }; }) {

    const { content: mdx, frontmatter } = await compileMDX<Omit<ArticleMetaData, "slug" | "folder">>({
        source: fs.readFileSync(path.resolve(process.cwd(), 'public', 'articles', params.slug.replaceAll('%20', ' '), 'article.mdx')).toString(),
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                remarkPlugins: [remarkGfm],
            }
        },
        components: {
            a: A,
            code: Code,
            h1: H1,
            h2: H2,
            h3: H3,
            h4: H4,
            h5: H5,
            h6: H6,
            Image: Image,
            li: LI,
            NextImage: NextImage,
            ol: OL,
            p: P,
            pre: Pre,
            table: Table,
            ul: UL,
            Video: Video,
        }
    });

    const article = {
        mdx: mdx,
        slug: params.slug,
        folder: `/articles/${params.slug}`,
        ...frontmatter,
    } as ArticleData;

    return (
        <Article article={article} />
    );
}
