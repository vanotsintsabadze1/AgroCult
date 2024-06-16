import IndividualItemDescription from "@/components/Store/IndividualItemDescription";
import { sql } from "@vercel/postgres";
import Image from "next/image";

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
    <main className="flex w-full justify-center p-[2rem]">
      <div className="flex w-[40rem] flex-col items-center gap-[1.5rem] rounded-[2rem] bg-white p-[2rem] shadow-md xs:w-full">
        <div className="relative h-[25rem] w-[35rem] xs:h-[20rem] xs:w-[30rem]">
          <Image src={product.images[0]} alt={`product-image-${product.id}`} className="rounded-[1rem]" fill />
        </div>
        <div className="flex w-full flex-col gap-[.5rem]">
          <h2 className="text-[2.5rem] font-bold">{product.title}</h2>
          <p className="text-[1.3rem] font-medium">
            {product.price === 0 ? "Submit a support ticket if you want to purchase this product" : product.price}
          </p>
          <div className="flex flex-col gap-[1rem]">
            <h2 className="text-[1.8rem] font-bold">Details</h2>
            {Object.entries(product.extra_details).map(([key, val], idx) => (
              <div className="flex items-center justify-between" key={idx}>
                <p className="text-[1.3rem] font-medium">{key}</p>
                <input readOnly type="text" defaultValue={val} className="text-[1.3rem] font-normal" />
              </div>
            ))}
          </div>
          <IndividualItemDescription description={product.description} className="mt-[1rem] text-[1.4rem]" />
        </div>
      </div>
    </main>
  );
}
