import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    const { id, name, email, password, role } = await request.json();

    if (!id || !name || !email || !password || !role) {
      throw new Error("Please provide all the required fields");
    }

    await sql`UPDATE users SET name = ${name}, email = ${email}, password = ${password}, role = ${role} WHERE id = ${Number(
      id
    )}`;
    return NextResponse.json({ message: "User updated successfully" });
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 });
  }
}
