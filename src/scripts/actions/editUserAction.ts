"use server";

import { revalidatePath } from "next/cache";

export async function editUserAction(id: number, name: string, email: string, password: string, role: string) {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/updateUser`, {
      method: "PUT",
      body: JSON.stringify({ id, name, email, password, role }),
    });
  } catch (err) {
    console.error(err);
  }

  revalidatePath("/admin");
}
