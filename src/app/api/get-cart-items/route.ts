import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { userId } = await request.json();

  if (!userId) {
    return NextResponse.json({ message: "Invalid user or product id" }, { status: 400 });
  }

  try {
    const products =
      await sql`SELECT products.title, products.description, products.price, products.discount, products.images, cart.product_id, cart.quantity, cart.created_at FROM cart JOIN products ON cart.product_id = products.id WHERE cart.user_id = ${String(userId)} ORDER BY cart.created_at ASC`;

    return NextResponse.json(products.rows, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
