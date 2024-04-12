"use client";

import Image from "next/image";
import Work from "./work";
import Page, { PageMajor } from "@/app/components/major/Page";
import useMediaSizes from "@/app/utils/useMediaSizes";
import Link from "next/link";
import { CardContainer } from "@/app/components/3d-card";

export default function WorkPage() {
  const { md } = useMediaSizes();

  return (
    <Page tabs={["Projects", "Education", "Early Years"]} >
      {
        md &&
        (
          <PageMajor type="side" className={` mt-10 `} >
            <CardContainer containerClassName="p-0" className="overflow-hidden drop-shadow-2xl">
              <Link href="https://raw.githubusercontent.com/epoll31/Resume/main/resume.pdf" className="w-full h-fit">
                <img src="/images/resume-color.png" alt="resume" width={200} height={200} className="w-full" />
              </Link>
            </CardContainer>
          </PageMajor>
        )
      }
      <Work />
    </Page>
  );
};
