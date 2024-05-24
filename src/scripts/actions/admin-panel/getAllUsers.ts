"use server";

import { revalidatePath } from "next/cache";

export async function getAllUsers() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-all-users`);
  const { users } = await response.json();
  revalidatePath("/admin");

  return users.rows;
}
