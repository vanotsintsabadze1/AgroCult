import { unstable_noStore as noStore } from "next/cache";
import StoreWrapper from "../../../../components/Store/StoreWrapper";
import { fetchItems } from "@/scripts/actions/store/fetchItems";
import { Metadata } from "next";

interface Props {
  searchParams: {
    category: string;
    price: string;
    search: string;
  };
}

export const metadata: Metadata = {
  title: "Store",
  description: "Official AgroCult store page.",
};

export default async function page({ searchParams }: Props) {
  noStore();
  const items = (await fetchItems({ searchParams })) as ShopItem[];

  return (
    <main className="flex w-full justify-center">
      <StoreWrapper items={items} />
    </main>
  );
}
