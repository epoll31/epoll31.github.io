"use client";

import { CardBody, CardContainer, CardItem } from "@/app/components/3d-card";
import { CursorLock } from "@/app/components/CursorFollower";
import useMediaSizes from "@/app/utils/useMediaSizes";
import Link from "next/link";
import { HTMLAttributes, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export interface Research {
    title: string,
    subTitle: string,
    year: string,
    authors: string[],
    abstract: string,
    tags: string[],
    pdf: string,
    id: string
}

export default function ResearchCard({
    research,
    ...props
}: {
    research: Research
} & HTMLAttributes<HTMLDivElement>) {

    const { md } = useMediaSizes();
    const [readMore, setReadMode] = useState(false);
    const [showPDF, setShowPDF] = useState(false);
    const [minimized, setMinimized] = useState(false);

    return (
        <CardContainer containerClassName="p-0"
            className={twMerge(props.className, `relative w-full mx-5 p-5 bg-foreground font-k2d text-black rounded-lg drop-shadow-lg`)}
            damping={
                (showPDF && readMore)
                    ? {
                        x: 100,
                        y: 300
                    }
                    : showPDF
                        ? {
                            x: 100,
                            y: 150
                        }
                        : readMore
                            ? {
                                x: 100,
                                y: 150
                            }
                            : {
                                x: 25,
                                y: 25
                            }
            }
            disabled={!md}
            id={research.id}
            {...props}>
            <CardBody className="flex flex-col gap-2 w-full h-min overflow-x-hidden">
                <button className="control flex flex-row w-full gap-1"
                    onClick={() => setMinimized(!minimized)}>
                    <CardItem as="h1" className="text-left flex-grow font-bold text-2xl" translateZ={300}>
                        {research.title}
                    </CardItem>
                    <span className={`relative minmax ${minimized ? '' : 'up'} flex-shrink w-8 h-8 z-50 aspect-square`}
                    >
                        <span className="bg-background absolute rounded-full"></span>
                        <span className="bg-background absolute rounded-full"></span>
                    </span>
                </button>
                {minimized ? <></> : <>
                    <h2 className="text-left text-lg">
                        {research.subTitle} - {research.year}
                    </h2>
                    <h3 className="text-sm">
                        By: <span className=" text-sm">{research.authors.slice(0, -1).join(", ") + ", and " + research.authors.at(research.authors.length - 1)}</span>
                    </h3>
                    <p className={`text-justify ${readMore ? "" : "line-clamp-6"} `}>
                        {research.abstract}
                    </p>
                    <CursorLock as="button"
                        className="underline self-center"
                        cursorLockedClassName="w-32 h-7 backdrop-invert rounded-full z-40"
                        onClick={() => setReadMode(!readMore)}
                    >
                        {readMore ? "Read Less" : "Read More"}
                    </CursorLock>
                    <CardItem className={`w-full flex flex-row flex-wrap gap-2 justify-around`}
                        translateZ={400}
                    >
                        {
                            research.tags.map((tag, i) => {
                                return (
                                    <p key={i} className="rounded-full px-3 bg-foreground-100 text-black ">{tag}</p>
                                );
                            })
                        }
                    </CardItem>
                    <CursorLock as="button"
                        className="underline"
                        cursorLockedClassName="w-32 h-7 backdrop-invert rounded-full z-40"
                        onClick={() => setShowPDF(!showPDF)}
                    >
                        {showPDF ? "Hide PDF" : "Show PDF"}
                    </CursorLock>
                    {
                        !showPDF ? <></> : (
                            <object data={research.pdf} type="application/pdf" width="100%" className={`${navigator.pdfViewerEnabled ? "aspect-a4" : "h-fit"} w-full flex items-center text-center`}>
                                <p className="w-full">Your web browser doesn't support PDFs. <br />Please <a className="underline" href={research.pdf}>click here to download the file</a>.</p>
                            </object>
                        )
                    }
                </>}
            </CardBody>
        </CardContainer>
    );
}
