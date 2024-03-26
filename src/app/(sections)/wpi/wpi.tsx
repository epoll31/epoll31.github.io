"use client";

import { CardBody, CardContainer, CardItem } from "@/app/components/3d-card";
import { CourseType, selectCourseTypes } from "@/lib/features/courseFilters/courseFiltersSlice";
import { useAppSelector } from "@/lib/hooks";
import { HTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

const courses: Course[] = [
    {
        name: "Accelerated Introduction To Program Design",
        description: "This course offers an accelerated introduction to functional programming, covering material equivalent to CS 1101 at twice the pace. It delves into advanced Computer Science topics in the latter half, including application-specific languages, macros, programming with the HTTP protocol, and continuation-passing style. An open-ended individual programming project is required to demonstrate the application of these concepts.",
        tags: [
            "Computer Science",
            "Programming",
            "Functional Programming",
            "Advanced Topics",
            "HTTP Protocol",
            "Project-Based"
        ],
        courseType: "Computer Science"
    },
    {
        name: "Accelerated Object-Oriented Design Concepts",
        description: "This course intensively covers data structures and general program-design material from CS 2102, tailored for students with prior object-oriented programming experience. It dives deeply into object-oriented design principles and data structures at a faster pace than CS 2102. Students will engage in designing, implementing, testing, debugging, and critiquing programs, focusing on correctness and adherence to object-oriented design principles. The course aims to enhance the design skills and algorithmic thinking of students well-versed in object-oriented programming.",
        tags: [
            "Computer Science",
            "Object-Oriented Programming",
            "Data Structures",
            "Advanced Design",
            "Algorithmic Thinking",
            "Program Design"
        ],
        courseType: "Computer Science"
    },
    {
        name: "Systems Programming Concepts",
        description: "This course introduces systems programming as a paradigm, focusing on the interaction between software and hardware. Students learn about manual memory management, pointers, the machine stack, and input/output mechanisms through advanced programming exercises. It builds upon the design concepts from CS 2102, confronting issues of safe programming with system-level constructs, and emphasizes the use of tools for programming assistance. Students will undertake significant programming in C++ and C, incorporating concepts from CS 2301 at an accelerated pace, alongside additional advanced topics in systems programming.",
        tags: [
            "Computer Science",
            "Systems Programming",
            "C++",
            "Hardware Interaction",
            "Memory Management",
            "Advanced Programming"
        ],
        courseType: "Computer Science"
    },
    {
        name: "Algorithms",
        description: "This course delves into algorithm design and analysis, emphasizing both worst-case and average-case scenarios across various computational models. Students will explore a range of topics including greedy algorithms, divide-and-conquer strategies, dynamic programming, heuristics, and probabilistic algorithms with applications in sorting, graph theory, and string processing. The course aims to cultivate an understanding of algorithmic efficiency and problem-solving in computational tasks, requiring students to analyze and assess different algorithms critically.",
        tags: [
            "Computer Science",
            "Algorithms",
            "Algorithm Design",
            "Algorithm Analysis",
            "Data Structures",
            "Problem Solving"
        ],
        courseType: "Computer Science"
    },
    {
        name: "Discrete Mathematics",
        description: "This introductory course bridges computer science and mathematics, focusing on vital concepts, techniques, and structures in discrete mathematics. Topics include sets, functions, relations, propositional and predicate calculus, mathematical induction, properties of integers, counting techniques, and graph theory. Students will engage in developing proofs for problems predominantly in computer science and applied mathematics, gaining a foundational understanding of mathematical reasoning and discrete structures.",
        tags: [
            "Discrete Mathematics",
            "Computer Science",
            "Mathematical Induction",
            "Graph Theory",
            "Propositional Calculus",
            "Counting Techniques"
        ],
        courseType: "Mathematics"
    },
    {
        name: "Introduction To Machine Organization And Assembly Language",
        description: "This course offers a comprehensive introduction to the structure and behavior of modern digital computers and how they execute programs. Students will explore the Von Neumann model, computer hardware organization, memory hierarchy, caching, pipelining, and the performance implications of each. The course covers assembly language topics including number representations, instruction sets, addressing modes, as well as the utility and function of compilers, assemblers, linkers, and loaders. Practical programming projects are conducted in C and a modern processor's assembly language, illustrating the mapping of higher-level language code and data structures to machine-level representations.",
        tags: [
            "Computer Science",
            "Machine Organization",
            "Assembly Language",
            "Hardware",
            "Programming",
            "Computer Architecture"
        ],
        courseType: "Computer Science"
    },
    {
        name: "The Game Development Process",
        description: "This course explores the multifaceted process of game development, highlighting the collaborative nature between technical and artistic domains. It delves into the roles of different participants in the development process, emphasizing how technical and artistic development proceed concurrently. Group work and the synergy between technical prowess and artistic vision are core themes. Students will actively engage in game development projects using appropriate tools, gaining hands-on experience in the iterative and interdisciplinary nature of creating games.",
        tags: [
            "Game Development",
            "Collaboration",
            "Technical Development",
            "Artistic Development",
            "Group Work",
            "Game Design"
        ],
        courseType: "Computer Science"
    },
    {
        name: "Data Science I: Introduction To Data Science",
        description: "This course is an introduction to the foundational concepts of Data Science, covering a broad spectrum of methodologies for handling, analyzing, and making informed decisions based on real-world data. Key topics include basic statistics, data exploration, data cleaning, data visualization, business intelligence, and data analysis. Students will engage with various tools and techniques to explore, comprehend, and visualize data sets from diverse domains. The course emphasizes practical application and communication of results to stakeholders, providing students with the skills to interpret and convey data-driven insights effectively.",
        tags: [
            "Data Science",
            "Statistics",
            "Data Visualization",
            "Business Intelligence",
            "Data Analysis",
            "Real-world Data"
        ],
        courseType: "Computer Science"
    },
    {
        name: "Operating Systems",
        description: "This course imparts a comprehensive understanding of the essential components and functions of general-purpose operating systems. Key topics include processes and process management, synchronization, input/output devices and their programming, interrupts, memory management, resource allocation, and an introduction to file systems. A significant aspect of the course involves designing and implementing a large piece of system software using the C programming language, providing students with practical, hands-on experience in operating system development.",
        tags: [
            "Operating Systems",
            "System Software",
            "Process Management",
            "Memory Management",
            "C Programming",
            "Resource Allocation"
        ],
        courseType: "Computer Science"
    },
    {
        name: "Software Engineering",
        description: "This course introduces students to the fundamental principles and practices of software engineering. It focuses on modern software development methodologies and life cycles, with topics including requirements analysis, specification, design, architecture, implementation, testing, quality assurance, configuration management, and project management. Students will engage in a project that incorporates these various aspects, gaining practical experience in the systematic and disciplined approach to developing software. This course lays the groundwork for advanced programming projects and is vital for those looking to specialize in software development.",
        tags: [
            "Software Engineering",
            "Project Management",
            "Quality Assurance",
            "System Design",
            "Configuration Management",
            "Software Development"
        ],
        courseType: "Computer Science"
    },
    {
        name: "Data Science II: Modeling And Data Analysis",
        description: "Building on foundational Data Science knowledge, this course emphasizes model- and data-driven techniques for detailed analysis and prediction using real-world data sets. Students will delve into applied statistics with a focus on regression, utilize optimization and machine learning methods for classification and clustering, and explore eigenvalues and singular matrices. The course also revisits the essentials of data exploration, cleaning, visualization, and business intelligence. Practical application using various tools and techniques is central to the course, enhancing students' ability to analyze and interpret complex data effectively.",
        tags: [
            "Data Science",
            "Modeling",
            "Data Analysis",
            "Machine Learning",
            "Statistics",
            "Real-world Data"
        ],
        courseType: "Computer Science"
    },
    {
        name: "Graphic Design",
        description: "This course is an introduction to the principles and practices of graphic design, focusing on crafting effective visual communications. Students will learn foundational concepts of visual communication, engaging in projects that require analyzing, organizing, and solving design problems. The curriculum covers a range of topics including the design process, figure/ground relationships, shape, dynamic balance, Gestalt principles, typography, layout and composition, color theory, and the nuances of digital production and presentation. The course aims to equip students with the skills to create thoughtful and compelling graphic designs.",
        tags: [
            "Graphic Design",
            "Visual Communication",
            "Typography",
            "Layout",
            "Color Theory",
            "Digital Production"
        ],
        courseType: "Design"
    },
    {
        name: "Human-Computer Interaction",
        description: "This course imparts an understanding of the critical aspects of human-computer interaction, focusing on enhancing the efficiency and effectiveness of user interaction with computer-based systems. It encompasses the design and evaluation of interactive systems, incorporating basic psychological principles of interaction, language, hardware design, and innovative input/output techniques. Through several projects, students will engage in activities such as software evaluation, interface development, or conducting experiments to deepen their understanding of how users interact with technology and how to improve these interactions.",
        tags: [
            "Human-Computer Interaction",
            "Interface Design",
            "User Experience",
            "Interactive Systems",
            "Psychology of Interaction",
            "Technology Design"
        ],
        courseType: "Design"
    },
    {
        name: "Database Systems I",
        description: "This course offers an introduction to database management systems, emphasizing the design, use, and application of these systems. Students will explore the relational data model, relational query languages, and design theory, with a focus on conceptual data design and modeling for relational databases. The course discusses techniques to achieve data independence and minimize redundancy. A practical component involves students designing and implementing database applications, providing hands-on experience with database technologies and best practices.",
        tags: [
            "Database Systems",
            "Relational Databases",
            "Data Modeling",
            "Query Languages",
            "System Design",
            "Database Applications"
        ],
        courseType: "Computer Science"
    },
    {
        name: "Techniques Of Programming Language Translation",
        description: "This course delves into the compilation process for high-level programming languages, covering essential aspects of compiler construction. Students will learn about lexical analysis, syntax analysis, semantic analysis, symbol tables, intermediate languages, optimization, code generation, and run-time systems. The practical component involves using compiler tools to implement the front end and programming a back end for a compiler of a recursive programming language. This course provides a thorough understanding of the translation techniques from source code to executable programs, emphasizing both theoretical concepts and their application in real-world compiler design.",
        tags: [
            "Compilers",
            "Programming Languages",
            "Lexical Analysis",
            "Syntax Analysis",
            "Code Generation",
            "Compiler Construction"
        ],
        courseType: "Computer Science"
    },
    {
        name: "Database Systems II",
        description: "This advanced course delves deeper into the internals of database management systems, exploring both the theoretical and practical aspects of database technologies. Key topics include physical storage management, advanced query languages, query processing and optimization, index structures, transaction processing, concurrency control, distributed databases, database recovery, and security aspects. Students will engage with the design and implementation of software components critical to modern database systems, gaining in-depth knowledge of the underlying principles and real-world applications of databases.",
        tags: [
            "Advanced Databases",
            "Query Optimization",
            "Transaction Processing",
            "Database Internals",
            "Concurrency Control",
            "Distributed Databases"
        ],
        courseType: "Computer Science"
    },
    {
        name: "Mobile And Ubiquitous Computing",
        description: "This course offers an in-depth exploration into mobile and ubiquitous computing, merging fundamental concepts with cutting-edge research. Topics encompass mobile systems, human activity and emotion sensing, location sensing, mobile human-computer interaction, mobile social networking, mobile health, power saving techniques, performance measurement, and security in mobile environments. Students will engage with advanced literature, participate in discussions, and undertake a term project focusing on implementing research ideas on mobile devices like smartphones, gaining both theoretical insight and practical experience in the burgeoning field of mobile computing.",
        tags: [
            "Mobile Computing",
            "Ubiquitous Computing",
            "Human-Computer Interaction",
            "Mobile Security",
            "Sensor Technology",
            "Mobile Health"
        ],
        courseType: "Design"
    },
    {
        name: "Programming Language Design",
        description: "This course delves into the fundamental concepts and principles that underlie the design of modern programming languages and computational models. It covers a range of topics including control and data abstractions, language processing, binding techniques, indeterminacy, delayed evaluation, and parallel and distributed processing languages. Students will explore various computational paradigms such as functional programming, logic programming, object-oriented programming, and data flow programming. The course aims to broaden understanding of how different programming languages are designed, their characteristics, and their impact on software development.",
        tags: [
            "Programming Languages",
            "Language Design",
            "Computational Paradigms",
            "Functional Programming",
            "Object-Oriented Programming",
            "Logic Programming"
        ],
        courseType: "Computer Science"
    },
    {
        name: "Introduction To Static Systems",
        description: "This introductory course in engineering mechanics is foundational for subsequent courses in mechanical engineering. It covers the analysis of two- and three-dimensional force and couple systems, distributed loads, and the equilibrium of particles and rigid bodies. Key topics include free body diagrams, friction, trusses, shear forces, bending moments in beams, and the moments of plane areas. The course provides essential skills in statics, preparing students for more advanced studies in mechanical behaviors and systems, with an emphasis on applying differential and integral calculus, vector algebra, and multiple integration concepts from mathematics.",
        tags: [
            "Statics",
            "Engineering Mechanics",
            "Mechanical Engineering",
            "Force Systems",
            "Equilibrium",
            "Structural Analysis"
        ],
        courseType: "Engineering"
    },
    {
        name: "Introduction To Robotics",
        description: "This multidisciplinary course offers an introduction to robotics, integrating principles from electrical engineering, mechanical engineering, and computer science. Key topics include sensor integration, actuators, power transmission, materials and static force analysis, control systems, and programmable embedded systems. Students will engage in hands-on laboratory sessions and team projects, focusing on the design and construction of mobile robots. The course provides a broad overview of robotic applications and systems, emphasizing practical skills and interdisciplinary collaboration.",
        tags: [
            "Robotics",
            "Engineering",
            "Sensor Integration",
            "Embedded Systems",
            "Mobile Robots",
            "System Design"
        ],
        courseType: "Engineering"
    },
    {
        name: "Ordinary Differential Equations",
        description: "This course is dedicated to developing techniques for solving ordinary differential equations (ODEs), fundamental tools in mathematical modeling and analysis. It covers first-order differential equations for modeling, linear higher-order equations, the qualitative behavior of nonlinear first-order equations, and oscillatory phenomena including spring-mass systems and RLC circuits. The course also introduces the Laplace transform and may include additional topics like power series methods, solving systems of equations, and numerical methods. The curriculum is designed to enhance students' mathematical toolkit for applications in engineering, physics, and beyond.",
        tags: [
            "Differential Equations",
            "Mathematical Modeling",
            "Laplace Transform",
            "Numerical Methods",
            "Oscillatory Systems",
            "RLC Circuits"
        ],
        courseType: "Mathematics"
    },
    {
        name: "Calculus IV",
        description: "Calculus IV provides a comprehensive introduction to multivariable calculus. This course extends the concepts of single-variable calculus into higher dimensions, covering vector functions, partial derivatives, gradients, and multivariable optimization. Students will also learn about double and triple integrals, polar coordinates, and other coordinate systems, with a focus on their applications in various fields. Although the course involves computational tools, no prior programming experience is assumed, making it accessible to students with a solid foundation in single-variable calculus.",
        tags: [
            "Multivariable Calculus",
            "Partial Derivatives",
            "Vector Functions",
            "Optimization",
            "Integrals",
            "Coordinate Systems"
        ],
        courseType: "Mathematics"
    },
    {
        name: "Essentials Of Art",
        description: "The Essentials Of Art course introduces students to the fundamental principles of visual organization in both two and three dimensions. It emphasizes graphic expression, idea development, and visual literacy. Through the curriculum, students will develop mastery in various artistic techniques, including basic rendering skills, perspective drawing, concept art, and storyboarding. The course incorporates both traditional methods and computer-based tools, providing a comprehensive foundation in artistic expression and design.",
        tags: [
            "Visual Arts",
            "Graphic Expression",
            "Idea Development",
            "Visual Literacy",
            "Storyboarding",
            "Concept Art"
        ],
        courseType: "Design"
    },
    {
        name: "Digital Imaging And Computer Art",
        description: "Digital Imaging and Computer Art delves into the techniques and processes of creating and manipulating images using electronic and digital means. The course is designed to foster an understanding of image alteration, encompassing aspects of color theory, displays, modeling, shading, and visual perception. Students will engage with various digital tools and methodologies to produce and manipulate artwork, gaining skills applicable in various digital art and design contexts. The course is ideal for those interested in the technical and artistic aspects of digital imagery.",
        tags: [
            "Digital Imaging",
            "Computer Art",
            "Image Manipulation",
            "Color Theory",
            "Visual Perception",
            "Digital Design"
        ],
        courseType: "Design"
    },
    {
        name: "General Physics-Mechanics",
        description: "General Physics-Mechanics is an introductory course focusing on Newtonian mechanics. It covers foundational aspects of motion including kinematics, vectors, Newton’s laws of motion, friction, work, energy, and impulse-momentum concepts, applicable to both translational and rotational dynamics. The course is designed to provide a comprehensive understanding of the basic principles of mechanics, essential for further studies in physics and engineering. It is recommended that students concurrently study basic calculus to grasp the mathematical underpinnings of the concepts discussed.",
        tags: [
            "Newtonian Mechanics",
            "Kinematics",
            "Dynamics",
            "Energy",
            "Momentum",
            "Physics Fundamentals"
        ],
        courseType: "Engineering"
    },
    {
        name: "Science, Engineering And Design In International Development",
        description: "This course equips students with skills to tackle complex problems and design challenges in development engineering. It emphasizes innovation, creativity, and collaboration in international development contexts. Through design projects and case studies, often related to ongoing projects at WPI, students learn to define problems using preliminary data, conduct interviews, and gather survey data to understand user needs. The course teaches a variety of analytical tools for data analysis, ideation, prototyping, and planning for rapid improvement, scaling, and continuous refinement. Students will also learn to develop strategies for rigorous impact evaluation.",
        tags: [
            "International Development",
            "Innovation",
            "Design Thinking",
            "Collaboration",
            "User-Centered Design",
            "Problem Solving"
        ],
        courseType: "Engineering"
    },
    {
        name: "Special Topics In Psychological Science",
        description: "Special Topics in Psychological Science offers students the opportunity to explore a specific area within the field of psychology. Designed for students with little to no background in psychological science, the course provides an in-depth look at a rotating selection of topics, allowing students to delve into areas of interest or emerging fields within psychology. The flexible nature of the course means that content may vary each term, covering different themes or issues, and it may be repeated for credit when different topics are offered.",
        tags: [
            "Psychological Science",
            "Special Topics",
            "Emerging Fields",
            "Flexible Learning",
            "In-depth Study"
        ],
        courseType: "Humanities"
    }
];

interface Course {
    name: string,
    description: string,
    tags: string[],
    courseType: CourseType,
}

function CourseCard({
    course,
    ...props
}: {
    course: Course
} & HTMLAttributes<HTMLDivElement>) {

    const [minimized, setMinimized] = useState(false);

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
                {
                    minimized ? <></> :
                        <>
                            <p className=" text-justify">{course.description}</p>
                            <CardItem className={`w-full flex flex-row flex-wrap gap-2 justify-around`}
                                translateZ={400}
                            >
                                {
                                    course.tags.map((tag, i) => {
                                        return (
                                            <p key={i} className="rounded-full px-3 bg-foreground-100 text-black ">{tag}</p>
                                        );
                                    })
                                }
                            </CardItem>
                        </>
                }
            </CardBody>
        </CardContainer>
    );
}

export default function WPI() {
    const toggled = useAppSelector(selectCourseTypes);

    return (
        <>
            <div className="w-full h-fit text-black flex flex-col items-center">
                <div className="w-fit h-fit max-w-prose min-w-96 pb-10">
                    <div className="m-10 w-fit flex-shrink">
                        <h1 className="font-lilita text-6xl">Education</h1>
                        <div className="w-full flex flex-row gap-10">
                            <p>Worcester Polytechnic Institute</p>
                            <p>B.S. in Computer Science</p>
                        </div>
                    </div>
                    <div className="flex-grow flex flex-row justify-around m-5 gap-5 md:m-10 md:gap-10">
                        <div className="flex-1 font-k2d flex flex-col text-wrap gap-3">
                            <p>
                                I recieved my Bachelor's Degree in Computer Science from Worcester Polytechnic Institute in December 2023.
                            </p>
                            <p>
                                WPI is uses a project based teaching style where students learn by doing. This has prepared me not only for
                                the technical aspects of software development, but also for the soft skills needed to work in a team and
                                communicate. I have worked on projects ranging from creating an augmented reality game to teach children about
                                the nitrogen cycle to comparing the MySQL, Oracle, and Postgres databases for pedagogical purposes.
                            </p>
                            <p>
                                Check out some of the courses that I have taken below, and feel free to reach out if you would like to learn more about me or my work.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        {
                            courses.filter(course => toggled.length === 0 || toggled.includes(course.courseType)).map((course, i) => {
                                return (
                                    <CourseCard key={i} course={course} />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}