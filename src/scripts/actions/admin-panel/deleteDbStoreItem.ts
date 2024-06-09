"use server";
import { sql } from "@vercel/postgres";

export async function deleteDbStoreItem(id: number) {
  if (!id) {
    return;
  }

  try {
    await sql`DELETE FROM products WHERE id = ${Number(id)}`;
    return { message: "Success", status: 200 };
  } catch (err) {
    console.error(err);
    return { err, status: 500 };
  }
}
