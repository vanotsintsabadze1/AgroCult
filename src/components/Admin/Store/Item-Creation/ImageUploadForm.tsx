import Image from "next/image";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

interface Props {
  setImageFormData: React.Dispatch<React.SetStateAction<FormData>>;
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function ImageUploadForm({ setImageFormData, setImages }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageCount, setImageCount] = useState(0);

  function onImageUploadSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputRef.current?.files?.length === 0) {
      toast.error("Please upload an image");
      return;
    }

    setImageCount(inputRef.current?.files?.length as number);

    for (const file of inputRef.current?.files as FileList) {
      if (file.size > 4.5 * 1024 * 1024) {
        toast.error("Image size should be less than 4.5MB");
        e.currentTarget.reset();
        setImageCount(inputRef.current?.files?.length as number);
        setImages([]);
        return;
      }
    }

    const formData = new FormData(e.currentTarget);
    setImageFormData(formData);

    const files = formData.getAll("new-item-image-upload") as File[];

    const arr = files.map((file) => URL.createObjectURL(file));

    setImages((prev) => [...prev, ...arr]);
  }

  return (
    <form
      ref={formRef}
      className="relative flex w-[25rem] flex-col items-center justify-center gap-[1rem] rounded-lg bg-gray-300 py-[3rem] md:w-[30rem] xs:w-full"
      onChange={onImageUploadSubmit}
    >
      <label htmlFor="new-item-image-upload" className="flex cursor-pointer flex-col items-center gap-[1rem]">
        <Image src="/images/icons/misc/upload.webp" width={70} height={70} alt="upload-icon" className="opacity-50" />
        <h4 className="text-[1.3rem] font-medium uppercase text-gray-400">Upload your images</h4>
        <p>Uploaded {imageCount}</p>
      </label>

      <input
        type="file"
        id="new-item-image-upload"
        name="new-item-image-upload"
        ref={inputRef}
        multiple
        accept="image/webp, image/png, image/jpeg"
        className="hidden"
      />
    </form>
  );
}
