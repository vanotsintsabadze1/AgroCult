import Card from "./Card";
import Stages from "./Stages";
import ContactCard from "./ContactCard";
import Partners from "./Partners";

async function Introduction() {
  return (
    <>
      <section className="relative flex w-full flex-col items-center gap-[1rem] py-[3rem] lg:h-[60rem] lg:justify-center">
        <video
          className="absolute top-0 h-full w-full object-cover shadow-green-500/50 brightness-75"
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
      <section className="mt-[3rem] flex w-full flex-col items-center gap-[1rem]">
        <ContactCard />
      </section>
      <section className="mt-[2rem] flex w-full flex-col items-center bg-gray-100 py-[3rem] lg:mt-[8rem] dark:bg-dark-primary">
        <h2 className="text-[2.3rem] font-bold uppercase tracking-wide text-gray-400">
          Our Partners
        </h2>
        <Partners />
      </section>
    </>
  );
}

export default Introduction;
