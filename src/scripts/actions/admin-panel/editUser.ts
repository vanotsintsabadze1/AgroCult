"use server";

import { getAuthToken } from "./getAuthToken";
import { sql } from "@vercel/postgres";

export async function editUser(id: string, name: string, email: string, role: string) {
  const url = process.env.AUTH0_ISSUER_BASE_URL;
  const token = await getAuthToken();

  if (token === "") {
    return { message: "Invalid Token", status: 500 };
  }

  try {
    const res = await fetch(`${url}/api/v2/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
      }),
      redirect: "follow",
    });

    if (!res.ok) {
      return { message: "Failed to edit user", status: 500 };
    } else {
      try {
        await sql`UPDATE users SET name = ${String(name)}, email = ${String(email)}, role = ${String(role)} WHERE user_id = ${String(id)}`;
        return { message: "User edited successfully", status: 200 };
      } catch (error) {
        return { message: "Failed to edit user", status: 500 };
      }
    }
  } catch (error) {
    return { message: "Failed to edit user", status: 500 };
  }
}
