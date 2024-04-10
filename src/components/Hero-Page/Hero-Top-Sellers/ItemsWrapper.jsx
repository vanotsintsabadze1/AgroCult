"use client";

import ItemCard from "./ItemCard";
import SearchBar from "@/components/Search-Bar/SearchBar";
import { useState } from "react";

function ItemsWrapper({ items }) {
  const [itemList, setItemList] = useState(items);

  return (
    <section className="overflow mt-[2rem] w-full">
      <SearchBar items={itemList} setItems={setItemList} originalItems={items} />

      <div className="flex w-full items-center justify-center mt-[2rem]">
        <h2 className="mb-[2rem] text-[2.2rem] font-bold uppercase tracking-wide">Top Sellers</h2>
      </div>
      <div className="flex w-full items-center justify-center p-[0_1rem]">
        <div className=" flex w-full snap-x snap-mandatory gap-[5rem] overflow-auto p-[2rem] lg:gap-[8rem] xl:w-[130rem]">
          {itemList.length > 0 ? (
            itemList.map((item, index) => {
              return <ItemCard itemData={item} key={index} />;
            })
          ) : (
            <div className="h-full w-full items-center text-center text-[2rem]">Couldn't find anything {`:(`}</div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ItemsWrapper;
