import React from "react";
import Image from "next/image";
import { getScopedI18n } from "@/locales/server";

async function Card() {
  const word = await getScopedI18n("landing");

  return (
    <div className="flex w-full flex-col items-center justify-center py-[2rem] lg:flex-row-reverse lg:gap-[6rem] lg:py-[4rem] xl:gap-[10rem]">
      <div className="relative h-[30rem] w-[30rem] lg:h-[40rem] lg:w-[40rem]">
        <Image priority src="/images/mockups/combine.webp" fill alt="tractor-mockup" className="z-[2] rounded-[50%] drop-shadow-md" />
      </div>
      <div className="flex flex-col items-center gap-[1rem] lg:items-start">
        <h4 className="mt-[1rem] bg-gradient-to-r from-green-500 to-orange-300 bg-clip-text text-[6rem] font-bold tracking-wider text-transparent drop-shadow-sm lg:text-[12rem]">
          AgroCult
        </h4>
        <p className="w-[35rem] text-center text-[1.4rem] font-medium text-[#152030] xs:w-[30rem] lg:text-left dark:text-white">
          {word("phrase")}
        </p>
        <button className="mt-[3rem] flex items-center justify-center gap-[.5rem] rounded-[.5rem] bg-green-600 px-[2rem] py-[1rem] text-[1.3rem] font-bold text-white shadow-md">
          <Image src="/images/icons/misc/tractor-icon.webp" width={25} height={25} alt="tractor-icon" />
          <p>{word("goToStore")}</p>
        </button>
      </div>
    </div>
  );
}

export default Card;
