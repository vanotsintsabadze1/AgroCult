import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { userId, productId } = await request.json();
  console.log("POST  productId:", productId);
  console.log("POST  userId:", userId);

  if (!userId || !productId) {
    throw new Error("Invalid user or product id");
  }

  try {
    const res = await sql`SELECT * FROM cart WHERE product_id = ${Number(productId)} AND user_id = ${Number(userId)}`;

    if (res.rowCount > 0) {
      await sql`UPDATE cart SET quantity = quantity + 1 WHERE product_id = ${Number(productId)} AND user_id = ${Number(userId)}`;
    } else {
      await sql`INSERT INTO cart (user_id, product_id, quantity, created_at, updated_at) VALUES (${Number(userId)}, ${Number(productId)}, ${Number(1)}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`;
    }

    return NextResponse.json({ message: "Added to cart" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}