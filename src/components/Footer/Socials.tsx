import { getScopedI18n } from "@/locales/server";

async function Socials() {
  const word = await getScopedI18n("footer");
  return (
    <div className="flex h-[20rem] w-1/2 justify-center lg:w-auto">
      <div className="flex flex-col items-end gap-[2.5rem]">
        <p className="text-[1.2rem] font-bold text-white">{word("socials.phrase")}</p>
        <a className="text-[1.1rem] font-semibold uppercase text-gray-400 underline" href="/">
          Facebook
        </a>
        <a className="text-[1.1rem] font-semibold uppercase text-gray-400 underline" href="/">
          Instagram
        </a>
        <a className="text-[1.1rem] font-semibold uppercase text-gray-400 underline" href="/">
          Twitter
        </a>
        <a className="text-[1.1rem] font-semibold uppercase text-gray-400 underline" href="/">
          Tiktok
        </a>
      </div>
    </div>
  );
}

export default Socials;
