"use server";

import { sql } from "@vercel/postgres";

export async function deleteBlog(blogId: number) {
  try {
    await sql`DELETE FROM blogs WHERE id = ${blogId}`;

    return { status: 200 };
  } catch (error) {
    console.error(error);
    return { status: 500 };
  }
}
