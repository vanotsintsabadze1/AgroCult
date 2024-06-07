"use server";

import { revalidateTag } from "next/cache";

export async function addToCart(userId: string, productId: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/add-cart-items`, {
    method: "POST",
    body: JSON.stringify({ userId, productId }),
  });

  if (res.ok) {
    const data = await res.json();
  }

  revalidateTag("cart");
}
