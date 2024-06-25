"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import AdminNav from "./AdminNav";
import { usePathname } from "next/navigation";
import { useCurrentLocale } from "@/locales/client";
import { LucideArrowRight } from "lucide-react";
import { useChangeLocale } from "@/locales/client";

interface Props {
  profilePicture: string;
  name: string;
}

export default function SideBar({ profilePicture, name }: Props) {
  const [shouldSideBarBeVisible, setShouldSideBarBeVisible] = useState(false);
  const pathname = usePathname();
  const locale = useCurrentLocale();
  const setLocale = useChangeLocale();

  useEffect(() => {
    if (shouldSideBarBeVisible) {
      setShouldSideBarBeVisible(false);
    }
  }, [pathname]);

  function changeLocale() {
    setLocale(locale === "en" ? "ka" : "en");
  }

  return (
    <>
      <div
        className={`fixed z-10 flex h-screen flex-col items-center overflow-hidden bg-white shadow-md ${shouldSideBarBeVisible ? "absolute left-0 top-0 w-[20rem]" : "w-[6rem]"} duration-300 ease-out dark:bg-dark-secondary dark:text-white`}
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
        <div className="fixed bottom-[2.5rem] left-[1.5rem] flex flex-grow flex-col items-center gap-[1.5rem]">
          <div>
            <button onClick={changeLocale} className="text-[1.3rem] font-light uppercase">
              {locale === "en" ? "ka" : "en"}
            </button>
          </div>
          <button
            className={`${shouldSideBarBeVisible ? "rotate-[180deg]" : ""}`}
            onClick={() => setShouldSideBarBeVisible(!shouldSideBarBeVisible)}
          >
            <LucideArrowRight size={25} />
          </button>
        </div>
      </div>
    </>
  );
}
