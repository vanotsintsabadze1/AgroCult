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
      className="w-[15rem] h-[3.5rem] bg-black rounded-[.5rem] shadow-sm font-bold text-white text-[1.2rem] tracking-wide"
    >
      Submit
    </button>
  );
}
