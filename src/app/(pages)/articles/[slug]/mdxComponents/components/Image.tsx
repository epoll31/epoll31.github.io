"use client";

import { useContext } from "react";
import NextImage from "next/image";
import { ArticleContext } from "@/app/(pages)/articles/[slug]/Article";
import determineSrc from "@/app/(pages)/articles/[slug]/mdxComponents/utils/determineSrc";
import { NextImageProps } from "@/app/(pages)/articles/[slug]/mdxComponents/components/NextImage";

export interface ImageProps {
    src: string;
    caption?: string;
}

export default function Image(
    {
        src: rawSrc,
        caption,
        ...props
    }: Omit<NextImageProps, "src" | "srcSet" | "caption"> & ImageProps
) {
    const articleContext = useContext(ArticleContext);
    const src = determineSrc(rawSrc || "", articleContext.article.folder || "");

    return src && (
        <span className='w-fit'>
            <NextImage src={src} {...props} />
            {caption && <span className='text-sm font-light text-center' aria-label={caption}>{caption}</span>}
        </span>
    );
}