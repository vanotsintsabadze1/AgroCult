import { searchUser } from "@/scripts/actions/admin-panel/searchUser";

export default function SearchBar() {
  return (
    <div className="mt-[4rem] flex flex-col gap-[1rem] pl-[1rem] lg:w-full lg:items-center">
      <h2 className="text-[2.8rem] font-bold">Manage Users</h2>
      <canvas className="h-[.1rem] w-[80%] bg-gray-300" />
      <form action={searchUser} className="mt-[1rem] flex max-w-[45rem] items-center">
        <input
          type="text"
          name="search"
          className="h-[4.5rem] w-[25rem] rounded-l-lg border border-gray-200 px-[1.5rem] text-[1.6rem] shadow-md outline-none lg:h-[4rem] lg:w-[40rem]"
          placeholder="Username..."
        />
        <input
          type="submit"
          value="Search"
          className="h-[4.5rem] cursor-pointer rounded-r-lg bg-gray-400 px-[2rem] text-[1.5rem] text-white shadow-sm lg:h-[4rem]"
        />
      </form>
    </div>
  );
}
