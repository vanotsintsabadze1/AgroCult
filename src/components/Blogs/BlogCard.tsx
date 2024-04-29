import Image from "next/image";
import Link from "next/link";
import { Blog } from "../../types/types";
import { lang } from "../../dict/dictionary";

interface Props extends Blog {
  locale: string;
}

function BlogCard({ title, body, tags, id, locale }: Props) {
  const word = lang[locale as keyof typeof lang];

  return (
    <div className="w-[35rem] xs:w-full flex flex-col items-center shadow-soft rounded-[1rem] pb-[2rem] dark:bg-white">
      <section className="w-full pt-[2rem] flex justify-center p-[1rem_2rem]">
        <div className="w-[35rem] h-[20rem] relative shadow-xs rounded-[.5rem]">
          <Image src="https://picsum.photos/seed/picsum/600/414" alt={title} fill className="rounded-[.5rem]" />
        </div>
      </section>
      <section className="w-full flex justify-center">
        <div className="p-[.5rem_2rem] text-center w-[35rem]">
          <h2 className="text-[1.8rem] font-bold line-clamp-1">{title}</h2>
          <p className="font-medium text-[1.2rem] line-clamp-3 mt-[1rem]">{body}</p>
          <p className="font-bold text-[1.2rem] line-clamp-3 mt-[2rem]">
            {tags.map((tag: string) => (
              <span key={tag}>#{tag}, </span>
            ))}
          </p>
        </div>
      </section>
      <section className="p-[2rem_0] flex justify-center w-full">
        <button className="w-[17rem] h-[4.2rem] text-[1.2rem] font-bold rounded-[.5rem] bg-black text-white">
          <Link href={`/${locale}/blogs/${id}`} className="flex items-center justify-center w-full h-full">
            {word?.blogs.seeMore}
          </Link>
        </button>
      </section>
    </div>
  );
}

export default BlogCard;
