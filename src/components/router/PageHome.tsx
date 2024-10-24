"use client";

import SectionHomeIntro from "@/components/sections/home/SectionHomeIntro";
import { useRouter } from "next/navigation";
import { memo } from "react";

function PageHome({ ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`PageHome`}>
        <SectionHomeIntro />
      </div>
    </>
  );
}

export default memo(PageHome);
