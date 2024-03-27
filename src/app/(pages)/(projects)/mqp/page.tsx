"use client";

// import ResearchCard from "../components/ResearchCard";
import Page from "@/app/components/major/Page";
import ResearchCard from "@/app/components/major/ResearchCard";


export default function MQP() {
  return (
    <Page layout="Main" >
      <div className="max-w-prose mt-5" >
        <ResearchCard
          research={{
            title: "Comparative Study of Relational Databases for CS Courses",
            subTitle: "Major Qualifying Project",
            year: "2022",
            authors: ["Ethan Pollack", "Axel Luca", "Harrison Taylor"],
            abstract: "This comparative study assesses three leading database systems: Oracle, Postgres, and MySQL. The aim of this MQP was to create systematic selection criteria for college instructors to assist them in choosing the most suitable database management system for teaching database courses. As many industries rely on databases, the choice of appropriate database systems for the curriculum is crucial to prepare students for real-world applications. Our methodology included a thorough literature review of each system, practical evaluations via installations on multiple operating systems, and syntactical analyses through hands-on projects. The results show unique features of each system, with implications for how they fit within university curricula, depending on course design and goals.",
            tags: ["Database Systems", "Oracle", "Postgres", "MySQL", "Education"],
            pdf: "/mqp.pdf",
            id: "mqp",
          }} />
      </div>
    </Page>
  );
}