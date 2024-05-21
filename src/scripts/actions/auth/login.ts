"use server";

import { cookies } from "next/headers";

async function loginUser(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  console.log(`Logging in with username: ${username} and password: ${password}`);

  if (username === "" || password === "" || username === undefined || username === null || password === undefined || password === null) {
    return;
  } else {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        cookies().set("user", data.token);
      }
    } catch (err) {
      console.error(err);
    }
  }
}

export { loginUser };
