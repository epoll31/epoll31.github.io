"use client";

import { CardBody, CardContainer, CardItem } from "@/app/components/3d-card";
import { CursorLock } from "@/app/components/CursorFollower";
import CustomButton from "@/app/components/CustomButton/CustomButton";
import useMediaSizes, { mdOrLarger } from "@/app/utils/useMediaSizes";
import { HTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

interface Research {
    title: string,
    subTitle: string,
    year: string,
    authors: string[],
    abstract: string,
    tags: string[],
    pdf: string,
    id: string
}

const research: Research[] = [
    {
        title: "Nitrogen Cycle Public Outreach and Game Development",
        subTitle: "Interactive Qualifying Project",
        year: "2022",
        authors: ["Ethan Pollack", "Philip Bui", "Charles Anderson", "Hasan Gandor", "Vien Le"],
        abstract: "The natural nitrogen cycle (NNC) is an important part of the world's overall ecosystem. It is integral to all life, especially human life. The nitrogen cycle is a process that can easily go out of balance through human development. Some of the ways humans unintentionally affect the natural nitrogen cycle is through the agriculture industry and waste disposal systems. The agriculture industry is the largest factor of human incursion in the nitrogen cycle. It has gotten to a point where there is arguably a man-made nitrogen cycle that exists within the agriculture industry. Both the natural and man-made cycle influence each other. Sustaining both the natural cycle and the artificial one is key if the agriculture industry expects it to be at equal or greater levels of production as to what it is currently. This environmental relationship can almost be thought of as a resource balancing game, or an optimization game. The word “game” used here is not meant to diminish the severity of such ecological systems but meant to embody the creation of an imaginary model which can give us differing outcomes based on input. In current culture, games are a common form of entertainment in today’s world and one of the most ancient types of activity. However, with the advent of computers, games are now often said to have taken a new “dimension” of possibilities. This is embodied in the medium of video games and has been taken further with the recent technology of augmented reality (AR) and virtual reality (VR). Video games are a very recent medium with their origins going back to the 1950’s with Tennis for Two, and only in the past couple decades where they considered to have their own merit as tools for education. Virtual reality, the ancestor of augmented reality, is also relatively new, having its modern iteration first shown in the 1960’s with the Telesphere Mask. By combining the capabilities of AR/VR and video games, educators now have a wide range of possibilities for all sorts of education in a variety of fields. STEM education particularly due to the very hands-on and model driven nature of the subject. The goal of this project is to collaborate with educators and students to make an augmented reality game that aims to teach students about the nitrogen cycle and the greater social implications of human development in it.",
        tags: ["AR.js", "React.js", "Nitrogen Cycle", "Education", "Game Development"],
        pdf: "/iqp.pdf",
        id: "iqp"
    },
    {
        title: "Comparative Study of Relational Databases for CS Courses",
        subTitle: "Major Qualifying Project",
        year: "2023",
        authors: ["Ethan Pollack", "Azel Luca", "Harrison Taylor"],
        abstract: "This comparative study assesses three leading database systems: Oracle, Postgres, and MySQL. The aim of this MQP was to create systematic selection criteria for college instructors to assist them in choosing the most suitable database management system for teaching database courses. As many industries rely on databases, the choice of appropriate database systems for the curriculum is crucial to prepare students for real-world applications. Our methodology included a thorough literature review of each system, practical evaluations via installations on multiple operating systems, and syntactical analyses through hands-on projects. The results show unique features of each system, with implications for how they fit within university curricula, depending on course design and goals.        ",
        tags: ["Oracle", "Postgres", "MySQL", "Database Systems", "Database Management", "CS Education"],
        pdf: "/mqp.pdf",
        id: "mqp"
    }
];

function ResearchCard({
    research,
    ...props
}: {
    research: Research
} & HTMLAttributes<HTMLDivElement>) {

    const mediaSize = useMediaSizes();
    const [minimized, setMinimized] = useState(mdOrLarger(mediaSize));
    const [showPDF, setShowPDF] = useState(false);

    const handleMinimized = () => {
        setMinimized(!minimized);
    };

    return (
        <CardContainer containerClassName="p-0"
            className={twMerge(props.className, `relative w-full mx-5 p-5 bg-foreground font-k2d text-black rounded-lg drop-shadow-lg`)}
            damping={showPDF ? {
                x: 100,
                y: 150
            } : 25}
            id={research.id}
            {...props}>
            <CardBody className="flex flex-col gap-2 w-full h-min overflow-x-hidden">
                <button className="control flex flex-row w-full gap-1"
                    onClick={handleMinimized}
                >
                    <CardItem as="h1" className="text-left flex-grow font-bold text-2xl" translateZ={300}>
                        {research.title}
                    </CardItem>
                    <span className={`relative minmax ${minimized ? '' : 'up'} flex-shrink w-8 h-8 z-50 aspect-square`}
                    >
                        <span className="bg-background absolute rounded-full"></span>
                        <span className="bg-background absolute rounded-full"></span>
                    </span>
                </button>
                <h2 className="text-left text-lg">
                    {research.subTitle} - {research.year}
                </h2>
                {
                    minimized ? <></> :
                        <>
                            <p className=" text-justify line-clamp-6">{research.abstract}</p>
                            <CardItem className={`w-full flex flex-row flex-wrap gap-2 justify-around`}
                                translateZ={400}
                            >
                                {
                                    research.tags.map((tag, i) => {
                                        return (
                                            <p key={i} className="rounded-full px-3 bg-foreground-100 text-black ">{tag}</p>
                                        );
                                    })
                                }
                            </CardItem>
                            <CursorLock as="button"
                                className="underline"
                                cursorLockedClassName="w-32 h-7 backdrop-invert rounded-full z-40"
                                onClick={() => setShowPDF(!showPDF)}
                            >
                                {showPDF ? "Hide PDF" : "Show PDF"}
                            </CursorLock>
                            {
                                !showPDF ? <></> : (
                                    // <iframe src={research.pdf} className="w-full aspect-a4" />
                                    <object data={research.pdf} type="application/pdf" width="100%" className={`${navigator.pdfViewerEnabled ? "aspect-a4" : "h-fit"} w-full flex items-center text-center`}>
                                        <p className="w-full">Your web browser doesn't support PDFs. <br />Please <a className="underline" href={research.pdf}>click here to download the file</a>.</p>
                                    </object>
                                )
                            }
                        </>
                }
            </CardBody>
        </CardContainer>
    );
}

export default function Research() {
    return (
        <>
            <div className="w-full h-full text-black overflow-y-auto overflow-x-auto flex flex-col items-center">
                <div className="w-fit h-fit max-w-prose min-w-96 pb-10">
                    <div className="m-10 w-fit flex-shrink">
                        <h1 className="font-lilita text-6xl">Research Experience</h1>
                        <div className="w-full flex flex-row gap-10">
                            <p>IQP 2022</p>
                            <p>MQP 2023</p>
                        </div>
                    </div>
                    <div className="flex-grow flex flex-row justify-around m-5 gap-5 md:m-10 md:gap-10">
                        <div className="flex-1 font-k2d flex flex-col text-wrap gap-3">
                            <p>
                                During my time at WPI, I participated in many projects, including two major research projects, the Interactive Qualifying Project (IQP)
                                and the Major Qualifying Project (MQP).
                            </p>
                            <p>
                                The IQP is a research project that emphasizes the importance of learning to work with people of different interests, experiences, and
                                backgrounds. In this project, groups are formed from a variety of majors to work on a single project that is meant to benefit society
                                in some way. For my project, my team decided to research the Nitrogen Life Cycle and create a game using AR.js and React.js to teach
                                children as a local Boy's and Girl's Club about the importance of nitrogen in our environment. As the lead developer, I was responsible
                                for creating the game and ensuring that it was both educational and fun for children to play.
                            </p>
                            <p>
                                Conversely, the MQP is a research project that encourages students of the same major to dive deep into a specific topic of their choosing.
                                For my project, my team decided to research the differences between the MySQL, Oracle, and Postgres databases. Specifically, we wanted to
                                figure out which database would be best for pedagogical purposes for future coputer science classes at WPI. We used a variety of tools
                                including various SQL languages, Python, Java, and C++ to fully get a grasp of the differences, both positive and negative, between the
                                three databases.
                            </p>
                            <p>
                                Both projects were extremely rewarding and taught me a lot about the research process and how to work with a team to accomplish a common
                                goal. I am very proud of the work that my teams and I accomplished and am excited for the opportunity to continue working on research
                                projects in the future.
                            </p>
                            <p>
                                Below you can find more information about the research projects that I have worked on. I am happy to answer any questions that you may
                                have about the projects and am excited to discuss the work that I have done. Please feel free to reach out to me if you have any questions.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        {
                            research.map((research, i) => {
                                return (
                                    <ResearchCard key={i} research={research} />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <CustomButton />
        </>
    );
}