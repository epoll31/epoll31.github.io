
import { UIEventHandler } from "react";
import { CursorFollower, CursorLock } from "./components/CursorFollower";
import SideSections, { SectionInfo } from "./major/SideSections";
import Link from "next/link";
import Image from "next/image";
import GitHub from "/public/images/github.svg";

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
        <div className="absolute bottom-0 left-0 w-fit h-fit m-10 text-black">
          <h1 className="font-lilita text-8xl">
            Ethan<br></br>Pollack
          </h1>
          <p className="font-k2d text-lg">
            Personal Website made by <span className="font-bold">Ethan Pollack</span>
          </p>
          <p className="font-k2d text-lg">
            Inspiration from
            <CursorLock as="span" className="ml-1" cursorLockedClassName="h-1 w-28 rounded-full bg-foreground translate-y-2">
              <Link href="https://vanholtz.co/" className="hover:font-bold">Van Holtz Co.</Link>
            </CursorLock>
          </p>
        </div>
        <div className="absolute bottom-0 right-0 w-fit h-fit mr-14 mb-10 text-black">
          <CursorLock className="bg-foreground rounded-full w-24 h-24 p-2 flex justify-center items-center" cursorLockedClassName="w-24 h-24 backdrop-invert rounded-full z-10">
            <Link href="https://github.com/epoll31">
              <Image src={GitHub} alt="GitHub" />
            </Link>
          </CursorLock>
        </div>
      </main >
      <CursorFollower />
    </>
  );
};
