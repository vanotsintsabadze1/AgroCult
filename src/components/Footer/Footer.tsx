import Image from "next/image";
import Links from "./Links";
import Socials from "./Socials";
import { getScopedI18n } from "@/locales/server";

export default async function Footer() {
  const word = await getScopedI18n("footer");
  return (
    <footer className="flex w-full flex-grow justify-center bg-secondary p-[2rem_0] lg:p-[0rem] dark:bg-[#202c39]">
      <div className="flex w-full flex-col items-center lg:flex-row-reverse lg:items-start lg:justify-center lg:gap-[5rem]">
        <section className="flex w-[32rem] justify-center md:w-[45rem] lg:h-[40rem] lg:w-[40rem] lg:items-center lg:justify-start lg:gap-[10rem]">
          <Links />
          <Socials />
        </section>
        <section className="mt-[2rem] flex w-full flex-col items-center gap-[1rem] lg:mt-0 lg:w-[60rem] lg:items-start lg:p-[2rem]">
          <div className="h-[10rem] w-[10rem] relative">
            <Image fill src="/images/logos/main-logo-white.webp" alt="footer-logo" />
          </div>
          <p className="mt-[1rem] w-[32rem] text-[1.2rem] leading-[2rem] text-white lg:w-[40rem] lg:text-[1.3rem] lg:leading-[2.2rem] p-[.5rem]">
            <span className="font-bold">{word("rights")}</span>
            <br />
            {word("copyright")}
          </p>
          <div className="flex w-[30rem] flex-col gap-[1rem] p-[2rem_0] lg:w-full lg:gap-[1.5rem]">
            <p className="text-[1.2rem] font-bold text-white">{word("newsletterSubscribe")}</p>
            <div className="flex items-center">
              <input
                className="h-[4rem] w-[25rem] rounded-bl-[.3rem] rounded-tl-[.3rem] border-[.1rem] p-[0_1rem]  text-[1.1rem] font-medium placeholder:opacity-60 outline-none placeholder:text-black lg:w-[30rem]"
                placeholder={word("inputPlaceholder")}
              />
              <button className="h-[4.1rem] w-[6rem] rounded-br-[.3rem] rounded-tr-[.3rem] bg-black text-[1.2rem] font-semibold text-white">
                OK
              </button>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
