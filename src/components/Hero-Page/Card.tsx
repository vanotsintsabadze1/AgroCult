import React from "react";
import { getScopedI18n } from "@/locales/server";
import GoToStoreButton from "./GoToStoreButton";

async function Card() {
  const word = await getScopedI18n("landing");

  return (
    <div
      id="test"
      className="z-[8] flex w-full flex-col items-center justify-center py-[2rem] lg:flex-row-reverse lg:gap-[6rem] lg:py-[4rem] xl:gap-[10rem]"
    >
      <div className="flex flex-col items-center gap-[1rem]">
        <h1 className="mt-[1rem] bg-gradient-to-r from-green-500 to-orange-300 bg-clip-text text-[8rem] font-bold tracking-wider text-transparent drop-shadow-text-heavy lg:text-[15rem] xs:text-[6rem]">
          AgroCult
        </h1>
        <p className="w-[35rem] text-center text-[1.4rem] font-medium text-white drop-shadow-text-heavy lg:w-[60rem] lg:text-[1.5rem] xs:w-[30rem] xs:text-[1.25rem]">
          {word("phrase")}
        </p>
        <GoToStoreButton />
      </div>
    </div>
  );
}

export default Card;
