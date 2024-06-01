import Image from "next/image";
import { getScopedI18n } from "../../locales/server";

export default async function Charities() {
  const word = await getScopedI18n("about.charities");

  return (
    <div className="mt-[4rem] flex flex-col items-center gap-[2rem] text-center">
      <div className="items-cente flex w-full justify-center">
        <h4 className="text-[2.5rem] font-bold">Charities</h4>
      </div>
      <canvas className="h-[.1rem] w-full bg-black lg:w-[80%]" />
      <div className="mt-[4rem] flex flex-col items-center gap-x-[3rem] lg:flex-row-reverse lg:items-start">
        <div className="flex flex-col items-center gap-[2rem]">
          <p className="max-w-[35rem] text-[1.5rem] xs:w-[30rem] lg:max-w-[70rem] lg:text-left">
            {word("openingParagraph")}
          </p>
          <p className="max-w-[35rem] text-[1.5rem] xs:w-[30rem] lg:max-w-[70rem] lg:text-left">
            {word("secondOpeningParagraph")}
          </p>
        </div>
        <div className="relative h-[25rem] w-[35rem] shadow-2xl lg:h-[30rem] lg:w-[45rem]">
          <Image
            src="/images/showout-images/about-us-second.webp"
            className="rounded-[.8rem]"
            alt="test"
            fill
          />
        </div>
      </div>
    </div>
  );
}
