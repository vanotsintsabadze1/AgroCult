import { put } from "@vercel/blob";
import { sql } from "@vercel/postgres";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const tags = formData.get("tags") as string;
  const wid = formData.get("wid") as string;
  const wname = formData.get("wname") as string;

  if (!title || !description || !tags || !formData || !wid || !wname) {
    return new Response("Missing fields", { status: 400 });
  }
  const thumbnail = formData.get("thumbnail") as File;

  if (!thumbnail) {
    return new Response("Missing thumbnail", { status: 400 });
  }

  try {
    const res =
      await sql`INSERT INTO blogs (wid, wname, title, description, tags) VALUES (${wid}, ${wname}, ${title}, ${description}, ${tags}) RETURNING id`;

    const id = res.rows[0].id;

    const blob = await put(`blogs/${id}/${thumbnail.name}`, thumbnail, {
      access: "public",
    });

    await sql`UPDATE blogs SET thumbnail = ${String(blob.url)} WHERE id = ${id}`;

    return new Response("Blog created successfully", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Internal server error", { status: 500 });
  }
}
