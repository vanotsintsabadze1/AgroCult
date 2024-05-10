"use client";
import { useState } from "react";
import { useScopedI18n } from "@/locales/client";

function SearchBar() {
  const [search, setSearch] = useState("");
  const word = useScopedI18n("searchBar");

  function changeSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <div className="relative h-[4rem] my-[2rem] flex justify-center w-full px-[2rem] md:my-[3rem] lg:my-[5rem]">
      <input
        type="text"
        placeholder={word("placeholder")}
        className="h-full w-[40rem] rounded-[3rem] bg-gray-100 border-secondary dark:border border-[.2rem] px-[1.5rem] py-[2rem] text-[1.2rem] text-black placeholder:text-gray-500 outline-none xs:w-[30rem] md:w-[60rem] md:h-[5rem] md:text-[1.5rem] lg:w-[80rem] lg:text-[1.7rem] lg:h-[6rem] lg:px-[2rem]"
        onChange={changeSearch}
        value={search}
      />
    </div>
  );
}

export default SearchBar;
