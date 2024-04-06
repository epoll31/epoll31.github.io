import Link from "next/link";
import "./CustomButton.css"
import { useContext, useEffect, useState } from "react";
import { PageContext } from "../major/Page";
import { twMerge } from "tailwind-merge";

export type CustomButtonType = "menu" | "arrow" | "close" | "home";

export default function CustomButton({
    type = "home",
}: {
    type?: CustomButtonType;
}) {
    const pageContext = useContext(PageContext);
    const [themedClassName, setThemedClassName] = useState("text-black");
    const [themedInnerClassName, setThemedInnerClassName] = useState("bg-black");
    useEffect(() => {
        if (pageContext.pageInfo.theme === "light") {
            setThemedClassName("bg-background");
            setThemedInnerClassName("bg-black");
        }
        else if (pageContext.pageInfo.theme === "dark") {
            setThemedClassName("bg-foreground");
            setThemedInnerClassName("bg-black");
        }
        else if (pageContext.pageInfo.theme === "red") {
            setThemedClassName("bg-foreground");
            setThemedInnerClassName("bg-black");
        }
    }, [pageContext.pageInfo.theme]);

    return (
        <Link className={twMerge(`fixed top-0 right-0 menu ${type} m-2 w-10 h-10 sm:m-10 sm:w-14 sm:h-14 rounded-full transition-all drop-shadow-md z-40`, themedClassName)} href="./">
            <span className={twMerge(`absolute line1 arrow w-full h-1 rounded-full`, themedInnerClassName)} aria-hidden></span>
            <span className={twMerge(`absolute line2 arrow w-full h-1 rounded-full`, themedInnerClassName)} aria-hidden></span>
            <span className={twMerge(`absolute line3 arrow w-full h-1 rounded-full`, themedInnerClassName)} aria-hidden></span>
            <span className={twMerge(`absolute line4 arrow w-full h-1 rounded-full`, themedInnerClassName)} aria-hidden></span>
            <span className={twMerge(`absolute line5 arrow w-full h-1 rounded-full`, themedInnerClassName)} aria-hidden></span>
        </Link>
    );
}