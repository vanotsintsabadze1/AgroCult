"use client";
import Image from "next/image";
import DesktopFilter from "./DesktopFilter";
import ItemsWrapper from "./ItemsWrapper";
import MobileFilter from "./MobileFilter";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";

interface Props {
  items: ShopItem[];
}

export default function StoreWrapper({ items }: Props) {
  const [shouldMobileFilterOpen, setShouldMobileFilterOpen] = useState(false);
  const [layout, setLayout] = useState("multi");
  const [mutableItemsArray, setMutableItemsArray] = useState(items);
  const [sortPreference, setSortPreference] = useState("most_relevant");

  function handleMobileFilter() {
    setShouldMobileFilterOpen(!shouldMobileFilterOpen);
  }

  useEffect(() => {
    if (sortPreference === "most_relevant") {
      setMutableItemsArray(items);
    }

    if (sortPreference === "p_low_high") {
      setMutableItemsArray([...items].sort((a, b) => a.price - b.price));
    }

    if (sortPreference === "p_high_low") {
      setMutableItemsArray([...items].sort((a, b) => b.price - a.price));
    }
  }, [sortPreference]);

  return (
    <section className="overflow mt-[2rem] flex w-full flex-col items-center">
      <SearchBar setLayout={setLayout} />
      <button
        onClick={handleMobileFilter}
        className="mt-[3rem] flex h-[4rem] w-[35rem] items-center justify-center gap-[.5rem] rounded-lg bg-green-600 text-[1.6rem] font-bold text-white shadow-md lg:hidden xs:w-[25rem]"
      >
        <Image width={17} height={17} src="/images/icons/store-icons/filter-icon.webp" alt="filter-icon" />
        Filter
      </button>

      {shouldMobileFilterOpen && <MobileFilter setPreference={setSortPreference} />}

      <div className="flex w-full justify-center gap-[2rem] pb-[5rem] pt-[2rem]">
        <DesktopFilter setPreference={setSortPreference} />
        {items.length > 0 && <ItemsWrapper items={mutableItemsArray} layout={layout} />}
        {items.length === 0 && (
          <div className="flex max-w-[95rem] flex-grow items-center justify-center">
            <p className="text-[1.5rem] uppercase text-gray-400">No items found</p>
          </div>
        )}
      </div>
    </section>
  );
}
