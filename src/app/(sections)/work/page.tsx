
import { CursorFollower } from "@/app/components/CursorFollower";
import Fade from "@/app/major/Fade";
import Work from "./work";

export default async function WorkPage() {
  return (
    <>
      <main className="fixed w-screen h-screen">
        <Fade />
        <Work />
      </main >
      <CursorFollower />
    </>
  );
};
