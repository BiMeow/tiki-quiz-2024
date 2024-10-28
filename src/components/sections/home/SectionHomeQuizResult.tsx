import CardProduct from "@/components/common/CardProduct";
import { IconShare } from "@/components/common/Icon";
import { useStorage } from "@/components/context/StorageProvider";
import gsap from "gsap";
import { memo, useEffect } from "react";
import SplitType from "split-type";

function SectionHomeQuizResult({ ...props }) {
  const { momName, listSelectedAnswer } = useStorage();

  useEffect(() => {
    setTimeout(() => {
      const splitHeading = SplitType.create(".splitHeading", {
        types: "words,chars",
      });
      const splitResultDesc = SplitType.create(".splitResultDesc", {
        types: "words,chars",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".SectionHomeQuizResult",
            start: "50px bottom",
          },
        })
        .fromTo(
          ".SectionHomeQuizResult .headingResult",
          { y: -150, autoAlpha: 0, opacity: 0 },
          {
            y: 0,
            autoAlpha: 1,
            opacity: 1,
            duration: 0.7,
            ease: "sine.out",
          },
          0
        )
        .fromTo(
          splitHeading.chars,
          { autoAlpha: 0, opacity: 0 },
          {
            stagger: 0.04,
            autoAlpha: 1,
            opacity: 1,
            duration: 0.03,
          },
          0.5
        )
        .fromTo(
          ".SectionHomeQuizResult .resultImage",
          { y: -150, autoAlpha: 0, opacity: 0 },
          {
            y: 0,
            autoAlpha: 1,
            opacity: 1,
            duration: 0.7,
            ease: "sine.out",
          },
          2.2
        )
        .fromTo(
          ".SectionHomeQuizResult .resultDesc",
          { y: 50, autoAlpha: 0, opacity: 0 },
          {
            y: 0,
            autoAlpha: 1,
            opacity: 1,
            duration: 0.7,
            ease: "sine.out",
          },
          2.5
        )
        .fromTo(
          ".SectionHomeQuizResult .resultBtn",
          { y: 50, autoAlpha: 0, opacity: 0 },
          {
            y: 0,
            autoAlpha: 1,
            opacity: 1,
            duration: 0.7,
            ease: "sine.out",
          },
          2.8
        )
        .fromTo(
          ".SectionHomeQuizResult .listProduct",
          { y: 50, autoAlpha: 0, opacity: 0 },
          {
            y: 0,
            autoAlpha: 1,
            opacity: 1,
            duration: 0.7,
            ease: "sine.out",
          },
          3.2
        );
    }, 300);

    return () => {};
  }, []);

  return (
    <>
      <div className={`SectionHomeQuizResult min-h-screen`}>
        <div className="headingResult relative z-10 p-[25px] bg-white rounded-b-[30px] opacity-0">
          <img
            src="/images/logo-blue.png"
            alt="Tiki's Logo"
            className="w-[67px] mb-[20px]"
          />
          <div className="splitHeading">
            <p className="text-[28px] text-yellow mb-[10px]">
              Mẹ <span className="text-blue">{momName}</span> thuộc kiểu...
            </p>
            <p className="text-blue text-[24px]">
              “Gần gũi lắng lo. Bên con mọi lúc”
            </p>
          </div>
        </div>
        <div className="content mt-[-30px] mb-[50px]">
          <img
            src="/images/result-bestie.png"
            alt=""
            className="resultImage w-full mb-[10px] opacity-0"
          />
          <div className="detail px-[25px]">
            <p className="resultDesc text-[15px] text-center mb-[20px] opacity-0">
              Thời gian gần gũi, những cái ôm, những lời thủ thỉ tâm tình là món
              quà mẹ dành cho con trong suốt hành trình lớn khôn. Mẹ chẳng ngại
              ngủ cùng con, luôn gắn bó chặt chẽ và hỗ trợ cảm xúc liên tục. Và
              vì vậy, con luôn có cảm giác an toàn và kết nối sâu sắc với mẹ đó!
            </p>
            <div className="resultBtn mainBtn w-full flex justify-center text-[18px] opacity-0">
              <p>Chia sẻ ngay</p>
              <div className="icon flex text-[25px] ml-[10px]">
                <IconShare />
              </div>
            </div>
          </div>
        </div>
        <div className="listProduct p-[25px] pt-0 bg-white rounded-t-[30px] opacity-0">
          <div className="heading relative px-[30px] py-[10px] bg-[#0241A7] rounded-[50px] -translate-y-1/2">
            <p className="text-center text-[20px]">
              Trợ thủ đắc lực cho mẹ Bestie
            </p>
            <img
              src="/images/tiki-mascot.png"
              alt=""
              className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-[70px]"
            />
          </div>
          <div className="list grid grid-cols-2 gap-[20px]">
            {[...Array(6)].map((e: any, i: number) => (
              <div className="itemProduct" key={i}>
                <CardProduct />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(SectionHomeQuizResult);
