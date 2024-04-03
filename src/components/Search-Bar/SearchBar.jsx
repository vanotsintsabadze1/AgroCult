"use client";
import { useState } from "react";
import { topSellingItems } from "@/data/topSellingItems";
import { debounce } from "@/scripts/debounce";

function SearchBar({ setItems }) {
  const [sorted, setSorted] = useState(false);
  const [search, setSearch] = useState("");
  const handleDefaultSort = () => {
    if (sorted) {
      setItems((prev) => [...prev].sort((a, b) => (a.price < b.price ? 1 : -1)));
      setSorted(false);
    } else {
      setItems((prev) => [...prev].sort((a, b) => (a.price > b.price ? 1 : -1)));
      setSorted(true);
    }
  };

  const handleKeywordSort = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
    const debouncedSort = debounce(() => {
      setItems((prev) => [...prev].filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase())));
    });
    e.target.value === "" ? setItems(topSellingItems) : debouncedSort();
  };

  return (
    <section className="flex w-full items-center justify-center p-[2rem]">
      <div className="relative h-[4rem] w-[30rem] lg:w-[40rem]">
        <input
          type="text"
          placeholder="Search for an item.."
          className="h-full w-full rounded-[.5rem] border-[.2rem] border-gray-400 p-[1rem_1.2rem] text-[1.2rem] text-black placeholder:text-gray-500"
          value={search}
          onChange={handleKeywordSort}
        />
        <button
          className="absolute right-0 top-1/2 h-full translate-y-[-50%] rounded-[.5rem] bg-gray-400 p-[1rem_1.5rem]"
          onClick={handleDefaultSort}
        >
          <img src="/images/icons/misc/search-icon.webp " alt="" className="h-[2rem] w-[2rem] opacity-60" />
        </button>
      </div>
    </section>
  );
}

export default SearchBar;
