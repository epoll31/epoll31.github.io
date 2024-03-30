
import { CursorFollower } from "@/app/components/CursorFollower";
import Fade from "@/app/components/major/Fade";
import EarlyYears from "./earlyYears";
import Page from "@/app/components/major/Page";

export default async function EarlyYearsPage() {
  return (
    <Page tabs={["Education", "Work", "Projects"]} >
      <EarlyYears />
    </Page>
    // <>
    //   <main className="relative w-screen h-screen flex flex-col items-center gap-5 overflow-hidden">
    //     <Fade />
    //     <EarlyYears />
    //   </main >
    //   <CursorFollower />
    // </>
  );
};
