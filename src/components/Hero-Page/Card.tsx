import React from "react";
import Image from "next/image";
import { getScopedI18n } from "@/locales/server";

async function Card() {
  const word = await getScopedI18n("landing");

  return (
    <div className="w-full bg-primary flex flex-col items-center pb-[3rem] shadow-soft lg:flex-row-reverse lg:justify-center">
      <div className="relative w-[35rem] xs:w-full h-[30rem] md:w-[45rem] md:h-[40rem] lg:w-[50rem] lg:h-[45rem]">
        <Image src="/images/mockups/macbook-homepage-mockup.webp" fill alt="macbook-mockup" />
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-[1rem] lg:w-[50rem]">
        <h3 className="text-[4rem] font-bold text-black drop-shadow-text-soft tracking-widest md:text-[5rem] lg:text-[9rem]">
          VUENNO
        </h3>
        <p className="text-black text-center w-[30rem] drop-shadow-text-soft text-[1.3rem] leading-[2.3rem] md:text-[1.6rem] md:w-[40rem]">
          {word("phrase")}
        </p>
        <button className="flex h-[4rem] w-[15rem] items-center justify-center gap-[.5rem] bg-black duration-150 ease-out hover:scale-110 mt-[1.8rem] md:h-[5rem] md:w-[20rem]">
          <div className="mb-[.2rem] h-[1.5rem] w-[1.5rem] relative md:mb-[.5rem]">
            <Image fill src="/images/icons/misc/shopping-bag.webp" alt="shopping-bag-icon" />
          </div>
          <p className="font-bold uppercase text-white md:text-[1.3rem]">{word("goToStore")}</p>
        </button>
      </div>
    </div>
  );
}

export default Card;
