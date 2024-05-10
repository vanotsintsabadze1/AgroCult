import ItemsWrapper from "@/components/Hero-Page/Hero-Top-Sellers/ItemsWrapper";
import { ShopItem } from "../../../../types/types";

interface Props {
  params: {
    locale: string;
  };
}

interface Items {
  products: ShopItem[];
}

async function fetchItems() {
  const response = await fetch("https://dummyjson.com/products");
  const data: Items = await response.json();
  const sortedProducts = data.products.sort((a, b) => (a.price < b.price ? 1 : -1));
  return sortedProducts;
}

export default async function page({ params: { locale } }: Props) {
  const items = await fetchItems();

  return <ItemsWrapper items={items} locale={locale} />;
}
