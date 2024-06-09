"use client";
import { useState } from "react";
import ItemCard from "./ItemCard";

interface Props {
  items: ShopItem[];
  layout: string;
}

export default function ItemsWrapper({ items, layout }: Props) {
  const [visibleCards, setVisibleCards] = useState(6);

  function loadMoreCards() {
    setVisibleCards((prev) => prev + 6);
  }

  function loadLessCards() {
    setVisibleCards((prev) => prev - 6);
  }

  const multiColView =
    "relative grid grid-cols-1 gap-[5rem] lg:gap-x-[2rem] pr-[1rem] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2";
  const singleColView =
    "relative grid grid-cols-1 gap-[5rem] pr-[1rem] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 lg:flex lg:flex-col lg:items-center lg:w-auto";

  return (
    <div className={layout === "multi" ? multiColView : singleColView}>
      {items.slice(0, visibleCards).map((item, idx) => (
        <ItemCard key={idx} {...item} layout={layout} />
      ))}
      <div className="col-span-1 flex items-center justify-center py-[2rem] md:col-span-2 lg:col-span-2 2xl:col-span-3">
        <button
          onClick={visibleCards < items.length ? loadMoreCards : loadLessCards}
          className="text-[1.5rem] font-semibold text-green-600"
        >
          {visibleCards < items.length ? "Load More" : "Show Less"}
        </button>
      </div>
    </div>
  );
}
