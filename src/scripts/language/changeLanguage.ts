"use server";
import { cookies } from "next/headers";

export async function changeLanguage(value: string) {
  cookies().set("Next-Locale", value);
}
