"use server";

import { revalidatePath } from "next/cache";

export async function createUserAction(formData: FormData) {
  await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/create-user`, {
    method: "POST",
    body: JSON.stringify({
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
      role: formData.get("role"),
    }),
  });
  revalidatePath("/admin");
}
