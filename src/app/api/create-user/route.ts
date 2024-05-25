import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: NextRequest) {
  const { username, email, password, role } = await request.json();

  try {
    if (!username || !email || !password || !role) {
      throw new Error("Missing required fields");
    }
    await sql`INSERT INTO users (name, email, password, role) VALUES (${username}, ${email}, ${password}, ${role})`;
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 });
  }

  return NextResponse.json({ message: "User created successfully" });
}
