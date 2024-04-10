import Introduction from "@/components/Hero-Page/Hero-Introduction/Introduction";
import ItemsWrapper from "@/components/Hero-Page/Hero-Top-Sellers/ItemsWrapper";

async function fetchItems() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const sortedProducts = data.products.sort((a, b) => (a.price < b.price ? 1 : -1));
  return sortedProducts;
}

export default async function Hero() {
  let items = await fetchItems();

  return (
    <main className="flex w-full flex-col items-center gap-[3rem] p-[4rem_0] lg:gap-[5rem] lg:p-[8rem_0]">
      <Introduction />
      <ItemsWrapper items={items} />
    </main>
  );
}
