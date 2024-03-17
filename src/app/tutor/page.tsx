"use client";

import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./Components/CardContainer";
import Image from "next/image";
import headshot from "/public/tutor/headshot.png";
import { InterestedForm } from "./Components/ui/interestForm";
import { FormspreeProvider } from "@formspree/react";


function Tag({ children }: { children: React.ReactNode }) {
    // focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50  focus:outline-none
    return <>
        <p className="relative inline-flex h-8 mx-2 my-[2px] overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm text-nowrap font-medium text-white backdrop-blur-3xl">
                {children}
            </span>
        </p>
    </>;
}


export default function TutorPage() {

    return (
        <FormspreeProvider project="2429802370826239296">
            <main className="flex min-h-screen flex-col align-center p-5 gap-5">
                <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-[1300px]">
                    <div className="col-start-1 col-span-1 md:row-span-2 lg:row-span-1 lg:col-span-2 flex justify-center align-middle h-fit">
                        <CardContainer className="rounded-3xl p-5 md:p-8 h-fit gap-5 bg-white dark:bg-black" >
                            <CardBody className="group/card h-auto w-auto flex flex-col lg:flex-row justify-around gap-5">
                                <CardItem translateZ="100" className="">
                                    <Image src={headshot} alt="headshot" width={300} height={300} className="rounded-xl" />
                                </CardItem>
                                {/* </CardItem> */}
                                {/* <CardItem translateZ="50" rotateZ="2" rotateX="0" className="h-[300px] w-[300px] flex flex-col justify-around " > */}
                                <div className="flex flex-col justify-around">
                                    <CardItem translateZ="70" as="h1" className="text-4xl text-center w-full font-bold text-black dark:text-white">Ethan Pollack</CardItem>
                                    <CardItem translateZ="60" as="p" className="text-xl text-center w-full font-semibold *:text-black dark:text-white">Graduated with a B.S. Degree<br></br>in Computer Science</CardItem>
                                    <CardItem translateZ="50" className="mt-5 w-full flex flex-col justify-evenly flex-1">
                                        {/* <li className="">Experience in: */}
                                        <Tag>Computer Science and Algorithms</Tag>
                                        <Tag>Math: Geometry, Algebra, and Calculus</Tag>
                                        <Tag>Web, Game, and Mobile Development</Tag>
                                        <Tag>And Much More...</Tag>
                                        {/* </li> */}
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </div>
                    <div className="col-start-1 col-span-1 md:col-start-2 lg:col-span-1 flex justify-center align-middle w-full">
                        <CardContainer className="rounded-3xl p-5 md:p-8 h-fit bg-white text-black dark:bg-black dark:text-white" >
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
                        <CardContainer className="rounded-3xl p-5 md:p-8 h-fit bg-white text-black dark:bg-black dark:text-white" >
                            <CardBody className="max-w-[25rem] md:max-w-full  lg:max-w-[30rem] w-fit h-fit rounded-3xl text-justify">
                                <CardItem as="h1" translateZ={100} className="w-full text-3xl text-center pb-1">Logistics</CardItem>
                                <CardItem as="p" translateZ={80} className="text-xl">
                                    My rate is $50/hr. I'm available to tutor in person or online.
                                    I'm flexible with my schedule and can work with you to find a time and place that works for both of us.
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                    <div className="col-start-1 col-span-1 lg:col-span-2  w-full flex justify-center align-middle">
                        <CardContainer className="rounded-3xl p-5 md:p-8 w-full h-fit bg-white text-black dark:bg-black dark:text-white" >
                            <CardBody className="max-w-[25rem] md:max-w-full w-full h-fit rounded-3xl">
                                <CardItem as="h1" translateZ={100} className="w-full text-3xl text-center pb-1">Tutoring Options</CardItem>
                                <CardItem as="ul" translateZ={80} className="text-xl list-disc pl-6">
                                    <li>A variety of programming languages including: C#, Java, C++, HTML/CSS, JavaSript, Python, and more.</li>
                                    <li>Lots of programming tools and frameworks including: Unity, React, Git, and Visual Studio.</li>
                                    <li>Math subjects including: Algebra, Geometry, Trigonometry, Calculus, and more.</li>
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                    <div className="col-start-1 col-span-1 md:row-start-2 md:row-span-3 lg:row-start-1 md:col-start-2 lg:col-start-3 flex justify-center align-middle">
                        <div className="">
                            <InterestedForm />
                        </div>
                    </div>
                    <div className="col-start-1 col-span-full lg:col-span-3 flex justify-center align-middle" id="my-experience">
                        <CardContainer sensitivity={{ x: 200, y: 200 }} className="w-fit h-fit rounded-3xl p-6 pl-12 md:hover:p-12 md:hover:pl-16 sm:text-justify bg-white text-black dark:bg-black dark:text-white">
                            <CardBody className="w-full h-fit rounded-3xl">
                                <CardItem as="h1" translateZ={45} className="w-full text-3xl text-center pb-1">My Experience</CardItem>
                                <CardItem as="ul" translateZ={30} className="text-xl list-disc ">
                                    <li className="pb-4">I started learning programming through robotics at a school named
                                        <Link className="px-1 font-semibold hover:font-bold active:underline" href="https://buildcoolrobots.com">Great Minds Robotics</Link>.
                                        I started going there very often and participated in a very successful robotics team that made it to the Worlds Competition multiple years in a row.
                                        While there, I learned a lot of pgramming lanugages, techniques, and tools that have helped me tremendously as a software developer.
                                        Eventually, I became a teacher there and taught kids of various ages how to program. From the very beginning through learning advanced data structures,
                                        complex algorithms, games, websites, and mobile apps.
                                    </li>
                                    <li className="pb-4">These programming and robotics classes not only taught me a lot about programming and designing, but also I had picked up a ton of math skills along the way.
                                        By using math such as trigonometry, algebra, and geometry to solve problems and design robots, I was able to learn a lot of math that I wouldn't have learned until high school.
                                        This put me ahead of the curve in math and helped me to excel in my math classes in high school and college, allowing me to get a 5 on both my AP Computer Science and AP Calculus BC exams.
                                    </li>
                                    <li className="pb-4">After high school, I decided to go to college and study Computer Science. I graduated with a B.S. in Computer Science from Worcester Polytechnic Institute
                                        in Massachusetts. WPI uses a very project-based curriculum, so I have a lot of experience working on projects and collaborating with others. Two projects that I
                                        am particularly proud of are a game that I made for a local Boy's and Girl's Club that demonstrates the
                                        <Link className="px-1 font-bold hover:underline" href="https://epoll31.github.io/iqp">importance of the Nitrogen Life Cycle</Link>
                                        and a research project that
                                        <Link className="px-1 font-bold hover:underline" href="https://epoll31.github.io/mqp">compares three different SQL databases</Link>
                                        and their performance for pedagogical purposes at WPI.
                                    </li>
                                    <li className="pb-4" >During college, I had two main jobs:
                                        <li className="list-inside pb-4">Both summers after my sophomore year and junior year, I interned at a large company named Epic Systems in Verona, Wisconsin as a software developer.
                                            Each summer I developed a project using their proprietary technology and software that passed through development and into quality assurance and testing. I am very proud of my
                                            accomplishments at Epic Systems.</li>
                                        <li className="list-inside">During my junior year, I worked for a company named Build-It-Yourself as a project manager and lead software developer. Build-It-Yourself is a mostly-remote,
                                            Boston-based programming school that teaches programming to kids of various ages. They also hosted a platform named Invention Universe that enables kids to create a display and post
                                            their creative endeavors including physical creations and programming projects. During my time there, I taught a variety of programming classes and worked as a team lead for the
                                            Invention Universe project.</li>
                                    </li>
                                    <li className="pb-4">
                                        After college, I decided to move to California to work as a software developer. I am currently looking for a job and am excited to help others learn and grow in their studies.
                                        I believe that my experience in programming, math, and teaching will help me to be a great tutor and mentor for you. Please feel free to reach out at any time if you have questions
                                        or would like to schedule a tutoring session.
                                    </li>
                                    <li className="pb-4">
                                        You can reach me at:
                                        <li className="list-inside">Email:      <Link className="px-1 font-bold hover:underline" href="mailto:epollack31@gmail.com">epollack31@gmail.com</Link></li>
                                        <li className="list-inside">Phone:      <Link className="px-1 font-bold hover:underline" href="tel:818-398-8996">818-398-8996</Link></li>
                                        <li className="list-inside">LinkedIn:   <Link className="px-1 font-bold hover:underline" href="https://www.linkedin.com/in/ethanpollack">Ethan Pollack</Link></li>
                                        <li className="list-inside">GitHub:     <Link className="px-1 font-bold hover:underline" href="https://github.com/epoll31">epoll31</Link></li>
                                    </li>

                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                </div >
            </main >
        </FormspreeProvider>
    );
}