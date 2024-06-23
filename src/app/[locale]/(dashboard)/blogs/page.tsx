import { unstable_noStore as noStore } from "next/cache";
import BlogSearch from "@/components/Blogs/BlogSearch";
import BlogsIntro from "@/components/Blogs/BlogsIntro";
import BlogsWrapper from "@/components/Blogs/BlogsWrapper";
import { sql } from "@vercel/postgres";
import BlogCard from "@/components/Blogs/BlogCard";
import { redirect } from "next/navigation";

async function getBlogs({ searchParams }: { searchParams: { blog_name: string } }) {
  if (Object.keys(searchParams).length > 0 && !searchParams.blog_name) {
    return redirect("/blogs");
  }

  if (!searchParams.blog_name || searchParams.blog_name === "") {
    try {
      const res = await sql`SELECT * FROM blogs`;

      return res.rows;
    } catch (err) {
      console.error(err);
      return [];
    }
  } else {
    const search = `%${searchParams.blog_name}%`;
    try {
      const res = await sql`SELECT * FROM blogs WHERE title ILIKE ${search}`;

      return res.rows;
    } catch (err) {
      console.error(err);
      return [];
    }
  }
}

interface Props {
  searchParams: {
    blog_name: string;
  };
}

export default async function page({ searchParams }: Props) {
  noStore();
  const blogs = (await getBlogs({ searchParams })) as Blog[];

  return (
    <>
      <BlogsIntro />
      <BlogSearch />
      <BlogsWrapper>
        {blogs.length === 0 ? <h1>No blogs found</h1> : blogs.map((blog) => <BlogCard key={blog.id} {...blog} usedFor="blogs" />)}
      </BlogsWrapper>
    </>
  );
}
