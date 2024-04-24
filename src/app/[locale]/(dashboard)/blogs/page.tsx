import BlogCard from "../../../../components/Blogs/BlogCard";
import { Blog } from "../../../../types/types";

interface Props {
  params: {
    locale: string;
  };
}

async function getPosts() {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();
  return data.posts;
}

export default async function Blogs({ params: { locale } }: Props) {
  const blogs = await getPosts();

  return (
    <main className="mb-[10rem] flex w-full items-center justify-center p-[2rem] xl:p-[3rem]">
      <div className="w-full flex justify-center">
        <div className="h-[80rem] scrollbar-hide flex flex-col items-center gap-[10rem] lg:grid lg:grid-cols-2 xl:grid-cols-3 overflow-y-auto p-[2rem]">
          {blogs.map((blog: Blog) => {
            return <BlogCard key={blog.id} locale={locale} {...blog} />;
          })}
        </div>
      </div>
    </main>
  );
}
