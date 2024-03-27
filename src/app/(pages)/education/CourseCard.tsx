"use client";
import { CardBody, CardContainer, CardItem } from "@/app/components/3d-card";
import { HTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Course } from "./wpi";

export function CourseCard({
    course, ...props
}: {
    course: Course;
} & HTMLAttributes<HTMLDivElement>) {

    const [minimized, setMinimized] = useState(true);

    const handleMinimized = () => {
        setMinimized(!minimized);
    };

    return (
        <CardContainer containerClassName="p-0" className={twMerge(props.className, `relative w-full mx-5 p-5 bg-foreground font-k2d text-black rounded-lg drop-shadow-lg`)} {...props}>
            <CardBody className="flex flex-col gap-2 w-full h-min overflow-x-hidden">
                <button className="control flex flex-row w-full gap-1"
                    onClick={handleMinimized}
                >
                    <CardItem as="h1" className="text-left flex-grow font-bold text-2xl" translateZ={300}>
                        {course.name}
                    </CardItem>
                    <span className={`relative minmax ${minimized ? '' : 'up'} flex-shrink w-8 h-8 z-50 aspect-square`}
                    >
                        <span className="bg-background absolute rounded-full"></span>
                        <span className="bg-background absolute rounded-full"></span>
                    </span>
                </button>
                {minimized ? <></> :
                    <>
                        <p className=" text-justify">{course.description}</p>
                        <CardItem className={`w-full flex flex-row flex-wrap gap-2 justify-around`}
                            translateZ={400}
                        >
                            {course.tags.map((tag, i) => {
                                return (
                                    <p key={i} className="rounded-full px-3 bg-foreground-100 text-black ">{tag}</p>
                                );
                            })}
                        </CardItem>
                    </>}
            </CardBody>
        </CardContainer>
    );
}
