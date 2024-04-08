"use client";

import { useContext, useEffect, useState } from "react";
import { PageContext } from "@/app/components/major/Page";
import { twMerge } from "tailwind-merge";

export default function UL(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>) {
    const pageContext = useContext(PageContext);
    const tasks = props.className === 'contains-task-list';
    const [markerClassName, setMarkerClassName] = useState('marker:text-background');
    useEffect(() => {
        if (pageContext.pageInfo.theme === "light") {
            setMarkerClassName('marker:text-background');
        }
        else if (pageContext.pageInfo.theme === "dark") {
            setMarkerClassName('marker:text-background');
        }
        else if (pageContext.pageInfo.theme === "red") {
            setMarkerClassName('marker:text-black');
        }
    }, [pageContext.pageInfo.theme]);

    return tasks ? (
        <ul className='text-base font-normal font-serif list-outside [&>li]:-ml-1 [&>li>ul]:ml-5'>{props.children}</ul>
    ) : (
        <ul className={twMerge(`text-base font-normal font-serif list-disc list-outside`, markerClassName)}
        >
            {props.children}
        </ul>
    );
}