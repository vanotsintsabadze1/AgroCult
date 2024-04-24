import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const data = await res.json();

  if (res.ok) {
    cookies().set("user", JSON.stringify(data.token));
  }

  return Response.json({ data, username });
}
