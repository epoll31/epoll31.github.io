"use client"

import { ChangeEvent, useEffect, useState } from "react";
import ProjectCard, { Project } from "./ProjectCard";
import Image from 'next/image'
import Card from "./Card";


export default function ProjectsSection(props: {projects: Project[]}) {
  const [searchInput, setSearchInput] = useState("")
  const [projects, setProjects] = useState(props.projects);
  const [activeTags, setActiveTags] = useState<string[]>([]);

  function ProjectSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value);
  }

  useEffect(() => {
    if (searchInput == "") {
      setProjects(props.projects);
      setActiveTags([]);
      return;
    }
    let orderBy: {[key: string]: number} = {};
    let activeTags: string[] = [];
    for (let c of projects) {
      let count = 0;
      for (let tag of c.tags) {
        if (tag.toLowerCase().includes(searchInput.toLowerCase())) {
          activeTags.push(tag);
          count++;
        }
      }
      if (count != 0) {
        orderBy[c.name] = count;
      }
      else {
        orderBy[c.name] = -1;
      }
    }
    setActiveTags(activeTags);
    setProjects(projects.sort((a, b) => orderBy[b.name] - orderBy[a.name]));
  }, [searchInput]);

  return (
    <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 w-full p-5 justify-evenly gap-2" id="Projects">
      <div className="col-span-full grid grid-cols-1 grid-rows-1 grid-flow-row">
        <h1 className="row-span-full col-start-1 text-2xl text-center" >Project Experience</h1>
        <div className="row-span-full col-start-1 group flex flex-row justify-end">
          <input  className="bg-transparent text-foreground border-none outline-none transition-colors px-2 py-1 text-sm font-semibold mr-2 text-right" 
                  type="text" 
                  placeholder="Search Tags" 
                  onChange={ProjectSearchChange}
                  id="Project-search-input"/>
          <Image className="scale-90 group-hover:scale-100 transition-all ease-in-out duration-75 w-8 h-8" src="/search.svg" width={30} height={305} alt={"search"}  />
        </div>
      </div>
      {
        projects.length == 0 ? 
          <Card className="col-span-full "><h1 className="text-2xl text-center">No Projects Found</h1></Card> :
          projects.map((c: Project) => <ProjectCard project={c} activeTags={activeTags} className="" key={c.name}/>)
      }
    </div>
  );
}