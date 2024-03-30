
import { CursorFollower, CursorLock } from "@/app/components/CursorFollower";
import SideSections, { SectionInfo } from "@/app/components/major/SideSections";
import FrontLayer from "@/app/components/major/FrontLayer";
import Fade from "@/app/components/major/Fade";

export default async function Home() {
  const sections: SectionInfo[] = [
    {
      lines: [
        {
          text: "Work",//TODO: ask about "Working"
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
          text: "Projects",
          size: 1,
        },
        {
          text: "Github",
          size: 2,
        }
      ],
      years: [],
      redirect: "https://github.com/epoll31",
    },
    {
      lines: [
        {
          text: "Education",
          size: 1,
        },
        {
          text: "BSCS from WPI",
          size: 2,
        },
      ],
      years: [],
      redirect: "/education",
    },
    {
      lines: [
        {
          text: "Early Years",
          size: 1,
        },
        {
          text: "Robotics | CS | Competitions",
          size: 3,
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


