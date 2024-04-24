"use client";

import ItemCard from "./ItemCard";
import SearchBar from "../../Search-Bar/SearchBar";
import { useState } from "react";
import { ShopItem } from "../../../types/types";
import { lang } from "@/dict/dictionary";

interface Props {
  items: ShopItem[];
  locale: string;
}

function ItemsWrapper({ items, locale }: Props) {
  const [itemList, setItemList] = useState(items);
  const word = lang[locale as keyof typeof lang];

  return (
    <section className="overflow mt-[2rem] w-full flex items-center flex-col">
      <SearchBar setItems={setItemList} originalItems={items} />

      <div className="flex w-full items-center justify-center mt-[2rem]">
        <h2 className="mb-[2rem] text-[2.2rem] font-bold uppercase tracking-wide dark:text-dark-mode">
          {word.landing.topSelling}
        </h2>
      </div>

      <div className="w-full flex items-center gap-x-[6rem] p-[4rem_2rem] justify-center">
        <div className="grid xl:grid-cols-4 gap-[10rem]">
          {itemList.map((item) => {
            return <ItemCard {...item} locale={locale} key={item.id} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default ItemsWrapper;
