import Image from "next/image";
import { lang } from "../../../dict/dictionary";

interface Props {
  locale: string;
}

function Introduction({ locale }: Props) {
  const word = lang[locale as keyof typeof lang];

  return (
    <section className="flex w-full flex-col items-center gap-[1rem] mt-[4rem]">
      <h1 className="text-center text-[5rem] font-extrabold lg:text-[8rem] dark:text-dark-mode">
        {word?.landing.welcome}
      </h1>
      <h3 className="mt-[2rem] text-center text-[1.8rem] font-bold uppercase lg:text-[3rem] dark:text-dark-mode">
        {word?.landing.phrase}
      </h3>
      <p className="mt-[1rem] text-center text-[1.3rem] font-medium dark:text-dark-mode">{word?.landing.subphrase}</p>
      <button className="mt-[1rem] flex h-[4rem] w-[15rem] items-center justify-center gap-[.5rem] bg-black duration-150 ease-out hover:scale-110">
        <div className="mb-[.2rem] h-[1.5rem] w-[1.5rem] relative">
          <Image fill src="/images/icons/misc/shopping-bag.webp" alt="shopping-bag-icon" />
        </div>
        <p className="font-bold uppercase text-white">{word?.landing.goToStore}</p>
      </button>
    </section>
  );
}

export default Introduction;
