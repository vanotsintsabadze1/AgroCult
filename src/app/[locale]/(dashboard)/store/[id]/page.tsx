import { sql } from "@vercel/postgres";
import SingleItemPageCard from "@/components/Store/Item/SingleItemPageCard";
import Head from "next/head";
import ShareSection from "@/components/Store/Item/ShareSection";
import ItemCard from "@/components/Store/ItemCard";
import { getScopedI18n } from "@/locales/server";

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

async function getRecommendedItems(category: string) {
  try {
    const res =
      await sql`SELECT * FROM products WHERE EXISTS (SELECT 1 FROM jsonb_array_elements_text(products.category) AS elem WHERE elem ILIKE ${String(category)}) ORDER BY RANDOM() LIMIT 4`;

    return res.rows as ShopItem[];
  } catch (error) {
    console.error(error);
    return [];
  }
}
export default async function page({ params: { id } }: Props) {
  const product = await getProductDetails(id);
  const word = await getScopedI18n("store");

  if (!product) return null;

  const recommendedItems = await getRecommendedItems(product?.category[0] as string);

  return (
    <>
      <Head>
        <meta name="og:title" content={product.title} />
        <meta name="og:description" content={product.description} />
        <meta name="og:image" content={product.images[0]} />
        <meta name="og:url" content={`https://tbc-react-pi.vercel.app/store/${id}`} />
      </Head>
      <main className="flex w-full flex-col items-center py-[4rem]">
        <SingleItemPageCard product={product} />
        <div className="mt-[2rem] flex w-full flex-col items-center gap-[2rem] py-[2rem]">
          <p className="text-[2rem] font-medium">{word("product.shareProduct")}</p>
          <ShareSection id={id} />
        </div>
        <div className="mt-[3rem] flex w-full items-center justify-center">
          <h2 className="text-[2.5rem] font-bold">{word("product.recommendedItems")}</h2>
        </div>
        <div className="mt-[1rem] flex w-full items-center gap-[5rem] overflow-x-auto py-[2rem] xl:justify-center">
          {recommendedItems.map((item) => (
            <ItemCard key={item.id} {...item} layout="multi" />
          ))}
        </div>
      </main>
    </>
  );
}
