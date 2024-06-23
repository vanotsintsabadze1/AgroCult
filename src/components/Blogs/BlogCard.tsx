import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import { getSession } from "@auth0/nextjs-auth0";
import BlogActions from "./BlogActions";

interface Props extends Blog {
  usedFor?: string;
}

export default async function BlogCard({
  id,
  wname,
  title,
  description,
  tags,
  created_at,
  thumbnail,
  wid,
  usedFor,
}: Props) {
  const session = await getSession();
  const user = session?.user;
  const sanitizedDescription = DOMPurify.sanitize(description);

  return (
    <div className="mt-[2rem] flex h-[40rem] w-[35rem] flex-col items-center rounded-[2rem] bg-white p-[2rem] shadow-md xs:w-[32rem]">
      <div className="relative h-[22rem] w-[32rem] xs:w-[30rem]">
        <Image src={thumbnail} fill alt={`blog-image-${title}`} className=" rounded-[1rem] object-cover shadow-sm" />
        <div className="absolute bottom-[1.2rem] left-[1rem] flex items-center justify-center gap-[1rem]">
          {tags.map((tag, idx) => (
            <div
              className="rounded-[1rem] bg-green-600 px-[1rem] py-[.5rem] text-[1.2rem] font-bold text-white shadow-sm"
              key={idx}
            >
              {tag}
            </div>
          ))}
        </div>
        {user && user.sub === wid && usedFor === "blogs" && (
          <BlogActions id={id} title={title} description={description} tags={tags} thumbnail={thumbnail} />
        )}
      </div>
      <div className="mt-[1rem] flex w-full flex-grow flex-col gap-[.5rem]">
        <h4 className="line-clamp-1 text-[1.5rem] font-bold text-gray-800">{title}</h4>
        <div
          className="h-[5rem] overflow-hidden text-[1.2rem] font-semibold text-gray-500"
          dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
          id="blog-card-description-div"
        ></div>
        <div className="mt-[2rem] flex w-full items-center justify-between">
          <Link href={`/blogs/${id}`} className="text-[1.3rem] font-bold text-black">
            Read More
          </Link>
          <div className="flex flex-col items-end">
            <p className="text-[1.3rem] font-medium text-gray-600">{new Date(created_at).toDateString()}</p>
            <p className="text-[1.1rem] text-gray-600">@{wname}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
