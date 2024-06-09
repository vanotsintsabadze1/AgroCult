"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";

const parentModalAnimations = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const childModalAnimations = {
  hidden: { opacity: 0, y: -200 },
  visible: { opacity: 1, y: 0 },
};

export default function EditUserModal() {
  const router = useRouter();

  return (
    <motion.div
      variants={parentModalAnimations}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="absolute left-0 top-0 z-[8] flex h-screen w-full items-center justify-center pl-[6rem]"
    >
      <canvas className="absolute h-full w-full bg-gray-300 opacity-50" />
      <motion.div
        variants={childModalAnimations}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="z-[8] flex w-[30rem] flex-col items-center justify-center rounded-lg bg-white px-[1rem] py-[2rem] shadow-md md:px-[2rem]"
      ></motion.div>
    </motion.div>
  );
}
