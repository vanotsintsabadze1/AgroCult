"use client";
import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();

  function handleClick() {
    router.refresh();
  }

  return (
    <button
      type="submit"
      onClick={handleClick}
      className="h-[3.5rem] w-[15rem] rounded-[.5rem] bg-black text-[1.2rem] font-bold tracking-wide text-white shadow-sm"
    >
      Submit
    </button>
  );
}
