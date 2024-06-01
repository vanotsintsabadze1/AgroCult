import Image from "next/image";
import { getScopedI18n } from "@/locales/server";

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
        {stages.map((stage, index) => (
          <div
            key={index}
            className={`flex w-[40rem] flex-col items-center gap-[1rem] lg:w-auto lg:items-start lg:justify-between lg:gap-x-[3rem] ${index === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
          >
            <div className="relative h-[28rem] w-[38rem] lg:h-[35rem] lg:w-[45rem] xl:h-[45rem] xl:w-[55rem]">
              <Image
                src={stage.imageUrl}
                alt={`pic-${index}`}
                fill
                className=" rounded-[1rem] shadow-lg  shadow-gray-500/50"
              />
              <div className="absolute bottom-0 z-[6] flex h-[6rem] w-full items-center rounded-b-[1rem] bg-green-700 px-[1rem]">
                <h2 className="text-[1.8rem] text-white shadow-green-500">
                  {stage.borderTitle}
                </h2>
              </div>
            </div>
            <div className="pl-[1rem] dark:text-white">
              <h4 className="mt-[1.5rem] text-[3rem] font-bold text-[#121212] drop-shadow-lg lg:text-green-800 dark:text-green-600 ">
                {stage.title}
              </h4>
              <p className="mt-[1rem] max-w-[40rem] text-[1.5rem] font-medium">
                {stage.firstPhrase}
              </p>
              {stage.secondPhrase && (
                <p className="mt-[2rem] max-w-[40rem] text-[1.5rem] font-medium">
                  {stage.secondPhrase}
                </p>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
