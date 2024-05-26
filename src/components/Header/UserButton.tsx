"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import UserDropdown from "./UserDropdown";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function UserButton() {
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
        className={`flex h-[3.5rem] w-[12rem] items-center justify-center gap-[1rem] ${isUserDropdownVisible ? "rounded-tl-[.5rem] rounded-tr-[.5rem]" : "rounded-[.5rem]"} border border-gray-300 text-[1.5rem] font-bold shadow-md dark:bg-white`}
      >
        <Image src="/images/icons/header-icons/user-profile.webp" width={20} height={20} alt="user-profile-icon" />
        <div className="flex items-center gap-[.3rem]">
          <p>User</p>
          <Image src="/images/icons/misc/caret.webp" width={10} height={10} alt="caret" />
        </div>
      </button>
      <AnimatePresence>{isUserDropdownVisible ? <UserDropdown /> : null}</AnimatePresence>
    </>
  );
}
