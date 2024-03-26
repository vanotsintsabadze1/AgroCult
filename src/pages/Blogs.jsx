import BlogCard from "../components/Blogs/BlogCard";
import { blogs } from "../data/blogs";

function Blogs() {
  return (
    <main className="mb-[10rem] flex h-[70rem] w-full items-center justify-center p-[1rem] xl:p-[3rem]">
      <div className="flex h-full flex-col items-center gap-[5rem] overflow-y-auto p-[2rem] xs:w-full sm:w-[40rem] md:w-[60rem] lg:w-full lg:flex-row lg:flex-wrap lg:justify-center lg:gap-x-[10rem] lg:gap-y-[10rem] xl:w-[140rem]">
        {blogs.map((blog) => {
          return <BlogCard key={blog.id} {...blog} />;
        })}
      </div>
    </main>
  );
}

export default Blogs;
