"use server";
import { cookies } from "next/headers";

async function loginUser(formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  if (
    username === "" ||
    password === "" ||
    username === undefined ||
    username === null ||
    password === undefined ||
    password === null
  ) {
    return;
  } else {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        cookies().set("user", JSON.stringify(data.token));
      }
    } catch (err) {
      console.error(err);
      ``;
    }
  }
}

export { loginUser };
