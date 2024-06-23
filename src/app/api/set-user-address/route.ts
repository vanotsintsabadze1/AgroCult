import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { userId, extraDetails } = await req.json();

  if (!userId || !extraDetails) {
    return new Response("Bad Request", { status: 400 });
  }

  try {
    await sql`UPDATE users SET extra_details = ${extraDetails} WHERE user_id = ${userId}`;

    return NextResponse.json({ message: "User Address Updated" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
