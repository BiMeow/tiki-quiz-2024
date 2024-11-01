import { useStorage } from "@/components/context/StorageProvider";
import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

function IntroStep1({ ...props }) {
  const { setIntroStep } = useStorage();
  return (
    <>
      <motion.div
        exit={{ x: -400, opacity: 0 }}
        className={`IntroStep1 px-[30px]`}
      >
        <img
          src="/images/intro-text.png"
          alt="Tiki's Quiz Intro Text"
          className="introTitle w-full max-w-[60%] mx-auto object-contain mb-[20px] opacity-0 tl-p:max-h-[30dvh] tl-p:max-w-[100%] tl-p:mb-[1.1dvh]"
        />
        <p className="introDesc text-[28px] font-medium text-center leading-[1.1] mb-[30px] opacity-0 tl-p:mb-[3dvh] tl-p:text-[2.4dvh]">
          Bạn có tò mò mình là kiểu mẹ nào?
          <br />
          Cùng Tiki khám phá nhé!
        </p>
        <div className="introBtn opacity-0">
          <div
            className="mainBtn mx-auto tl-p:!text-[2.4dvh]"
            onClick={() => {
              setIntroStep(0);
              setTimeout(() => {
                setIntroStep(2);
              }, 200);
            }}
          >
            Tham gia trắc nghiệm
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default memo(IntroStep1);
