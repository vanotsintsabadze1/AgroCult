"use client";

import { useState } from "react";
import BlogCreationModal from "./BlogCreationModal";
import { AnimatePresence } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function BlogsWrapper({ children }: Props) {
  const [blogCreationModal, setBlogCreationModal] = useState(false);

  return (
    <>
      <AnimatePresence>{blogCreationModal && <BlogCreationModal setModal={setBlogCreationModal} />}</AnimatePresence>

      <div className="mt-[2rem] flex w-full flex-col items-center px-[1rem]">
        <div className="flex w-[40rem] justify-end md:w-[60rem] xs:w-full">
          <button
            onClick={() => setBlogCreationModal(true)}
            className="h-[3.5rem] w-[13rem] rounded-lg bg-green-600 px-[2rem] text-[1.3rem] font-semibold text-white shadow-md"
          >
            + Create Blog
          </button>
        </div>
        <div className="grid min-h-[50rem] grid-cols-1 gap-[4rem] md:grid-cols-2 xl:grid-cols-3">{children}</div>
      </div>
    </>
  );
}
