"use client";

import Link from "next/link";
import Image from "next/image";
import GitHub from "/public/images/github.svg";
import LinkedIn from "/public/images/linkedin.svg";
import { CursorLock } from "../components/CursorFollower";
import { setActive, setPopUpType } from "@/lib/features/popUp/popUpSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useRouter } from "next/navigation";


export default function FrontLayer() {
    const router = useRouter();

    return (
        <>
            <div className="fixed bottom-0 left-0 w-fit h-fit pl-5 md:pl-14 pb-5 md:pb-10 overflow-hidden flex flex-col text-black">
                <h1 className="font-lilita text-4xl md:text-9xl transition-all duration-150 md:w-min">
                    Ethan Pollack
                </h1>
                {/* <div className="font-k2d text-lg md:text-2xl transition-all duration-150 flex flex-row flex-wrap"> */}
                <p className="font-k2d text-sm sm:text-lg md:text-2xl transition-all duration-150">
                    Personal website made by <span className="font-bold text-nowrap whitespace-nowrap">Ethan Pollack</span>
                </p>
                <p className="font-k2d text-sm sm:text-lg md:text-2xl transition-all duration-150">
                    Inspiration from
                    <CursorLock as="span" className="ml-1" cursorLockedClassName="h-1 w-[5.2rem] sm:w-[7rem] md:w-[9.2rem] rounded-full bg-foreground translate-y-1 sm:translate-y-2 md:translate-y-3">
                        <Link href="https://vanholtz.co/" className="hover:font-bold text-nowrap whitespace-nowrap">Van Holtz Co.</Link>
                    </CursorLock>
                </p>
                <p className="font-k2d text-sm sm:text-lg md:text-2xl transition-all duration-150">

                    <CursorLock as="span" className=" " cursorLockedClassName="h-1 w-[4rem] sm:w-[5rem] md:w-[7rem] rounded-full bg-foreground translate-y-1 sm:translate-y-2 md:translate-y-3">
                        <button className="hover:font-bold text-nowrap whitespace-nowrap"
                            onClick={() => {
                                router.replace("/about");
                            }}
                        >
                            About me
                        </button>
                    </CursorLock>
                </p>
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
    // return (
    //     <>
    //         <div className="fixed bottom-0 w-full h-fit px-14 pb-10 gap-5 sm:flex-row overflow-hidden flex flex-row">
    //             <div className="flex-grow flex-2 self-start flex flex-col text-black">
    //                 <h1 className="font-lilita text-8xl md:text-9xl transition-all duration-150">
    //                     Ethan<br></br>Pollack
    //                 </h1>
    //                 {/* <div className="font-k2d text-lg md:text-2xl transition-all duration-150 flex flex-row flex-wrap"> */}
    //                 <p className="font-k2d text-lg md:text-2xl transition-all duration-150">
    //                     Personal website made by <span className="font-bold text-nowrap whitespace-nowrap">Ethan Pollack</span>
    //                 </p>
    //                 <p>
    //                     Email me @
    //                     <CursorLock as="span" className="w-fit" cursorLockedClassName="h-1 w-[10.5rem] rounded-full bg-foreground translate-y-2">
    //                         <Link href="mailto:epollack31@gmail.com" className="mx-1 text-nowrap whitespace-nowrap">epollack31@gmail.com</Link>
    //                     </CursorLock>
    //                 </p>
    //                 <p className="font-k2d text-lg">
    //                     Inspiration from
    //                     <CursorLock as="span" className="ml-1" cursorLockedClassName="h-1 w-28 rounded-full bg-foreground translate-y-2">
    //                         <Link href="https://vanholtz.co/" className="hover:font-bold text-nowrap whitespace-nowrap">Van Holtz Co.</Link>
    //                     </CursorLock>
    //                 </p>
    //             </div>
    //             <div className=" flex-shrink flex-1 self-end flex flex-wrap gap-5 transition-all duration-150 justify-end items-end">
    //                 <CursorLock className="bg-foreground rounded-full w-20 h-20 p-2 flex justify-center items-center" cursorLockedClassName="w-20 h-20 backdrop-invert rounded-full z-10">
    //                     <Link href="https://github.com/epoll31" className="w-full h-full">
    //                         <Image src={GitHub} alt="GitHub" className="w-full h-full" />
    //                     </Link>
    //                 </CursorLock>
    //                 <CursorLock className="bg-foreground rounded-full w-20 h-20 p-2 flex justify-center items-center" cursorLockedClassName="w-20 h-20 backdrop-invert rounded-full z-10">
    //                     <Link href="https://linkedin.com/in/ethanpollack" className="w-full h-full">
    //                         <Image src={LinkedIn} alt="LinkedIn" className="w-full h-full" />
    //                     </Link>
    //                 </CursorLock>
    //             </div>
    //         </div >

    //     </>
    // );
}
