import Card from "./Card";
import Stages from "./Stages";
import ContactCard from "./ContactCard";
import Partners from "./Partners";
import Reveal from "../Page-Animation-Wrapper/Reveal";

async function Introduction() {
  return (
    <>
      <section className="mt-[3rem] flex w-full flex-col items-center gap-[1rem]">
        <Card />
      </section>
      <Reveal>
        <section className="mt-[2rem] flex w-full flex-col items-center gap-[1rem]">
          <Stages />
        </section>
      </Reveal>
      <Reveal>
        <section className="mt-[2rem] flex w-full flex-col items-center gap-[1rem] px-[2rem]">
          <ContactCard />
        </section>
      </Reveal>
      <Reveal>
        <section className="mt-[8rem] flex w-full flex-col items-center bg-gray-100 py-[3rem] dark:bg-dark-primary">
          <h2 className="text-[2.3rem] font-bold uppercase tracking-wide text-gray-400">Our Partners</h2>
          <Partners />
        </section>
      </Reveal>
    </>
  );
}

export default Introduction;
