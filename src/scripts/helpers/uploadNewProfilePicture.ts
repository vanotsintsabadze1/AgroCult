export async function uploadNewProfilePicture(formData: FormData) {
  if (!formData) {
    return;
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/upload-avatar`, {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      return res.status;
    } else {
      throw new Error("An error occurred while updating your profile picture.");
    }
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while updating your profile picture.");
  }
}
