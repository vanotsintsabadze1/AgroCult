"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginButton() {
  const router = useRouter();

  function handleClick() {
    router.push(""); // TBA: Add the path to the login page
  }

  return (
    <button
      className="flex h-[3.5rem] items-center justify-center gap-[1rem] rounded-[.5rem] bg-white px-[2rem] text-[1.5rem] font-bold  shadow-soft"
      onClick={handleClick}
    >
      <p>Log In</p>
      <Image src="/images/icons/header-icons/user-profile.webp" width={20} height={20} alt="user-profile-icon" />
    </button>
  );
}
