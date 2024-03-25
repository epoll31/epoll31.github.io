"use client";

import { CursorLock } from "@/app/components/CursorFollower";
import Home from "@/app/components/Home";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Internships() {
    const router = useRouter();

    const handleClose = () => {
        router.replace("/");
    }

    return (
        <>
            <div className="w-full h-full text-black overflow-y-auto overflow-x-hidden flex flex-col items-center">
                <div className="w-fit h-fit max-w-prose min-w-96">
                    <div className="m-10 w-fit flex-shrink">
                        <h1 className="font-lilita text-5xl sm:text-6xl md:text-7xl lg:text-8xl w-min transition-all duration-150">
                            Internships
                        </h1>
                        <div className="w-full flex flex-row gap-10">
                            <p>
                                summer 2022
                            </p>
                            <p>
                                summer 2023
                            </p>
                        </div>
                    </div>
                    <div className="flex-grow flex flex-col justify-around m-5 gap-5 items-center">
                        <div className="flex-1 font-k2d flex flex-col text-wrap gap-3">
                            <p>
                                During the summers of 2022 and 2023, I participated in the software development internship program at
                                <CursorLock as="span" className="mx-1 whitespace-nowrap text-nowrap w-fit inline hover:font-semibold" cursorLockedClassName="h-1 w-[6.2rem] rounded-full bg-foreground translate-y-2 z-40">
                                    <Link href="https://epic.com">Epic Systems</Link>
                                </CursorLock>
                                in Verona, Wisconsin.
                            </p>
                            <p>
                                In my first summer, I worked on the EpicCareLink team to modernize an old page and bring it from Visual Basic to
                                React.js and their proprietay software. This gave me a great opportunity to learn not only their software and tools,
                                but how to apply my past experience with React.js, C#, and more to a large codebase. Although this was a new experience
                                for me, I felt very ready to take on the challenge and learn as much as I could from the talented developers at Epic.
                            </p>
                            <p>
                                In 2023, I worked on the MyChart application that allows patients to view their medical records, schedule appointments,
                                and more. Specifically, I added a page using React.js, C#, and their custom software that allows patients to view,
                                search, and sign-up for clinical research studies that are being conducted at hospitals in their organization. Since
                                this was my second summer at Epic, I was able to hit the ground running and make a significant impact on the team
                                and the project. I was able to use my past experience and the knowledge I gained from the previous summer to truly
                                excel in my work throughout the summer.
                            </p>
                            <p>
                                I am extremely grateful for the opportunity to work at Epic Systems and learn from the talented developers there.
                                Working on such a large codebase and with a fantastic team of developers was a great experience that I will always
                                remember and bring with me to future projects. I am very proud that both summers, my work passed through the initial
                                stages of development and proceeded to quality assurance, testing, and eventually production.
                            </p>
                        </div>
                    </div>
                </div >
            </div >
            <Home />
        </>
    );
}