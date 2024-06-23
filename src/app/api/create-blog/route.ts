import { put } from "@vercel/blob";
import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const tags = formData.get("tags") as string;
  const wid = formData.get("wid") as string;
  const wname = formData.get("wname") as string;
  const usedFor = formData.get("usedFor") as string;
  const thumbnail = formData.get("thumbnail") as File | string;

  if (!title || !description || !tags || !formData || !wid || !wname) {
    return NextResponse.json({ message: "Missing fields", status: 500 });
  }

  try {
    if (usedFor === "create" && typeof thumbnail === "object") {
      const res =
        await sql`INSERT INTO blogs (wid, wname, title, description, tags) VALUES (${wid}, ${wname}, ${title}, ${description}, ${tags}) RETURNING id`;

      const id = res.rows[0].id;

      const blob = await put(`blogs/${id}/${thumbnail.name}`, thumbnail, {
        access: "public",
      });

      await sql`UPDATE blogs SET thumbnail = ${String(blob.url)} WHERE id = ${id}`;
      return NextResponse.json({ message: "Blog created successfully", status: 200 });
    }

    if (usedFor === "edit" && typeof thumbnail === "string") {
      console.log("editshi shemovedi");
      const id = formData.get("id") as string;
      console.log("id", id);
      await sql`UPDATE blogs SET title = ${title}, description = ${description}, tags = ${tags} WHERE id = ${Number(id)}`;

      return NextResponse.json({ message: "Blog updated successfully", status: 200 });
    }

    return NextResponse.json({ message: "Blog updated successfully", status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Couldn't create a blog", status: 500 });
  }
}
