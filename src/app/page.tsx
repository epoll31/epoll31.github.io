// "use client"

import Card from "./components/Card";
import { promises as fs } from "fs";
import ProjectCard, { Project } from "./components/ProjectCard";
import CoursesSection from "./components/CoursesSection";
import ProjectsSection from "./components/ProjectsSection";
import PDFViewer from "./components/PDFViewer";


export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8');
  const data = JSON.parse(file);
  const projects = data.projects;
  const courses = data.courses;

  return (
    <main className="flex min-h-screen flex-col items-center py-12 md:p-24 gap-5 ">
      <div className=" w-full flex flex-col items-center justify-between " id="title">
        <h1 className="text-5xl py-2">Ethan Pollack</h1>
        <h2 className="text-l">Software Developer · Designer · Etc.</h2>
      </div>

      <div className="flex flex-row gap-5 text-xl" >
        <a className="underline-offset-0 hover:underline hover:underline-offset-4 transition-all" href="#resume">Resume</a>
        <h1 className="">·</h1>
        <a className="underline-offset-0 hover:underline hover:underline-offset-4 transition-all" href="#projects">Projects</a>
        <h1 className="">·</h1>
        <a className="underline-offset-0 hover:underline hover:underline-offset-4 transition-all" href="#courses">Courses</a>
        <h1 className="">·</h1>
        <a className="underline-offset-0 hover:underline hover:underline-offset-4 transition-all" href="./tutor">Tutoring</a>
      </div>

      <ProjectsSection projects={projects} />
      <CoursesSection courses={courses} />
      <div className="flex flex-row flex-wrap w-full  p-5 justify-evenly gap-2">
        <h1 className="flex-grow w-full text-2xl text-center" id="resume">Resume</h1>
        <PDFViewer src="/resume.pdf" name="my resume" />
        {/* <Card className="flex-grow flex max-w-prose">
          <object data="/resume.pdf" type="application/pdf" width="100%" className="aspect-resume w-full flex-grow flex items-center text-center">
            <p className="w-full">Your web browser doesn't support PDFs. <br/>Please <a className=" underline" href="/resume.pdf">click here to download my resume</a>.</p>
          </object>
        </Card> */}
      </div>

      <div className="flex flex-row flex-wrap w-full justify-evenly gap-2">
        <a href="#title">
          <Card>
            <h1 className="flex-grow w-full text-2xl text-center">Return To Top</h1>
          </Card>
        </a>
      </div>
    </main>
  );
};
