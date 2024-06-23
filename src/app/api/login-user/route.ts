import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { getAuthToken } from "../../../scripts/actions/admin-panel/getAuthToken";

export async function GET() {
  const url = process.env.AUTH0_ISSUER_BASE_URL;
  const data = await getSession();
  const token = await getAuthToken();

  let id, email, avatar, name;

  if (data) {
    id = data.user.sub;
    email = data.user.email;
    avatar = data.user.picture;
    name = data.user.nickname;

    if (data.user.name !== data.user.nickname) {
      try {
        await fetch(`${url}/api/v2/users/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name,
          }),
        });
      } catch (err) {
        console.error(err);
      }
    }
  }

  try {
    const res = await sql`SELECT * FROM users WHERE user_id = ${String(id)}`;
    if (res.rowCount === 0) {
      await sql`INSERT INTO users (user_id, name, email, image) VALUES (${String(id)}, ${String(name)}, ${String(email)}, ${String(avatar)})
        `;
    }
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 });
  }

  return redirect("/");
}
