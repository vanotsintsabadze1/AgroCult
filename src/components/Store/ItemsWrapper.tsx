"use client";
import ItemCard from "./ItemCard";
import MobileFilter from "./MobileFilter";
import SearchBar from "./SearchBar";
import { useState } from "react";

interface Props {
  items: ShopItem[];
}

export default function ItemsWrapper({ items }: Props) {
  const [shouldMobileFilterOpen, setShouldMobileFilterOpen] = useState(false);

  return (
    <section className="overflow mt-[2rem] flex w-full flex-col items-center">
      <SearchBar setShouldMobileFilterOpen={setShouldMobileFilterOpen} />
      {shouldMobileFilterOpen && <MobileFilter />}
      <div className="flex w-full items-center justify-center gap-x-[6rem] p-[4rem_2rem] xs:gap-x-0">
        <div className="grid gap-[7rem] px-[3rem] xs:px-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => {
            return <ItemCard {...item} key={item.id} />;
          })}
        </div>
      </div>
    </section>
  );
}
