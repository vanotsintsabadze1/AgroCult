import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export const revalidate = 0;

export async function POST(req: NextRequest) {
  const { userId } = await req.json();

  try {
    await sql`DELETE FROM cart WHERE user_id = ${userId}`;

    return NextResponse.json({ message: "Cart emptied", status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error emptying cart", status: 500 });
  }
}
