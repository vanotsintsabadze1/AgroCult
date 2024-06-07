import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await getSession();

  let id, email, avatar, name;

  if (data) {
    id = data.user.sub;
    email = data.user.email;
    avatar = data.user.picture;
    name = data.user.name;
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
