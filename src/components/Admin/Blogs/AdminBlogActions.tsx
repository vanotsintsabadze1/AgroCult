"use client";

import { Trash2Icon } from "lucide-react";
import { useState } from "react";
import ConfirmationModal from "../Users/ConfirmationModal";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { addLog } from "@/scripts/actions/admin-panel/addLog";
import { deleteBlog } from "@/scripts/actions/blogs/deleteBlog";
import { Link } from "lucide-react";

interface Props {
  blog: Blog;
}

export default function AdminBlogActions({ blog }: Props) {
  const [confirmationModal, setConfirmationModal] = useState(false);
  const router = useRouter();

  async function onBlogDelete() {
    const res = await deleteBlog(blog.id);

    if (res?.status === 200) {
      toast.success("Blog deleted successfully");
      addLog("Deleted Blog", "Deleted a blog with ID: " + blog.id);
      router.refresh();
    }
  }

  function redirectOnLink() {
    router.push(`/blogs/${blog.id}`);
  }

  return (
    <>
      {confirmationModal && <ConfirmationModal cb={() => onBlogDelete()} setConfirmationModal={setConfirmationModal} />}
      <button onClick={() => setConfirmationModal(true)}>
        <Trash2Icon size={20} className="duration-300 ease-in-out hover:text-green-600" />
      </button>
      <button onClick={redirectOnLink}>
        <Link size={20} className="duration-300 ease-in-out hover:text-green-600" />
      </button>
    </>
  );
}
