"use server";

import { sql } from "@vercel/postgres";

export async function deleteComment(id: number) {
  try {
    await sql`DELETE FROM blog_comments WHERE id = ${id}`;

    return { status: 200 };
  } catch (error) {
    console.error(error);

    return { status: 500 };
  }
}
