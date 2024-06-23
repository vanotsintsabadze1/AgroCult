"use client";

import { Copy } from "lucide-react";
import toast from "react-hot-toast";

interface Props {
  userId: string;
}

export default function ProfileUserID({ userId }: Props) {
  function copyUserId() {
    navigator.clipboard.writeText(userId);
    toast.success("Copied to clipboard");
  }

  return (
    <button className="flex items-center justify-center gap-[.5rem]" onClick={copyUserId}>
      <p className="mt-[.5rem] w-[15rem] truncate text-[1.2rem] font-light">{userId}</p>
      <Copy size={10} />
    </button>
  );
}
