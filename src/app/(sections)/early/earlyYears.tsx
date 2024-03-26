"use client";

import { CursorLock } from "@/app/components/CursorFollower";
import CustomButton from "@/app/components/CustomButton/CustomButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function EarlyYears() {
    const router = useRouter();

    return (
        <>
            <div className="w-full h-full text-black overflow-y-auto overflow-x-auto flex flex-col items-center">
                <div className="w-fit h-fit max-w-prose min-w-96">
                    <div className="m-10 w-fit flex-shrink">
                        <h1 className="font-lilita text-5xl md:text-8xl">Early Years</h1>
                        <div className="w-full flex flex-row flex-wrap gap-x-10">
                            <p>
                                robotics
                            </p>
                            <p>
                                programming
                            </p>
                            <p>
                                high school
                            </p>
                        </div>
                    </div>
                    <div className="flex-grow flex flex-row justify-around m-5 gap-5 md:m-10 md:gap-10">
                        <div className="flex-1 font-k2d flex flex-col text-wrap gap-3">
                            <p>
                                I have been interested in technology and programming since I was very young. I started programming in 2012 when I
                                was 10 years old. I started learning programming at a place named,
                                <CursorLock as="span" className="ml-1 whitespace-nowrap text-nowrap w-fit inline hover:font-semibold" cursorLockedClassName="h-1 w-[10rem] rounded-full bg-foreground translate-y-2 z-40">
                                    <Link href="https://buildcoolrobots.com/">Great Minds Robotics</Link>
                                </CursorLock>
                                .
                            </p>
                            <p>
                                The first few languages that I learned were visual programming languages such as Scratch and Lego Mindstorms. I
                                I mostly learned through robotics where I completed mini-projects called missions in which I needed to desing a
                                robot that could complete a task. Upon finishing the build, I would program the robot to complete the task. Once
                                the mission was accomplished and signed off by an instructor, I would move on to the next mission. Eventually,
                                I learned my first text-based programming language, RobotC. This is a version of C that is controlled and used to
                                program robots.
                            </p>
                            <p>
                                After some time, I completed all the missions and moved on to the next level where I learned more advanced programming,
                                such as C#, Java, C++, and more. I also learned how to use different software such as Unity, Git, and other industry
                                standard tools. I also learned how to use different hardware such as Arduino, Raspberry Pi, Microsoft Hololens, and
                                more.
                            </p>
                            <p>
                                On top of taking these programming classes, Great Minds was testing out a new robotics competition named VexIQ. I was
                                selected to join the first team and we competed in many competitions. We won many awards and even went to the world
                                championship in 2015. Although we did not win, we learned a lot and had a great time!
                            </p>
                            <p>
                                During my second year in this competition, my partner and I really honed our skills and commited a large amount of our
                                free time to this competition. We won many of the awards at all of the qualifying competitions and eventually placed
                                9th in the world championship. This was a great accomplishment and I am very proud of it.
                            </p>
                            <p>
                                For years, I continued to compete in other robotics competitions and take a number of programming classes at Great
                                Minds Robotics to refine and improve my skills. On top of the programming and robotics that I had directly learned,
                                I learned a variety of math skills such as geometry, trigonometry, calculus, and physics. This helped me in all of
                                my classes and curriculum at Calabasas High School. There, I took many AP classes, including AP Computer Science, AP
                                Calculus BC, AP Physics, and more.
                            </p>
                            <p>
                                Eventually, I became an instructor at Great Minds Robotics where I learned to love teaching and helping others learn
                                programming and robotics. I believe that Great Minds has taught me a multitude of skills that I will use for the rest
                                of my life. I am very grateful for the experience and knowledge that I gained from this place. I am not sure where I
                                would be right now without the help of the employees and instructors at Great Minds Robotics.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <CustomButton />
        </>
    );
}