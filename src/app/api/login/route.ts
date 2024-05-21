import { NextRequest, NextResponse } from "next/server";

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
    return NextResponse.json({ message: "Logged In", token: data.token }, { status: 200 });
  }

  return NextResponse.json({ message: data }, { status: 400 });
}
