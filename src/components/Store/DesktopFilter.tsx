import Image from "next/image";
import { categories } from "../../data/categories";
import SortPreference from "./SortPreference";
import { useScopedI18n } from "@/locales/client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { z } from "zod";
import toast from "react-hot-toast";

interface Props {
  setPreference: React.Dispatch<React.SetStateAction<string>>;
}

const scheme = z.object({
  from: z.number().min(0, "Minimum price is 0"),
  to: z.number().min(100, "Minimum price is 100").max(2147483647, "Maximum price exceeded"),
});

export default function DesktopFilter({ setPreference }: Props) {
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

  function changeCategory(productCategory: string) {
    if (!category && price) {
      window.location.href = `/store?category=${productCategory}&price=${price}`;
    }

    if (category && price) {
      window.location.href = `/store?category=${productCategory}&price=${price}`;
    }

    if (category && !price) {
      window.location.href = `/store?category=${productCategory}`;
    }

    if (!category && !price) {
      window.location.href = `/store?category=${productCategory}`;
    }
  }

  function onPriceSubmit() {
    const priceObj = {
      from: parseInt(from),
      to: parseInt(to),
    };

    const result = scheme.safeParse(priceObj);

    if (from === "" || to === "") {
      toast.error("Please fill in the price range");
      return;
    }

    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    if (category && !price) {
      window.location.href = `/store?category=${category}&price=${from}-${to}`;
    }

    if (category && price) {
      window.location.href = `/store?category=${category}&price=${from}-${to}`;
    }

    if (!category && !price) {
      window.location.href = `/store?price=${from}-${to}`;
    }
  }

  function onResetFilter() {
    window.location.href = "/store";
  }

  return (
    <div className="mt-[2rem] hidden h-fit w-[40rem] flex-col rounded-md px-[2rem] py-[2rem] lg:flex dark:bg-body">
      <div className="mb-[2rem] flex w-[35rem] flex-col divide-y divide-gray-200 border border-gray-200 bg-white">
        {categories.map((item, idx) => (
          <button
            onClick={() => changeCategory(item.category.toLowerCase())}
            key={idx}
            className="group flex h-[3rem] w-full cursor-pointer items-center gap-[.5rem] rounded-md border px-[1.5rem] py-[2.5rem] duration-300 ease-out hover:translate-x-[3rem] hover:bg-green-600"
          >
            <Image
              src={item.imageUrl}
              width={20}
              height={20}
              alt={item.category}
              className="brightness-75 drop-shadow-2xl group-hover:brightness-150 group-hover:grayscale group-hover:invert"
            />
            <p className="text-[1.6rem] font-medium">
              {word(
                `categories.${item.category.toLowerCase()}` as
                  | "categories.tractors"
                  | "categories.plowers"
                  | "categories.accessories"
                  | "categories.fertilizers"
                  | "categories.pesticides"
                  | "categories.tools"
                  | "categories.livestock",
              )}
            </p>
          </button>
        ))}
      </div>
      <SortPreference setPreference={setPreference} />
      <section className="mt-[2rem] flex flex-col">
        <h4 className="text-[1.8rem] font-bold">{word("price.title")}</h4>
        <div className="mt-[1rem] flex items-center justify-between px-[1]">
          <input
            placeholder={word("price.from")}
            className="h-[4rem] w-[14rem] rounded-lg border border-gray-300 px-[1rem] text-[1.6rem] placeholder:text-gray-500 "
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <p className="text-[2rem]">-</p>
          <input
            placeholder={word("price.to")}
            className="h-[4rem] w-[14rem] rounded-lg border border-gray-300 px-[1rem] text-[1.6rem] placeholder:text-gray-500 "
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
      </section>
      <div className="mt-[2rem] flex w-full flex-col items-center justify-center gap-[1rem]">
        <button
          onClick={onPriceSubmit}
          className="h-[4rem] w-[25rem] rounded-lg bg-green-600 text-[1.5rem] font-bold text-white shadow-md"
        >
          {word("categories.submit")}
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
