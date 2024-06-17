import { useScopedI18n } from "@/locales/client";

export default function SortPreference() {
  const word = useScopedI18n("store.sort");

  return (
    <section className="flex flex-col gap-[1rem] px-[1rem] lg:px-0">
      <h4 className="text-[1.8rem] font-bold">{word("title")}</h4>
      <select className="h-[3.5rem] w-[25rem] rounded-lg bg-gray-300 px-[1rem] text-[1.4rem] shadow-sm">
        <option>{word("mostrelevant")}</option>
        <option>{word("bestSelling")}</option>
        <option>{word("priceLowToHigh")}</option>
        <option>{word("priceHighToLow")}</option>
      </select>
    </section>
  );
}
