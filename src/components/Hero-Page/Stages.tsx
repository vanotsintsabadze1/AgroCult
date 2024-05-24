import Image from "next/image";
import { getScopedI18n } from "@/locales/server";

export default async function Stages() {
  const word = await getScopedI18n("landing");

  const stages = [
    {
      imageUrl: "/images/landing-stages/stage-one.webp",
      description: word("stages.first"),
    },
    {
      imageUrl: "/images/landing-stages/stage-two.webp",
      description: word("stages.second"),
    },
    {
      imageUrl: "/images/landing-stages/stage-three.webp",
      description: word("stages.third"),
    },
  ];
  return (
    <div className="flex w-full flex-col items-center justify-center py-[2rem] lg:w-[100rem] xl:w-[130rem]">
      <div className="mt-[2rem] flex w-full items-center justify-center py-[3rem]">
        <h4 className="text-[2.5rem] font-bold uppercase xl:text-[4rem] dark:text-white">{word("getStarted")}</h4>
      </div>
      <div className="mt-[1rem] flex w-full flex-col items-center justify-center gap-[3rem] px-[2rem] xs:gap-x-0 xs:p-[1rem] md:gap-y-[5rem] lg:flex-row lg:flex-wrap lg:gap-x-[15rem]">
        {stages.map((stage, idx) => {
          return (
            <div
              key={idx}
              className={`flex w-full items-center justify-center ${
                idx === 1 ? "flex-row-reverse" : ""
              } gap-[2rem] md:gap-[3rem] lg:my-[4rem] lg:w-auto lg:flex-row lg:gap-[2rem]`}
            >
              <p className="w-[25rem] text-center text-[1.4rem] font-medium md:text-[1.4rem] lg:w-[30rem] lg:text-[1.5rem] dark:text-white">
                {stage.description}
              </p>
              <div className="relative h-[12rem] w-[12rem] xs:h-[7rem] xs:w-[8rem] md:h-[15rem] md:w-[15rem] lg:h-[14rem] lg:w-[14rem] xl:h-[17rem] xl:w-[17rem]">
                <Image src={stage.imageUrl} fill alt={`${idx}-stage`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
