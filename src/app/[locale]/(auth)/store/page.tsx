import ItemsWrapper from "@/components/Store/ItemsWrapper";

interface Items {
  products: ShopItem[];
}

async function fetchItems() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-all-items`);
  const data: ShopItem[] = await response.json();

  return data;
}

export default async function page() {
  const items = await fetchItems();

  return (
    <main className="flex w-full justify-center">
      <ItemsWrapper items={items} />
    </main>
  );
}
