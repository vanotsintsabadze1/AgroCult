"use server";

import { sql } from "@vercel/postgres";
import { getAuthToken } from "./getAuthToken";

export async function deleteUser(id: string) {
  const url = process.env.AUTH0_ISSUER_BASE_URL;
  const token = await getAuthToken();

  if (token === "") {
    return { message: "Invalid Token", status: 500 };
  }

  try {
    const res = await fetch(`${url}/api/v2/users/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      redirect: "follow",
    });

    if (!res.ok) {
      return { message: "Failed to delete the user", status: res.status };
    }

    await sql`DELETE FROM users WHERE user_id = ${String(id)}`;
    return { message: "User deleted successfully!", status: 200 };
  } catch (err) {
    console.error(err);
    return { message: "Failed to delete the user", status: 500 };
  }
}
