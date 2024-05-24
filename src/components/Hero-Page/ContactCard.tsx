import { getScopedI18n } from "../../locales/server";
import Image from "next/image";

export default async function CompanyVerificationCard() {
  const word = await getScopedI18n("landing");
  return (
    <div
      id="test"
      className="flex w-full flex-col items-center justify-center gap-[2rem] rounded-[2rem] bg-primary py-[3rem] text-white md:w-[50rem] lg:w-auto lg:flex-row-reverse lg:gap-x-[8rem] lg:px-[6rem] lg:py-[4rem] dark:bg-dark-secondary"
    >
      <div className="relative h-[15rem] w-[15rem] md:h-[20rem] md:w-[20rem] lg:h-[23rem] lg:w-[23rem]">
        <Image src="/images/vector-images/company-verification.webp" fill alt="company-verification" />
      </div>
      <div className="flex flex-col items-center gap-[.5rem]">
        <h2 className="px-[1rem text-center text-[2.2rem] font-bold xs:text-[2rem] md:text-[2.2rem] lg:text-[2.7rem] dark:text-white">
          {word("customOfferTitle")}
        </h2>
        <p className="mt-[.5rem] w-[30rem] px-[1rem] text-center text-[1.4rem] font-medium md:text-[1.4rem] lg:w-[40rem] lg:text-[1.6rem] dark:text-white">
          {word("customOfferPhrase")}
        </p>
        <button className="mt-[2rem] h-[4rem] bg-black px-[2rem] text-[1.3rem] font-bold text-white md:mb-[.5rem] md:mt-[2.5rem]">
          {word("contactUs")}
        </button>
      </div>
    </div>
  );
}
