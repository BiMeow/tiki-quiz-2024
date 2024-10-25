import { useStorage } from "@/components/context/StorageProvider";
import { message } from "antd";
import { memo, useState } from "react";

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


  
  return (
    <>
      <div className={`SectionHomeQuiz flex flex-col h-screen overflow-hidden`}>
        <div className="question p-[25px] bg-white rounded-b-[30px]">
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
        </div>
        <div className="answer my-auto p-[25px] space-y-[10px]">
          {listQuiz[activeQuestion]?.answer?.map((e: any, i: number) => (
            <div
              className={`
                itemAnswer px-[15px] py-[10px] flex items-center rounded-[50px] duration-500
                ${activeAnswer == i ? "bg-[#0241A7] text-white" : "bg-white text-black"}
                `}
              key={i}
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
          ))}

          <div
            className="mainBtn mx-auto px-[40px]"
            onClick={() => {
              if (activeAnswer >= 0) {
                setListSelectedAnswer([
                  ...listSelectedAnswer,
                  listQuiz[activeQuestion]?.answer[activeAnswer],
                ]);
                if (activeQuestion + 1 == listQuiz?.length) {
                  setQuizStep(3);
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
      </div>
    </>
  );
}

export default memo(SectionHomeQuiz);
