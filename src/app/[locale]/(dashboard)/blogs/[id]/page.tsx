import { sql } from "@vercel/postgres";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import IndBlogActions from "@/components/Blogs/IndBlogActions";
import { unstable_noStore as noStore } from "next/cache";
import BlogCommentSection from "@/components/Blogs/BlogCommentSection";

interface Props {
  params: {
    id: string;
  };
}

async function getBlog(id: string) {
  if (!id) return null;

  try {
    const res = await sql`SELECT * FROM blogs WHERE id = ${id}`;
    const blog = res.rows[0] as Blog;

    return blog;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getBlogComments(id: string) {
  if (!id) return null;

  try {
    const res = await sql`SELECT * FROM blog_comments WHERE blog_id = ${id}`;
    const comments = res.rows as BlogComment[];

    return comments;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function page({ params: { id } }: Props) {
  noStore();
  const blog = await getBlog(id);
  const comments = await getBlogComments(id);

  if (!blog) return null;
  const sanitizedDescription = DOMPurify.sanitize(blog.description);

  return (
    <main className="flex min-h-[60rem] w-full flex-col items-center gap-[1rem] p-[2rem] md:min-h-[80rem]">
      <div className="flex w-full flex-col items-center gap-[1rem] p-[2rem] xs:px-0 xs:py-[2rem]">
        <div className="relative rounded-lg p-[1rem] sm:h-[25rem] sm:w-[40rem] md:h-[40rem] md:w-[60rem] lg:h-[50rem] lg:w-[80rem] xs:h-[20rem] xs:w-[30rem]">
          <Image src={blog?.thumbnail} alt={`thumbnail-${id}`} fill className="rounded-[1rem] object-fill shadow-md" />
        </div>
        <div className="flex flex-col gap-[1rem] sm:w-[40rem] md:w-[60rem] lg:w-[80rem] xs:w-full">
          <div className="flex w-full justify-between">
            <h1 className="max-w-[70rem] break-words text-[2rem] font-bold text-gray-800 md:text-[3rem]">
              {blog.title}
            </h1>
            <div className="flex justify-end gap-[1rem] pr-[2rem]">
              <IndBlogActions id={blog.id} upvoters={blog.upvoters} blogUpvotes={blog.upvotes} />
            </div>
          </div>
          <canvas className="h-[.2rem] w-[90%] bg-gray-300" />
          <div className="flex flex-col" dangerouslySetInnerHTML={{ __html: sanitizedDescription }} id="ind-blog"></div>
        </div>
      </div>
      {comments && <BlogCommentSection comments={comments} id={blog.id} />}
    </main>
  );
}
