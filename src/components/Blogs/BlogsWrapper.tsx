"use client";

import { useState } from "react";
import BlogCreationModal from "./BlogCreationModal";
import { AnimatePresence } from "framer-motion";
import { useUser } from "@auth0/nextjs-auth0/client";

interface Props {
  children: React.ReactNode;
}

export default function BlogsWrapper({ children }: Props) {
  const session = useUser();
  const [blogCreationModal, setBlogCreationModal] = useState(false);

  function onCreateNewBlog() {
    if (!session?.user) {
      window.location.href = "/api/auth/login";
    } else {
      setBlogCreationModal(true);
    }
  }

  return (
    <>
      <AnimatePresence>
        {blogCreationModal && (
          <BlogCreationModal blogTags={[]} blogDescription="" usedFor="create" setModal={setBlogCreationModal} />
        )}
      </AnimatePresence>

      <div className="mt-[2rem] flex w-full flex-col items-center px-[1rem]">
        <div className="flex w-[40rem] justify-end md:w-[60rem] xs:w-full">
          <button
            onClick={onCreateNewBlog}
            className="h-[3.5rem] w-[13rem] rounded-lg bg-green-600 px-[2rem] text-[1.3rem] font-semibold text-white shadow-md"
          >
            + Create Blog
          </button>
        </div>
        <div className="grid min-h-[50rem] grid-cols-1 gap-[4rem] pb-[4rem] pt-[2rem] md:grid-cols-2 xl:grid-cols-3">
          {children}
        </div>
      </div>
    </>
  );
}
