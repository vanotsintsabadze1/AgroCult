"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useScopedI18n } from "@/locales/client";

const divAnimations = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 40 },
};

export default function UserDropdown() {
  const router = useRouter();
  const session = useUser();
  const role = session ? (session?.user?.role as string[])?.includes("Admin") : null;
  const word = useScopedI18n("header");

  return (
    <motion.div
      variants={divAnimations}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="shadow-soft absolute right-[1rem] top-0 z-10 hidden w-[14rem] flex-col items-center justify-center rounded-bl-[.5rem] rounded-br-[.5rem] border border-gray-300 bg-body text-[1.4rem] lg:flex dark:bg-white"
    >
      <button
        className="h-[4rem] w-full duration-150 ease-out hover:bg-gray-100"
        onClick={() => router.push("/profile")}
      >
        {word("dropDown.profile")}
      </button>
      {role && (
        <button
          className="h-[4rem] w-full duration-150 ease-out hover:bg-gray-100"
          onClick={() => router.push("/admin/users")}
        >
          {word("dropDown.admin")}
        </button>
      )}
      <button className="h-[4rem] w-full duration-150 ease-out hover:bg-gray-100">
        <a href="/api/auth/logout" className="flex h-full w-full items-center justify-center">
          {word("dropDown.logout")}
        </a>
      </button>
    </motion.div>
  );
}
