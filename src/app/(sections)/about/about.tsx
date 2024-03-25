"use client";

import { CursorLock } from "@/app/components/CursorFollower";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function About() {
    const router = useRouter();

    const handleClose = () => {
        router.replace("/");
    }

    return (
        <>
            <div className="w-full h-full text-black overflow-y-auto overflow-x-auto flex flex-col items-center">
                <div className="w-fit h-fit max-w-prose min-w-96">
                    <div className="m-10 w-fit flex-shrink">
                        <h1 className="font-lilita text-8xl">Ethan Pollack</h1>
                        <div className="w-full flex flex-row gap-10">
                            <CursorLock cursorLockedClassName="h-1 w-[2.5rem] rounded-full bg-foreground translate-y-2 z-40">
                                <Link className="z-30" href="mailto:epollack31@gmail.com">email</Link>
                            </CursorLock>
                            <CursorLock cursorLockedClassName="h-1 w-[3.7rem] rounded-full bg-foreground translate-y-2 z-40">
                                <Link href="https://linkedin.com/in/ethanpollack">linkedin</Link>
                            </CursorLock>
                            <CursorLock cursorLockedClassName="h-1 w-[3rem] rounded-full bg-foreground translate-y-2 z-40">
                                <Link href="https://github.com/epoll31">github</Link>
                            </CursorLock>
                        </div>
                    </div>
                    <div className="flex-grow flex flex-row justify-around m-5 gap-5 md:m-10 md:gap-10">
                        <div className="flex-1 font-k2d flex flex-col text-wrap gap-3">
                            <p>
                                My name is Ethan Pollack.
                            </p>

                            <p>
                                I am a software developer with expertise in web development, game development, mobile app development, and more.
                                I started programming in 2012 when I was 10 years old. I began with the MIT Scratch programming language and have
                                since learned many languages, frameworks, and tools such as C#, React.js, Unity, and many more.
                            </p>

                            <p>
                                In December 2023, I graduated from
                                <CursorLock as="span" className="mx-1 whitespace-nowrap text-nowrap w-fit inline hover:font-semibold" cursorLockedClassName="h-1 w-[14.5rem] rounded-full bg-foreground translate-y-2 z-40">
                                    <Link href="https://wpi.edu">Worcester Polytechnic Institute</Link>
                                </CursorLock>
                                with a Bachelor's Degree in Computer Science. While there I conducted research projects comparing the MySQL,
                                Oracle, and Postgres databases, and studying the Nitrogen Life Cycle to create a game using AR.js and React.js
                                to teach children about the nitrogen cycle.
                            </p>

                            <p>
                                During the summers of 2022 and 2023, I participated in the software development internship program at
                                <CursorLock as="span" className="mx-1 whitespace-nowrap text-nowrap w-fit inline hover:font-semibold" cursorLockedClassName="h-1 w-[6.2rem] rounded-full bg-foreground translate-y-2 z-40">
                                    <Link href="https://epic.com">Epic Systems</Link>
                                </CursorLock>
                                in Verona, Wisconsin. In my first summer, I worked on the EpicCareLink team to modernize an old page and bring it
                                from Visual Basic to React.js and their proprietay software. In 2023, I worked on the MyChart application that
                                allows patients to view their medical records, schedule appointments, and more. Specifically, I added a page using
                                React.js, C#, and their proprietary software that allows patients to view, search, and sign-up for clinical research
                                studies that are being conducted at hospitals in their organization.
                            </p>

                            <p>
                                Throughout my junior year, I worked as a project manager and lead developer at
                                <CursorLock as="span" className="ml-1 whitespace-nowrap text-nowrap w-fit inline hover:font-semibold" cursorLockedClassName="h-1 w-[8rem] rounded-full bg-foreground translate-y-2 z-40">
                                    <Link href="https://build-it-yourself.com/">Build-It-Yourself</Link>
                                </CursorLock>
                                , a company that teaches children how to use modern software languages, frameworks, and tools to create their own
                                projects such as games, websites, and mobile applications. On top of teaching these classes, I also led the team
                                that developed a platform named Invention Universe. On this site, children can post and share their creative
                                endeavors with the Built-It-Yourself community.
                            </p>

                            <p>
                                Feel free to reach out if you would like to learn more about me or my work.
                            </p>
                        </div>


                    </div>
                </div>
            </div>
            <span className="absolute menu arrow bg-foreground top-0 right-0 m-5 w-10 h-10 sm:m-10 sm:w-14 sm:h-14 rounded-full transition-all drop-shadow-md"
                onClick={handleClose}>
                <span className="absolute line1 arrow w-full h-1 rounded-full bg-black " aria-hidden></span>
                <span className="absolute line2 arrow w-full h-1 rounded-full bg-black " aria-hidden></span>
                <span className="absolute line3 arrow w-full h-1 rounded-full bg-black " aria-hidden></span>
            </span>
        </>
    );
}