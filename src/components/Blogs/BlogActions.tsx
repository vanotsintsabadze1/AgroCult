"use client";
import { useState } from "react";
import { Pencil, Trash2Icon } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { deleteBlog } from "@/scripts/actions/blogs/deleteBlog";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import BlogCreationModal from "./BlogCreationModal";
import ConfirmationModal from "../Admin/Users/ConfirmationModal";

type Props = Omit<Blog, "created_at" | "wid" | "wname" | "upvoters" | "upvotes">;

export default function BlogActions({ id, title, description, tags, thumbnail }: Props) {
  const router = useRouter();
  const [shouldEditModalOpen, setShouldEditModalOpen] = useState(false);
  const [shouldConfirmationOpen, setConfirmationOpen] = useState(false);

  function enableEditMode() {
    setShouldEditModalOpen(true);
  }

  async function removeBlog() {
    try {
      const res = await deleteBlog(id);

      if (res?.status === 200) {
        toast.success("Blog deleted successfully");
        router.refresh();
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while deleting the blog");
    }
  }

  return (
    <>
      <AnimatePresence>
        {shouldEditModalOpen && (
          <BlogCreationModal
            title={title}
            id={id}
            imageThumbnail={thumbnail}
            blogTags={tags}
            blogDescription={description}
            usedFor="edit"
            setModal={setShouldEditModalOpen}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {shouldConfirmationOpen && <ConfirmationModal cb={removeBlog} setConfirmationModal={setConfirmationOpen} />}
      </AnimatePresence>

      <div className="absolute right-[1rem] top-[1rem] flex items-center justify-center gap-[1rem] rounded-2xl bg-[rgba(0,0,0,0.6)] px-[1rem] py-[.5rem]">
        <button onClick={enableEditMode}>
          <Pencil size={18} color="white" className="opacity-70 duration-300 ease-in-out hover:opacity-100" />
        </button>
        <button onClick={() => setConfirmationOpen(true)}>
          <Trash2Icon size={18} color="white" className="opacity-70 duration-300 ease-in-out hover:opacity-100" />
        </button>
      </div>
    </>
  );
}
