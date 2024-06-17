import Card from "./Card";
import Stages from "./Stages";
import Partners from "./Partners";
import { getScopedI18n } from "@/locales/server";

export default async function Introduction() {
  const word = await getScopedI18n("landing");

  return (
    <>
      <section className="relative flex w-full flex-col items-center gap-[1rem] py-[3rem] lg:h-[60rem] lg:justify-center">
        <video
          className="absolute top-0 h-full w-full object-cover shadow-green-500/50 brightness-50"
          autoPlay
          muted
          loop
        >
          <source src="/images/output.mp4" type="video/mp4" />
        </video>
        <Card />
      </section>
      <section className="flex w-full flex-col items-center gap-[1rem] pb-[2rem]">
        <Stages />
      </section>
      <section className="mt-[2rem] flex w-full flex-col items-center bg-gray-100 py-[3rem]  dark:bg-dark-primary">
        <h2 className="text-[2.3rem] font-bold uppercase tracking-wide text-gray-400">{word("partners.title")}</h2>
        <Partners />
      </section>
    </>
  );
}
