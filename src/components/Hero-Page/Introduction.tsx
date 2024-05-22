import Card from "./Card";
import Stages from "./Stages";
import ContactCard from "./ContactCard";
import Partners from "./Partners";

async function Introduction() {
  return (
    <>
      <section className="mt-[3rem] flex w-full flex-col items-center gap-[1rem]">
        <Card />
      </section>
      <section className="mt-[6rem] flex w-full flex-col items-center gap-[1rem]">
        <Stages />
        <ContactCard />
      </section>
      <section className="flex w-full flex-col items-center bg-gray-100 py-[3rem] dark:bg-dark-primary">
        <h2 className="text-[2.3rem] font-bold uppercase tracking-wide text-gray-400">Our Partners</h2>
        <Partners />
      </section>
    </>
  );
}

export default Introduction;
