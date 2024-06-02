import ItemCard from "./ItemCard";

interface Props {
  items: ShopItem[];
}

export default function ItemsWrapper({ items }: Props) {
  return (
    <div className="2xl:grid-cols-3 relative grid grid-cols-1 gap-[5rem] pr-[1rem] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      {items.map((item, idx) => (
        <ItemCard key={idx} {...item} />
      ))}
    </div>
  );
}
