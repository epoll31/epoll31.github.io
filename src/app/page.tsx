// "use client"

import Card from "./components/Card";
import { promises as fs } from "fs";
import ProjectCard, { Project } from "./components/ProjectCard";
import CoursesSection from "./components/CoursesSection";
import ProjectsSection from "./components/ProjectsSection";


export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8');
  const data = JSON.parse(file);
  const projects = data.projects;
  const courses = data.courses;

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-5">
      <div className=" w-full flex flex-col items-center justify-between  ">
        <h1 className="text-5xl py-2">Ethan Pollack</h1>
        <h2 className="text-l">Software Developer · Designer · Etc.</h2>
      </div>
      
      <div className="flex flex-row gap-5 text-xl" >
        <a className="underline-offset-0 hover:underline hover:underline-offset-4 transition-all" href="#projects">Projects</a>
        <h1 className="">·</h1>
        <a className="underline-offset-0 hover:underline hover:underline-offset-4 transition-all" href="#courses">Courses</a>
        <h1 className="">·</h1>
        <a className="underline-offset-0 hover:underline hover:underline-offset-4 transition-all" href="#resume">Resume</a>
      </div>

      <ProjectsSection projects={projects}/>
      <CoursesSection courses={courses}/>
      <div className="flex flex-row flex-wrap w-full  p-5 justify-evenly gap-2">
        <h1 className="flex-grow w-full text-2xl text-center" id="resume">Resume</h1>
        <Card className="flex-grow flex max-w-prose">
          <iframe className="flex-grow aspect-resume" src="/resume.pdf"/>
        </Card>
      </div>
    </main>
  );
};
