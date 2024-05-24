import ItemCard from "./ItemCard";
import { getScopedI18n } from "../../locales/server";

interface Props {
  items: ShopItem[];
}

export default async function ItemsWrapper({ items }: Props) {
  const word = await getScopedI18n("store");

  return (
    <section className="overflow mt-[2rem] flex w-full flex-col items-center">
      <div className="mt-[2rem] flex w-full items-center justify-center">
        <h2 className="mb-[2rem] text-[2.2rem] font-bold uppercase tracking-wide dark:text-dark-mode">{word("topSelling")}</h2>
      </div>
      <div className="flex w-full items-center justify-center gap-x-[6rem] p-[4rem_2rem] xs:gap-x-0">
        <div className="grid gap-[7rem] px-[3rem] xs:px-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => {
            return <ItemCard {...item} key={item.id} />;
          })}
        </div>
      </div>
    </section>
  );
}
