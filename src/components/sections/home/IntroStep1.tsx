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
          className="introTitle w-full max-h-[30dvh] object-contain mb-[1.1dvh] opacity-0"
        />
        <p className="introDesc text-[2.4dvh] font-medium text-center leading-[1.1] mb-[3dvh] opacity-0">
          Bạn có tò mò mình là kiểu mẹ nào?
          <br />
          Cùng Tiki khám phá nhé!
        </p>
        <div
          className="introBtn mainBtn mx-auto !text-[2.4dvh] opacity-0"
          onClick={() => {
            setIntroStep(0);
            setTimeout(() => {
              setIntroStep(2);
            }, 200);
          }}
        >
          Tham gia trắc nghiệm
        </div>
      </motion.div>
    </>
  );
}

export default memo(IntroStep1);
