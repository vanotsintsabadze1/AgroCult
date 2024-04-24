import Introduction from "../../../components/Hero-Page/Hero-Introduction/Introduction";
import ItemWrapper from "../../../components/Hero-Page/Hero-Top-Sellers/ItemsWrapper";
import { ShopItem } from "../../../types/types";

interface Items {
  products: ShopItem[];
}

interface Props {
  params: {
    locale: string;
  };
}

async function fetchItems() {
  const response = await fetch("https://dummyjson.com/products");
  const data: Items = await response.json();
  const sortedProducts = data.products.sort((a, b) => (a.price < b.price ? 1 : -1));
  return sortedProducts;
}

export default async function Hero({ params: { locale } }: Props) {
  let items: ShopItem[] = await fetchItems();

  return (
    <main className="flex w-full flex-col items-center gap-[3rem] p-[4rem_0] lg:gap-[5rem] lg:p-[8rem_0]">
      <Introduction locale={locale} />
      <ItemWrapper items={items} locale={locale} />
    </main>
  );
}
