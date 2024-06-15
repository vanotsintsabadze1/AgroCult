import { sql } from "@vercel/postgres";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";

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

export default async function page({ params: { id } }: Props) {
  const blog = await getBlog(id);

  if (!blog) return null;
  const sanitizedDescription = DOMPurify.sanitize(blog.description);

  console.log(blog);

  return (
    <main className="flex w-full flex-col items-center gap-[2rem] p-[2rem]">
      <div className="relative rounded-lg p-[1rem] sm:h-[25rem] sm:w-[40rem] md:h-[40rem] md:w-[60rem] lg:h-[40rem] lg:w-[80rem] xs:h-[10rem] xs:w-[30rem]">
        <Image src={blog?.thumbnail} alt={`thumbnail-${id}`} fill className="object-contain" />
      </div>
      <div className="flex flex-col gap-[2rem] sm:w-[40rem] md:w-[60rem] lg:w-[72rem] xs:w-full" id="ind-blog">
        <h1 className="text-[2rem] font-bold text-gray-800">{blog.title}</h1>
        <div className="flex flex-col" dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></div>
      </div>
    </main>
  );
}
