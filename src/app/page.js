'use client'
import SearchBar from "@/components/Search-Bar/SearchBar";
import Introduction from "@/components/Hero-Page/Hero-Introduction/Introduction";
import ItemsWrapper from "@/components/Hero-Page/Hero-Top-Sellers/ItemsWrapper";
import { useState } from "react";
import { topSellingItems } from "../data/topSellingItems";

export default function Hero() {
  const [items, setItems] = useState(topSellingItems);

  return (
    <main className="flex w-full flex-col items-center gap-[3rem] p-[4rem_0] lg:gap-[5rem] lg:p-[8rem_0]">
      <SearchBar items={items} setItems={setItems} />
      <Introduction />
      <ItemsWrapper itemList={items} />
    </main>
  );
}

