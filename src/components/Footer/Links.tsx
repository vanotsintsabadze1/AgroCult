import { lang } from "../../dict/dictionary";

interface Props {
  locale: string;
}

function Links({ locale }: Props) {
  const word = lang[locale as keyof typeof lang];

  return (
    <div className="flex h-[20rem] w-1/2 justify-center lg:w-auto">
      <div className="flex flex-col gap-[2.5rem]">
        <p className="text-[1.2rem] font-bold text-white">{word.footer.links.phrase}</p>
        <a className="text-[1.1rem] font-semibold uppercase text-gray-400 underline" href="/">
          {word.footer.links.home}
        </a>
        <a className="text-[1.1rem] font-semibold uppercase text-gray-400 underline" href="/">
          {word.footer.links.store}
        </a>
        <a className="text-[1.1rem] font-semibold uppercase text-gray-400 underline" href="/">
          {word.footer.links.yourStore}
        </a>
        <a className="text-[1.1rem] font-semibold uppercase text-gray-400 underline" href="/">
          {word.footer.links.contact}
        </a>
      </div>
    </div>
  );
}

export default Links;
