"use server";

import { sql } from "@vercel/postgres";
import { put } from "@vercel/blob";

export async function createItem(itemDetails: ShopItem, formData: FormData) {
  const { title, description, price, brand, extra_details, category, discount, amount, buyable } = itemDetails;

  if (title === "" || description === "" || brand === "" || category.length === 0) {
    return {
      status: 400,
      message: "Please fill out all the required fields",
    };
  }

  const images = formData.getAll("new-item-image-upload") as File[];
  const blobArr = [];

  if (images.length === 0) {
    return {
      status: 400,
      message: "Please upload at least one image",
    };
  }

  console.log(itemDetails);

  try {
    const strExtraDetails = JSON.stringify(extra_details);
    const strCategories = JSON.stringify(category);
    const res =
      await sql`INSERT INTO products (title, description, price, brand, extra_details, category, discount, amount, buyable) VALUES (${title}, ${description}, ${price}, ${brand}, ${strExtraDetails}, ${strCategories}, ${discount}, ${amount}, ${buyable}) RETURNING id`;

    const id = res.rows[0].id;

    for (const file of images) {
      const { url } = await put(`products/${id}/${file.name}`, file, {
        access: "public",
      });
      blobArr.push(url);
    }
    const strBlobArr = JSON.stringify(blobArr);

    await sql`UPDATE products SET images = ${strBlobArr} WHERE id = ${Number(id)}`;

    return {
      status: 200,
      message: "Item created successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "Internal Server Error",
    };
  }
}
