import ItemsWrapper from "@/components/Store/ItemsWrapper";

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
    <main className="flex w-full justify-center">
      <ItemsWrapper items={items} />
    </main>
  );
}
