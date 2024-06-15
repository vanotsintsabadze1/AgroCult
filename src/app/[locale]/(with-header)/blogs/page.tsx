import { unstable_noStore as noStore } from "next/cache";
import BlogSearch from "@/components/Blogs/BlogSearch";
import BlogsIntro from "@/components/Blogs/BlogsIntro";
import BlogsWrapper from "@/components/Blogs/BlogsWrapper";
import { sql } from "@vercel/postgres";
import BlogCard from "@/components/Blogs/BlogCard";

async function getBlogs() {
  try {
    const res = await sql`SELECT * FROM blogs`;

    return res.rows;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default async function page() {
  noStore();
  const blogs = (await getBlogs()) as Blog[];

  return (
    <>
      <BlogsIntro />
      <BlogSearch />
      <BlogsWrapper>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </BlogsWrapper>
    </>
  );
}
