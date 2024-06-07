import { getSession } from "@auth0/nextjs-auth0";
import { put } from "@vercel/blob";
import { sql } from "@vercel/postgres";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename");
  const session = await getSession();
  const name = session?.user.name;

  if (!filename || !request.body) {
    return NextResponse.json(new Error("Error while uploading image"), {
      status: 400,
    });
  }
  const blob = await put(`${name}/${filename}`, request.body, {
    access: "public",
  });

  const url = blob.url;
  const userId = session?.user.sub;

  try {
    await sql`UPDATE users SET image = ${url} WHERE user_id = ${userId}`;
  } catch (err) {
    NextResponse.json({ err }, { status: 500 });
  }
  revalidateTag("profile");
  return NextResponse.json(blob);
}
