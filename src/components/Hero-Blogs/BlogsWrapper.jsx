import { blogs } from "../../data/blogs";
import BlogCard from "./BlogCard";

function BlogsWrapper() {
  return (
    <section className="mt-[5rem] flex w-full items-center justify-center lg:mt-[10rem]">
      <div className="flex w-full flex-col items-center gap-[4rem] p-[0_4rem] lg:flex-row lg:flex-wrap lg:justify-center lg:gap-[5rem] lg:gap-x-[10rem] lg:gap-y-[8rem]">
        <div className="flex w-full items-center justify-center">
          <h2 className="text-center text-[2.5rem] font-bold uppercase tracking-wider">Top Blogs</h2>
        </div>
        {blogs.map((blog, index) => {
          return <BlogCard blogData={blog} key={index}/>;
        })}
      </div>
    </section>
  );
}

export default BlogsWrapper;
