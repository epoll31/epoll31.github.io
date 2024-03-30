"use client";

import { CursorLock } from "@/app/components/CursorFollower";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useMediaSizes, { smOrSmaller } from "@/app/utils/useMediaSizes";
import { useEffect, useState } from "react";
import { IconFish, IconFunctionFilled, IconSchool, IconTrophyFilled } from "@tabler/icons-react";
import EarlyYearsTimeLine from "./EarlyYearsTimeline";
import GMR2014 from "/early/gmr-2014.png";
import Vex2015 from "/early/vex-2015.jpg";
import Vex2016 from "/early/vex-2016.jpg";
import WRO2019 from "/early/wro-2019.jpeg";
import CHSFish from "/early/chs-fish-robot.jpg";
import CHSLogo from "/early/chs.png";

export default function EarlyYears() {
    const [windowSize, setWindowSize] = useState(0);
    const mediaSize = useMediaSizes();

    useEffect(() => {
        function update() {
            setWindowSize(window.innerWidth);
        }
        window.addEventListener("resize", update);
        update();
        return () => window.removeEventListener("resize", update);
    }, []);

    return (
        <div className="w-full h-fit text-black flex flex-col items-center md:mt-10">
            <div className={`h-fit pb-10 max-w-[400px] lg:max-w-[900px] transition-all duration-75`}
                style={{
                    width: `${windowSize - (smOrSmaller(mediaSize) ? 50 : 400)}px`,
                }}>
                <div className="flex-grow flex flex-row justify-around m-5 gap-5 md:m-10 md:gap-10">
                    <div className="flex-1 font-k2d flex flex-col text-wrap gap-3">
                        <h1 className="font-lilita text-6xl md:text-8xl transition-all">Early Years</h1>
                        {/* <p>
                            put some stuff here maybe
                        </p> */}
                    </div>
                </div>

                <EarlyYearsTimeLine sections={[
                    {
                        title: "Learning Robotics",
                        subtitle: "Great Minds Robotics",
                        startDate: "2012",
                        bullets: [
                            "Used Lego Mindstorms and RobotC to program robots",
                            "Used Lego and VexIQ to build robots",
                            "Completed missions to refine my skills",
                        ],
                        icon: <IconFunctionFilled />,
                        img: GMR2014,
                    },
                    {
                        title: "VexIQ",
                        subtitle: "Won 1st Place in State and Nationals",
                        startDate: "2015",
                        bullets: [
                            "Competed in VexIQ competitions",
                            "Placed in top 100 in the World Championship",
                        ],
                        icon: <IconTrophyFilled />,
                        img: Vex2015,
                    },
                    {
                        title: "Vex IQ",
                        subtitle: "Won 1st Place in State and Nationals | 9th in the World",
                        startDate: "2016",
                        bullets: [
                            "Learned many new skills and techniques in robotics, programming, and team work",
                        ],
                        icon: <IconTrophyFilled />,
                        img: Vex2016,
                    },
                    {
                        title: "Advanced Programming Classes",
                        subtitle: "Great Minds Robotics",
                        startDate: "2015",
                        endDate: "2020",
                        bullets: [
                            "Languages such as C#, Java, C++, and more",
                            "Tools including Unity, Git, and other industry standard tools",
                            "Platforms like Arduino, Raspberry Pi, and Microsoft Hololens",
                            "Algorithms and data structures",
                            "Math skills such as geometry, trigonometry, calculus, and physics",
                        ],
                        img: GMR2014,
                    },
                    {
                        title: "Fish Controlled Robot",
                        subtitle: "Robotics Project @ CHS",
                        startDate: "2017",
                        bullets: [
                            "Built and programmed a robot that was controlled by a fish",
                            "Used a fish tank and a camera to control the robot",
                            "Demonstrated the robot at the school district's science fair",
                        ],
                        icon: <IconFish />,
                        img: CHSFish,
                    },
                    {
                        title: "World Robotics Olympiad",
                        subtitle: "Placed 1st in Local and State Qualifiers",
                        startDate: "2019",
                        bullets: [
                            "Competed in the World Robotics Olympiad",
                            "Traveled to Hungary to compete in the international competition",
                        ],
                        icon: <IconTrophyFilled />,
                        img: WRO2019,
                    },
                    {
                        title: "High School",
                        subtitle: "Calabasas High School",
                        startDate: "2016",
                        endDate: "2020",
                        bullets: [
                            "Graduated with Honors and as Salutatorian",
                            "Took many AP classes including AP Computer Science, AP Calculus BC, AP Physics, and more",
                            "Learned many different subjects including history, english, and more",
                            "Participated in many clubs and organizations",
                            "Captian of the Varsity Tennis Team",
                            "Tutored in Math and Computer Science"
                        ],
                        icon: <IconSchool />,
                        img: CHSLogo,
                    },
                ]} />
            </div>
        </div>
    );
}


export function EarlyYearsOld() {
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
        </>
    );
}