import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  try {
    const users = await sql`SELECT * FROM users`;
    return NextResponse.json({ users }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 });
  }
}
