import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    await sql`DELETE FROM users WHERE id = ${Number(id)}`;
    return NextResponse.json({ msg: "User deleted successfully" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 });
  }
}
