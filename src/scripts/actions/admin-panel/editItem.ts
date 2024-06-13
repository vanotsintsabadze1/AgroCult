"use server";
import { sql } from "@vercel/postgres";
import { deleteImageBlob } from "./deleteImageBlob";

export async function editItem(itemDetails: ShopItem, id: number, deletedImagesArr: string[]) {
  if (!itemDetails) {
    return;
  }

  const { title, images, description, brand, category, price, discount, amount, extra_details } = itemDetails;

  try {
    const strCategory = JSON.stringify(category);
    const strExtraDetails = JSON.stringify(extra_details);
    const strImages = JSON.stringify(images);

    await deleteImageBlob(deletedImagesArr);

    await sql`UPDATE products SET title = ${String(title)}, description = ${String(description)}, brand = ${String(brand)}, category = ${strCategory}, price = ${Number(price)}, discount = ${Number(discount)}, amount = ${Number(amount)}, extra_details = ${strExtraDetails}, images = ${strImages} WHERE id = ${Number(id)}`.catch(
      (e) => console.error(e),
    );

    return { message: "Successful", status: 200 };
  } catch (error) {
    console.error(error);
    return { error, status: 500 };
  }
}
