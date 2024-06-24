"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useScopedI18n } from "@/locales/client";

export default function BlogSearch() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const word = useScopedI18n("blogs");
  function onSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (search === "") {
      router.push("/blogs");
    }

    router.push(`/blogs?blog_name=${search}`);
    setSearch("");
  }

  return (
    <div className="mt-[3rem] flex w-full justify-center gap-[2rem] px-[1rem]">
      <form onSubmit={onSearch} className="relative w-[40rem] md:w-[60rem] xs:w-full">
        <input
          type="text"
          name="search"
          placeholder={word("searchTheBlogs")}
          className="h-[4rem] w-full rounded-2xl border  border-gray-400 px-[1.2rem] py-[.5rem] text-[1.4rem] shadow-md "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-0 top-0 h-full w-[9rem] rounded-l-md rounded-r-2xl bg-green-600 px-[2rem] text-[1.3rem] font-bold text-white"
        >
          {word("search")}
        </button>
      </form>
    </div>
  );
}
