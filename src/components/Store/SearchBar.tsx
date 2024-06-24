import Image from "next/image";
import { useScopedI18n } from "@/locales/client";
import { useState } from "react";

interface Props {
  setLayout: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ setLayout }: Props) {
  const word = useScopedI18n("store");
  const [search, setSearch] = useState("");

  function setMultiColumnLayout() {
    setLayout("multi");
  }

  function setSingleColumnLayout() {
    setLayout("single");
  }

  function onSearch() {
    if (search === "") {
      window.location.href = "/store";
    }

    window.location.href = `/store?search=${search}`;
  }

  return (
    <div className="flex flex-col items-center ">
      <div className="flex w-full items-center justify-center gap-[1rem]">
        <div className="relative">
          <input
            type="text"
            placeholder={word("search.placeholder")}
            className="h-[4rem] w-[40rem] rounded-lg p-[1rem] text-[1.5rem] shadow-md md:w-[50rem] lg:w-[55rem] xs:w-[30rem]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={onSearch}
            className="absolute right-0 top-0 flex h-full items-center justify-center gap-[1rem] rounded-r-lg bg-green-600 px-[1.5rem] text-[1.4rem] text-white shadow-md"
          >
            {word("search.submit")}
            <Image src="/images/icons/store-icons/search-icon.webp" width={18} height={18} alt="search-icon" />
          </button>
        </div>
        <div className="hidden gap-[1rem] lg:flex">
          <button
            onClick={setMultiColumnLayout}
            className="grid h-[3.5rem] w-[3.5rem] grid-cols-2 rounded-lg bg-gray-300 grayscale duration-150 ease-out hover:bg-blue-200/50 hover:grayscale-0"
          >
            <Image
              src="/images/icons/store-icons/multi-column-view.webp"
              fill
              alt="multi-column-icon"
              className="p-[.4rem]"
            />
          </button>
          <button
            onClick={setSingleColumnLayout}
            className="grid h-[3.5rem] w-[3.5rem] grid-cols-2 rounded-lg bg-gray-300 grayscale duration-150 ease-out hover:bg-blue-200/50 hover:grayscale-0"
          >
            <Image
              src="/images/icons/store-icons/single-column-view.webp"
              fill
              alt="multi-column-icon"
              className="p-[.4rem]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
