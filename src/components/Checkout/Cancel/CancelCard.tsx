"use client";
import Link from "next/link";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useScopedI18n } from "@/locales/client";

export default function CancelCard() {
  const router = useRouter();
  const word = useScopedI18n("admin.payments.post");

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
    <div className="flex h-[50rem] w-full flex-col items-center justify-center dark:text-white">
      <div className="flex items-center justify-center rounded-[50%] border-2 border-black p-[2rem] dark:border-white">
        <X size="100" color="red" />
      </div>
      <h1 className="mt-[2rem] text-[2rem] font-bold">{word("paymentFailed")}</h1>
      <Link href="/profile/payments" className="mt-[2rem] text-[1.4rem] font-bold text-blue-600 ">
        {word("viewYourPayment")}
      </Link>
      <p className="mt-[1rem] text-[1.2rem] font-bold">
        {word("willBeRedirected")} {timer}
      </p>
    </div>
  );
}
