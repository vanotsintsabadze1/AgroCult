"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { options } from "./navData";

interface Props {
  active: boolean;
}

export default function AdminNav({ active }: Props) {
  const router = useRouter();

  return (
    <nav className="flex w-full flex-col items-start gap-[3rem] py-[1rem]">
      {options.map((opt, idx) => (
        <button key={idx} className="ml-[1.5rem] flex min-w-[12rem] items-center" onClick={() => router.push(opt.path)}>
          <Image src={opt.icon} width={25} height={25} alt={opt.name} className="brightness-75" />
          <p
            className={`ml-[1rem] text-[1.5rem] font-medium text-black dark:text-white ${active ? "opacity-100" : "opacity-0"}`}
          >
            {opt.name}
          </p>
        </button>
      ))}
    </nav>
  );
}
