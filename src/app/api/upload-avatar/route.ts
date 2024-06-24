import { put } from "@vercel/blob";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { getAuthToken } from "@/scripts/actions/admin-panel/getAuthToken";

export const revalidate = 0;

export async function POST(request: Request) {
  const formData = await request.formData();
  const authToken = await getAuthToken();
  const apiUrl = process.env.AUTH0_ISSUER_BASE_URL;

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
    await fetch(`${apiUrl}/api/v2/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        picture: url,
      }),
    });

    await sql`UPDATE users SET image = ${String(url)} WHERE user_id = ${userId}`;
    return NextResponse.json({ message: "Avatar Updated" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
