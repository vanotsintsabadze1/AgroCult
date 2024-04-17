"use client";
import { useState } from "react";
import { debounce } from "../../scripts/debounce";

function SearchBar({ items, setItems, originalItems }) {
  const [search, setSearch] = useState("");
  const [sorted, setSorted] = useState(false);

  const handleSort = () => {
    if (sorted) {
      setItems((prev) => [...prev].sort((a, b) => (a.price < b.price ? 1 : -1)));
      setSorted(false);
    } else {
      setItems((prev) => [...prev].sort((a, b) => (a.price > b.price ? 1 : -1)));
      setSorted(true);
    }
  };

  const filterItems = debounce((e) => {
    const searchValue = e.target.value;
    setItems(originalItems.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())));
  }, 700);

  const handleChange = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
    searchValue === "" ? setItems(originalItems) : filterItems(e);
  };

  return (
    <section className="flex w-full items-center justify-center p-[2rem]">
      <div className="relative h-[4rem] w-[30rem] lg:w-[40rem]">
        <input
          type="text"
          placeholder="Search for an item.."
          className="h-full w-full rounded-[.5rem] border-[.2rem] border-gray-400 p-[1rem_1.2rem] text-[1.2rem] text-black placeholder:text-gray-500"
          onChange={handleChange}
          value={search}
        />
        <button
          className="absolute right-0 top-1/2 h-full translate-y-[-50%] rounded-[.5rem] bg-gray-400 p-[1rem_1.5rem]"
          onClick={handleSort}
        >
          <img src="/images/icons/misc/search-icon.webp " alt="" className="h-[2rem] w-[2rem] opacity-60" />
        </button>
      </div>
    </section>
  );
}

export default SearchBar;
