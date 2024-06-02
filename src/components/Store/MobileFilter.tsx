import { brands } from "../../data/brands";
import { categories } from "../../data/categories";
import SortPreference from "./SortPreference";

export default function MobileFilter() {
  return (
    <div className="mt-[2rem] flex h-[50rem] w-[40rem] flex-col overflow-y-auto rounded-lg bg-white p-[1rem] shadow-md xs:w-full lg:hidden">
      <SortPreference />
      <section className="mt-[2rem] flex flex-col px-[1rem]">
        <h4 className="text-[1.8rem] font-bold">Price:</h4>
        <div className="mt-[1rem] flex items-center justify-center gap-[1rem]">
          <input
            placeholder="From..."
            className="h-[4rem] w-[18rem] rounded-lg border border-gray-300 px-[1rem] text-[1.6rem] placeholder:text-gray-500 "
          />
          <input
            placeholder="To..."
            className="h-[4rem] w-[18rem] rounded-lg border border-gray-300 px-[1rem] text-[1.6rem] placeholder:text-gray-500 "
          />
        </div>
      </section>
      <section className="mt-[2rem] flex flex-col px-[1rem]">
        <h4 className="text-[1.8rem] font-bold">Category:</h4>
        <div className="mt-[1rem] flex items-center">
          <select className="h-[4rem] overflow-y-auto rounded-lg bg-gray-200 px-[1rem] py-[.5rem] text-[1.6rem] text-black shadow-sm outline-none">
            <option>Any</option>
            {categories.map((item, idx) => (
              <option key={idx}>{item.category}</option>
            ))}
          </select>
        </div>
      </section>
      <section className="mt-[2rem] flex h-[20rem] flex-col overflow-auto px-[1rem]">
        <h4 className="text-[1.8rem] font-bold">Brand:</h4>
        <div className="mt-[1rem] flex h-[10rem] flex-col gap-[1rem]">
          {brands.map((brand, idx) => (
            <div key={idx} className="flex items-center gap-[.5rem]">
              <input type="checkbox" className="h-[1.5rem] w-[1.5rem]" />
              <label className="text-[1.6rem]">{brand}</label>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-[3rem] flex w-full items-center justify-center">
        <button className="h-[4rem] w-[25rem] rounded-lg bg-green-600 text-[1.5rem] font-bold text-white shadow-md">
          Submit
        </button>
      </div>
    </div>
  );
}
