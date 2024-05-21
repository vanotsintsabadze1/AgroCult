"use server";

export async function getAllUsers() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getAllUsers`);
  const { users } = await response.json();
  return users.rows;
}
