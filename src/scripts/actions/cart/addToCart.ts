"use server";

import { sql } from "@vercel/postgres";

export async function addToCart(userId: number, productId: number) {
  if (!userId || !productId) {
    throw new Error("Invalid user or product id");
  }

  try {
    const cart = await sql`SELECT products FROM carts WHERE user_id = ${1}`;

    if (cart.rowCount === 0) {
      const productJson = JSON.stringify([{ id: Number(productId), quantity: Number(1) }]);
      await sql`INSERT INTO carts (user_id, products) VALUES (${Number(userId)}, ${productJson})`;
    } else {
      const products: CartItemDB[] = cart.rows[0].products;

      const productIndex = Number(products.findIndex((product) => product.id === productId));

      if (productIndex === -1) {
        const productJson = JSON.stringify([...products, { id: Number(productId), quantity: Number(1) }]);

        await sql`UPDATE carts SET products = ${productJson} WHERE user_id = ${Number(userId)}`;
      } else {
        const productJson = JSON.stringify({ id: Number(productId), quantity: Number(products[productIndex].quantity + 1) });
        const idx = `{${productIndex}}`;

        console.log("addToCart  productIndex:", productIndex);

        await sql`UPDATE carts SET products = jsonb_set(products, ${idx}, ${productJson}) WHERE user_id = ${Number(userId)}`;
      }
    }
  } catch (err) {
    console.error(err);
  }
}
