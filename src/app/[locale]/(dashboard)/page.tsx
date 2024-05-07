import Introduction from "../../../components/Hero-Page/Introduction";

// async function fetchItems() {
//   const response = await fetch("https://dummyjson.com/products");
//   const data: Items = await response.json();
//   const sortedProducts = data.products.sort((a, b) => (a.price < b.price ? 1 : -1));
//   return sortedProducts;
// }

export default async function Hero() {
  return (
    <main className="flex w-full flex-col items-center">
      <Introduction />
    </main>
  );
}
