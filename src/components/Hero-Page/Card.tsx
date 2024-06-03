import React from "react";
import Image from "next/image";
import { getScopedI18n } from "@/locales/server";

async function Card() {
  const word = await getScopedI18n("landing");

  return (
    <div
      id="test"
      className="z-[8] flex w-full flex-col items-center justify-center py-[2rem] lg:flex-row-reverse lg:gap-[6rem] lg:py-[4rem] xl:gap-[10rem]"
    >
      <div className="flex flex-col items-center gap-[1rem]">
        <h4 className="mt-[1rem] bg-gradient-to-r from-green-500 to-orange-300 bg-clip-text text-[8rem] font-bold tracking-wider text-transparent drop-shadow-text-heavy xs:text-[7rem] lg:text-[15rem]">
          AgroCult
        </h4>
        <p className="w-[35rem] text-center text-[1.4rem] font-medium text-white drop-shadow-text-medium xs:w-[30rem] lg:w-[60rem] lg:text-[1.5rem]">
          {word("phrase")}
        </p>
        <button className="mt-[3rem] flex items-center justify-center gap-[1rem] rounded-[.5rem] bg-green-600 px-[2rem] py-[1rem] text-[1.2rem] font-bold text-white shadow-lg shadow-green-700/50 lg:px-[3rem] lg:text-[1.4rem]">
          <Image
            src="/images/icons/misc/tractor-icon.webp"
            width={25}
            height={25}
            alt="tractor-icon"
          />
          <p>{word("goToStore")}</p>
        </button>
      </div>
    </div>
  );
}

export default Card;
