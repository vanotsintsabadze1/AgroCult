"use client";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { ArrowBigUp } from "lucide-react";
import { upvoteBlogs, downvoteBlogs } from "@/scripts/actions/blogs/upvoteBlog";
import { useRouter } from "next/navigation";

interface Props {
  id: number;
  blogUpvotes: number;
  upvoters: string[];
}

export default function IndBlogActions({ id, blogUpvotes, upvoters }: Props) {
  const session = useUser();
  const user = session?.user;
  const router = useRouter();
  const isUpvoted = user && upvoters.includes(user?.sub as string);
  const [upvoting, setUpvoting] = useState(false);

  async function onUpvote() {
    setUpvoting(true);

    if (isUpvoted) {
      const res = await downvoteBlogs(id, user?.sub as string, upvoters);
      if (res?.status === 200) {
        setUpvoting(false);
        router.refresh();
      }
      return;
    }

    const res = await upvoteBlogs(id, user?.sub as string, upvoters);

    if (res?.status === 200) {
      setUpvoting(false);
      router.refresh();
    }
  }

  return (
    <>
      <div className={`flex flex-col items-center gap-[.5rem] ${upvoting ? "opacity-50" : ""}`}>
        <button
          onClick={onUpvote}
          className={`group rounded-[1rem] border-2 p-[.5rem] ${isUpvoted ? "border-green-600 bg-green-600" : " border-green-600 duration-200 ease-in-out hover:bg-green-600"}`}
        >
          <ArrowBigUp
            size={25}
            className={`${isUpvoted ? "text-white" : "text-green-700 duration-200 ease-in-out group-hover:text-white"}`}
          />
        </button>
        <p className="text-[1.3rem] font-medium">{blogUpvotes}</p>
      </div>
    </>
  );
}
