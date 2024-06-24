"use client";
import { addComment } from "@/scripts/actions/blogs/addComment";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { z } from "zod";
import { Edit2, Trash2Icon } from "lucide-react";
import CommentEditModal from "./CommentEditModal";
import { AnimatePresence } from "framer-motion";
import ConfirmationModal from "../Admin/Users/ConfirmationModal";
import { deleteComment } from "@/scripts/actions/blogs/deleteComment";
import { useScopedI18n } from "@/locales/client";

interface Props {
  id: number;
  comments: BlogComment[];
}

const scheme = z
  .string()
  .min(10, "You have to at least write 10 characters")
  .max(200, "You can't write more than 200 characters");

export default function BlogCommentSection({ id, comments }: Props) {
  const session = useUser();
  const user = session?.user;
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [comment, setComment] = useState("");
  const [shouldConfirmationOpen, setConfirmationOpen] = useState(false);
  const word = useScopedI18n("blogs");

  async function onCommentSubmit() {
    if (!user) {
      window.location.href = "/api/auth/login";
    }

    const result = scheme.safeParse(comment);

    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    const res = await addComment(id, user?.sub as string, comment, user?.nickname as string);

    if (res?.status === 200) {
      router.refresh();
      setComment("");
    } else {
      toast.error("An error occurred while adding the comment");
    }
  }

  async function removeComment(comment_id: number) {
    const res = await deleteComment(comment_id);

    if (res?.status === 200) {
      toast.success("Comment deleted successfully");
      router.refresh();
    } else {
      toast.error("An error occurred while deleting the comment");
    }
  }
  return (
    <div className="flex w-full flex-col items-center gap-[2rem]">
      <div className="sm:w-[40rem] md:w-[60rem] lg:w-[80rem] xs:w-full">
        <h2 className="text-[1.5rem] font-bold">{word("blog.comments")}</h2>
      </div>
      <div className="relative h-[10rem]  sm:w-[40rem] md:w-[60rem] lg:w-[80rem] xs:w-full">
        <textarea
          value={comment}
          className="h-full w-full resize-none rounded-lg p-[1rem] text-[1.3rem] shadow-md"
          placeholder={word("blog.comment.placeholder")}
          name="comment"
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          onClick={onCommentSubmit}
          className="absolute bottom-[1rem] right-[.5rem] z-[5] h-[3rem] w-[8rem] rounded-[1rem] bg-green-600 text-[1.2rem] font-bold text-white shadow-md"
        >
          {word("blog.comment.submit")}
        </button>
      </div>
      <div className="flex flex-col gap-[2rem] sm:w-[40rem] md:w-[60rem] lg:w-[80rem] xs:w-full">
        {comments.length === 0 ? (
          <p className="text-[1.3rem] font-medium">{word("blog.noComments")}</p>
        ) : (
          comments.map((comment) => (
            <>
              <AnimatePresence>
                {isEditing && (
                  <CommentEditModal
                    key={comment.id}
                    currComment={comment.comment}
                    setModal={setIsEditing}
                    comment_id={comment.id}
                  />
                )}
              </AnimatePresence>

              <AnimatePresence>
                {shouldConfirmationOpen && (
                  <ConfirmationModal
                    key={comment.id}
                    setConfirmationModal={setConfirmationOpen}
                    cb={() => removeComment(comment.id)}
                  />
                )}
              </AnimatePresence>

              <div
                key={comment.id}
                className="relative flex w-full flex-col items-start gap-[1rem] rounded-lg p-[1rem] dark:bg-white dark:shadow-md"
              >
                <p className="text-[1.3rem] font-bold">{comment.commenter}</p>
                <p className="text-[1.2rem]">{comment.comment}</p>
                <div className="absolute right-[1rem] top-[1rem] flex items-center justify-center gap-[1rem] text-[1.3rem] font-medium text-gray-400">
                  {user?.sub === comment.commenter_id && (
                    <>
                      <button onClick={() => setIsEditing(true)}>
                        <Edit2 size={15} className="duration-300 ease-in-out hover:text-gray-500" />
                      </button>
                      <button onClick={() => setConfirmationOpen(true)}>
                        <Trash2Icon size={15} className="duration-300 ease-in-out hover:text-gray-500" />
                      </button>
                    </>
                  )}

                  <p>{comment.created_at.toLocaleDateString()}</p>
                </div>
              </div>
            </>
          ))
        )}
      </div>
    </div>
  );
}
