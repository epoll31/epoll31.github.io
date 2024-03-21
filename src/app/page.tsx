
import { CursorFollower, CursorLock } from "./CursorFollower";
import Button from "@/app/components/Button";

export default async function Home() {

  return (
    <>
      <main className="flex min-h-screen flex-col items-center py-12 md:p-24 gap-5 cursor-circle">
        <CursorLock cursorLockedClassName="rounded-xl w-64 h-12 bg-blue">
          <h1 className="text-4xl font-bold z-20">Ethan Pollack</h1>
        </CursorLock>
        <Button>Click me</Button>
        <CursorLock noLock={true} className="grid gap-5 grid-rows-3 grid-cols-3 w-[500px] h-[500px]">
          <CursorLock holdLock={true} className="bg-blue w-full h-full rounded-2xl" cursorLockedClassName="rounded-3xl w-[180px] h-[180px] bg-white"></CursorLock>
          <CursorLock holdLock={true} className="col-span-2 bg-green w-full h-full rounded-2xl" cursorLockedClassName="rounded-3xl w-[350px] h-[180px] bg-white"></CursorLock>
          <CursorLock holdLock={true} className="bg-blue w-full h-full rounded-2xl" cursorLockedClassName="rounded-3xl w-[180px] h-[180px] bg-white"></CursorLock>
          <CursorLock holdLock={true} className="bg-green w-full h-full rounded-2xl" cursorLockedClassName="rounded-3xl w-[180px] h-[180px] bg-white"></CursorLock>
          <CursorLock holdLock={true} className=" row-start-2 row-span-2 col-span-2 bg-red w-full h-full rounded-2xl" cursorLockedClassName="rounded-3xl w-[355px] h-[355px] bg-white"></CursorLock>
        </CursorLock>
      </main >
      <CursorFollower />
    </>
  );
};
