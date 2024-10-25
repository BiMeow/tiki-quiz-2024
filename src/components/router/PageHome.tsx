"use client";

import { useStorage } from "@/components/context/StorageProvider";
import SectionHomeIntro from "@/components/sections/home/SectionHomeIntro";
import SectionHomeQuiz from "@/components/sections/home/SectionHomeQuiz";
import SectionHomeQuizResult from "@/components/sections/home/SectionHomeQuizResult";
import { useRouter } from "next/navigation";
import { memo, useMemo } from "react";

function PageHome({ ...props }) {
  const router = useRouter();

  const { quizStep, momName } = useStorage();

  const pageContent = useMemo(() => {
    switch (quizStep) {
      case 1:
        return <SectionHomeIntro />;

      case 2:
        return <SectionHomeQuiz />;

      case 3:
        return <SectionHomeQuizResult />;

      default:
        return;
    }
  }, [quizStep, momName]);

  return (
    <>
      <div className={`PageHome`}>{pageContent}</div>
    </>
  );
}

export default memo(PageHome);
