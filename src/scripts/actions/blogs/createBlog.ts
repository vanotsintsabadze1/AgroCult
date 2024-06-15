"use server";

import { sql } from "@vercel/postgres";
import { getSession } from "@auth0/nextjs-auth0";
import { put } from "@vercel/blob";

export async function createBlog(form: Blog, formData: FormData) {
  const { title, description, tags } = form;
  const session = await getSession();
  const user = session?.user;
  const wid = user?.sub;
  const wname = user?.nickname;
  const thumbnail = formData.get("thumbnail") as File;

  if (!wid || !wname) {
    return { status: 401 };
  }

  try {
    const stringifiedTags = JSON.stringify(tags);
    const stringifiedDescription = JSON.stringify(description);
    console.log(stringifiedDescription, stringifiedTags, title, wid, wname);

    const res =
      await sql`INSERT INTO blogs (wid, wname, title, description, tags) VALUES (${String(wid)}, ${String(wname)}, ${String(title)}, ${description}, ${stringifiedTags}) RETURNING id`;

    const id = res.rows[0].id;

    const blob = await put(`blogs/${id}/${thumbnail.name}`, thumbnail, {
      access: "public",
    });

    await sql`UPDATE blogs SET thumbnail = ${String(blob.url)} WHERE id = ${Number(id)}`;

    return { status: 200 };
  } catch (error) {
    console.error(error);
    return { status: 500 };
  }
}
