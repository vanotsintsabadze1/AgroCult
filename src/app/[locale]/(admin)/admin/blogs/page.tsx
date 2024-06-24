import AdminBlogActions from "@/components/Admin/Blogs/AdminBlogActions";
import AdminBlogSearch from "@/components/Admin/Blogs/AdminBlogSearch";
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

interface Props {
  searchParams: {
    search: string;
  };
}

async function getAllBlogs({ searchParams }: Props) {
  try {
    let res;

    if (searchParams.search) {
      const search = `%${searchParams.search}%`;
      res = await sql`SELECT * FROM blogs WHERE title ILIKE ${search} ORDER BY id ASC`;
    } else if (!searchParams.search) {
      res = await sql`SELECT * FROM blogs ORDER BY id ASC`;
    }

    return res?.rows;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function page({ searchParams }: Props) {
  noStore();
  const blogs = (await getAllBlogs({ searchParams })) as Blog[];

  return (
    <div className="flex w-full flex-col items-center pl-[6rem] lg:justify-center">
      <div className="mt-[8rem] flex w-full flex-col overflow-x-auto px-[1rem] lg:items-center">
        <h4 className="text-[2.5rem] font-bold">Manage Blogs</h4>
        <div className="mt-[2rem] lg:flex lg:w-full lg:items-center lg:justify-center">
          <AdminBlogSearch />
        </div>
        <div className="mt-[3rem] grid w-[90rem] grid-cols-5 rounded-t-xl bg-green-600 px-[1rem] py-[1.5rem] text-white">
          <div className="cols-span-1 m-auto text-[1.5rem]">ID</div>
          <div className="cols-span-1 m-auto text-[1.5rem]">Title</div>
          <div className="cols-span-1 m-auto text-[1.5rem]">WID</div>
          <div className="cols-span-1 m-auto text-[1.5rem]">Writer</div>
          <div className="cols-span-1 m-auto text-[1.5rem]">Actions</div>
        </div>
        {blogs.map((blog) => (
          <div key={blog.id} className="grid w-[90rem] grid-cols-5 bg-white px-[1rem] py-[1.5rem]">
            <div className="cols-span-1 m-auto text-[1.5rem]">{blog.id}</div>
            <div className="cols-span-1 m-auto w-[15rem] truncate text-[1.5rem]">{blog.title}</div>
            <div className="cols-span-1 m-auto w-[15rem] truncate text-[1.5rem]">{blog.wid}</div>
            <div className="cols-span-1 m-auto w-[8rem] truncate text-[1.5rem]">{blog.wname}</div>
            <div className="cols-span-1 m-auto flex items-center justify-center gap-[2rem] text-[1.5rem]">
              <AdminBlogActions blog={blog} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
