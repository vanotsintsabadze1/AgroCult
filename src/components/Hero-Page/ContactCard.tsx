import { getScopedI18n } from "../../locales/server";
import Image from "next/image";
import FadeWrapper from "../Animation-Wrappers/FadeWrapper";

export default async function CompanyVerificationCard() {
  const word = await getScopedI18n("landing");
  return (
    <FadeWrapper delay={0} duration={500} direction="up" className="w-full">
      <div className="flex w-full flex-col items-center bg-green-800/50 py-[2rem] lg:flex-row lg:items-start lg:justify-center lg:pt-[3rem]">
        <FadeWrapper duration={1000} delay={300} direction="left">
          <div className="p-[2rem] lg:px-[3rem]">
            <h2 className="text-[4rem] font-medium text-teal-700 lg:text-[4rem] dark:text-teal-400">
              {word("aboutCompany")}
            </h2>
            <p className="mt-[1rem] max-w-[45rem] text-[1.6rem] font-medium text-teal-800 lg:w-[30rem] lg:text-[2rem] dark:text-teal-500">
              {word("aboutUs")}
              <br />
              <br />
              {word("aboutUsSecond")}
            </p>
          </div>
        </FadeWrapper>
        <FadeWrapper delay={300} duration={1000} direction="right">
          <div className="relative h-[40rem] w-[38rem] lg:mt-[3rem] lg:h-[58rem] lg:w-[56rem]">
            <Image
              src="/images/vector-images/founder.webp"
              className="rounded-[2rem] bg-center opacity-75 blur-[.1rem]"
              fill
              alt="founder"
            />
          </div>
        </FadeWrapper>
      </div>
    </FadeWrapper>
  );
}
