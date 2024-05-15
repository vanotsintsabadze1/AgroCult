import ItemsWrapper from "@/components/Store/ItemsWrapper";
import { ShopItem } from "../../../../types/types";

interface Items {
  products: ShopItem[];
}

async function fetchItems() {
  const response = await fetch("https://dummyjson.com/products");
  const data: Items = await response.json();
  const sortedProducts = data.products.sort((a, b) => (a.price < b.price ? 1 : -1));
  return sortedProducts;
}

export default async function page() {
  const items = await fetchItems();

  return (
    <main className="w-full flex justify-center">
      <ItemsWrapper items={items} />
    </main>
  );
}
