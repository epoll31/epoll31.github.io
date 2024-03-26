
import { CursorFollower } from "@/app/components/CursorFollower";
import Fade from "@/app/major/Fade";
import Work from "./work";
import Page from "@/app/major/Page";

export default async function WorkPage() {
  return (
    <Page tabs={["Education", "Projects", "About", "Early Years"]} >
      <Work />
    </Page>
  );
};
