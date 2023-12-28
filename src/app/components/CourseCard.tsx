"use client"

import Link from "next/link";
import Card from "./Card";
import Image from 'next/image'

export interface Course {
  name: string,
  description: string,
  tags: string[],
}

export interface ICourseCardProps {
  course: Course,
  activeTags?: string[],
  className?: string,
};

function Tag (tag: string, active: boolean) {

    /* <span className="bg-foreground text-background rounded-full px-2 py-1 text-sm font-semibold mr-2">{tag}</span> */
    /* <span className="bg-background text-foreground hover:bg-foreground hover:text-background transition-colors rounded-full px-2 py-1 text-sm font-semibold mr-2">{tag}</span> */
     
    if (active) {
      return <span className="bg-foreground text-background border border-background hover:border-transparent transition-colors rounded-full px-2 py-1 text-sm font-semibold mr-2">{tag}</span>;
    } 
    else {
      return <span className="bg-background text-foreground border border-transparent hover:border-foreground transition-colors rounded-full px-2 py-1 text-sm font-semibold mr-2">{tag}</span>;
    }
}

export default function CourseCard(props: ICourseCardProps) {

  return (
      <Card className={props.className}>
        <h3 className="text-2xl">{props.course.name}</h3>
        <p>{props.course.description}</p>
        <div className="mt-1 flex flex-wrap gap-y-1">
          {props.course.tags.map((tag) => Tag(tag, props.activeTags?.includes(tag) ? true : false))}
        </div>
      </Card>
  );
};
