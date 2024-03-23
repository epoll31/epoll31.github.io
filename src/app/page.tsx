
import { CursorFollower, CursorLock } from "./components/CursorFollower";
import SideSections, { SectionInfo } from "./major/SideSections";
import FrontLayer from "./major/FrontLayer";

export default async function Home() {
  const sections: SectionInfo[] = [
    {
      lines: [
        {
          text: "Graduated",
          size: 1,
        },
        {
          text: "Worcester Polytechnic Institute",
          size: 3,
        },
      ],
      year: "2023"
    },
    {
      lines: [
        {
          text: "Databases",
          size: 1,
        },
        {
          text: "Research Report",
          size: 2,
        },
      ],
      year: "2023",
    },
    {
      lines: [
        {
          text: "Internship",
          size: 1,
        },
        {
          text: "at Epic Systems",
          size: 2,
        }
      ],
      year: "2023"
    },
    {
      lines: [
        {
          text: "AR Games",
          size: 1,
        },
        {
          text: "Research Report",
          size: 2,
        }
      ],
      year: "2022",
    },
    {
      lines: [
        {
          text: "Build-It-",
          size: 1,
        },
        {
          text: "Yourself",
          size: 2,
        }
      ],
      year: "2022",
    },
    {
      lines: [
        {
          text: "Internship",
          size: 1,
        },
        {
          text: "at Epic Systems",
          size: 2,
        }
      ],
      year: "2022"
    },
    {
      lines: [
        {
          text: "Great Minds",
          size: 1,
        },
        {
          text: "Robotics",
          size: 2,
        },
      ],
      year: "2019",
    },
    {
      lines: [
        {
          text: "Robotics",
          size: 1,
        },
        {
          text: "Competitions",
          size: 2,
        },
      ],
      year: "2016",
    }
  ]

  return (
    <>
      <main className="relative w-screen h-screen flex flex-col items-center gap-5 overflow-hidden">
        <SideSections sections={sections} />
        <FrontLayer />
      </main >
      <CursorFollower />
    </>
  );
};


