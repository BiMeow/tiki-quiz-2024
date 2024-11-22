import { useStorage } from "@/components/context/StorageProvider";
import { message } from "antd";
import gsap from "gsap";
import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { listMom, listQuiz } from "@/data/quiz";
import { useRouter } from "next/navigation";

function SectionHomeQuiz({ ...props }) {
  const router = useRouter();

  const { setQuizStep, listSelectedAnswer, setListSelectedAnswer, momName } =
    useStorage();

  const [activeQuestion, setActiveQuestion] = useState<any>(0);
  const [activeAnswer, setActiveAnswer] = useState<any>(-1);

  useEffect(() => {
    setTimeout(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".SectionHomeQuiz",
            start: "50px bottom",
          },
        })
        .fromTo(
          ".SectionHomeQuiz .question",
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
          ".SectionHomeQuiz .moveUp",
          { y: 100, autoAlpha: 0, opacity: 0 },
          {
            y: 0,
            autoAlpha: 1,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "sine.out",
          },
          0.3
        );

      gsap
        .timeline({ repeat: -1, yoyo: true, ease: "elastic.out(1,0.3)" })
        .fromTo(
          ".SectionHomeQuiz .quizDecoStar",
          { scale: 1, opacity: 1 },
          {
            scale: 0.3,
            opacity: 0.3,
            duration: 1,
          }
        );

      gsap.timeline({ repeat: -1, yoyo: true, ease: "linear" }).fromTo(
        ".SectionHomeQuiz .quizDecoHeart",
        { scale: 1 },
        {
          scale: 0.75,
          duration: 2,
        }
      );

      gsap.timeline({ repeat: -1, yoyo: true, ease: "linear" }).fromTo(
        ".SectionHomeQuiz .quizDecoSpin",
        { rotate: 0 },
        {
          rotate: 360,
          duration: 5,
        }
      );
    }, 300);

    return () => {};
  }, []);

  return (
    <>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        className={`SectionHomeQuiz flex flex-col h-dvh max-w-[1200px] max-h-[80dvh] mx-auto bg-[#0051D2] rounded-[30px] overflow-hidden dt-l:max-h-[90dvh] tl-p:bg-transparent tl-p:rounded-none tl-p:max-h-dvh`}
      >
        <div className="question relative p-[25px] bg-white rounded-b-[30px] opacity-0 mb:pb-[15px]">
          <img
            src="/images/logo-blue.png"
            alt="Tiki's Logo"
            className="w-[67px] mb-[20px] cursor-pointer"
            onClick={() => window.location.reload()}
          />
          <p className="text-[24px] text-yellow mb-[10px] tl-p:text-[22px]">
            Câu hỏi <span className="text-blue">{activeQuestion + 1}</span>/
            {listQuiz?.length}
          </p>
          <div className="progess relative w-full h-[4px] border-b border-yellow mb-[10px]">
            <div
              className="active absolute w-[0%] h-full top-0 left-0 bg-yellow duration-500"
              style={{
                width: `${((activeQuestion + 1) / listQuiz.length) * 100}%`,
              }}
            ></div>
          </div>
          <p className="text-[22px] text-blue mb-[20px] tl-p:text-[18px] mb:mb-[10px]">
            {listQuiz[activeQuestion]?.question}
          </p>
          <img
            src={listQuiz[activeQuestion]?.image}
            alt="Tiki's question"
            className="object-contain w-full h-[30dvh] dt-l:h-[27dvh] tl-l:h-[25dvh] tl-p:h-[15dvh]"
          />
          <img
            src="/images/deco-star-yellow.png"
            alt="Tiki's deco"
            className="quizDecoStar absolute w-[40px] top-0 right-0 hidden tl-p:block"
          />
          <img
            src="/images/deco-heart.png"
            alt="Tiki's deco"
            className="quizDecoHeart absolute w-[30px] top-[30px] right-[20%] hidden tl-p:block"
          />
          <img
            src="/images/deco-spin.png"
            alt="Tiki's deco"
            className="quizDecoSpin absolute w-[15px] top-[80px] right-[15%] tl-p:right-[15px]"
          />
        </div>

        <div className="answer flex flex-wrap mx-[-10px] gap-y-[15px] my-auto p-[25px] tl-p:gap-y-[10px]">
          {listQuiz[activeQuestion]?.answer?.map((e: any, i: number) => (
            <div
              className="moveUp opacity-0 w-1/2 tl-p:w-full px-[10px]"
              key={i}
            >
              <div
                className={`
                itemAnswer cursor-pointer px-[15px] py-[10px] flex items-center rounded-[50px] duration-500
                ${activeAnswer == i ? "bg-[#0241A7] text-white" : "bg-white text-black hover:bg-[#e4e4e4] tl-p:hover:bg-white"}
                `}
                onClick={() => setActiveAnswer(i)}
              >
                <img
                  src={`/images/${i == 0 ? "tamgiac" : i == 1 ? "tron" : i == 2 ? "vuong" : "sao"}.png`}
                  alt=""
                  className={`
                  aspect-1 w-[25px] object-contain
                  ${i == 2 ? "p-[2px]" : ""}
                  `}
                />
                <p className="w-[calc(100%-25px)] pl-[15px] mb:text-[15px]">
                  {e.content}
                </p>
              </div>
            </div>
          ))}
          <div className="moveUp opacity-0 w-full">
            <div
              className="mainBtn mx-auto px-[40px]"
              onClick={() => {
                if (activeAnswer >= 0) {
                  setListSelectedAnswer([
                    ...listSelectedAnswer,
                    listQuiz[activeQuestion]?.answer[activeAnswer],
                  ]);
                  if (activeQuestion + 1 == listQuiz?.length) {
                    setTimeout(() => {
                      // setQuizStep(3);

                      listSelectedAnswer.map((e: any, i: number) => {
                        let indexMomType: any = listMom.findIndex(
                          (e2: any) => e2.type == e.type
                        );

                        listMom[indexMomType].value =
                          listMom[indexMomType].value + e.value;
                      });

                      let final: any = { value: 0 };
                      listMom.map((e: any, i: number) => {
                        if (final?.value < listMom[i].value) {
                          final = e;
                        }
                      });

                      router.push(
                        `/result?momName=${momName}&momType=${final.type}`
                      );
                    }, 200);
                  } else {
                    setActiveAnswer(-1);
                    setActiveQuestion(activeQuestion + 1);
                  }
                } else {
                  message.warning("Vui lòng chọn câu trả lời!");
                }
              }}
            >
              {activeQuestion + 1 == listQuiz?.length
                ? "Hoàn thành"
                : "Tiếp tục"}
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

export default memo(SectionHomeQuiz);
