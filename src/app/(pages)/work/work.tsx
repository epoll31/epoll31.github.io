"use client";

import WorkTimeline from "./WorkTimeline";
import { useEffect, useState } from "react";
import useMediaSizes, { smOrSmaller } from "@/app/utils/useMediaSizes";
import { IconBriefcaseFilled, IconDeviceHeartMonitorFilled, IconFunctionFilled, } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";


export default function Work() {
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
                        <h1 className="font-lilita text-4xl md:text-6xl">Work Experience</h1>
                        {/* <p>
                            put some stuff here maybe
                        </p> */}
                        {
                            smOrSmaller(mediaSize) && (
                                <div className="overflow-hidden rounded-xl">
                                    <Link href="https://raw.githubusercontent.com/epoll31/Resume/main/resume.pdf" className="w-full h-fit">
                                        <Image src="/images/resume-color.png" alt="resume" width={200} height={200} className="w-full" />
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </div>


                {/* <div className="w-full flex flex-col"> */}


                <WorkTimeline workInfo={[
                    {
                        company: "Epic Systems",
                        role: "Software Development Internship",
                        startDate: "May 2023",
                        endDate: "August 2023",
                        bullets: [
                            'Added a Research Study Search Page to MyChart',
                            'Used React.js, C#, and Epic\'s proprietary software',
                            'Indivudally developed the page and push it through to QA and testing',
                        ],
                        location: "Verona, Wisconsin",
                        icon: <IconDeviceHeartMonitorFilled />,
                    },
                    {
                        company: "Build-It-Yourself",
                        role: "Web Development Instructor",
                        startDate: "October 2022",
                        endDate: "May 2023",
                        bullets: [
                            'Taught kids ages 10-18 about programming',
                            'Developed a social media platform, Invention Universe, for kids to share projects',
                            'Used React.js, Node.js, and serverless backends',
                        ],
                        location: "Remote / Boston, Massachusetts",
                        icon: <IconBriefcaseFilled />,
                    },
                    {
                        company: "Epic Systems",
                        role: "Software Development Internship",
                        startDate: "May 2022",
                        endDate: "August 2022",
                        bullets: [
                            'Modernized an old page on the EpicCareLink team',
                            'Used React.js, C#, Visual Basic, and Epic\'s proprietary software',
                            'Indivudally developed the page and push it through to QA and testing',
                        ],
                        location: "Verona, Wisconsin",
                        icon: <IconDeviceHeartMonitorFilled />,
                    },
                    {
                        company: "Great Minds Robotics",
                        role: "Programming Instructor",
                        startDate: "June 2019",
                        endDate: "July 2020",
                        bullets: [
                            'Taught people of various ages and skill levels about programming',
                            'Focused on individual projects that the students would work on for many weeks or months',
                            'Used C#, Java, Git, Unity, and more',
                            'Projects include game development, machine learning, data structures, and more'
                        ],
                        location: "Boston, Massachusetts",
                        icon: <IconFunctionFilled />,
                    },
                ]} />

                {/* </div> */}
            </div>
        </div>
    );
}
