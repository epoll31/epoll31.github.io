
import { CursorFollower } from "@/app/components/CursorFollower";
import Fade from "@/app/components/major/Fade";
import Work from "./work";
import Page from "@/app/components/major/Page";

export default async function WorkPage() {
  return (
    <Page tabs={["Education", "Projects", "Early Years"]} >
      <Work />
    </Page>
  );
};
