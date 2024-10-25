import { useStorage } from "@/components/context/StorageProvider";
import IntroStep1 from "@/components/sections/home/IntroStep1";
import IntroStep2 from "@/components/sections/home/IntroStep2";
import { memo } from "react";

function SectionHomeIntro({ ...props }) {
  const { introStep } = useStorage();

  return (
    <>
      <div
        className={`SectionHomeIntro flex flex-col justify-between h-screen overflow-hidden`}
      >
        <img
          src="/images/logo.png"
          alt="Tiki's Logo"
          className="w-[67px] m-[25px] mb-0"
        />
        <div className="detail h-fit py-[2vh]">
          {introStep == 1 ? <IntroStep1 /> : <IntroStep2 />}
        </div>
        <div className="imageDeco relative aspect-[43/34] bg-black">
          <img
            src="/images/image-deco-test.jpg"
            alt="Tiki's Quiz Deco"
            className="absFull"
          />
        </div>
      </div>
    </>
  );
}

export default memo(SectionHomeIntro);
