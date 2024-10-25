import { IconStar } from "@/components/common/Icon";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

function CardProduct({ data, ...props }: any) {
  return (
    <>
      <div
        className={`CardProduct group relative cursor-pointer rounded-[5px] bg-white text-[#27272a] border border-[#ebebf0]`}
      >
        <div className="thumbnail relative aspect-1">
          <img
            src="https://salt.tikicdn.com/cache/280x280/ts/product/ab/76/f8/0b8c78b41f77515344f3bbbba366ab05.jpg.webp"
            alt="product thumbnail"
            className="size-full"
          />
          <img
            src="https://salt.tikicdn.com/ts/upload/21/c9/ce/ecf520f4346274799396496b3cbbf7d8.png"
            alt="product info-badges"
            className="info-badges size-full absolute top-0 left-0 z-10"
          />
        </div>
        <div className="content p-[8px]">
          <p className="text-[12px] line-clamp-2 mb-[10px]">
            Nước tẩy trang Công Nghệ Micella Bioderma Sensibio H2O
          </p>
          <div className="rating w-fit relative mb-[10px]">
            <div className="backgroud flex w-fit text-[#c4c4c4]">
              <div className="w-[12px]">
                <IconStar />
              </div>
              <div className="w-[12px]">
                <IconStar />
              </div>
              <div className="w-[12px]">
                <IconStar />
              </div>
              <div className="w-[12px]">
                <IconStar />
              </div>
              <div className="w-[12px]">
                <IconStar />
              </div>
            </div>
            <div className="active absolute z-10 top-0 left-0 flex text-[#FFC400] w-[90%] overflow-hidden">
              <div className="w-[12px]">
                <IconStar />
              </div>
              <div className="w-[12px]">
                <IconStar />
              </div>
              <div className="w-[12px]">
                <IconStar />
              </div>
              <div className="w-[12px]">
                <IconStar />
              </div>
              <div className="w-[12px]">
                <IconStar />
              </div>
            </div>
          </div>
          <p className="text-[#ff424e]">
            50.000<sup className="underline">đ</sup>
          </p>
        </div>
        <Link href={`https://www.google.com/`} className="absFull" />
      </div>
    </>
  );
}

export default memo(CardProduct);
