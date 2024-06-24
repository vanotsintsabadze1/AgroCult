"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();

  return (
    <>
      <div className="relative h-[4rem] w-[14rem] md:h-[5rem] md:w-[18rem] dark:hidden">
        <button onClick={() => router.push("/")}>
          <Image src="/images/logos/main-logo-colored.webp" fill alt="company-logo" />
        </button>
      </div>
      <div className="relative hidden h-[4rem] w-[14rem] md:h-[5rem] md:w-[18rem] dark:block">
        <button onClick={() => router.push("/")}>
          <Image src="/images/logos/main-logo-white.webp" fill alt="company-logo-dark" />
        </button>
      </div>
    </>
  );
}
