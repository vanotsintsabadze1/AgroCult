import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { userId } = await req.json();

  try {
    const res = await sql`SELECT * FROM users WHERE user_id = ${userId}`;
    const data = res.rows[0];
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 });
  }
}
