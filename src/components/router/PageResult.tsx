"use client";

import SectionHomeQuizResult from "@/components/sections/home/SectionHomeQuizResult";
import { useRouter } from "next/navigation";
import { memo } from "react";

function PageResult({ ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`PageResult`}>
        <SectionHomeQuizResult />
      </div>
    </>
  );
}

export default memo(PageResult);
