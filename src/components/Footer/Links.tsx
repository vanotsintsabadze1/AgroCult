import { getScopedI18n } from "@/locales/server";

async function Links() {
  const word = await getScopedI18n("footer");

  return (
    <div className="flex h-[20rem] w-1/2 justify-center lg:w-auto">
      <div className="flex flex-col gap-[2.5rem]">
        <p className="text-[1.2rem] font-bold text-white">{word("links.phrase")}</p>
        <a className="text-[1.1rem] font-semibold uppercase text-gray-400 underline" href="/">
          {word("links.home")}
        </a>
        <a className="text-[1.1rem] font-semibold uppercase text-gray-400 underline" href="/">
          {word("links.store")}
        </a>
        <a className="text-[1.1rem] font-semibold uppercase text-gray-400 underline" href="/">
          {word("links.yourStore")}
        </a>
        <a className="text-[1.1rem] font-semibold uppercase text-gray-400 underline" href="/">
          {word("links.contact")}
        </a>
      </div>
    </div>
  );
}

export default Links;
