import Image from "next/image";
import { getScopedI18n } from "@/locales/server";
import FadeWrapper from "../Animation-Wrappers/FadeWrapper";

export default async function Stages() {
  const word = await getScopedI18n("landing");

  interface Stage {
    borderTitle: string;
    title: string;
    imageUrl: string;
    firstPhrase: string;
    secondPhrase?: string;
  }

  const stages: Stage[] = [
    {
      borderTitle: word("stages.first.borderTitle"),
      title: word("stages.first.title"),
      imageUrl: "/images/landing-stages/first-stage.webp",
      firstPhrase: word("stages.first.first"),
      secondPhrase: word("stages.first.second"),
    },
    {
      borderTitle: word("stages.second.borderTitle"),
      title: word("stages.second.title"),
      imageUrl: "/images/landing-stages/second-stage.webp",
      firstPhrase: word("stages.second.first"),
      secondPhrase: word("stages.second.second"),
    },
    {
      borderTitle: word("stages.third.borderTitle"),
      title: word("stages.third.title"),
      imageUrl: "/images/landing-stages/third-stage.webp",
      firstPhrase: word("stages.third.first"),
    },
  ];

  return (
    <div className="flex w-full flex-col items-center justify-center py-[2rem] sm:px-[5rem]">
      <section className="flex w-full flex-col items-center justify-center gap-y-[4rem] px-[2rem] py-[2rem] lg:gap-y-[8rem]">
        <FadeWrapper direction="up" delay={0} duration={1000}>
          {stages.map((stage, index) => (
            <div
              key={index}
              className={`flex w-[40rem] flex-col items-center gap-[1rem] md:w-[50rem] lg:w-auto lg:items-start lg:justify-between lg:gap-x-[3rem] xs:w-full ${index === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
            >
              <div className="relative h-[28rem] w-[38rem] md:h-[35rem] md:w-[45rem] xl:h-[40rem] xl:w-[55rem] xs:h-[25rem] xs:w-[30rem]">
                <Image
                  src={stage.imageUrl}
                  alt={`pic-${index}`}
                  fill
                  className="rounded-[1rem] shadow-lg  shadow-gray-500/50"
                />
                <div className="absolute bottom-0 z-[6] flex h-[6rem] w-full items-center rounded-b-[1rem] bg-green-700 px-[1rem]">
                  <h2 className="text-[1.8rem] text-white shadow-green-500">{stage.borderTitle}</h2>
                </div>
              </div>
              <div className="pl-[1rem] xs:pl-0 dark:text-white">
                <h4 className="mt-[1.5rem] break-words text-[3rem] font-bold text-[#121212] drop-shadow-lg sm:w-[40rem] lg:mt-0 lg:text-green-800 xs:w-full dark:text-green-600">
                  {stage.title}
                </h4>
                <p className="mt-[1rem] max-w-[40rem] text-[1.5rem] font-medium md:max-w-[50rem] lg:max-w-[40rem]">
                  {stage.firstPhrase}
                </p>
                {stage.secondPhrase && (
                  <p className="mt-[2rem] max-w-[40rem] text-[1.5rem] font-medium md:max-w-[50rem] lg:max-w-[40rem]">
                    {stage.secondPhrase}
                  </p>
                )}
              </div>
            </div>
          ))}
        </FadeWrapper>
      </section>
    </div>
  );
}
