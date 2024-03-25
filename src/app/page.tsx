
import { CursorFollower, CursorLock } from "./components/CursorFollower";
import SideSections, { SectionInfo } from "./major/SideSections";
import FrontLayer from "./major/FrontLayer";
import Fade from "./major/Fade";

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
      redirect: "/wpi",
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
      redirect: "/research",
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
      years: ["2023", "2022"],
      redirect: "/internships",
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
      redirect: "/work",
    },
    {
      lines: [
        {
          text: "Tutor",
          size: 1,
        },
        {
          text: "Sign Up Now",
          size: 2,
        }
      ],
      years: ["2024"],
      redirect: "./tutor",
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
      redirect: "./early",
    }
  ]

  return (
    <>
      <main className="relative w-screen h-screen flex flex-col items-center gap-5 overflow-hidden bg-background">
        <Fade />
        <SideSections sections={sections} />
        <FrontLayer />
      </main >
      <CursorFollower />
    </>
  );
};


