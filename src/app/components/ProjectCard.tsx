"use client"

import Link from "next/link";
import Card from "./Card";
import Image from 'next/image'

export interface Project {
  name: string,
  description: string,
  url?: string,
  link?: string,
  tags: string[],
}

export interface IProjectCardProps {
  project: Project,
  className?: string,
  activeTags?: string[],
};

function Tag (props: {tag: string, active: boolean}) {

  /* <span className="bg-foreground text-background rounded-full px-2 py-1 text-sm font-semibold mr-2">{tag}</span> */
  /* <span className="bg-background text-foreground hover:bg-foreground hover:text-background transition-colors rounded-full px-2 py-1 text-sm font-semibold mr-2">{tag}</span> */
   
  if (props.active) {
    return <span className="bg-foreground text-background border border-background hover:border-transparent transition-colors rounded-full px-2 py-1 text-sm font-semibold mr-2">{props.tag}</span>;
  } 
  else {
    return <span className="bg-background text-foreground border border-transparent hover:border-foreground transition-colors rounded-full px-2 py-1 text-sm font-semibold mr-2">{props.tag}</span>;
  }
}
export default function ProjectCard(props: IProjectCardProps) {

  return (
      <Card className={props.className}>
        {
          (props.project.link ?
            (<Link onClick={() => console.log('hit')} href={props.project.link} className="group flex justify-between border-b border-transparent hover:border-foreground items-center">
                {/* <div > */}
                  <h3 className="text-2xl">{props.project.name}</h3>
                  <Image className="opacity-50 group-hover:opacity-100 scale-90 group-hover:scale-95 transition-all ease-in-out duration-75 h-8 w-8" src="/link.svg" width={25} height={25} alt={"link"}  />
                {/* </div> */}
            </Link>)
          : (props.project.url == undefined ?
              (<h3 className="text-2xl">{props.project.name}</h3>)
            :
              (<a target="_blank" href={props.project.url} rel="noopener noreferrer">
                <div className="group flex justify-between border-b border-transparent hover:border-foreground">
                  <h3 className="text-2xl">{props.project.name}</h3>
                  <Image className="opacity-50 group-hover:opacity-100 scale-90 group-hover:scale-95 transition-all ease-in-out duration-75" src="/link.svg" width={25} height={25} alt={"link"}  />
                </div>
              </a>)
            )
          )
        }
        <p>{props.project.description}</p>
        <div className="mt-1 flex flex-wrap gap-y-1">
          {/* {props.project.tags.map((tag) => (
            <span className="bg-background text-foreground border border-transparent hover:border-foreground transition-colors rounded-full px-2 py-1 text-sm font-semibold mr-2" key={tag}>{tag}</span>
          ))} */}
          {props.project.tags.map((tag) => <Tag tag={tag} active={props.activeTags?.includes(tag) ? true : false} key={tag}/>)}
        </div>
      </Card>
  );
};
