"use client";

import Image from "next/image";
import { useScopedI18n } from "@/locales/client";
import { useRouter } from "next/navigation";

export default function GoToStoreButton() {
  const word = useScopedI18n("landing");
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/store")}
      className="mt-[3rem] flex items-center justify-center gap-[1rem] rounded-[.5rem] bg-green-600 px-[2rem] py-[1rem] text-[1.2rem] font-bold text-white shadow-lg shadow-green-700/50 lg:px-[3rem] lg:text-[1.4rem]"
    >
      <Image src="/images/icons/misc/tractor-icon.webp" width={25} height={25} alt="tractor-icon" />
      <p>{word("goToStore")}</p>
    </button>
  );
}
