
import { UIEventHandler } from "react";
import { CursorFollower, CursorLock } from "./components/CursorFollower";
import SideSections, { SectionInfo } from "./major/SideSections";

export default async function Home() {
  const sections: SectionInfo[] = [
    {
      title: "first first"
    },
    {
      title: "second second"
    },
    {
      title: "third third"
    },
    {
      title: "fourth fourth"
    },
    {
      title: "fifth fifth"
    },
    {
      title: "sixth sixth"
    },
    {
      title: "seventh seventh"
    },
    {
      title: "eighth eighth"
    }
  ]

  return (
    <>
      <main className="flex min-h-screen flex-col items-center gap-5 overflow-hidden">
        <SideSections sections={sections} />
      </main >
      <CursorFollower />
    </>
  );
};
