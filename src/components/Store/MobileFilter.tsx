import { categories } from "../../data/categories";
import SortPreference from "./SortPreference";
import { useScopedI18n } from "@/locales/client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { changeCategory, changePrice, onResetFilter } from "@/scripts/helpers/filter";

interface Props {
  setPreference: React.Dispatch<React.SetStateAction<string>>;
}

export default function MobileFilter({ setPreference }: Props) {
  const word = useScopedI18n("store");
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const price = searchParams.get("price");
  const search = searchParams.get("search");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  useEffect(() => {
    if (price) {
      const [fromPrice, toPrice] = price.split("-");
      setFrom(fromPrice);
      setTo(toPrice);
    }
  }, []);

  function onSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value === "Select") {
      return;
    } else {
      changeCategory(e.target.value.toLowerCase(), price as string, category as string);
    }
  }

  return (
    <div className="mt-[2rem] flex min-h-[40rem] w-[40rem] flex-col overflow-y-auto rounded-lg bg-white px-[1rem] py-[3rem] shadow-md lg:hidden xs:w-full">
      <SortPreference setPreference={setPreference} />
      <section className="mt-[2rem] flex flex-col px-[1rem]">
        <h4 className="text-[1.8rem] font-bold">{word("sort.title")}:</h4>
        <div className="mt-[1rem] flex items-center">
          <select
            onChange={onSelectChange}
            className="h-[4rem] overflow-y-auto rounded-lg bg-gray-200 px-[1rem] py-[.5rem] text-[1.4rem] text-black shadow-sm outline-none"
          >
            <option>Select</option>
            {categories.map((item, idx) => (
              <option value={item.category.toLowerCase()} key={idx}>
                {word(
                  `categories.${item.category.toLowerCase()}` as
                    | "categories.tractors"
                    | "categories.plowers"
                    | "categories.accessories"
                    | "categories.fertilizers"
                    | "categories.pesticides"
                    | "categories.any",
                )}
              </option>
            ))}
          </select>
        </div>
      </section>
      <section className="mt-[2rem] flex flex-col px-[1rem]">
        <h4 className="text-[1.8rem] font-bold">{word("price.title")}</h4>
        <div className="mt-[1rem] flex items-center justify-center gap-[1rem]">
          <input
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder={word("price.from")}
            className="h-[4rem] w-[18rem] rounded-lg border border-gray-300 px-[1rem] text-[1.6rem] placeholder:text-gray-500 "
          />
          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder={word("price.to")}
            className="h-[4rem] w-[18rem] rounded-lg border border-gray-300 px-[1rem] text-[1.6rem] placeholder:text-gray-500 "
          />
        </div>
      </section>
      <div className="mt-[3rem] flex w-full flex-col items-center justify-center gap-[1rem]">
        <button
          onClick={() => changePrice(from, to, setFrom, setTo, category as string, price as string)}
          className="h-[4rem] w-[25rem] rounded-lg bg-green-600 text-[1.5rem] font-bold text-white shadow-md"
        >
          Submit
        </button>
        {(category || price || search) && (
          <button onClick={onResetFilter} className="mt-[1rem] text-[1.3rem] font-medium">
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
