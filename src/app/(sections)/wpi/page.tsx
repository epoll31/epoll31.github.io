import { CursorFollower } from "@/app/components/CursorFollower";
import Fade from "@/app/major/Fade";
import WPI from "./wpi";
import Page, { PageMajor } from "@/app/major/Page";
import { Filters } from "./Filters";

export default async function WPIPage() {

  return (
    <Page>
      <PageMajor type="Side" >
        <Filters />
      </PageMajor>
      <WPI />
    </Page>
  );
};
