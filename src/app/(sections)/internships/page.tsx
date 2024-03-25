
import { CursorFollower } from "@/app/components/CursorFollower";
import Fade from "@/app/major/Fade";
import Internships from "./internships";

export default async function InternshipsPage() {

  return (
    <>
      <main className="relative w-screen h-screen flex flex-col items-center gap-5 overflow-hidden">
        <Fade />
        <Internships />
      </main >
      <CursorFollower />
    </>
  );
};
