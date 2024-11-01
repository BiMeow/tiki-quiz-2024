import CardProduct from "@/components/common/CardProduct";
import { IconShare } from "@/components/common/Icon";
import { useStorage } from "@/components/context/StorageProvider";
import gsap from "gsap";
import { memo, useEffect } from "react";
import SplitType from "split-type";
import { useWindowSize } from "usehooks-ts";
import { motion } from "framer-motion";

function SectionHomeQuizResult({ ...props }) {
  const { momName, listSelectedAnswer } = useStorage();

  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 767) {
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
    } else {
      setTimeout(() => {
        const splitHeading = SplitType.create(".splitHeadingDesktop", {
          types: "words,chars",
        });
        const splitResultDesc = SplitType.create(".splitResultDescDesktop", {
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
            { autoAlpha: 0, opacity: 0 },
            {
              autoAlpha: 1,
              opacity: 1,
              duration: 0.7,
              ease: "sine.out",
            },
            0
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
            0
          )
          .fromTo(
            ".SectionHomeQuizResult .resultDescDesktop",
            { y: 50, autoAlpha: 0, opacity: 0 },
            {
              y: 0,
              autoAlpha: 1,
              opacity: 1,
              duration: 0.7,
              ease: "sine.out",
            },
            1.3
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
            1.5
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
            1.7
          );

        gsap
          .timeline({ repeat: -1, yoyo: true, ease: "elastic.out(1,0.3)" })
          .fromTo(
            ".SectionHomeQuizResult .quizDecoStar",
            { scale: 1, opacity: 1 },
            {
              scale: 0.3,
              opacity: 0.3,
              duration: 1,
            }
          );

        gsap.timeline({ repeat: -1, yoyo: true, ease: "linear" }).fromTo(
          ".SectionHomeQuizResult .quizDecoHeart",
          { scale: 1 },
          {
            scale: 0.75,
            duration: 2,
          }
        );

        gsap.timeline({ repeat: -1, yoyo: true, ease: "linear" }).fromTo(
          ".SectionHomeQuizResult .quizDecoSpin",
          { rotate: 0 },
          {
            rotate: 360,
            duration: 5,
          }
        );
      }, 300);
    }

    return () => {};
  }, [width]);

  return (
    <>
      <div className={`SectionHomeQuizResult min-h-screen hidden mb:block`}>
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

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="SectionHomeQuizResult relative p-[30px] mb:hidden"
      >
        <img
          src="/images/logo.png"
          alt="Tiki's Logo"
          className="w-[67px] mb-[20px] mx-auto"
        />
        <div
          className={`max-w-[1100px] mx-auto bg-[#0051D2] rounded-[60px] overflow-hidden`}
        >
          <div className="headingResult relative z-10 flex mb-[30px] opacity-0">
            <img
              src="/images/result-bestie-desktop.png"
              alt=""
              className="resultImage w-[40%] opacity-0"
            />
            <div className="content w-[60%] text-center text-white px-[5vw] py-[45px] tl-p:px-[20px]">
              <div className="splitHeadingDesktop mb-[40px] ">
                <p className="text-[30px] text-yellow mb-[5px]">
                  Mẹ <span className="text-white">{momName}</span> thuộc kiểu...
                </p>
                <p className=" text-[30px]">
                  “Gần gũi lắng lo. Bên con mọi lúc”
                </p>
              </div>
              <div className="detail">
                <p className="resultDescDesktop text-[15px] text-center mb-[20px] opacity-0">
                  Thời gian gần gũi, những cái ôm, những lời thủ thỉ tâm tình là
                  món quà mẹ dành cho con trong suốt hành trình lớn khôn. Mẹ
                  chẳng ngại ngủ cùng con, luôn gắn bó chặt chẽ và hỗ trợ cảm
                  xúc liên tục. Và vì vậy, con luôn có cảm giác an toàn và kết
                  nối sâu sắc với mẹ đó!
                </p>
                <div className="resultBtn">
                  <div className=" mainBtn px-[50px] mx-auto flex justify-center text-[18px] opacity-0">
                    <p>Chia sẻ ngay</p>
                    <div className="icon flex text-[25px] ml-[10px]">
                      <IconShare />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="listProduct px-[25px] pb-[40px] bg-white opacity-0">
            <div className="heading relative w-fit mx-auto px-[80px] py-[10px] bg-[#0241A7] rounded-[50px] -translate-y-1/2">
              <p className="text-center text-[28px]">
                Trợ thủ đắc lực cho mẹ Bestie
              </p>
              <img
                src="/images/tiki-mascot.png"
                alt=""
                className="absolute left-[-10px] bottom-1/2 translate-y-[45%] w-[80px]"
              />
            </div>
            <div className="list grid grid-cols-5 gap-[20px]">
              {[...Array(6)].map((e: any, i: number) => (
                <div className="itemProduct" key={i}>
                  <CardProduct />
                </div>
              ))}
            </div>
          </div>
        </div>

        <img
          src="/images/deco-star-yellow.png"
          alt="Tiki's deco"
          className="quizDecoStar absolute w-[40px] top-[30px] right-[70px] tl-p:hidden"
        />
        <img
          src="/images/deco-heart.png"
          alt="Tiki's deco"
          className="quizDecoHeart absolute w-[40px] bottom-[90px] left-[30px] tl-p:hidden"
        />
        <img
          src="/images/deco-spin.png"
          alt="Tiki's deco"
          className="quizDecoSpin absolute w-[50px] bottom-[40%] right-[50px] tl-p:hidden"
        />
        <img
          src="/images/deco-spin.png"
          alt="Tiki's deco"
          className="quizDecoSpin absolute w-[20px] top-[20%] left-[7%] tl-p:hidden"
        />
      </motion.div>
    </>
  );
}

export default memo(SectionHomeQuizResult);
