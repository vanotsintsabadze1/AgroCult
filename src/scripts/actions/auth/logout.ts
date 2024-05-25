"use server";

import { cookies } from "next/headers";

export async function logout() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/logout`, {
      method: "POST",
    });

    if (res.ok) {
      cookies().delete("user");
      return res.json();
    }
  } catch (err) {
    console.error(err);
  }
}
