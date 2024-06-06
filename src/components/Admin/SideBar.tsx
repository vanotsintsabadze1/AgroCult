"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import AdminNav from "./AdminNav";
import { usePathname } from "next/navigation";

interface Props {
  profilePicture: string;
  name: string;
}

export default function SideBar({ profilePicture, name }: Props) {
  const [shouldSideBarBeVisible, setShouldSideBarBeVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (shouldSideBarBeVisible) {
      setShouldSideBarBeVisible(false);
    }
  }, [pathname]);

  return (
    <>
      <div
        className={`fixed z-10 flex h-screen flex-col items-center overflow-hidden bg-white shadow-md ${shouldSideBarBeVisible ? "absolute left-0 top-0 w-[20rem]" : "w-[6rem]"} duration-300 ease-out`}
      >
        {profilePicture && name && (
          <div className="mb-[2rem] mt-[2rem] flex h-[5rem] w-full items-center gap-[1rem] overflow-hidden px-[1rem] py-[3rem]">
            <Image width={35} height={35} alt="user-pfp" className="rounded-[50%]" src={profilePicture} />
            {shouldSideBarBeVisible && (
              <div className="flex flex-col">
                <p className="w-[30rem] text-[1.5rem] font-medium">{name}</p>
                <p className="text-[1.3rem] font-bold">Admin</p>
              </div>
            )}
          </div>
        )}
        <div className="relative h-full w-full">
          <AdminNav active={shouldSideBarBeVisible} />
        </div>
        <button onClick={() => setShouldSideBarBeVisible(!shouldSideBarBeVisible)}>
          <p className={`fixed bottom-[1.5rem] left-[1rem] ${shouldSideBarBeVisible ? "rotate-[180deg]" : ""}`}>
            <Image width={40} height={40} alt="caret" src="/images/icons/misc/arrow-right.webp" />
          </p>
        </button>
      </div>
    </>
  );
}
