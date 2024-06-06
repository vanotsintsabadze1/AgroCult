"use server";

import { revalidatePath } from "next/cache";
import { sql } from "@vercel/postgres";

export async function deleteUser(id: string) {
  try {
    await sql`DELETE FROM users WHERE user_id = ${String(id)}`;
  } catch (err) {
    console.error(err);
  }

  revalidatePath("/admin/users");
}
