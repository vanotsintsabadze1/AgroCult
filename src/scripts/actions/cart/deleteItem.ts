"use server";

import { revalidateTag } from "next/cache";

export async function deleteItem(userId: string, productId: number) {
  await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/delete-cart-item`, {
    method: "DELETE",
    body: JSON.stringify({ userId, productId }),
  });

  revalidateTag("cart");
}
