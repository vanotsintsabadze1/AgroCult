"use client";
import Image from "next/image";
import DesktopFilter from "./DesktopFilter";
import ItemsWrapper from "./ItemsWrapper";
import MobileFilter from "./MobileFilter";
import SearchBar from "./SearchBar";
import { useState } from "react";

interface Props {
  items: ShopItem[];
}

export default function StoreWrapper({ items }: Props) {
  const [shouldMobileFilterOpen, setShouldMobileFilterOpen] = useState(false);

  function handleMobileFilter() {
    setShouldMobileFilterOpen(!shouldMobileFilterOpen);
  }

  return (
    <section className="overflow mt-[2rem] flex w-full flex-col items-center">
      <SearchBar />

      <button
        onClick={handleMobileFilter}
        className="mt-[3rem] flex h-[4rem] w-[35rem] items-center justify-center gap-[.5rem] rounded-lg bg-green-600 text-[1.6rem] font-bold text-white shadow-md xs:w-[25rem] lg:hidden"
      >
        <Image
          width={17}
          height={17}
          src="/images/icons/store-icons/filter-icon.webp"
          alt="filter-icon"
        />
        Filter
      </button>

      {shouldMobileFilterOpen && <MobileFilter />}

      <div className="mt-[2rem] flex w-full justify-center gap-[2rem] py-[4rem]">
        <DesktopFilter />
        <ItemsWrapper items={items} />
      </div>
    </section>
  );
}
