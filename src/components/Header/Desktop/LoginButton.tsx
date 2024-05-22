"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  locale: string;
}

export default function LoginButton() {
  const router = useRouter();

  function handleClick() {
    router.push("/login");
  }

  return (
    <button
      className="flex h-[3.5rem] w-[12rem] items-center justify-center gap-[1rem] rounded-[.5rem] bg-white text-[1.5rem] font-bold  shadow-soft"
      onClick={handleClick}
    >
      <p>Log In</p>
      <Image src="/images/icons/header-icons/user-profile.webp" width={20} height={20} alt="user-profile-icon" />
    </button>
  );
}
