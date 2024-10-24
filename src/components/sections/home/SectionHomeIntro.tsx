import { memo, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useWindowSize } from "usehooks-ts";

function SectionHomeIntro({ ...props }) {
  const router = useRouter();

  const { height } = useWindowSize();

  const [heightImageDeco, setHeightImageDeco] = useState<any>(340);

  useEffect(() => {
    if (height) {
      const elmnt: any = document.querySelector(".SectionHomeIntro .imageDeco");

      if (elmnt) {
        setHeightImageDeco(elmnt.offsetHeight);
        console.log("BiMeow log elmnt.offsetHeight", elmnt.offsetHeight);
      }
    }
    return () => {};
  }, [height]);

  return (
    <>
      <div className={`SectionHomeIntro h-screen`}>
        <div
          className="content flex flex-col px-[25px] py-[3.5vh]"
          style={{ height: `calc(100% - ${heightImageDeco}px)` }}
        >
          <img src="/images/logo.png" alt="Tiki's Logo" className="w-[67px]" />

          <div className="detail h-fit my-auto py-[2vh]">
            <img
              src="/images/intro-text.png"
              alt="Tiki's Quiz Intro Text"
              className="w-full max-h-[27vh] object-contain mb-[1.1vh]"
            />
            <p className="text-[2vh] font-medium text-center leading-[1.1] mb-[3vh]">
              Mẹ là kiểu nào? <br /> Cùng TIKI khám phá nhé!
            </p>
            <div className="mainBtn mx-auto !text-[2vh]">
              Tham gia trắc nghiệm
            </div>
          </div>
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
