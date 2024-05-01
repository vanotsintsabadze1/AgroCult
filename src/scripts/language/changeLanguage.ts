"use server";
import { cookies } from "next/headers";

export async function changeLanguage() {
  const currentLanguage = cookies().get("Next-Locale");

  if (currentLanguage?.value === "en") {
    cookies().set("Next-Locale", "ka");
  } else {
    cookies().set("Next-Locale", "en");
  }
}
