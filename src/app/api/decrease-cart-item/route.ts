import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { userId, productId } = await request.json();

  if (!userId || !productId) {
    return NextResponse.json({ message: "Invalid user or product id" }, { status: 400 });
  }

  try {
    const res =
      await sql`SELECT cart.quantity FROM cart WHERE product_id = ${Number(productId)} AND user_id = ${String(userId)}`;

    if (res.rows[0].quantity === 1) {
      await sql`DELETE FROM cart WHERE product_id = ${Number(productId)} AND user_id = ${String(userId)}`;
    } else {
      await sql`UPDATE cart SET quantity = quantity - 1 WHERE product_id = ${Number(productId)} AND user_id = ${String(userId)}`;
    }

    return NextResponse.json({ message: "Decreased cart item" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 });
  }
}
