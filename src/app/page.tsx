
import { CursorFollower, CursorLock } from "./components/CursorFollower";
import SideSections, { SectionInfo } from "./major/SideSections";
import FrontLayer from "./major/FrontLayer";
import Fade from "./major/Fade";

export default async function Home() {
  const sections: SectionInfo[] = [
    {
      lines: [
        {
          text: "Education",
          size: 1,
        },
        {
          text: "BS in CS",
          size: 2,
        },
      ],
      years: [],
      redirect: "/education",
    },
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


