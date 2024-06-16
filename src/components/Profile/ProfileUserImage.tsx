"use client";

import { uploadNewProfilePicture } from "@/scripts/helpers/uploadNewProfilePicture";
import { Edit } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";

interface Props {
  user: UserDB;
}

export default function ProfileUserImage({ user }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  async function uploadNewPicture(e: React.ChangeEvent<HTMLInputElement>) {
    const formElement = e.currentTarget.parentElement?.parentElement as HTMLFormElement;
    if (!formElement) {
      return;
    }
    const formData = new FormData(formElement);

    const file = formData.get("file") as File;

    if (file.size === 0) {
      return;
    }

    if (file.size > 4.5 * 1024 * 1024) {
      toast.error("File size is too large. Please upload a file that is less than 4.5MB.");
      formRef.current?.reset();
      return;
    }

    formData.append("userId", user.user_id);

    toast
      .promise(uploadNewProfilePicture(formData), {
        loading: "Uploading your new profile picture...",
        success: "Profile picture updated successfully!",
        error: "An error occurred while updating your profile picture.",
      })
      .finally(() => {
        router.refresh();
      });
  }

  return (
    <form ref={formRef} className="relative h-[15rem] w-[15rem]">
      <Image
        src={user.image as string}
        fill
        alt="user-profile-picture"
        className="rounded-[50%] border-2 border-black object-contain"
      />
      <label
        htmlFor="pfp-image-input"
        className="group absolute left-0 top-0 flex h-full w-full cursor-pointer items-end justify-center rounded-[50%] duration-300 ease-in-out hover:bg-[rgba(0,0,0,0.4)]"
      >
        <p className="mb-[2rem] hidden cursor-pointer text-center text-[1.2rem] font-bold text-white group-hover:block">
          Change your <br /> avatar
        </p>

        <input
          type="file"
          className="hidden"
          name="file"
          id="pfp-image-input"
          accept="image/webp, image/png, image/jpeg"
          onChange={uploadNewPicture}
        />
      </label>
      <Edit className="absolute right-0 top-0 text-black" size={20} />
    </form>
  );
}
