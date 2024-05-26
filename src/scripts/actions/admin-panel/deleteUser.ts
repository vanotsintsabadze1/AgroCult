"use server";

import { revalidatePath } from "next/cache";

export async function deleteUser(id: number) {
  await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/delete-user`, {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
  revalidatePath("/admin");
}
