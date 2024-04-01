import Page from '@/app/components/major/Page'
import fs from 'fs'
import path from 'path'
import Markdown, { ExtraProps } from 'react-markdown'
import matter from 'gray-matter'
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkToc from 'remark-toc'
import rehypeRaw from 'rehype-raw'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'

// import rehypeHighlight from 'rehype-highlight'

export const dynamicParams = false

export function generateStaticParams() {
    const articles = path.resolve(process.cwd(), 'public', 'articles')
    const folders = fs.readdirSync(articles)

    return folders.map(folder => {
        return { slug: folder }
    });
}

function getImageSrc(src: string, articlePath: string): string {
    // If it is a URL, return src
    if (/^https?:\/\//.test(src)) {
        return src;
    }

    // If it starts with 'public', './public', or '/public', keep everything after 'public' including '/'
    if (/^(?:\.?\/?public\/)(.*)/.test(src)) {
        return src.replace(/^(?:\.?\/?public\/)(.*)/, '/$1');
    }

    // If it starts with './', replace the '.' with articlePath
    if (/^\.\//.test(src)) {
        return src.replace(/^\.\//, articlePath + '/');
    }

    // If it starts with '/', add articlePath to the front
    if (/^\//.test(src)) {
        return articlePath + src;
    }

    // Else, add articlePath and '/' to the front
    return articlePath + '/' + src;
}


function getImageMetaData(rawMetaData: string, rawSrc: string, articlePath: string) {
    const src = getImageSrc(rawSrc, articlePath);
    //type: 'video'(src is .mov/.mp4) | 'image'(otherwise)
    const type = /\.(webm|mp4)$/.test(src.toLowerCase()) ? 'video' : 'image';
    const videoType = /\.(webm|mp4)$/.test(src.toLowerCase()) ? (`video/${src.toLowerCase().match(/\.(\w+)$/)?.pop()}`) : undefined;
    // console.log(`src: ${src}, type: ${type}, videoType: ${videoType}`)
    return {
        src,
        alt: rawMetaData.replace(/ *\{[^)]*\} */g, ""),
        width: parseInt(rawMetaData.match(/{w: (.*?)}/)?.pop() ?? "500") ?? 500,
        height: parseInt(rawMetaData.match(/{h: (.*?)}/)?.pop() ?? "500") ?? 500,
        isPriority: rawMetaData.toLowerCase().match('{priority}') ? true : undefined,
        hasCaption: rawMetaData.toLowerCase().includes('{caption:'),
        caption: rawMetaData.match(/{caption: (.*?)}/)?.pop(),
        className: rawMetaData.match(/{className: (.*?)}/)?.pop(),
        controls: !rawMetaData.toLowerCase().includes('{nocontrols}'),
        type,
        videoType,
        autoPlay: rawMetaData.toLowerCase().includes('{autoplay}'),
        muted: rawMetaData.toLowerCase().includes('{muted}'),
        loop: rawMetaData.toLowerCase().includes('{loop}'),
    };
}

function CustomCode(props: any) {
    const { node, className: fullLang, children, ...rest } = props;
    const lang = /language-(\w+)/.exec(fullLang || "")?.at(1);
    const inline = lang || (node.position.start.line !== node.position.end.line);

    return inline ? (
        <SyntaxHighlighter
            customStyle={{
                borderRadius: '0.5rem',
                backgroundColor: 'var(--black)',
                // color: 'var(--foreground)',
                // scrollbarWidth: 'thin',
                scrollbarColor: 'var(--foreground-200) transparent',
                overflowY: 'hidden'
            }}
            style={gruvboxDark}
            language={lang}
            {...rest}
        >
            {String(children ?? "").replace(/\n$/, "")}
        </SyntaxHighlighter>
    ) : (
        <code className={"text-base font-mono bg-black text-[#ebdbb2] px-1 rounded-lg text-nowrap"} {...rest}>
            {children}
        </code>
    );
}

export default function ArticlePage({ params }: {
    params: {
        slug: string
    }
}) {
    const article = matter(fs.readFileSync(path.resolve(process.cwd(), 'public', 'articles', params.slug, 'article.md')).toString());
    const articlePath = `/articles/${params.slug}`;

    return (
        <Page>
            <div className='max-w-prose my-10 text-black font-sans'>
                <div className='w-full my-5 flex flex-col gap-2' >
                    <h1 className='text-4xl font-bold font-sans'>{article.data.title}</h1>
                    <div className='flex flex-row justify-between '>
                        <p className='text-xl font-light'>{article.data.author}</p>
                        <p className='text-lg font-light'>{article.data.date}</p>
                    </div>
                    <hr></hr>
                </div>
                <Markdown
                    className={"pb-10"}
                    remarkPlugins={[
                        remarkGfm,
                        remarkToc
                    ]}
                    rehypePlugins={[
                        rehypeRaw,
                        // rehypeHighlight
                    ]}
                    components={
                        {
                            h1: ({ children }) => <h1 className='text-2xl font-bold font-sans' id={children?.toString().replaceAll(' ', '-').toLowerCase()}>{children}</h1>,
                            h2: ({ children }) => <h2 className='text-xl font-bold font-sans' id={children?.toString().replaceAll(' ', '-').toLowerCase()}>{children}</h2>,
                            h3: ({ children }) => <h3 className='text-lg font-bold font-sans' id={children?.toString().replaceAll(' ', '-').toLowerCase()}>{children}</h3>,
                            h4: ({ children }) => <h4 className='text-md font-bold font-sans' id={children?.toString().replaceAll(' ', '-').toLowerCase()}>{children}</h4>,
                            h5: ({ children }) => <h5 className='text-sm font-bold font-sans' id={children?.toString().replaceAll(' ', '-').toLowerCase()}>{children}</h5>,
                            h6: ({ children }) => <h6 className='text-xs font-bold font-sans' id={children?.toString().replaceAll(' ', '-').toLowerCase()}>{children}</h6>,
                            p: ({ children }) => <p className='text-base font-normal font-serif'>{children}</p>,
                            ul: (props) => {
                                // console.log("props", props)
                                const tasks = props.className === 'contains-task-list';
                                return tasks ? (
                                    <ul className='text-base font-normal font-serif list-outside'>{props.children}</ul>
                                ) : (
                                    <ul className='text-base font-normal font-serif marker:text-black list-disc list-outside'>{props.children}</ul>
                                );
                            },
                            ol: (props) => {
                                // console.log("props", props)
                                const tasks = props.className === 'contains-task-list';
                                return tasks ? (
                                    <ol className='text-base font-normal font-serif list-none'>{props.children}</ol>
                                ) : (
                                    <ol className='text-base font-normal font-serif list-decimal list-outside'>{props.children}</ol>
                                );
                            },
                            li: (props) => {
                                // const task = props.className === 'task-list-item';
                                // const childrenArray = React.Children.toArray(props.children);
                                // const first = childrenArray[0];
                                // const rest = childrenArray.slice(1);
                                // console.log("first", first)
                                // return task ? (
                                //     <li className='text-base font-normal font-serif ml-4'>
                                //         <input type='checkbox' className='mr-2' checked={((first as any).props as HTMLInputElement).checked} readOnly aria-disabled />
                                //         {...rest}
                                //     </li>
                                // ) : (
                                //     <li className='text-base font-normal font-serif ml-4'>{props.children}</li>
                                // );
                                return (<li className='text-base font-normal font-serif ml-4'>{props.children}</li>)
                            },
                            blockquote: ({ children }) => <blockquote className='text-base font-mono'>{children}</blockquote>,
                            code: CustomCode,
                            a: ({ children, href }) => <a className='text-base font-light underline underline-offset-2 hover:underline-offset-4 transition-[text-underline-offset]' href={href}>{children}</a>,
                            // img: ({ alt, src }) => <img className='w-full' alt={alt} src={src} />,
                            img: (props) => {
                                // console.log("props", props)
                                const { src: rawSrc, alt: rawMetaData, ...rest
                                } = props;

                                let metaData = getImageMetaData(rawMetaData || "", rawSrc || "", articlePath);
                                console.log(`${rawMetaData} -> ${metaData}`)

                                return metaData.src && (
                                    <div className='w-fit'>
                                        {
                                            metaData.type === 'video' ?
                                                <video controls={metaData.controls} loop={metaData.loop} autoPlay={metaData.autoPlay} muted={metaData.muted} width={metaData.width} height={metaData.height} className={metaData.className}>
                                                    <source src={metaData.src} type={metaData.videoType}></source>
                                                </video> :
                                                <Image src={metaData.src} alt={metaData.alt} width={metaData.width} height={metaData.height} className={metaData.className} priority={metaData.isPriority} />
                                        }
                                        {metaData.hasCaption && <p className='text-sm font-light text-center' aria-label={metaData.caption}>{metaData.caption}</p>}
                                    </div>
                                );
                            },
                            table: ({ children }) => <table className={
                                twMerge(
                                    'table-auto font-sans m-2 rounded-md overflow-hidden', // table
                                    '[&>thead]:bg-foreground [&>thead>tr>th]:p-2',// table header
                                    '[&>tbody>tr:nth-child(2n+1)]:bg-foreground-200 [&>tbody>tr:nth-child(2n)]:bg-foreground-100 [&>tbody>tr>td]:p-2',// alternating row colors 
                                    '[&>*>*>*:first-child]:pl-4 [&>*>*>*:last-child]:pr-4',// side padding
                                )
                            }>{children}</table>,
                        }
                    }
                >
                    {article.content}
                </Markdown>
            </div>
        </Page >
    );
}
