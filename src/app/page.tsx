
import { CursorFollower, CursorLock } from "./components/CursorFollower";

export default async function Home() {
  const headers = [
    {
      title: "first",
      width: 5
    },
    {
      title: "second",
      width: 8
    },
    {
      title: "third",
      width: 6
    },
    {
      title: "fourth",
      width: 7
    },
    {
      title: "fifth",
      width: 5
    },
    {
      title: "sixth",
      width: 6
    },
    {
      title: "seventh",
      width: 9
    },
    {
      title: "eighth",
      width: 7
    },
    {
      title: "ninth",
      width: 6
    },
    {
      title: "tenth",
      width: 6
    }
  ]

  return (
    <>
      <main className="flex min-h-screen flex-col items-center gap-5 ">
        <div className="flex flex-col items-end py-12 md:p-24 w-screen h-screen overflow-y-scroll snap-proximity snap-y scroll-smooth">
          {
            headers.map((header, i) => {
              // const zRotation = (i - (headers.length / 2) + 1) * 3;
              // const w = `w-[${header.length * 3}rem]`;
              const w = header.width * 5;

              return (
                <CursorLock
                  className="w-fit h-fit header transition-transform duration-150 ease-in-out origin-right snap-always snap-center select-none cursor-none"
                  style={
                    {
                      // transform: `rotateZ(${zRotation}deg)`
                    }
                  }
                  cursorLockedClassName={`h-[10rem] backdrop-invert rounded-full z-10`}
                  cursorStyle={{
                    width: `${w}rem`,
                  }}>
                  <h1 className="text-[10rem] leading-none font-bold"> {header.title}</h1>
                </CursorLock>
              );
            })
          }
        </div>
      </main >
      <CursorFollower />
    </>
  );
};
