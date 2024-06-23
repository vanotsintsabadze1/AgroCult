import { editComment } from "@/scripts/actions/blogs/editComment";
import { motion } from "framer-motion";
import { useState } from "react";
import { createPortal } from "react-dom";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const divAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

interface Props {
  currComment: string;
  comment_id: number;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CommentEditModal({ currComment, comment_id, setModal }: Props) {
  const [comment, setComment] = useState(currComment);
  const router = useRouter();

  async function onEdit() {
    if (comment.length < 0) {
      toast.error("Comment can't be empty");
      return;
    }

    const res = await editComment(comment, comment_id);

    if (res?.status === 200) {
      toast.success("Comment edited successfully");
      router.refresh();
      setModal(false);
    }
  }

  return createPortal(
    <motion.div
      variants={divAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed z-[30] flex h-screen w-screen items-center justify-center bg-[rgba(0,0,0,0.4)]"
    >
      <div className="flex w-[40rem] items-center justify-center md:w-[60rem] lg:w-[80rem] xs:w-full">
        <div className="flex w-full flex-col gap-[1rem] rounded-lg bg-white p-[2rem] shadow-md">
          <h2 className="text-[1.5rem] font-bold">Edit Comment</h2>
          <textarea
            className="h-[10rem] w-full rounded-lg border border-gray-400 p-[1rem] text-[1.3rem]"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment"
          />
          <div className="flex justify-end gap-[1rem]">
            <button
              onClick={() => setModal(false)}
              className="h-[3rem] w-[8rem] rounded-lg bg-red-500 text-[1.3rem] font-bold text-white shadow-sm"
            >
              Cancel
            </button>
            <button
              onClick={onEdit}
              className="h-[3rem] w-[8rem] rounded-lg bg-green-500 text-[1.3rem] font-bold text-white shadow-sm"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </motion.div>,
    document.body,
  );
}
