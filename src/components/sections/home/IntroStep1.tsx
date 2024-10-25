import { useStorage } from "@/components/context/StorageProvider";
import { memo } from "react";

function IntroStep1({ ...props }) {
  const { setIntroStep } = useStorage();
  return (
    <>
      <div className={`IntroStep1`}>
        <img
          src="/images/intro-text.png"
          alt="Tiki's Quiz Intro Text"
          className="w-full max-h-[27vh] object-contain mb-[1.1vh]"
        />
        <p className="text-[2vh] font-medium text-center leading-[1.1] mb-[3vh]">
          Mẹ là kiểu nào? <br /> Cùng TIKI khám phá nhé!
        </p>
        <div
          className="mainBtn mx-auto !text-[2vh]"
          onClick={() => setIntroStep(2)}
        >
          Tham gia trắc nghiệm
        </div>
      </div>
    </>
  );
}

export default memo(IntroStep1);
