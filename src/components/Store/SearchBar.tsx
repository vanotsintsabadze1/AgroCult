import Image from "next/image";

interface Props {
  setShouldMobileFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchBar({ setShouldMobileFilterOpen }: Props) {
  const handleMobileFilter = () => {
    setShouldMobileFilterOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full items-center justify-center gap-[1rem]">
        <input
          type="text"
          placeholder="Search for items"
          className="h-[4rem] w-[30rem] rounded-lg p-[1rem] text-[1.5rem] shadow-md"
        />
        <div className="flex gap-[1rem]">
          <button className="grid h-[3.5rem] w-[3.5rem] grid-cols-2 rounded-lg bg-gray-300 grayscale duration-150 ease-out hover:bg-blue-200/50 hover:grayscale-0">
            <Image
              src="/images/icons/store-icons/multi-column-view.webp"
              fill
              alt="multi-column-icon"
              className="p-[.4rem]"
            ></Image>
          </button>
          <button className="grid h-[3.5rem] w-[3.5rem] grid-cols-2 rounded-lg bg-gray-300 grayscale duration-150 ease-out hover:bg-blue-200/50 hover:grayscale-0">
            <Image
              src="/images/icons/store-icons/single-column-view.webp"
              fill
              alt="multi-column-icon"
              className="p-[.4rem]"
            ></Image>
          </button>
        </div>
      </div>
      <button
        onClick={handleMobileFilter}
        className="mt-[2rem] flex h-[4rem] w-[35rem] items-center justify-center gap-[.5rem] rounded-lg bg-green-600 text-[1.6rem] font-bold text-white xs:w-full"
      >
        <Image
          width={17}
          height={17}
          src="/images/icons/store-icons/filter-icon.webp"
          alt="filter-icon"
        />
        Filter
      </button>
    </div>
  );
}
