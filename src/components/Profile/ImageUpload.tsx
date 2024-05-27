"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function AvatarUploadPage() {
  const [isUploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  return (
    <>
      <form
        className="flex flex-col gap-[1rem] w-full"
        onSubmit={async (event) => {
          event.preventDefault();
          setUploading(true);

          if (!inputFileRef.current?.files) {
            throw new Error("No file selected");
          }

          const file = inputFileRef.current.files[0];

          if (file.size > 4.5 * 1024 * 1024) {
            event.preventDefault();
            setError(true);

            setTimeout(() => {
              setError(false);
            }, 3000);
            setUploading(false);
            return;
          }

          await fetch(`/api/upload-avatar?filename=${file.name}`, {
            method: "POST",
            body: file,
          });

          setUploading(false);
          router.refresh();
        }}
      >
        <h1 className="font-bold text-[1.4rem]">Upload Your Avatar</h1>
        <div className="w-[20rem] overflow-hidden">
          <input
            name="file"
            ref={inputFileRef}
            type="file"
            required
            accept="image/png, image/jpeg"
            className="text-[1.3rem] file:rounded-[1.5rem] file:shadow-soft file:px-[2rem] file:py-[0.5rem] file:bg-gray-400 file:text-gray-100 file:border-0"
          />
        </div>
        <div className="flex gap-[1rem] items-center">
          <button
            type="submit"
            className="bg-green-500 mt-[0.5rem] text-white shadow-soft py-[0.5rem] px-[2rem] w-[8rem] rounded-[0.5rem] text-[1.2rem]"
          >
            Save
          </button>
          {isUploading && (
            <div className="border-t-2 rounded-[50%] border-t-gray-400 animate-spin w-[2rem] h-[2rem]"></div>
          )}
          {error && <p className="text-red-500 text-[1.2rem]">File size must be less than 4.5MB</p>}
        </div>
      </form>
    </>
  );
}
