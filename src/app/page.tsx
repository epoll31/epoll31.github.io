
import { UIEventHandler } from "react";
import { CursorFollower, CursorLock } from "./components/CursorFollower";
import SideSections, { SectionInfo } from "./major/SideSections";

export default async function Home() {
  const sections: SectionInfo[] = [
    {
      title: "first"
    },
    {
      title: "second"
    },
    {
      title: "third"
    },
    {
      title: "fourth"
    },
    {
      title: "fifth"
    },
    {
      title: "sixth"
    },
    {
      title: "seventh"
    },
    {
      title: "eighth"
    },
    {
      title: "ninth"
    },
    {
      title: "tenth"
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
