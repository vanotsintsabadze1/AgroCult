import Image from "next/image";
import Link from "next/link";
import { Blog } from "../../../../../types/types";
import { getScopedI18n } from "../../../../../locales/server";

interface Props {
  params: {
    id: number;
    locale: string;
  };
}

export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();

  return data.posts.map((blog: Blog) => ({
    id: `${blog.id}`,
  }));
}

async function getPostById(number: number) {
  const response = await fetch(`https://dummyjson.com/posts/${number}`);
  return response.json();
}

export default async function IndividualBlogPage({ params: { id, locale } }: Props) {
  const { title, body, tags } = await getPostById(id);
  const word = await getScopedI18n("blogs");

  return (
    <main className="w-full flex items-center justify-center h-[80rem] p-[2rem]">
      <div className="flex flex-col justify-center shadow-soft rounded-[.5rem] xs:w-full items-center p-[2rem] w-[40rem] md:w-[60rem] lg:w-[60rem] dark:bg-white">
        <div className="xs:w-[25rem] xs:h-[20rem] w-[30rem] h-[25rem] rounded-[.5rem] relative">
          <Image src="https://picsum.photos/seed/picsum/600/414" alt={`${id}-image`} fill className="rounded-[.5rem]" />
        </div>
        <div className="w-full flex flex-col items-center text-center p-[2rem_1rem] gap-[1.5rem]">
          <h2 className="font-bold text-[1.7rem]">{title}</h2>
          <p className="font-medium text-[1.2rem]">{body}</p>
          <p className="font-bold text-[1.2rem]">
            {tags.map((tag: string) => (
              <span key={tag}>#{tag}, </span>
            ))}
          </p>
        </div>
        <div className="p-[2rem_0] flex justify-center w-full">
          <button className="w-[17rem] h-[4.2rem] text-[1.2rem] font-bold rounded-[.5rem] bg-black text-white">
            <Link href={`/${locale}/blogs`} className="flex items-center justify-center w-full h-full">
              {word("goBack")}
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
}
