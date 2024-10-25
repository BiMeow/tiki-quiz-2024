import { useStorage } from "@/components/context/StorageProvider";
import { message } from "antd";
import { memo } from "react";

function IntroStep2({ ...props }) {
  const { momName, setMomName, setQuizStep } = useStorage();

  return (
    <>
      <div className={`IntroStep2 px-[25px]`}>
        <div className="flex items-center p-[7px] bg-white rounded-[50px] mb-[20px]">
          <img
            src="/images/avatar.png"
            alt="Tiki's avatar"
            className="w-[40px] h-[40px]"
          />
          <input
            type="text"
            placeholder="Tên mẹ là gì?"
            className="text-[24px] text-blue !border-none !outline-none !ring-0 w-[calc(100%-40px)] px-[10px] py-0 text-center placeholder:text-blue"
            onChange={(e: any) => setMomName(e.target.value)}
          />
        </div>
        <div
          className="mainBtn mx-auto px-[40px]"
          onClick={() => {
            if (momName) setQuizStep(2);
            else {
              message.warning("Vui lòng nhập tên của mẹ!");
            }
          }}
        >
          Bắt đầu
        </div>
      </div>
    </>
  );
}

export default memo(IntroStep2);
