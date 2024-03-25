
import { CursorFollower } from "@/app/components/CursorFollower";
import Fade from "@/app/major/Fade";
import EarlyYears from "./earlyYears";

export default async function EarlyYearsPage() {
  return (
    <>
      <main className="relative w-screen h-screen flex flex-col items-center gap-5 overflow-hidden">
        <Fade />
        <EarlyYears />
      </main >
      <CursorFollower />
    </>
  );
};
