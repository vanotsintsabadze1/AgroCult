import { sql } from "@vercel/postgres";
import SingleItemPageCard from "@/components/Store/Item/SingleItemPageCard";

interface Props {
  params: {
    id: string;
  };
}

async function getProductDetails(id: string) {
  if (!id) return null;

  try {
    const res = await sql`SELECT * FROM products WHERE id = ${id}`;
    const product = res.rows[0] as ShopItem;

    return product;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function page({ params: { id } }: Props) {
  const product = await getProductDetails(id);

  if (!product) return null;

  return (
    <main className="flex w-full justify-center py-[4rem]">
      <SingleItemPageCard product={product} />
    </main>
  );
}
