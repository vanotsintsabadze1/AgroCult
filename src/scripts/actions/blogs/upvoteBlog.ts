"use server";
import { sql } from "@vercel/postgres";

export async function upvoteBlogs(id: number, upvoterId: string, upvoters: string[]) {
  const updatedUpvoters = [...upvoters, upvoterId];
  const stringifiedUpvoters = JSON.stringify(updatedUpvoters);

  try {
    await sql`UPDATE blogs SET upvotes = upvotes + 1, upvoters = ${stringifiedUpvoters} WHERE id = ${id}`;
    return { status: 200 };
  } catch (error) {
    console.error(error);
    return { status: 500 };
  }
}

export async function downvoteBlogs(id: number, upvoterId: string, upvoters: string[]) {
  const updatedUpvoters = upvoters.filter((upvoter) => upvoter !== upvoterId);
  const stringifiedUpvoters = JSON.stringify(updatedUpvoters);

  try {
    await sql`UPDATE blogs SET upvotes = upvotes - 1, upvoters = ${stringifiedUpvoters} WHERE id = ${id}`;
    return { status: 200 };
  } catch (error) {
    console.error(error);
    return { status: 500 };
  }
}
