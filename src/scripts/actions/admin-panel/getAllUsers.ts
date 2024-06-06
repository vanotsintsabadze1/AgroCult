"use server";
import { sql } from "@vercel/postgres";
import { getSession } from "@auth0/nextjs-auth0";

export async function getAllUsers() {
  const session = await getSession();
  const role = session?.user?.role;

  if (!role || !role.includes("Admin")) {
    return [];
  }

  try {
    const users = await sql`SELECT * FROM users`;
    return users.rows;
  } catch (err) {
    console.error(err);
    return [];
  }
}
