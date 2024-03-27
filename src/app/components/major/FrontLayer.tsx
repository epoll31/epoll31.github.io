"use client";

import Link from "next/link";
import Image from "next/image";
import GitHub from "/public/images/github.svg";
import LinkedIn from "/public/images/linkedin.svg";
import { CursorLock } from "@/app/components/CursorFollower";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import useMediaSizes, { lgOrLarger, mdOrLarger, smOrSmaller } from "@/app/utils/useMediaSizes";
import { useEffect } from "react";


export default function FrontLayer() {
    const mediaSize = useMediaSizes();

    useEffect(() => {
        console.log(mediaSize);
    }, [mediaSize]);

    return (
        <>
            <div className="fixed bottom-0 left-0 w-fit h-fit pl-5 md:pl-14 pb-5 md:pb-10 overflow-hidden flex flex-col text-black">
                <h1 className="font-lilita text-4xl md:text-9xl transition-all duration-150 md:w-min">
                    Ethan Pollack
                </h1>
                <p className="font-k2d text-sm sm:text-lg md:text-2xl transition-all duration-150">
                    Software Developer and Designer
                </p>
                <p className="font-k2d text-xs sm:text-md md:text-xl transition-all duration-150">
                    Personal website made by <span className="font-bold text-nowrap whitespace-nowrap">Ethan Pollack</span>
                </p>
                {/* <CursorLock as="p" className="w-fit font-k2d text-sm sm:text-md md:text-xl transition-all duration-150" cursorLockedClassName="h-1 w-[4rem] sm:w-[5rem] md:w-[14.2rem] rounded-full bg-foreground translate-y-1 sm:translate-y-2 md:translate-y-3 z-30">
                    <Link href="./tutor" className="hover:font-bold text-nowrap whitespace-nowrap ">
                        Need help in CS or Math?
                    </Link>
                </CursorLock> */}
            </div>
            <div className="fixed bottom-0 right-0 flex flex-col-reverse lg:flex-row-reverse gap-1 md:gap-5 m-5 md:m-10 w-fit h-fit transition-all duration-150 justify-end items-end text-black">
                <Link href="./tutor">
                    <CursorLock
                        className="rounded-full w-10 h-10 sm:w-44 md:w-72 md:h-20 flex justify-center items-center transition-all duration-150 border-[0.125rem] md:border-[0.25rem] border-foreground-200 bg-black text-foreground-200 text-wrap text-sm md:text-2xl select-none"// aspect-square sm:aspect-auto"
                        cursorLockedClassName=" w-10 h-10 sm:w-44 md:w-72 md:h-20 backdrop-invert rounded-full z-10"
                    >
                        {
                            (mediaSize == undefined)
                                ? (<PiChalkboardTeacherFill size={24} />)
                                : (<p className="text-nowrap px-3 md:px-6">Need CS or Math Help?</p>)
                        }
                    </CursorLock>
                </Link>
                <CursorLock
                    className="bg-foreground-200 rounded-full w-10 h-10 p-0.5 md:w-20 md:h-20 md:p-1 flex justify-center items-center transition-all duration-150"
                    cursorLockedClassName="w-10 h-10 md:w-20 md:h-20 backdrop-invert rounded-full z-10"
                >
                    <Link href="https://linkedin.com/in/ethanpollack" className="w-full h-full">
                        <Image src={LinkedIn} alt="LinkedIn" className="w-full h-full" />
                    </Link>
                </CursorLock>
                <CursorLock
                    className="bg-foreground-200 rounded-full w-10 h-10 p-0.5 md:w-20 md:h-20 md:p-1 flex justify-center items-center transition-all duration-150"
                    cursorLockedClassName="w-10 h-10 md:w-20 md:h-20 backdrop-invert rounded-full z-10"
                >
                    <Link href="https://github.com/epoll31" className="w-full h-full">
                        <Image src={GitHub} alt="GitHub" className="w-full h-full" />
                    </Link>
                </CursorLock>
            </div>

        </>
    );
}
