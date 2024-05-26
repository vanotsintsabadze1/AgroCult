"use server";

import { revalidateTag } from "next/cache";

export async function decreaseItemAmount(userId: string, productId: number) {
  await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/decrease-cart-item`, {
    method: "POST",
    body: JSON.stringify({ userId, productId }),
  });

  revalidateTag("cart");
}
