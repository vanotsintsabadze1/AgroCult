import Image from "next/image";
import { categories } from "../../data/categories";
import { brands } from "../../data/brands";
import SortPreference from "./SortPreference";
import { useScopedI18n } from "@/locales/client";

export default function DesktopFilter() {
  const word = useScopedI18n("store");

  return (
    <div className="mt-[2rem] hidden h-fit w-[40rem] flex-col rounded-md px-[2rem] py-[2rem] lg:flex dark:bg-body">
      <div className="mb-[2rem] flex w-[35rem] flex-col divide-y divide-gray-200 border border-gray-200 bg-white">
        {categories.map((item, idx) => (
          <div
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
          </div>
        ))}
      </div>
      <SortPreference />
      <section className="mt-[2rem] flex flex-col">
        <h4 className="text-[1.8rem] font-bold">{word("price.title")}:</h4>
        <div className="mt-[1rem] flex items-center justify-between px-[1]">
          <input
            placeholder={word("price.from")}
            className="h-[4rem] w-[14rem] rounded-lg border border-gray-300 px-[1rem] text-[1.6rem] placeholder:text-gray-500 "
          />
          <p className="text-[2rem]">-</p>
          <input
            placeholder={word("price.to")}
            className="h-[4rem] w-[14rem] rounded-lg border border-gray-300 px-[1rem] text-[1.6rem] placeholder:text-gray-500 "
          />
        </div>
      </section>
      <section className="mt-[2rem] flex h-[12rem] flex-col overflow-auto">
        <h4 className="text-[1.8rem] font-bold">{word("brand")}:</h4>
        <div className="mt-[1rem] flex h-[10rem] flex-col gap-[1rem]">
          {brands.map((brand, idx) => (
            <div key={idx} className="flex items-center gap-[.5rem]">
              <input type="checkbox" className="h-[1.5rem] w-[1.5rem]" />
              <label className="text-[1.6rem]">{brand}</label>
            </div>
          ))}
        </div>
      </section>
      <div className="mt-[2rem] flex w-full items-center justify-center">
        <button className="h-[4rem] w-[25rem] rounded-lg bg-green-600 text-[1.5rem] font-bold text-white shadow-md">
          {word("categories.submit")}
        </button>
      </div>
    </div>
  );
}
