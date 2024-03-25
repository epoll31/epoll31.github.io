
import { CursorFollower, CursorLock } from "@/app/components/CursorFollower";
import SideSections, { SectionInfo } from "@/app/major/SideSections";
import FrontLayer from "@/app/major/FrontLayer";
import Fade from "@/app/major/Fade";
import Research from "./research";

export default async function ResearchPage() {

  return (
    <>
      <main className="relative w-screen h-screen flex flex-col items-center gap-5 overflow-hidden">
        <Fade />
        <Research />
      </main >
      <CursorFollower />
    </>
  );
};


