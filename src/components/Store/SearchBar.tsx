import Image from "next/image";
import { useScopedI18n } from "@/locales/client";

interface Props {
  setLayout: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ setLayout }: Props) {
  const word = useScopedI18n("store");

  function setMultiColumnLayout() {
    setLayout("multi");
  }

  function setSingleColumnLayout() {
    setLayout("single");
  }

  return (
    <div className="flex flex-col items-center ">
      <div className="flex w-full items-center justify-center gap-[1rem]">
        <div className="relative">
          <input
            type="text"
            placeholder={word("search.placeholder")}
            className="h-[4rem] w-[30rem] rounded-lg p-[1rem] text-[1.5rem] shadow-md md:w-[40rem] lg:w-[55rem]"
          />
          <div className="absolute right-0 top-0 flex h-full items-center justify-center gap-[1rem] rounded-r-lg bg-green-600 px-[1.5rem] text-[1.4rem] text-white shadow-md">
            {word("search.submit")}
            <Image src="/images/icons/store-icons/search-icon.webp" width={18} height={18} alt="search-icon" />
          </div>
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
