import { getScopedI18n } from "@/locales/server";

export default async function BlogsIntro() {
  const word = await getScopedI18n("blogs");
  return (
    <section className="flex w-full flex-col items-center gap-[2rem] px-[1rem]">
      <h4 className="text-[2.2rem] font-medium uppercase tracking-widest text-gray-700">{word("blogs")}</h4>
      <canvas className="h-[.1rem] bg-gray-400 sm:w-[80%] md:w-[60%] xs:w-[90%] " />
      <p className="max-w-[45rem] text-center text-[1.3rem] font-medium text-gray-600">{word("phrase")}</p>
    </section>
  );
}
