import StoreWrapper from "../../../../components/Store/StoreWrapper";
import { unstable_noStore as noStore } from "next/cache";

async function fetchItems() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-all-items`);
  const data: ShopItem[] = await response.json();

  return data;
}

export default async function page() {
  noStore();
  const items = await fetchItems();

  return (
    <main className="flex w-full justify-center">
      <StoreWrapper items={items} />
    </main>
  );
}
