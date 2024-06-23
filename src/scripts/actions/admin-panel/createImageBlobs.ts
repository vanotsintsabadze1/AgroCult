"use server";
import { put } from "@vercel/blob";
import { sql } from "@vercel/postgres";

export async function createImageBlob(formData: FormData, currImages: string[], id: number) {
  if (!formData) {
    throw new Error("Files not provided");
  }

  let currImageArr = [...currImages];
  const files = formData.getAll("image-gallery") as File[];

  try {
    for (const file of files) {
      let blob = await put(`products/${id}/${file.name}`, file, {
        access: "public",
      });

      currImageArr.push(blob.url);
    }

    try {
      const strArray = JSON.stringify(currImageArr);
      await sql`UPDATE products SET images = ${strArray} WHERE id = ${Number(id)}`.catch((e) => console.error(e));
    } catch (error) {
      console.error(error);
    }

    return { status: 200 };
  } catch (error) {
    return { status: 500 };
  }
}
