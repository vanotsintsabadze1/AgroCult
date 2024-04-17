import Introduction from "../../components/Hero-Page/Hero-Introduction/Introduction";
import ItemWrapper from "../../components/Hero-Page/Hero-Top-Sellers/ItemsWrapper";
import Footer from "../../components/Footer/Footer";

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
      <ItemWrapper items={items} />
    </main>
  );
}
