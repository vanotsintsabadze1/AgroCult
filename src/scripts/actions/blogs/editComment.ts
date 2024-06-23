"use server";

import { sql } from "@vercel/postgres";

export async function editComment(comment: string, id: number) {
  if (!comment) {
    return;
  }

  try {
    await sql`UPDATE blog_comments SET comment = ${comment} WHERE id = ${id}`;
    return { message: "Successful", status: 200 };
  } catch (error) {
    console.error(error);
    return { error, status: 500 };
  }
}
