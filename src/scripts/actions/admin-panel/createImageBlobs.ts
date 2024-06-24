"use server";
import { put } from "@vercel/blob";

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

    return { images: currImageArr, status: 200 };
  } catch (error) {
    return { status: 500 };
  }
}
