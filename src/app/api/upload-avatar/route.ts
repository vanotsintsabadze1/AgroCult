import { put } from "@vercel/blob";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: Request) {
  const formData = await request.formData();

  const file = formData.get("file") as File;
  const userId = formData.get("userId") as string;

  if (!file || !userId) {
    return NextResponse.json({ message: "Bad Request" }, { status: 400 });
  }

  const blob = await put(`users/${userId}/profile-picture/${file.name}`, file, {
    access: "public",
  });

  const url = blob.url;

  try {
    await sql`UPDATE users SET image = ${String(url)} WHERE user_id = ${userId}`;
    return NextResponse.json({ message: "Avatar Updated" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
