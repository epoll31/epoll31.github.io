"use client";

import WPI from "./wpi";
import Page, { PageMajor } from "@/app/components/major/Page";
import { Filters } from "./Filters";
import useMediaSizes, { smOrSmaller } from "@/app/utils/useMediaSizes";

export default function WPIPage() {
  const mediaSize = useMediaSizes();

  return (
    <Page customButtonType="home" tabs={["Work", "Projects", "Early Years"]}>
      {
        !smOrSmaller(mediaSize) && (
          <PageMajor type="Side">
            <Filters />
          </PageMajor>
        )
      }
      < WPI />
    </Page>
  );
};
