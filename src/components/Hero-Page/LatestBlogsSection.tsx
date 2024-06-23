import { sql } from "@vercel/postgres";
import BlogCard from "../Blogs/BlogCard";
import FadeWrapper from "../Animation-Wrappers/FadeWrapper";

async function getBlogs() {
  try {
    const res = await sql`SELECT * FROM blogs ORDER BY created_at DESC LIMIT 3`;

    return res.rows;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function LatestBlogsSection() {
  const blogs = (await getBlogs()) as Blog[];

  if (!blogs) {
    return <div>Failed to fetch blogs</div>;
  }

  return (
    <FadeWrapper direction="up" delay={0} duration={1000}>
      <div className="flex flex-col items-center justify-center gap-[1rem] sm:w-[40rem] md:w-full xs:w-full">
        <div className="flex w-full items-center justify-center text-[2.5rem] font-bold">Latest Blogs</div>
        <div className="flex w-full flex-wrap items-center justify-center gap-[1rem] gap-x-[5rem] ">
          {blogs.map((blog, idx) => (
            <BlogCard key={idx} {...blog} usedFor="homepage" />
          ))}
        </div>
      </div>
    </FadeWrapper>
  );
}
