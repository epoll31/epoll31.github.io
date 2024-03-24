
import { CursorFollower, CursorLock } from "./components/CursorFollower";
import SideSections, { SectionInfo } from "./major/SideSections";
import FrontLayer from "./major/FrontLayer";
import PopUp from "./major/PopUp";

export default async function Home() {
  const sections: SectionInfo[] = [
    {
      lines: [
        {
          text: "WPI",
          size: 1,
        },
        {
          text: "Graduated",
          size: 3,
        },
      ],
      years: ["2023"],
      popUpType: "wpi",
    },
    {
      lines: [
        {
          text: "Research",
          size: 1,
        },
        {
          text: "Project Experience",
          size: 2,
        },
      ],
      years: ["2023", "2022"],
      popUpType: "research",
    },
    {
      lines: [
        {
          text: "Internship",
          size: 1,
        },
        {
          text: "Epic Systems",
          size: 2,
        }
      ],
      years: ["2023", "2022"]
    },
    {
      lines: [
        {
          text: "Work",
          size: 1,
        },
        {
          text: "Experience",
          size: 2,
        }
      ],
      years: [],
    },
    {
      lines: [
        {
          text: "Early",
          size: 1,
        },
        {
          text: "Years",
          size: 2,
        }
      ],
      years: [],
    }
  ]
  // const sections: SectionInfo[] = [
  //   {
  //     lines: [
  //       {
  //         text: "Graduated",
  //         size: 1,
  //       },
  //       {
  //         text: "Worcester Polytechnic Institute",
  //         size: 3,
  //       },
  //     ],
  //     year: "2023"
  //   },
  //   {
  //     lines: [
  //       {
  //         text: "Databases",
  //         size: 1,
  //       },
  //       {
  //         text: "Research Report",
  //         size: 2,
  //       },
  //     ],
  //     year: "2023",
  //   },
  //   {
  //     lines: [
  //       {
  //         text: "Internship",
  //         size: 1,
  //       },
  //       {
  //         text: "at Epic Systems",
  //         size: 2,
  //       }
  //     ],
  //     year: "2023"
  //   },
  //   {
  //     lines: [
  //       {
  //         text: "AR Games",
  //         size: 1,
  //       },
  //       {
  //         text: "Research Report",
  //         size: 2,
  //       }
  //     ],
  //     year: "2022",
  //   },
  //   {
  //     lines: [
  //       {
  //         text: "Build-It-",
  //         size: 1,
  //       },
  //       {
  //         text: "Yourself",
  //         size: 2,
  //       }
  //     ],
  //     year: "2022",
  //   },
  //   {
  //     lines: [
  //       {
  //         text: "Internship",
  //         size: 1,
  //       },
  //       {
  //         text: "at Epic Systems",
  //         size: 2,
  //       }
  //     ],
  //     year: "2022"
  //   },
  //   {
  //     lines: [
  //       {
  //         text: "Great Minds",
  //         size: 1,
  //       },
  //       {
  //         text: "Robotics",
  //         size: 2,
  //       },
  //     ],
  //     year: "2019",
  //   },
  //   {
  //     lines: [
  //       {
  //         text: "Robotics",
  //         size: 1,
  //       },
  //       {
  //         text: "Competitions",
  //         size: 2,
  //       },
  //     ],
  //     year: "2016",
  //   }
  // ]



  return (
    <>
      <main className="relative w-screen h-screen flex flex-col items-center gap-5 overflow-hidden">
        <PopUp outerClassName="bg -opacity-95">
          <p> test</p>
        </PopUp>
        <SideSections sections={sections} />
        <FrontLayer />
      </main >
      <CursorFollower />
    </>
  );
};


