interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ setSearch, search }: Props) {
  return (
    <div className="mt-[4rem] flex flex-col gap-[1rem]">
      <h2 className="text-[2.8rem] font-bold">Search for the user</h2>
      <canvas className="h-[.1rem] w-[80%] bg-gray-300" />
      <input
        type="text"
        name="user-search-input"
        id=""
        className="mt-[1rem] h-[5rem] w-[30rem] rounded-lg border border-gray-200 px-[1.5rem] text-[1.6rem] shadow-md outline-none"
        placeholder="Username..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
