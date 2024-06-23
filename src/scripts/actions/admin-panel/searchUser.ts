"use server";
import { redirect } from "next/navigation";

export async function searchUser(formData: FormData) {
  const searchName = formData.get("search");

  if (!searchName) {
    return redirect("/admin/users");
  }

  const params = new URLSearchParams({ search_name: searchName as string });

  return redirect(`/admin/users?${params.toString()}`);
}
