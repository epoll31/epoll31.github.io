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
            <main className="flex min-h-screen flex-col align-center p-5 gap-5 ">
                <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
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
                        <div className="max-w-[25rem] md:max-w-full  lg:max-w-[30rem] w-fit h-fit rounded-3xl p-6 bg-white text-justify text-black dark:bg-black dark:text-white">
                            <h1 className="w-full text-3xl text-center pb-1">About Me!</h1>
                            <p className="text-xl">
                                Hi there, I'm Ethan! I'm a recent graduate with a B.S. in Computer Science. I have a passion for teaching and helping others learn. I have experience in a wide range of subjects, including computer science, math, and web development. I'm excited to help you learn and grow in your studies!
                            </p>
                        </div>
                    </div>
                    <div className="col-start-1 col-span-1 lg:col-start-2 lg:col-span-1 flex justify-center align-middle">
                        <div className="max-w-[25rem] md:max-w-full  lg:max-w-[30rem] w-fit h-fit rounded-3xl p-6 bg-white text-justify text-black dark:bg-black dark:text-white">
                            <h1 className="w-full text-3xl text-center pb-1">Logistics</h1>
                            <p className="text-xl">
                                My rate is $50/hr. I'm available to tutor in person or online.
                                I'm flexible with my schedule and can work with you to find a time and place that works for both of us.
                            </p>
                        </div>
                    </div>
                    <div className="col-start-1 col-span-1 lg:col-span-2 flex justify-center align-middle">
                        <div className="max-w-[25rem] md:max-w-full w-fit h-fit rounded-3xl p-6 pl-12 bg-white text-black dark:bg-black dark:text-white">
                            <h1 className="w-full text-3xl text-center pb-1">Tutoring Options</h1>
                            <ul className="text-xl list-disc">
                                <li>A variety of programming languages including: C#, Java, C++, HTML/CSS, JavaSript, Python, and more.</li>
                                <li>Lots of programming tools and frameworks including: Unity, React, Git, and Visual Studio.</li>
                                <li>Math subjects including: Algebra, Geometry, Calculus, and more.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-start-1 col-span-1 md:row-start-2 md:row-span-3 lg:row-start-1 md:col-start-2 lg:col-start-3 flex justify-center align-middle">
                        <div className="">
                            <InterestedForm />
                        </div>
                    </div>
                </div >
            </main >
        </FormspreeProvider>
    );
}