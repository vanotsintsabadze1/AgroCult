"use client";
import { useScopedI18n } from "@/locales/client";
import { useState } from "react";

export default function AdminBlogSearch() {
  const word = useScopedI18n("admin.blogs");
  const [search, setSearch] = useState("");

  function onSearch() {
    console.log("sm");
    if (search === "") {
      window.location.href = "/admin/blogs";
    } else {
      window.location.href = `/admin/blogs?search=${search}`;
    }
  }

  return (
    <>
      <input
        type="text"
        className="h-[4rem] w-[25rem] rounded-l-lg border border-gray-300 px-[1.2rem] text-[1.4rem] shadow-md md:w-[40rem] lg:w-[50rem] xs:w-[15rem]"
        placeholder={word("searchPlaceholder")}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={onSearch}
        className="h-[4rem] rounded-r-lg bg-green-600 px-[1rem] text-[1.3rem] text-white shadow-md lg:px-[2rem]"
      >
        {word("search")}
      </button>
    </>
  );
}
