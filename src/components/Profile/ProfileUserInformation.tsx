"use client";

import { Edit } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const divAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

interface Props {
  username: string;
  userId: string;
  email: string;
}

export default function ProfileUserInformation({ username, userId, email }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(username);
  const [newEmail, setNewEmail] = useState(email);
  const router = useRouter();

  function onUsernameEdit() {
    setIsEditing(true);
  }

  function onSubmit() {
    toast
      .promise(
        fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/edit-username`, {
          method: "POST",
          body: JSON.stringify({ newUsername, newEmail, userId }),
        }),
        {
          loading: "Updating Username...",
          success: "Username Updated",
          error: "Failed to Update Username",
        },
      )
      .finally(() => {
        router.refresh();
        setIsEditing(false);
      });
  }

  return (
    <>
      {isEditing &&
        createPortal(
          <motion.div
            variants={divAnimation}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed z-[20] flex h-screen w-screen items-center justify-center bg-[rgba(0,0,0,0.4)]"
          >
            <div className="flex w-[30rem] flex-col items-center gap-[2rem] rounded-[2rem] bg-white px-[2rem] py-[3rem] shadow-md">
              <input
                type="text"
                className="h-[4rem] w-full border-b-2 border-b-gray-300 px-[1rem] text-[1.5rem] leading-6 text-black outline-none placeholder:text-gray-300"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
              <input
                type="text"
                className={`h-[4rem] w-full rounded-sm border-b-2 border-b-gray-300 px-[1rem] text-[1.5rem] leading-6 text-black outline-none placeholder:text-gray-300 ${userId.startsWith("google") ? "cursor-not-allowed bg-gray-200 text-gray-400" : ""}`}
                value={newEmail}
                disabled={userId.startsWith("google") ? true : false}
                onChange={(e) => setNewEmail(e.target.value)}
              />
              {userId.startsWith("google") && (
                <p className="text-[1.2rem] text-red-600">* Email cannot be changed if you signed up with Google</p>
              )}
              <div className="flex items-center justify-center gap-[2rem]">
                <button
                  className="h-[3.5rem] rounded-[2rem] border-2 border-green-600 px-[3rem] text-[1.4rem] font-bold text-black"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
                <button
                  className="h-[3.5rem] rounded-[2rem] bg-green-600 px-[3rem] text-[1.4rem] font-bold text-white"
                  onClick={onSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </motion.div>,
          document.body,
        )}
      <button className="mt-[2rem] flex items-center justify-center gap-[.5rem]" onClick={onUsernameEdit}>
        <h1 className="text-[2rem] font-bold">{username}</h1>
        <Edit size={15} />
      </button>
    </>
  );
}
