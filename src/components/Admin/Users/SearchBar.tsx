import { searchUser } from "@/scripts/actions/admin-panel/searchUser";
import { getScopedI18n } from "@/locales/server";

export default async function SearchBar() {
  const word = await getScopedI18n("admin.users");
  return (
    <div className="mt-[4rem] flex flex-col gap-[1rem] pl-[1rem] lg:w-full lg:items-center">
      <h2 className="text-[2.8rem] font-bold dark:text-white">{word("manage_users")}</h2>
      <form action={searchUser} className="mt-[2rem] flex max-w-[45rem] items-center">
        <input
          type="text"
          name="search"
          className="h-[4.5rem] w-[25rem] rounded-l-lg border border-gray-200 px-[1.5rem] text-[1.6rem] shadow-md outline-none lg:h-[4rem] lg:w-[40rem]"
          placeholder={word("search")}
        />
        <input
          type="submit"
          value={word("submit")}
          className="h-[4.5rem] cursor-pointer rounded-r-lg bg-green-600 px-[2rem] text-[1.5rem] text-white shadow-sm lg:h-[4rem]"
        />
      </form>
    </div>
  );
}
