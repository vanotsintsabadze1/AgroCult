import { getScopedI18n } from "../../locales/server";
import Image from "next/image";

export default async function AboutText() {
  const word = await getScopedI18n("about");

  return (
    <div className="flex flex-col items-center gap-[2rem] text-center lg:mt-[6rem] lg:w-[90rem] lg:flex-row lg:items-start lg:gap-0 lg:gap-x-[5rem] lg:px-[2rem] lg:text-left xl:w-[130rem] dark:text-white">
      <div className="flex flex-col items-center gap-[2rem]">
        <p className="mt-[5rem] max-w-[35rem] text-[1.5rem] xs:w-[30rem] lg:max-w-[70rem]">
          {word("openingParagraph")}
        </p>
        <p className="mt-[2rem] max-w-[32rem] text-[1.5rem] xs:w-[30rem] lg:max-w-[70rem]">
          {word("secondOpeningParagraph")}
        </p>
      </div>
      <div className="relative h-[25rem] w-[35rem] lg:h-[30rem] lg:w-[45rem]">
        <Image
          src="/images/landing-stages/first-stage.webp"
          className="rounded-[.8rem]"
          alt="test"
          fill
        />
      </div>
    </div>
  );
}
