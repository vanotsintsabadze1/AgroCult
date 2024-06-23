"use client";
import { useRouter } from "next/navigation";

import { Store, BookOpenCheck, ArrowUpRightFromSquareIcon } from "lucide-react";

interface Props {
  orderAmount: number;
}

export default function ProfileMetrics({ orderAmount }: Props) {
  const router = useRouter();

  return (
    <div className="mt-[4rem] flex flex-wrap items-center justify-center gap-[6rem] gap-y-[5rem]">
      <div
        className="relative flex cursor-pointer flex-col items-center gap-[.5rem]"
        onClick={() => router.push("/profile/payments")}
      >
        <ArrowUpRightFromSquareIcon size={15} className="absolute right-[1rem] top-0" />
        <Store size={30} />
        <p className="text-[1.4rem] font-medium">{orderAmount} Items Bought</p>
      </div>
      <div
        className="relative flex cursor-pointer flex-col items-center gap-[.5rem]"
        onClick={() => router.push("/profile/blogs")}
      >
        <ArrowUpRightFromSquareIcon size={15} className="absolute right-[1rem] top-0" />
        <BookOpenCheck size={30} />
        <p className="text-[1.4rem] font-medium">0 Created Blogs</p>
      </div>
    </div>
  );
}
