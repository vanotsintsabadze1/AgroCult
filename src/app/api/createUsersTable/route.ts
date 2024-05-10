import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res =
      await sql`CREATE TABLE users (id SERIAL, name varchar(255), email varchar(255), password varchar(255), role varchar(255))`;
    return NextResponse.json({ res }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 });
  }
}
