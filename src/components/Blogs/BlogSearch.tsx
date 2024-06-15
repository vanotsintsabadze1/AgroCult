import React from "react";

export default function BlogSearch() {
  return (
    <div className="mt-[3rem] flex w-full justify-center gap-[2rem] px-[1rem]">
      <div className="relative w-[40rem] md:w-[60rem] xs:w-full">
        <input
          type="text"
          placeholder="Search the blogs.."
          className="h-[4rem] w-full rounded-2xl border  border-gray-400 px-[1.2rem] py-[.5rem] text-[1.4rem] shadow-md "
        />
        <button className="absolute right-0 top-0 h-full w-[9rem] rounded-l-md rounded-r-2xl bg-green-600 px-[2rem] text-[1.3rem] font-bold text-white">
          Submit
        </button>
      </div>
    </div>
  );
}
