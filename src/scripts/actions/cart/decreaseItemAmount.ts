"use server";

import { revalidateTag } from "next/cache";

export async function decreaseItemAmount(userId: string, productId: number) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/decrease-cart-item`, {
      method: "POST",
      body: JSON.stringify({ userId, productId }),
    });

    if (!res.ok) {
      return { status: 500 };
    }

    revalidateTag("cart");
    return { status: 200 };
  } catch (error) {
    console.error(error);
    return { status: 500 };
  }
}
