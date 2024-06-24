"use client";
import { useRouter } from "next/navigation";
import { useScopedI18n } from "@/locales/client";

import { Store, BookOpenCheck, ArrowUpRightFromSquareIcon } from "lucide-react";

interface Props {
  orderAmount: number;
  blogAmount: number;
}

export default function ProfileMetrics({ orderAmount, blogAmount }: Props) {
  const router = useRouter();
  const word = useScopedI18n("profile");

  return (
    <div className="mt-[4rem] flex flex-wrap items-center justify-center gap-[6rem] gap-y-[5rem]">
      <div
        className="relative flex cursor-pointer flex-col items-center gap-[.5rem]"
        onClick={() => router.push("/profile/payments")}
      >
        <ArrowUpRightFromSquareIcon size={15} className="absolute right-[1rem] top-0" />
        <Store size={30} />
        <p className="text-[1.4rem] font-medium">{orderAmount} {word("metrics.itemsBought")}</p>
      </div>
      <div
        className="relative flex cursor-pointer flex-col items-center gap-[.5rem]"
        onClick={() => router.push("/profile/blogs")}
      >
        <ArrowUpRightFromSquareIcon size={15} className="absolute right-[1rem] top-0" />
        <BookOpenCheck size={30} />
        <p className="text-[1.4rem] font-medium">{blogAmount} {word("metrics.createdBlogs")}</p>
      </div>
    </div>
  );
}
