import Link from "next/link";
import Card from "../components/Card";


export default function MQP() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-5">
      <div className=" w-full flex flex-col items-center justify-between  ">
        <h1 className="text-5xl py-2 text-center">Comparative Study of Relational Databases for CS Courses</h1>
        <h2 className="text-lg text-center font-semibold">Major Qualifying Project</h2>
        <div className="group flex flex-row justify-center">
          <h2 className="">by</h2>
          <h2 className="pl-1 group-hover:font-bold">Ethan Pollack</h2>
          <h2 className="">, Axel Luca, and Harrison Taylor</h2>
        </div>
      </div>
      <div className="flex flex-row gap-5 text-xl" >
        <a className="underline-offset-0 hover:underline hover:underline-offset-4 transition-all" href="#abstract">Abstract</a>
        <h1 className="">·</h1>
        <a className="underline-offset-0 hover:underline hover:underline-offset-4 transition-all" href="#report">Report</a>
        <h1 className="">·</h1>
        <Link href="/.">
          <p className="underline-offset-0 hover:underline hover:underline-offset-4 transition-all">Home</p>
        </Link>
      </div>
      <div>
        <h1 className="flex-grow w-full text-2xl text-center" id="abstract">Abstract</h1>
        <p>
          This comparative study assesses three leading database systems: Oracle, Postgres, and MySQL. The aim of this MQP was to create systematic selection criteria for college instructors to assist them in choosing the most suitable database management system for teaching database courses. As many industries rely on databases, the choice of appropriate database systems for the curriculum is crucial to prepare students for real-world applications. Our methodology included a thorough literature review of each system, practical evaluations via installations on multiple operating systems, and syntactical analyses through hands-on projects. The results show unique features of each system, with implications for how they fit within university curricula, depending on course design and goals.
        </p>
      </div>
      {/* <div id="report">
        <h1 className="text-3xl">Report</h1>
        <Card className="flex-grow flex max-w-prose">
          <iframe className="flex-grow aspect-resume" src="/mqp.pdf"/>
        </Card>
      </div> */}

      <div className="flex flex-row flex-wrap w-full justify-evenly gap-2">
        <h1 className="flex-grow w-full text-2xl text-center" id="report">Report</h1>
        <Card className="flex-grow flex">
          <iframe className="flex-grow aspect-a4" src="/mqp.pdf"/>
        </Card>
      </div>
      <div className="flex flex-row flex-wrap w-full justify-evenly gap-2">
        {/* back to main page */}
        <Link href="/">
          <Card>
            <h1 className="flex-grow w-full text-2xl text-center">Return Home</h1>
          </Card>
        </Link>
      </div>
    </main>
  );
}