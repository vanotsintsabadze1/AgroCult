"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const divAnimations = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 35 },
};

export default function UserDropdown() {
  const router = useRouter();

  async function handleLogout() {
    router.push(""); // TBA: Add the path to the logout page
  }

  return (
    <motion.div
      variants={divAnimations}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="absolute right-[1rem] top-0 z-10 hidden w-[12rem] flex-col items-center justify-center rounded-bl-[.5rem] rounded-br-[.5rem] border border-gray-300 bg-body text-[1.4rem] shadow-soft lg:flex dark:bg-white"
    >
      <button className="h-[4rem] w-full duration-150 ease-out hover:bg-gray-100" onClick={() => router.push("/settings")}>
        Settings
      </button>
      <button className="h-[4rem] w-full duration-150 ease-out hover:bg-gray-100" onClick={() => router.push("/admin")}>
        Admin
      </button>
      <button className="h-[4rem] w-full duration-150 ease-out hover:bg-gray-100" onClick={handleLogout}>
        Log Out
      </button>
    </motion.div>
  );
}
