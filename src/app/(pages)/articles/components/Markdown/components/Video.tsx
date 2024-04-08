"use client";

import { useContext } from "react";
import { ArticleContext } from "../../Article";
import { ImageMetaData } from "../utils/getImageMetaData";
import getImageSrc from "../utils/getImageSrc";

// React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>

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
    const src = getImageSrc(rawSrc || "", articleContext.article.folder || "");
    // console.log("rawSrc", rawSrc);
    // console.log("folder", articleContext.article.folder);
    // console.log("src", src);

    // console.log("props", props);
    return (
        <span className='w-fit'>
            <video {...props}>
                <source src={src} type={type}></source>
            </video>
            {caption && <span className='text-sm font-light text-center' aria-label={caption}>{caption}</span>}
        </span>
    );
}