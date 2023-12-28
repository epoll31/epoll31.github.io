"use client"

import Link from "next/link";
import Card from "./Card";
import Image from 'next/image'

export interface Project {
  name: string,
  description: string,
  url: string,
  tags: string[],
}

export interface IProjectCardProps {
  project: Project,
  className?: string,
};

function Tag (tag: string) {
  return (
    <>
    {/* <span className="bg-foreground text-background rounded-full px-2 py-1 text-sm font-semibold mr-2">{tag}</span> */}
    {/* <span className="bg-background text-foreground hover:bg-foreground hover:text-background transition-colors rounded-full px-2 py-1 text-sm font-semibold mr-2">{tag}</span> */}
     
      <span className="bg-background text-foreground border border-transparent hover:border-foreground transition-colors rounded-full px-2 py-1 text-sm font-semibold mr-2">{tag}</span>
    </>
  );
}

export default function ProjectCard(props: IProjectCardProps) {

  return (
      <Card className={props.className}>
        <a target="_blank" href={props.project.url} rel="noopener noreferrer">
          <div className="group flex justify-between border-b border-transparent hover:border-foreground">
            <h3 className="text-2xl">{props.project.name}</h3>
            <Image className="opacity-50 group-hover:opacity-100 scale-90 group-hover:scale-95 transition-all ease-in-out duration-75" src="/link.svg" width={25} height={25} alt={"link"}  />
          </div>
        </a>
        <p>{props.project.description}</p>
        <div className="mt-1 flex flex-wrap gap-y-1">
          {props.project.tags.map((tag) => Tag(tag))}
        </div>
      </Card>
  );
};
