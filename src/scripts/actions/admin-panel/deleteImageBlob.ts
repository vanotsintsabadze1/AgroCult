import { del } from "@vercel/blob";

export async function deleteImageBlob(url: string[]) {
  if (!url) {
    return;
  }

  try {
    await del(url);

    return { message: "Successful", status: 200 };
  } catch (error) {
    console.error(error);
    return { error, status: 500 };
  }
}
