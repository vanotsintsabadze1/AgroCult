"use client";

import ItemCard from "./ItemCard";
import { ShopItem } from "../../types/types";
import { useScopedI18n } from "../../locales/client";

interface Props {
  items: ShopItem[];
}

function ItemsWrapper({ items }: Props) {
  const word = useScopedI18n("store");

  return (
    <section className="overflow mt-[2rem] w-full flex items-center flex-col">
      <div className="flex w-full items-center justify-center mt-[2rem]">
        <h2 className="mb-[2rem] text-[2.2rem] font-bold uppercase tracking-wide dark:text-dark-mode">{word("topSelling")}</h2>
      </div>
      <div className="w-full flex items-center gap-x-[6rem] p-[4rem_2rem] justify-center xs:gap-x-0">
        <div className="grid xl:grid-cols-4 gap-[7rem] lg:grid-cols-3 md:grid-cols-2 px-[3rem] xs:px-0">
          {items.map((item) => {
            return <ItemCard {...item} key={item.id} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default ItemsWrapper;
