import Image from "next/image";
import { getScopedI18n } from "@/locales/server";

export default async function Stages() {
  const word = await getScopedI18n("landing.stages");

  const stages = [
    {
      imageUrl: "/images/landing-stages/stage-one.webp",
      description: word("first"),
    },
    {
      imageUrl: "/images/landing-stages/stage-two.webp",
      description: word("second"),
    },
    {
      imageUrl: "/images/landing-stages/stage-three.webp",
      description: word("third"),
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center lg:w-[100rem] xl:w-[130rem] py-[2rem]">
      <div className="w-full flex justify-center items-center py-[3rem]">
        <h4 className="text-[2.5rem] xl:text-[4rem] font-bold uppercase dark:text-white">How to get started</h4>
      </div>
      <div className="w-full flex flex-col gap-[3rem] xs:gap-x-0 items-center justify-center md:gap-y-[5rem] lg:flex-row lg:flex-wrap lg:gap-x-[8rem] px-[2rem] xs:p-[1rem]">
        {stages.map((stage, idx) => {
          return (
            <div
              key={idx}
              className={`w-full flex justify-center items-center ${
                idx === 1 ? "flex-row-reverse" : ""
              } lg:flex-row gap-[2rem] md:gap-[3rem] lg:w-auto lg:gap-[2rem] lg:my-[4rem]`}
            >
              <p className="font-medium text-center text-[1.3rem] w-[25rem] md:text-[1.4rem] lg:text-[1.5rem] dark:text-white">
                {stage.description}
              </p>
              <div className="w-[10rem] h-[10rem] relative md:w-[15rem] md:h-[15rem] lg:w-[14rem] lg:h-[14rem] xl:w-[17rem] xl:h-[17rem] xs:w-[8rem] xs:h-[7rem]">
                <Image src={stage.imageUrl} fill alt={`${idx}-stage`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
