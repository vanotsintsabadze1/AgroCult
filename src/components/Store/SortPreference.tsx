import { useScopedI18n } from "@/locales/client";

interface Props {
  setPreference: React.Dispatch<React.SetStateAction<string>>;
}

export default function SortPreference({ setPreference }: Props) {
  const word = useScopedI18n("store.sort");

  return (
    <section className="flex flex-col gap-[1rem] px-[1rem] lg:px-0">
      <h4 className="text-[1.8rem] font-bold">{word("title")}:</h4>
      <select
        onChange={(e) => setPreference(e.target.value)}
        className="h-[3.5rem] w-[25rem] rounded-lg bg-gray-200 px-[1rem] text-[1.4rem] shadow-sm"
      >
        <option value="most_relevant">{word("mostrelevant")}</option>
        <option value="p_low_high">{word("priceLowToHigh")}</option>
        <option value="p_high_low">{word("priceHighToLow")}</option>
      </select>
    </section>
  );
}
