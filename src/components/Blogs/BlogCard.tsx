import Image from "next/image";
import { Blog } from "../../types/types";
import { getScopedI18n } from "@/locales/server";
import Link from "next/link";

async function BlogCard({ title, body, tags, id }: Blog) {
  const word = await getScopedI18n("blogs");

  return (
    <div className="w-[38rem] shadow-soft rounded-[.8rem] py-[2rem] px-[1rem] flex flex-col items-center dark:bg-white">
      <div className="w-[35rem] h-[20rem] relative shadow-xs rounded-[.5rem]">
        <Image src="https://picsum.photos/seed/picsum/600/414" alt={title} fill className="rounded-[1rem]" />
      </div>
      <div className="flex flex-col gap-[.5rem] w-full items-start px-[1rem]  py-[1rem]">
        <div className="flex gap-[1rem] py-[.5rem]">
          {tags.map((tag, idx) => (
            <p key={idx} className="font-bold text-[1.2rem]">
              #{tag}
            </p>
          ))}
        </div>
        <h2 className="font-bold text-[1.8rem] line-clamp-1">{title}</h2>
        <p className="font-medium text-[1.2rem] line-clamp-3 w-[30rem]">{body}</p>
        <div className="pt-[2rem] flex justify-between w-full items-center">
          <button className="w-[12rem] h-[4rem] text-[1.3rem] text-slate-800 shadow-sm font-medium bg-gray-400 rounded-[1rem]">
            <Link href={`/blogs/${id}`} className="flex w-full h-full justify-center items-center">
              {word("seeMore")}
            </Link>
          </button>

          <p className="font-medium text-[1.3rem] mr-[2rem]">02, Jan, 2024</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
