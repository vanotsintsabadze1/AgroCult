import Card from "./Card";
import Stages from "./Stages";
import Partners from "./Partners";
import { getScopedI18n } from "@/locales/server";
import LatestBlogsSection from "./LatestBlogsSection";
import FadeWrapper from "../Animation-Wrappers/FadeWrapper";

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
          preload="none"
          poster="/images/video-poster/1.webp"
        >
          <source
            src="https://ejsxlnalxfptpsfk.public.blob.vercel-storage.com/videos/output-MFphLPd3ZfxiS9NKpdADxwcJTcoO8F.mp4"
            type="video/mp4"
          />
        </video>
        <Card />
      </section>
      <section className="flex w-full flex-col items-center gap-[1rem] pb-[2rem]">
        <Stages />
      </section>
      <section className="flex w-full flex-col items-center gap-[1rem] pb-[2rem]">
        <LatestBlogsSection />
      </section>
      <section className="mt-[2rem] flex w-full flex-col items-center bg-gray-100 py-[3rem]  dark:bg-dark-primary">
        <FadeWrapper direction="up" delay={0} duration={1000}>
          <h2 className="text-[2.3rem] font-bold uppercase tracking-wide text-gray-400 dark:text-white">
            {word("partners.title")}
          </h2>
          <Partners />
        </FadeWrapper>
      </section>
    </>
  );
}
