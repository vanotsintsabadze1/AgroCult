import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { getAuthToken } from "@/scripts/actions/admin-panel/getAuthToken";
import { revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  const { newUsername, newEmail, userId } = await req.json();
  const token = await getAuthToken();
  const url = process.env.AUTH0_ISSUER_BASE_URL;

  if (!token || !userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  if (!newUsername) {
    return new Response("Bad Request", { status: 400 });
  }

  try {
    let res;
    if (userId.startsWith("google")) {
      res = await fetch(`${url}/api/v2/users/${userId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nickname: newUsername,
          name: newUsername,
        }),
      });
    } else {
      res = await fetch(`${url}/api/v2/users/${userId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nickname: newUsername,
          email: newEmail,
          name: newUsername,
        }),
      });
    }
    if (res.ok) {
      try {
        await sql`UPDATE users SET name = ${newUsername} WHERE user_id = ${userId}`;
        return NextResponse.json({ message: "Username Updated" }, { status: 200 });
      } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
      }
    }
    revalidateTag("profile");
    return NextResponse.json({ message: "Username Updated" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
