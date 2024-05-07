import SearchBar from "@/components/Hero-Page/SearchBar";
import Card from "./Card";
import Stages from "./Stages";
import CompanyVerificationCard from "./CompanyVerificationCard";
import Partners from "./Partners";

async function Introduction() {
  return (
    <>
      <section className="flex w-full flex-col items-center gap-[1rem]">
        <SearchBar />
        <Card />
      </section>
      <section className="flex w-full flex-col items-center gap-[1rem]">
        <Stages />
        <CompanyVerificationCard />
      </section>
      <section className="flex w-full py-[3rem] items-center flex-col bg-gray-100">
        <h2 className="text-gray-400 font-bold uppercase tracking-wide text-[2.3rem]">Our Partners</h2>
        <Partners />
      </section>
    </>
  );
}

export default Introduction;
