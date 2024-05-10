"use client";

import Image from "next/image";
import Link from "next/link";
import { ShopItem } from "../../../types/types";
import { useScopedI18n } from "../../../locales/client";

interface Props extends ShopItem {
  locale: string;
}

function ItemCard({ images, id, title, description, price }: Props) {
  const word = useScopedI18n("store");
  return (
    <div className="w-[30rem] bg-white flex-shrink-0 rounded-[1rem] pt-[1.5rem] flex flex-col h-[42rem] items-center pb-[3rem] relative shadow-soft">
      <div className="w-full p-[0rem_2rem]">
        <div className="w-full h-[18rem] relative flex flex-col items-center ">
          <Image src={images[0]} className="rounded-[.3rem]" fill alt={`${title}-image`} />
        </div>
      </div>
      <div className="w-full flex flex-col p-[1rem_2rem]">
        <p className="font-bold text-[1.7rem]">${price}</p>
        <p className="font-medium text-[1.1rem]">
          {word("startPayingPhrase")} {""} $
          <span className="text-orange-600 tracking-wider font-semibold">{Math.round(price / 24)}</span>
        </p>
        <p className="font-semibold text-[1.3rem] mt-[1rem]">{title}</p>
        <p className="font-medium text-[1.1rem] mt-[.2rem] line-clamp-3">{description}</p>
      </div>
      <div className="w-full flex justify-center left-1/2 translate-x-[-50%] absolute bottom-[3rem]">
        <button className="w-[14rem] h-[3.5rem] rounded-[.5rem] bg-black text-white font-bold">
          <Link className="flex w-full h-full justify-center items-center" href={`/store/${id}`}>
            {word("buy")}
          </Link>
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
