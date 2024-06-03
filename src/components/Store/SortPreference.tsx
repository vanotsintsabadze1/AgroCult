export default function SortPreference() {
  return (
    <section className="flex flex-col gap-[1rem] px-[1rem] lg:px-0">
      <h4 className="text-[1.8rem] font-bold">Sort by:</h4>
      <select className="h-[3.5rem] w-[25rem] rounded-lg bg-gray-300 px-[1rem] text-[1.4rem] shadow-sm">
        <option>Most Relevant</option>
        <option>Best Selling</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>
    </section>
  );
}
