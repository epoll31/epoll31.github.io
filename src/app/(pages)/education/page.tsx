"use client";

import WPI from "./wpi";
import Page, { PageMajor } from "@/app/components/major/Page";
import { Filters } from "./Filters";
import useMediaSizes from "@/app/utils/useMediaSizes";

export default function WPIPage() {
  const { md } = useMediaSizes();

  return (
    <Page customButtonType="home" tabs={["Work", "Projects", "Early Years"]}>
      {
        !md && (
          <PageMajor type="side">
            <Filters />
          </PageMajor>
        )
      }
      < WPI />
    </Page>
  );
};
