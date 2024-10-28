import { useStorage } from "@/components/context/StorageProvider";
import { message } from "antd";
import gsap from "gsap";
import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";

let listQuiz = [
  {
    question: "Khi con năn nỉ mẹ cho nuôi...",
    answer: [
      {
        content: "Đáp án 1",
      },
      {
        content: "Đáp án 2",
      },
      {
        content: "Đáp án 3",
      },
      {
        content: "Đáp án 4",
      },
    ],
  },
  {
    question: "Khi con năn nỉ mẹ cho nuôi một bạn mèo hoặc thú cưng...",
    answer: [
      {
        content: "Đáp án 1",
      },
      {
        content: "Đáp án 2",
      },
      {
        content: "Đáp án 3",
      },
      {
        content: "Đáp án 4",
      },
    ],
  },
  {
    question:
      "Khi con năn nỉ mẹ cho nuôi một bạn mèo hoặc thú cưng... BiMeow BiMeow BiMeow BiMeow",
    answer: [
      {
        content: "Đáp án 1",
      },
      {
        content: "Đáp án 2",
      },
      {
        content: "Đáp án 3",
      },
      {
        content: "Đáp án 4",
      },
    ],
  },
  {
    question:
      "Khi con năn nỉ mẹ cho nuôi một bạn mèo hoặc thú cưng... BiMeow BiMeow BiMeow BiMeow BiMeow BiMeow BiMeow BiMeow",
    answer: [
      {
        content: "Đáp án 1",
      },
      {
        content: "Đáp án 2",
      },
      {
        content: "Đáp án 3",
      },
      {
        content: "Đáp án 4",
      },
    ],
  },
];

function SectionHomeQuiz({ ...props }) {
  const { setQuizStep, listSelectedAnswer, setListSelectedAnswer } =
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
            stagger: 0.3,
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
        exit={{ scale: 0, opacity: 0 }}
        className={`SectionHomeQuiz flex flex-col h-screen overflow-hidden`}
      >
        <div className="question relative p-[25px] bg-white rounded-b-[30px] opacity-0">
          <img
            src="/images/logo-blue.png"
            alt="Tiki's Logo"
            className="w-[67px] mb-[20px]"
          />
          <p className="text-[22px] text-yellow mb-[10px]">
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
          <p className="text-[18px] text-blue mb-[20px]">
            {listQuiz[activeQuestion]?.question}
          </p>
          <img
            src="/images/question-1.png"
            alt="Tiki's question"
            className="object-contain w-full h-[13vh]"
          />
          <img
            src="/images/deco-star-yellow.png"
            alt="Tiki's deco"
            className="quizDecoStar absolute w-[40px] top-0 right-0"
          />
          <img
            src="/images/deco-heart.png"
            alt="Tiki's deco"
            className="quizDecoHeart absolute w-[30px] top-[30px] right-[20%]"
          />
          <img
            src="/images/deco-spin.png"
            alt="Tiki's deco"
            className="quizDecoSpin absolute w-[15px] top-[80px] right-[15px]"
          />
        </div>

        <div className="answer my-auto p-[25px] space-y-[10px]">
          {listQuiz[activeQuestion]?.answer?.map((e: any, i: number) => (
            <div className="moveUp opacity-0" key={i}>
              <div
                className={`
                itemAnswer px-[15px] py-[10px] flex items-center rounded-[50px] duration-500
                ${activeAnswer == i ? "bg-[#0241A7] text-white" : "bg-white text-black"}
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
                <p className="w-[calc(100%-25px)] pl-[15px]">{e.content}</p>
              </div>
            </div>
          ))}

          <div
            className="mainBtn moveUp opacity-0 mx-auto px-[40px]"
            onClick={() => {
              if (activeAnswer >= 0) {
                setListSelectedAnswer([
                  ...listSelectedAnswer,
                  listQuiz[activeQuestion]?.answer[activeAnswer],
                ]);
                if (activeQuestion + 1 == listQuiz?.length) {
                  setQuizStep(0);
                  setTimeout(() => {
                    setQuizStep(3);
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
            {activeQuestion + 1 == listQuiz?.length ? "Hoàn thành" : "Tiếp tục"}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default memo(SectionHomeQuiz);
