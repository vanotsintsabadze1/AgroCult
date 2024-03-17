function SearchBar() {
  return (
    <section className="flex w-full items-center justify-center p-[2rem]">
      <div className="relative h-[4rem] w-[30rem] lg:w-[40rem]">
        <input
          type="text"
          placeholder="Search for an item.."
          className="h-full w-full rounded-[.5rem] border-[.2rem] border-gray-400 p-[1rem_1.2rem] text-[1.2rem] text-black placeholder:text-gray-500"
        />
        <button className="absolute right-0 top-1/2 h-full translate-y-[-50%] rounded-[.5rem] bg-gray-400 p-[1rem_1.5rem]">
          <img src="/images/icons/search-icon.webp " alt="" className="h-[2rem] w-[2rem] opacity-60" />
        </button>
      </div>
    </section>
  );
}

export default SearchBar;
