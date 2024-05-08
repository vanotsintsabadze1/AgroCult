import BlogCard from "../../../../components/Blogs/BlogCard";
import { Blog } from "../../../../types/types";

async function getPosts() {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();
  return data.posts;
}

export default async function Blogs() {
  const blogs = await getPosts();

  return (
    <main className="mb-[10rem] flex w-full items-center p-[2rem] xl:p-[3rem] flex-col">
      <div className="w-full gap-[2rem] p-[2rem] flex items-center justify-evenly flex-col">
        <h1 className="text-[3rem] font-bold text-black dark:text-white">Blogs</h1>
        <p className="text-black text-center text-[1.3rem] leading-[2.3rem] lg:w-[60rem] md:w-[60rem] dark:text-white">
          Check out the latest blogs made by our team and community members. Here you can stay up to date with the
          latest news, updates, and business tips to improve your store.
        </p>
      </div>
      <div className="flex justify-center mt-[4rem]">
        <div className="grid lg:grid-cols-2 gap-x-[8rem] gap-y-[10rem] xl:grid-cols-3">
          {blogs.map((blog: Blog) => {
            return <BlogCard key={blog.id} {...blog} />;
          })}
        </div>
      </div>

      {/* <div className="w-full h-[30rem] border border-gray-200 xs:w-full flex items-end justify-start">
        <div className="w-[10rem] h-[10rem] border border-black"></div>
      </div> */}
    </main>
  );
}
