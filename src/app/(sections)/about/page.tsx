
import { CursorFollower } from "@/app/components/CursorFollower";
import Fade from "@/app/major/Fade";
import About from "./about";

export default async function AboutPage() {
  return (
    <>
      <main className="relative w-screen h-screen flex flex-col items-center gap-5 overflow-hidden">
        <Fade />
        <About />
      </main >
      <CursorFollower />
    </>
  );
};
