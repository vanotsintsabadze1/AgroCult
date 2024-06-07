"use server";
import { sql } from "@vercel/postgres";
import { getSession } from "@auth0/nextjs-auth0";

interface Params {
  searchName?: string;
}

export async function getAllUsers(searchParam: Params) {
  const session = await getSession();
  const role = session?.user?.role;

  if (!role || !role.includes("Admin")) {
    return [];
  }

  try {
    if (searchParam.searchName) {
      const users = await sql`SELECT * FROM users WHERE name ILIKE ${"%" + searchParam.searchName + "%"}`;
      return users.rows;
    } else {
      const users = await sql`SELECT * FROM users`;
      return users.rows;
    }
  } catch (err) {
    console.error(err);
    return [];
  }
}
