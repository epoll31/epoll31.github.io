"use client";

import { CursorLock } from "@/app/components/CursorFollower";
import CustomButton from "@/app/components/CustomButton/CustomButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Work() {
    const router = useRouter();

    const handleClose = () => {
        router.replace("/");
    }

    return (
        <>
            <div className="fixed w-full h-full text-black overflow-y-auto flex flex-col items-center">
                <div className="w-fit h-fit max-w-prose">
                    <div className="m-10 flex-shrink">
                        <h1 className="font-lilita text-4xl lg:text-7xl w-fit text-wrap transition-all duration-150">
                            Work Experience
                        </h1>
                        <div className="w-full flex flex-row flex-wrap gap-x-10">
                            <CursorLock as="p" className="ml-1 whitespace-nowrap text-nowrap w-fit inline hover:font-semibold" cursorLockedClassName="hidden sm:[display:inherit] h-1 w-[6.2rem] rounded-full bg-foreground translate-y-2 z-40">
                                <Link href="#epic">epic systems</Link>
                            </CursorLock>
                            <CursorLock as="p" className="ml-1 whitespace-nowrap text-nowrap w-fit inline hover:font-semibold" cursorLockedClassName="hidden sm:[display:inherit] h-1 w-[8rem] rounded-full bg-foreground translate-y-2 z-40">
                                <Link href="#biy">build-it-yourself</Link>
                            </CursorLock>
                            <CursorLock as="p" className="ml-1 whitespace-nowrap text-nowrap w-fit inline hover:font-semibold" cursorLockedClassName="hidden sm:[display:inherit] h-1 w-[9.7rem] rounded-full bg-foreground translate-y-2 z-40">
                                <Link href="#gmr">great minds robotics</Link>
                            </CursorLock>
                        </div>
                    </div>
                    <div className="flex-grow flex flex-col justify-around m-5 gap-5 items-center">
                        <div className="flex-1 font-k2d flex flex-col text-wrap gap-4">
                            <p>
                                I am fortunate to have had the opportunity to work at a few different places and gain experience in a variety of
                                settings. Most importantly, I have worked at
                                <CursorLock as="span" className="ml-1 whitespace-nowrap text-nowrap w-fit inline hover:font-semibold" cursorLockedClassName="h-1 w-[6.2rem] rounded-full bg-foreground translate-y-2 z-40">
                                    <Link href="https://epic.com">Epic Systems</Link>
                                </CursorLock>
                                , at
                                <CursorLock as="span" className="ml-1 whitespace-nowrap text-nowrap w-fit inline hover:font-semibold" cursorLockedClassName="h-1 w-[8rem] rounded-full bg-foreground translate-y-2 z-40">
                                    <Link href="https://build-it-yourself.com/">Build-It-Yourself</Link>
                                </CursorLock>
                                , and at
                                <CursorLock as="span" className="ml-1 whitespace-nowrap text-nowrap w-fit inline hover:font-semibold" cursorLockedClassName="h-1 w-[9.7rem] rounded-full bg-foreground translate-y-2 z-40">
                                    <Link href="https://buildcoolrobots.com/">Great Minds Robotics</Link>
                                </CursorLock>
                            </p>

                            <div id="epic" className="flex flex-col text-wrap gap-2">
                                <h2 className="text-xl font-bold">Epic Systems</h2>
                                <p>
                                    During the summers of 2022 and 2023, I participated in the software development internship program at Epic Systems in Verona, Wisconsin.
                                </p>
                                <p>
                                    In my first summer (2022), I worked on the EpicCareLink team to modernize an old page and bring it from Visual Basic to
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
                            <div id="biy" className="flex flex-col text-wrap gap-2">
                                <h2 className="text-xl font-bold">Build-It-Yourself</h2>
                                <p>
                                    From October 2022 to May 2023, I worked at Build-It-Yourself, a small business that specializes in teaching kids about
                                    programming. Although, it primarily focuses on teaching web development, I was able to teach kids about a variety of
                                    topics including Scratch, Python, Git, and more. While working here, I taught kids from ages 10-18 in regularly
                                    scheduled classes and private lessons. I also helped to develop the curriculum for the classes and the website.
                                </p>
                                <p>
                                    On top of these programming classes, I also helped develop a platform named Invention Universe as the Lead Developer
                                    and Project Manager. This platform is a social media platform where kids can share their projects, learn from others,
                                    view their friends' projects, and more. I was able to use my experience with React.js, Node.js, and serverless backends
                                    to develop this platform.
                                </p>
                                <p>
                                    Working at Build-It-Yourself was a great experience that allowed me to learn more about teaching, web development,
                                    and project management in a smaller company. I was able to work with a great team of developers and teachers that helped
                                    me grow as a developer and a person. I am very proud of the work that I did at Build-It-Yourself and the impact that I
                                    was able to make on the students that I taught.
                                </p>
                            </div>
                            <div id="gmr" className="flex flex-col text-wrap gap-2">
                                <h2 className="text-xl font-bold">Great Minds Robotics</h2>
                                <p>
                                    Great Minds Robotics (GMR) is a robotics and programming education company that teaches kids about robotics, programming,
                                    and more. I worked at Great Minds Robotics from June 2019 to July 2020 as Programming Instructor. After spending several
                                    years as a student at GMR, I was able to use my experience to teach kids about programming, robotics, and more. I taught
                                    people of various ages and skill levels in classes and camps.
                                </p>
                                <p>
                                    The classes that I taught at GMR were focused on individual projects that the students would work on throughout the students
                                    would work on for many weeks or months. These would range from introduction to programming assignments that taught the basics
                                    of input and output control, simple graphical user interfaces, to more advanced projects that involved advanced data structures,
                                    algorithms, machine learning, game development, and more.
                                </p>
                                <p>
                                    Great Minds Robotics ignited my passion for programming as well as teaching. I was able to learn a lot about teaching,
                                    programming, and working with kids. I am very proud of the work that I did at Great Minds Robotics. I was able to help
                                    kids learn about programming and robotics and make a positive impact on their lives. I am very grateful for the opportunity
                                    to work at Great Minds Robotics and learn from the talented teachers and developers there.
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            <CustomButton />
        </>
    );
}