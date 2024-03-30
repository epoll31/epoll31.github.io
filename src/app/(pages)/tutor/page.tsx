"use client";

import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./Components/CardContainer";
import Image from "next/image";
import { InterestedForm } from "./Components/ui/interestForm";
import { FormspreeProvider } from "@formspree/react";


function Tag({
    children,
    href,
    bgColor = "bg-orange-200 dark:bg-slate-950",
    textColor = "text-black dark:text-white"
}: {
    children: React.ReactNode,
    href?: string,
    bgColor?: string
    textColor?: string
}) {
    // focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50  focus:outline-none
    const MaybeLink = ({ children, href, className }: { children: React.ReactNode, href?: string, className?: string }) => {
        return href === undefined ? <p className={className}>{children}</p> : <Link href={href} className={className}>{children}</Link>;
    };

    return <>
        <MaybeLink className="relative inline-flex h-8 mx-2 my-[2px] overflow-hidden rounded-full p-[2px]    w-full" href={href}>
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#64748b_0%,#22d3ee_50%,#e11d48_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className={`inline-flex h-full w-full items-center justify-center rounded-full ${bgColor} ${textColor} px-3 py-1 text-sm text-nowrap font-medium  backdrop-blur-3xl`}>
                {children}
            </span>
        </MaybeLink>
    </>;
}

export default function TutorPage() {
    return (
        <FormspreeProvider project="2429802370826239296">
            <main className="flex min-h-screen flex-col align-center p-5 gap-5 bg-white dark:bg-zinc-800">
                <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:py-16 mx-auto max-w-[1300px] ">
                    <div className="col-start-1 col-span-1 md:row-span-2 lg:row-span-1 lg:col-span-2 flex justify-center align-middle h-fit ">
                        <CardContainer className="rounded-3xl p-5 md:p-8 h-fit gap-5 bg-sky-200 dark:bg-black" >
                            <CardBody className="group/card h-auto w-auto flex flex-col lg:flex-row justify-around gap-5">
                                <CardItem translateZ="100" className="">
                                    <Image src={"/tutor/headshot.png"} alt="headshot" width={300} height={300} className="rounded-xl" />
                                </CardItem>
                                {/* </CardItem> */}
                                {/* <CardItem translateZ="50" rotateZ="2" rotateX="0" className="h-[300px] w-[300px] flex flex-col justify-around " > */}
                                <div className="flex flex-col justify-around">
                                    <CardItem translateZ="70" as="h1" className="text-4xl text-center w-full font-bold text-black dark:text-white">Ethan Pollack</CardItem>
                                    <CardItem translateZ="60" as="p" className="text-xl text-center w-full font-semibold text-black dark:text-white">Computer Science and Math Tutor</CardItem>
                                    <CardItem translateZ="50" className="mt-5 w-full flex flex-col justify-evenly flex-1">
                                        {/* <li className="">Experience in: */}
                                        <Tag bgColor="bg-orange-100 dark:bg-slate-950">Need Homework Help?</Tag>
                                        <Tag bgColor="bg-orange-100 dark:bg-slate-950">Want to Learn to Program?</Tag>
                                        <Tag bgColor="bg-orange-100 dark:bg-slate-950">Finding Math or Programming Challenging?</Tag>
                                        <Tag bgColor="bg-orange-100 dark:bg-slate-950">All Ages Welcome</Tag>
                                        {/* </li> */}
                                    </CardItem>
                                    <CardItem translateZ={80} className="w-full">
                                        <Tag href="#interested">Contact Me Now!</Tag>
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </div>
                    <div className="col-start-1 col-span-1 md:col-start-2 lg:col-span-1 flex justify-center align-middle w-full">
                        <CardContainer className="rounded-3xl p-5 md:p-8 h-fit bg-sky-200 text-black dark:bg-black dark:text-white" >
                            <CardBody className="max-w-[25rem] md:max-w-full  lg:max-w-[30rem] w-fit h-fit rounded-3xl text-justify ">
                                <CardItem translateZ={100} as="h1" className="w-full text-3xl text-center pb-1">About Me!</CardItem>
                                <CardItem translateZ={80} as="p" className="text-xl">
                                    Hi there, I'm Ethan! I'm a recent graduate with a B.S. in Computer Science. I have a passion for teaching and helping others learn. I have experience in a wide range of subjects, including computer science, math, and web development. I'm excited to help you learn and grow in your studies!
                                </CardItem>
                                <CardItem translateZ={100} className="w-full">
                                    <Link className="text-xl font-semibold hover:font-bold active:underline text-center" href={"#my-experience"}>
                                        {/* lg:hidden  */}
                                        <p className="w-full">
                                            View My Experience
                                        </p>
                                    </Link>
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                    <div className="col-start-1 col-span-1 lg:col-start-2 lg:col-span-1 flex justify-center align-middle">
                        <CardContainer className="rounded-3xl p-5 md:p-8 h-fit bg-sky-200 text-black dark:bg-black dark:text-white" >
                            <CardBody className="max-w-[25rem] md:max-w-full  lg:max-w-[30rem] w-fit h-fit rounded-3xl text-justify">
                                <CardItem as="h1" translateZ={100} className="w-full text-3xl text-center pb-1">Logistics</CardItem>
                                <CardItem as="ul" translateZ={80} className="text-xl list-disc pl-4">
                                    <li className="mb-2">I'm flexible with my schedule and can work with you to find a time and place that works for both of us.</li>
                                    <li className="mb-2">I'm available to tutor in-person or online.</li>
                                    <li className="mb-2">I'm available to tutor all ages and skill levels.</li>
                                    <li className="mb-2">My rate is $40/hr.</li>
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                    <div className="col-start-1 col-span-1 lg:col-span-2  w-full flex justify-center align-middle">
                        <CardContainer className="rounded-3xl p-5 md:p-8 w-full h-fit bg-sky-200 text-black dark:bg-black dark:text-white" >
                            <CardBody className="max-w-[25rem] md:max-w-full w-full h-fit rounded-3xl">
                                <CardItem as="h1" translateZ={100} className="w-full text-3xl text-center pb-1">Tutoring Options</CardItem>
                                <CardItem as="ul" translateZ={80} className="text-xl list-disc pl-4 text-justify">
                                    <li className="mb-2">Math help including: Algebra, Geometry, Trigonometry, Calculus, and more</li>
                                    <li className="mb-2">Intro to programming: Visual and text-based programming languages including Scratch, C#, Java, Python, and others</li>
                                    <li className="mb-2">Enhance your programming skills with help in: Unity, React, Git, Visual Studio and more industry standard tools</li>
                                    {/* <li className="mb-2">A variety of programming languages including: C#, Java, C++, HTML/CSS, JavaSript, Python, and more.</li> */}
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                    <div className="col-start-1 col-span-1 md:row-start-2 md:row-span-3 lg:row-start-1 md:col-start-2 lg:col-start-3 flex justify-center align-middle">
                        <div className="" id="interested">
                            <InterestedForm />
                        </div>
                    </div>
                    <div className="col-start-1 col-span-full lg:col-span-3 flex justify-center align-middle" id="my-experience">
                        <CardContainer sensitivity={{ x: 200, y: 200 }} className="w-fit h-fit rounded-3xl p-6 pl-12 md:hover:p-12 md:hover:pl-16 sm:text-justify bg-sky-200 text-black dark:bg-black dark:text-white">
                            <CardBody className="w-full h-fit rounded-3xl">
                                <CardItem as="h1" translateZ={45} className="w-full text-3xl text-center pb-1">My Experience</CardItem>
                                <CardItem as="ul" translateZ={30} className="text-xl list-disc ">
                                    <li className="pb-4">I began my coding journey back in middle school when I first attended a program at
                                        <Link className="px-1 font-semibold hover:font-bold active:underline" href="https://buildcoolrobots.com">Great Minds Robotics</Link>
                                        where 2 of my friends and I created a very successful robotics team. It's there that I first got my taste of programming and robotics
                                        where we took our team to win State, Nationals, and then came in top 10 in Worlds - all before starting high school.  Before
                                        graduating high school, I even became an instructor there teaching kids of various ages how to program and build.
                                    </li>
                                    <li className="pb-4">These programming and robotics classes not only exposed me to a multitude of languages, but also helped me learn
                                        industry standard best practices when it comes to logic, code design, documentation, as well as working as an integrated member of
                                        a development team.  And of course, my math skills grew exponentially along the way as well. Using trigonometry, algebra, and
                                        geometry to design and solve robotics issues, I learned these skills at an early age that I wouldn't normally have been exposed
                                        to until high school. This put me WAY ahead of the curve in both computer science and math and helped me excel in all STEM related
                                        high school and college classes (allowing me to get a 5 on both the Computer Science and Calculus AP exams!).
                                    </li>
                                    <li className="pb-4">When it came time to go to college, I chose Worcester Polytechnic Institute (in Massachusetts) where I completed my
                                        Bachelor in Science in Computer Science in 3.5 years! WPI is a (relatively) smaller school which allows a very focused learning environment
                                        where they leverage a very project-based curriculum. This gave me a ton of experience working deep on projects and collaborating with others.
                                        Two projects that am particularly proud include a game that I created for a local Boy's and Girl's Club that demonstrates
                                        <Link className="px-1 font-bold hover:underline" href="https://epoll31.github.io/iqp">the importance of the Nitrogen Life Cycle</Link>
                                        as well as a research project that compares and analyzes the performance of
                                        <Link className="px-1 font-bold hover:underline" href="https://epoll31.github.io/mqp">three different SQL Servers for pedagogical purposes</Link>.
                                    </li>
                                    <li className="pb-4" >During college, I had two main jobs:
                                        <ul className="list-disc">
                                            <li className="list-inside pb-4">
                                                I interned (twice) at Epic Systems in Verona, Wisconsin as a software developer. Epic is one of, if not THE, largest
                                                Electronic Health Records (EHR) applications for hospitals in the country. Each summer I developed a project using
                                                their proprietary technology and software that passed through development and into quality assurance and testing.
                                                Both were ultimately included in the production versions of their system.
                                            </li>
                                            <li className="list-inside">
                                                During my junior year, I worked for Build-It-Yourself as a project manager and lead software developer. Build-It-Yourself
                                                is a mostly-remote, Boston-based programming school that teaches kids of various ages to program. They also hosted a
                                                platform named Invention Universe that enables kids to create a display and post their creative endeavors including
                                                physical creations and programming projects. During my time there, I taught a variety of programming classes and worked
                                                as a team lead for the Invention Universe project.
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="pb-4">
                                        After completing my degree at WPI, I decided to move back home to California to work as a software developer. I am currently
                                        looking to share my experiences and success by helping other kids to learn and grow in their studies. I believe that my
                                        experience in programming, math, robotics, and teaching help me to be a great tutor and mentor. Please feel free to reach out
                                        at any time if you have questions or would like to schedule a tutoring session.
                                    </li>
                                    <li className="pb-4">
                                        You can reach me at:
                                        <ul className="list-disc list-inside">
                                            <li>Email:      <Link className="px-1 font-bold hover:underline" href="mailto:epollack31@gmail.com">epollack31@gmail.com</Link></li>
                                            {/* <li>Phone:      <Link className="px-1 font-bold hover:underline" href="tel:818-398-8996">818-398-8996</Link></li> */}
                                            <li>LinkedIn:   <Link className="px-1 font-bold hover:underline" href="https://www.linkedin.com/in/ethanpollack">Ethan Pollack</Link></li>
                                            <li>GitHub:     <Link className="px-1 font-bold hover:underline" href="https://github.com/epoll31">epoll31</Link></li>
                                        </ul>
                                    </li>

                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                </div >
            </main >
        </FormspreeProvider >
    );
}