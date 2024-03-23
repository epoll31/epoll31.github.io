
import { UIEventHandler } from "react";
import { CursorFollower, CursorLock } from "./components/CursorFollower";
import SideSections, { SectionInfo } from "./major/SideSections";
import Link from "next/link";
import Image from "next/image";
import GitHub from "/public/images/github.svg";
import LinkedIn from "/public/images/linkedin.svg";

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
        <div className="absolute bottom-0 w-full h-fit px-14 pb-10 gap-5 sm:flex-row overflow-hidden flex flex-row">
          <div className="flex-grow flex-2 self-start flex flex-col text-black">
            <h1 className="font-lilita text-8xl md:text-9xl transition-all duration-150">
              Ethan<br></br>Pollack
            </h1>
            {/* <div className="font-k2d text-lg md:text-2xl transition-all duration-150 flex flex-row flex-wrap"> */}
            <p className="font-k2d text-lg md:text-2xl transition-all duration-150">
              Personal Website made by <span className="font-bold text-nowrap whitespace-nowrap">Ethan Pollack</span>
            </p>
            {/* <p className="">
                @ <Link href="mailto:epollack31@gmail.com" className="font-bold text-nowrap whitespace-nowrap">epollack31@gmail.com</Link>
              </p> */}

            {/* </div> */}
            <p className="font-k2d text-lg">
              Inspiration from
              <CursorLock as="span" className="ml-1" cursorLockedClassName="h-1 w-28 rounded-full bg-foreground translate-y-2">
                <Link href="https://vanholtz.co/" className="hover:font-bold text-nowrap whitespace-nowrap">Van Holtz Co.</Link>
              </CursorLock>
            </p>
          </div>
          <div className=" flex-shrink flex-1 self-end flex flex-wrap gap-5 transition-all duration-150 justify-end items-end">
            <CursorLock className="bg-foreground rounded-full w-20 h-20 p-2 flex justify-center items-center" cursorLockedClassName="w-20 h-20 backdrop-invert rounded-full z-10">
              <Link href="https://github.com/epoll31" className="w-full h-full">
                <Image src={GitHub} alt="GitHub" className="w-full h-full" />
              </Link>
            </CursorLock>
            <CursorLock className="bg-foreground rounded-full w-20 h-20 p-2 flex justify-center items-center" cursorLockedClassName="w-20 h-20 backdrop-invert rounded-full z-10">
              <Link href="https://linkedin.com/in/ethanpollack" className="w-full h-full">
                <Image src={LinkedIn} alt="LinkedIn" className="w-full h-full" />
              </Link>
            </CursorLock>
          </div>
        </div>
        {/* <div className="absolute bottom-0 left-0 w-fit h-fit m-10 text-black">
          <h1 className="font-lilita text-6xl md:text-8xl transition-all duration-150">
            Ethan<br></br>Pollack
          </h1>
          <p className="font-k2d text-lg ">
            Personal Website made by <span className="font-bold">Ethan Pollack</span>
          </p>
          <p className="font-k2d text-lg">
            Inspiration from
            <CursorLock as="span" className="ml-1" cursorLockedClassName="h-1 w-28 rounded-full bg-foreground translate-y-2">
              <Link href="https://vanholtz.co/" className="hover:font-bold">Van Holtz Co.</Link>
            </CursorLock>
          </p>
        </div> */}
        {/* <div className="absolute bottom-0 right-0 w-fit h-fit mr-14 mb-10 gap-5 flex flex-col sm:flex-row overflow-hidden">
          <CursorLock className="bg-foreground rounded-full w-20 h-20 p-2 flex justify-center items-center" cursorLockedClassName="w-20 h-20 backdrop-invert rounded-full z-10">
            <Link href="https://github.com/epoll31" className="w-full h-full">
              <Image src={GitHub} alt="GitHub" className="w-full h-full" />
            </Link>
          </CursorLock>
          <CursorLock className="bg-foreground rounded-full w-20 h-20 p-2 flex justify-center items-center" cursorLockedClassName="w-20 h-20 backdrop-invert rounded-full z-10">
            <Link href="https://linkedin.com/in/ethanpollack" className="w-full h-full">
              <Image src={LinkedIn} alt="LinkedIn" className="w-full h-full" />
            </Link>
          </CursorLock>
        </div> */}
      </main >
      <CursorFollower />
    </>
  );
};
