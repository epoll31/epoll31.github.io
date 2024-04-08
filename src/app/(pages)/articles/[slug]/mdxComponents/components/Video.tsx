"use client";

import { useContext } from "react";
import { ArticleContext } from "@/app/(pages)/articles/[slug]/Article";
import determineSrc from "@/app/(pages)/articles/[slug]/mdxComponents/utils/determineSrc";

export interface VideoProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption?: string;
    className?: string;
    controls?: boolean;
    type?: string;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
    disablePictureInPicture?: boolean;
    disableRemotePlayback?: boolean;
    playsInline?: boolean;
}

export default function Image(
    {
        src: rawSrc,
        type,
        caption,
        ...props
    }: VideoProps
) {
    const articleContext = useContext(ArticleContext);
    const src = determineSrc(rawSrc || "", articleContext.article.folder || "");

    return (
        <span className='w-fit'>
            <video {...props}>
                <source src={src} type={type}></source>
            </video>
            {caption && <span className='text-sm font-light text-center' aria-label={caption}>{caption}</span>}
        </span>
    );
}