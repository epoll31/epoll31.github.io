"use client";

import { useContext } from "react";
import { ArticleContext } from "../../Article";
import NextImage from "next/image";
import getImageSrc from "../utils/getImageSrc";
import { NextImageProps } from "./NextImage";


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
    const src = getImageSrc(rawSrc || "", articleContext.article.folder || "");
    // console.log("rawSrc", rawSrc);
    // console.log("folder", articleContext.article.folder);
    // console.log("src", src);

    return src && (
        <span className='w-fit'>
            <NextImage src={src} {...props} />
            {caption && <span className='text-sm font-light text-center' aria-label={caption}>{caption}</span>}
        </span>
    );
}