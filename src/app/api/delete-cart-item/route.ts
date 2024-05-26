import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const { userId, productId } = await request.json();

  if (!userId || !productId) {
    return NextResponse.json({ message: "Invalid user or product id" }, { status: 400 });
  }

  try {
    await sql`DELETE FROM cart WHERE product_id = ${Number(productId)} AND user_id = ${String(userId)}`;
    return NextResponse.json({ message: "Deleted cart item" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 });
  }
}
