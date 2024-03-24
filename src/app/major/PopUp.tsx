"use client";

import { selectActive, selectPopUpType, setActive } from "@/lib/features/popUp/popUpSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { use, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import About from "./PopUps/about";

export interface PopUpProps extends React.HTMLAttributes<HTMLDivElement> {
    outerClassName?: string,
}

export default function PopUp(
    props: PopUpProps,
) {
    const dispatch = useAppDispatch();
    const active = useAppSelector(selectActive);
    const popUpType = useAppSelector(selectPopUpType);
    const [outerClassName, setOuterClassName] = useState<string>(twMerge("bg-background", props.outerClassName, "fixed w-screen h-screen z-30 opacity-0"));
    const activeTransitionTime = 500;

    const handleClose = () => {
        setOuterClassName(twMerge(outerClassName, "opacity-0"));
        console.log("close: start");
        setTimeout(() => {
            dispatch(setActive(false));
            console.log("close: end");
        }, activeTransitionTime);
    };

    const handleInnerClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (active == true && outerClassName.match(/opacity-0/)) {
            setOuterClassName(twMerge(outerClassName, "opacity-100"));
        }
    }, [active]);

    let innerContent = (
        <div className={props.className} {...props}
        >
            {props.children}
        </div>
    );

    if (popUpType == "about") {
        innerContent = (
            <About />
        );
    }

    return (active ?
        (
            <div className={outerClassName}
                style={{
                    transition: `opacity ${activeTransitionTime}ms ease-in-out`
                }}
            >
                {innerContent}
                <span className="absolute menu arrow bg-foreground top-0 right-0 m-5 w-10 h-10 sm:m-10 sm:w-14 sm:h-14 rounded-full transition-all"
                    onClick={handleClose}>
                    <span className="absolute line1 arrow w-full h-1 rounded-full bg-black " aria-hidden></span>
                    <span className="absolute line2 arrow w-full h-1 rounded-full bg-black " aria-hidden></span>
                    <span className="absolute line3 arrow w-full h-1 rounded-full bg-black " aria-hidden></span>
                </span>
            </div >
        )
        : <></>
    );
}
