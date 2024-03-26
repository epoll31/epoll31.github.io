"use client";

import Link from "next/link";
import Image from "next/image";
import GitHub from "/public/images/github.svg";
import LinkedIn from "/public/images/linkedin.svg";
import { CursorLock } from "../components/CursorFollower";
import { useRouter } from "next/navigation";


export default function FrontLayer() {
    const router = useRouter();

    return (
        <>
            <div className="fixed bottom-0 left-0 w-fit h-fit pl-5 md:pl-14 pb-5 md:pb-10 overflow-hidden flex flex-col text-black">
                <h1 className="font-lilita text-4xl md:text-9xl transition-all duration-150 md:w-min">
                    Ethan Pollack
                </h1>
                <p className="font-k2d text-sm sm:text-lg md:text-2xl transition-all duration-150">
                    Software Developer and Designer
                </p>
                {/* <div className="font-k2d text-lg md:text-2xl transition-all duration-150 flex flex-row flex-wrap"> */}
                <p className="font-k2d text-sm sm:text-lg md:text-2xl transition-all duration-150">
                    Personal website made by <span className="font-bold text-nowrap whitespace-nowrap">Ethan Pollack</span>
                </p>
                <CursorLock as="p" className="font-k2d text-sm sm:text-lg md:text-2xl transition-all duration-150 w-fit" cursorLockedClassName="h-1 w-[4rem] sm:w-[5rem] md:w-[14.2rem] rounded-full bg-foreground translate-y-1 sm:translate-y-2 md:translate-y-3 z-30">
                    <Link href="./about" className="hover:font-bold text-nowrap whitespace-nowrap ">
                        Learn more about me
                    </Link>
                </CursorLock>
                <CursorLock as="p" className="w-fit font-k2d text-sm sm:text-md md:text-xl transition-all duration-150" cursorLockedClassName="h-1 w-[4rem] sm:w-[5rem] md:w-[14.2rem] rounded-full bg-foreground translate-y-1 sm:translate-y-2 md:translate-y-3 z-30">
                    <Link href="./tutor" className="hover:font-bold text-nowrap whitespace-nowrap ">
                        Need help in CS or Math?
                    </Link>
                </CursorLock>
            </div>
            <div className="fixed bottom-0 right-0 flex flex-col md:flex-row gap-5 m-5 md:m-10 w-fit h-fit transition-all duration-150 justify-end items-end text-black">
                <CursorLock className="bg-foreground rounded-full w-10 h-10 p-0.5 md:w-20 md:h-20 md:p-2 flex justify-center items-center transition-all duration-150" cursorLockedClassName="w-10 h-10 md:w-20 md:h-20 backdrop-invert rounded-full z-10">
                    <Link href="https://linkedin.com/in/ethanpollack" className="w-full h-full">
                        <Image src={LinkedIn} alt="LinkedIn" className="w-full h-full" />
                    </Link>
                </CursorLock>
                <CursorLock className="bg-foreground rounded-full w-10 h-10 p-0.5 md:w-20 md:h-20 md:p-2 flex justify-center items-center transition-all duration-150" cursorLockedClassName="w-10 h-10 md:w-20 md:h-20 backdrop-invert rounded-full z-10">
                    <Link href="https://github.com/epoll31" className="w-full h-full">
                        <Image src={GitHub} alt="GitHub" className="w-full h-full" />
                    </Link>
                </CursorLock>
            </div>

        </>
    );
}
