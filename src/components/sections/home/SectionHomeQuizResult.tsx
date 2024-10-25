import CardProduct from "@/components/common/CardProduct";
import { IconShare } from "@/components/common/Icon";
import { useStorage } from "@/components/context/StorageProvider";
import { memo } from "react";

function SectionHomeQuizResult({ ...props }) {
  const { momName, listSelectedAnswer } = useStorage();

  console.log("BiMeow log listSelectedAnswer", listSelectedAnswer);

  return (
    <>
      <div className={`SectionHomeQuizResult min-h-screen`}>
        <div className="heading relative z-10 p-[25px] bg-white rounded-b-[30px]">
          <img
            src="/images/logo-blue.png"
            alt="Tiki's Logo"
            className="w-[67px] mb-[20px]"
          />
          <p className="text-[28px] text-yellow mb-[10px]">
            Mẹ <span className="text-blue">{momName}</span> thuộc kiểu...
          </p>
          <p className="text-blue text-[24px]">
            “Gần gũi lắng lo. Bên con mọi lúc”
          </p>
        </div>
        <div className="content mt-[-30px] mb-[50px]">
          <img
            src="/images/result-bestie.png"
            alt=""
            className="w-full mb-[10px]"
          />
          <div className="detail px-[25px]">
            <p className="text-[15px] text-center mb-[20px]">
              Thời gian gần gũi, những cái ôm, những lời thủ thỉ tâm tình là món
              quà mẹ dành cho con trong suốt hành trình lớn khôn. Mẹ chẳng ngại
              ngủ cùng con, luôn gắn bó chặt chẽ và hỗ trợ cảm xúc liên tục. Và
              vì vậy, con luôn có cảm giác an toàn và kết nối sâu sắc với mẹ đó!
            </p>
            <div className="mainBtn w-full flex justify-center text-[18px]">
              <p>Chia sẻ ngay</p>
              <div className="icon flex text-[25px] ml-[10px]">
                <IconShare />
              </div>
            </div>
          </div>
        </div>
        <div className="listProduct p-[25px] pt-0 bg-white rounded-t-[30px]">
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
