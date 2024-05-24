import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(request: NextRequest) {
  const userId = 3;
  const { productId } = await request.json();

  try {
    const res = await sql`SELECT * FROM carts WHERE user_id = ${Number(userId)}`;

    if (res.rows.length === 0) {
      const productJson = JSON.stringify([{ id: Number(productId), quantity: 1 }]);
      await sql`INSERT INTO carts (user_id, products) VALUES (${Number(userId)}, ${productJson}::jsonb)`;
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 });
  }
}
