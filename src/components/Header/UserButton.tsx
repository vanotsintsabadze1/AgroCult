"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import UserDropdown from "./UserDropdown";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

interface Props {
  username: string;
  userAvatar: string;
}

export default function UserButton({ username, userAvatar }: Props) {
  const [isUserDropdownVisible, setUserDropdownVisible] = useState(false);
  const pathname = usePathname();

  function showUserDropdown() {
    setUserDropdownVisible(!isUserDropdownVisible);
  }

  useEffect(() => {
    if (isUserDropdownVisible) {
      setUserDropdownVisible(false);
    }
  }, [pathname]);

  return (
    <>
      <button
        onClick={showUserDropdown}
        className={`flex h-[3.5rem] w-[14rem] items-center justify-center gap-[1rem] px-[2rem] py-[2rem] ${isUserDropdownVisible ? "rounded-tl-[.5rem] rounded-tr-[.5rem]" : "rounded-[.5rem]"} border border-gray-300 text-[1.5rem] shadow-md dark:bg-white`}
      >
        <Image src={userAvatar} width={20} height={20} alt="user-profile-icon" className="rounded-[50%]" />
        <div className="flex items-center gap-[.3rem]">
          <p className="w-[5rem] truncate">{username}</p>
          <ChevronDown size={15} />
        </div>
      </button>
      <AnimatePresence>{isUserDropdownVisible ? <UserDropdown /> : null}</AnimatePresence>
    </>
  );
}
