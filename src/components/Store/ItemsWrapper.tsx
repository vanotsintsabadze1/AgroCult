import ItemCard from "./ItemCard";

interface Props {
  items: ShopItem[];
  layout: string;
}

export default function ItemsWrapper({ items, layout }: Props) {
  const multiColView =
    "relative grid grid-cols-1 gap-[5rem] pr-[1rem] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3";
  const singleColView =
    "relative grid grid-cols-1 gap-[5rem] pr-[1rem] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 lg:flex lg:flex-col lg:items-center lg:w-auto";

  return (
    <div className={layout === "multi" ? multiColView : singleColView}>
      {items.map((item, idx) => (
        <ItemCard key={idx} {...item} layout={layout} />
      ))}
    </div>
  );
}
