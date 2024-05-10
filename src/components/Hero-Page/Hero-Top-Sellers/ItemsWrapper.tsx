"use client";

import ItemCard from "./ItemCard";
import { ShopItem } from "../../../types/types";
import { useScopedI18n } from "../../../locales/client";

interface Props {
  items: ShopItem[];
  locale: string;
}

function ItemsWrapper({ items, locale }: Props) {
  const word = useScopedI18n("store");

  return (
    <section className="overflow mt-[2rem] w-full flex items-center flex-col">
      <div className="flex w-full items-center justify-center mt-[2rem]">
        <h2 className="mb-[2rem] text-[2.2rem] font-bold uppercase tracking-wide dark:text-dark-mode">
          {word("topSelling")}
        </h2>
      </div>
      <div className="w-full flex items-center gap-x-[6rem] p-[4rem_2rem] justify-center">
        <div className="grid xl:grid-cols-4 gap-[10rem] lg:grid-cols-3 md:grid-cols-2 overflow-auto scrollbar-hide h-[80rem] p-[3rem]">
          {items.map((item) => {
            return <ItemCard {...item} locale={locale} key={item.id} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default ItemsWrapper;
