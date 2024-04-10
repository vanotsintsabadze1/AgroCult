import Image from "next/image";
import Link from "next/link";

async function getPostById(number) {
  const response = await fetch(`https://dummyjson.com/posts/${number}`);
  return response.json();
}

export default async function IndividualBlogPage({ params }) {
  const { title, body, tags } = await getPostById(params.id);

  return (
    <main className="w-full flex items-center justify-center h-[80rem] p-[2rem]">
      <div className="flex flex-col justify-center shadow-soft rounded-[.5rem] xs:w-full items-center p-[2rem] w-[40rem] md:w-[60rem] lg:w-[60rem]">
        <div className="xs:w-[25rem] xs:h-[20rem] w-[30rem] h-[25rem] rounded-[.5rem] relative">
          <Image
            src="https://picsum.photos/seed/picsum/600/414"
            alt={`${params.id}-image`}
            fill
            className="rounded-[.5rem]"
          />
        </div>
        <div className="w-full flex flex-col items-center text-center p-[2rem_1rem] gap-[1.5rem]">
          <h2 className="font-bold text-[1.7rem]">{title}</h2>
          <p className="font-medium text-[1.2rem]">{body}</p>
          <p className="font-bold text-[1.2rem]">
            {tags.map((tag) => (
              <span key={tag}>#{tag}, </span>
            ))}
          </p>
        </div>
        <div className="p-[2rem_0] flex justify-center w-full">
          <button className="w-[17rem] h-[4.2rem] text-[1.2rem] font-bold rounded-[.5rem] bg-black text-white">
            <Link href={`/blogs`} className="flex items-center justify-center w-full h-full">
              Go Back
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
}
