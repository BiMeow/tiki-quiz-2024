import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

function CardProduct({ data, ...props }: any) {
	return (
		<>
			<div
				className={`CardProduct group relative cursor-pointer rounded-[24px] bg-white p-[20px] duration-500 hover:shadow-[0px_0px_20px_#004EA21A]`}
			>
				<div className="image mb-[10px] aspect-1 overflow-hidden p-[20px]">
					<Image
						src={data?.image?.vi}
						alt=""
						className={`size-full object-contain duration-500 group-hover:scale-105`}
						width={0}
						height={0}
						sizes="100vw"
					/>
				</div>
				<div className="content">
					<h2 className="mb-[10px] text-[18px] text-blue">{data?.name?.vi}</h2>
					<p className="line-clamp-2 text-[14px] text-[#98A2B3]">{data?.description?.vi}</p>
				</div>
				<Link href={`/products/${data?.slug?.vi}`} className="absFull" />
			</div>
		</>
	);
}

export default memo(CardProduct);
