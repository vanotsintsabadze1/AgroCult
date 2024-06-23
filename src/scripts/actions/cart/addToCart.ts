"use server";

export async function addToCart(userId: string, productId: number) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/add-cart-items`, {
      method: "POST",
      body: JSON.stringify({ userId, productId }),
    });

    if (!res.ok) {
      throw new Error("Failed to add to cart");
    }
    return { status: 200 };
  } catch (error) {
    console.error(error);
    return { status: 500 };
  }
}
