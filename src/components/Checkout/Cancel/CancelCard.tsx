"use client";
import Link from "next/link";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CancelCard() {
  const router = useRouter();

  const [timer, setTimer] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      router.push("/");
    }
  }, [timer]);

  return (
    <div className="flex h-[50rem] w-full flex-col items-center justify-center">
      <div className="flex items-center justify-center rounded-[50%] border-2 border-black p-[2rem]">
        <X size="100" color="red" />
      </div>
      <h1 className="mt-[2rem] text-[2rem] font-bold">Payment Cancelled</h1>
      <Link href="/profile/payments" className="mt-[2rem] text-[1.4rem] font-bold text-blue-600 ">
        View your payments
      </Link>
      <p className="text-[1.2rem] font-bold ">You will be redirected in {timer} seconds</p>
    </div>
  );
}
