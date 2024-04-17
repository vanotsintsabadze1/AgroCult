"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function deleteUser() {
  cookies().delete("user");
  redirect("/login");
}
