"use server";
import { sql } from "@vercel/postgres";

export async function addComment(id: number, user_id: string, comment: string, username: string) {
  try {
    await sql`INSERT INTO blog_comments (blog_id, commenter_id, comment, commenter) VALUES (${id}, ${user_id}, ${comment}, ${username})`;
    return { status: 200 };
  } catch (error) {
    console.error(error);
    return { status: 500 };
  }
}
