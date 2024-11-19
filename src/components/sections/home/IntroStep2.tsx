import { useStorage } from "@/components/context/StorageProvider";
import { message } from "antd";
import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

function IntroStep2({ ...props }) {
  const { momName, setMomName, setQuizStep } = useStorage();

  return (
    <>
      <motion.div
        initial={{ x: 400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className={`IntroStep2 w-full mx-auto max-w-[75%] px-[30px] mb:max-w-full`}
      >
        <div className="flex items-center p-[7px] bg-white rounded-[50px] mb-[20px]">
          <img
            src="/images/avatar.png"
            alt="Tiki's avatar"
            className="w-[40px] h-[40px]"
          />
          <input
            type="text"
            placeholder="Tên mẹ là gì?"
            className="text-[24px] text-blue !border-none !outline-none !ring-0 w-[calc(100%-40px)] px-[10px] py-0 text-left placeholder:text-blue placeholder:text-center"
            onChange={(e: any) => setMomName(e.target.value)}
          />
        </div>
        <div
          className="mainBtn mx-auto px-[40px]"
          onClick={() => {
            if (momName) {
              setQuizStep(0);
              setTimeout(() => {
                setQuizStep(2);
              }, 200);
            } else {
              message.warning("Vui lòng nhập tên của mẹ!");
            }
          }}
        >
          Bắt đầu
        </div>
      </motion.div>
    </>
  );
}

export default memo(IntroStep2);
