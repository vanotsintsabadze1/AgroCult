import { sql } from "@vercel/postgres";
import Image from "next/image";
import ItemActions from "../../../../../components/Admin/Store/ItemActions";
import CreateItemButton from "../../../../../components/Admin/Store/CreateItemButton";
import { unstable_noStore as noStore } from "next/cache";

async function getCurrentItems() {
  try {
    const res = await sql`SELECT * FROM products ORDER BY id ASC`;

    return res.rows;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function page() {
  noStore();
  const items = (await getCurrentItems()) as ShopItem[];

  return (
    <div className="flex w-full flex-col items-center pl-[6rem] lg:px-[8rem]">
      <div className="flex w-full flex-col overflow-x-auto last:rounded-lg lg:items-center">
        <div className="flex flex-grow flex-col gap-[2rem] px-[1rem] lg:items-end">
          <CreateItemButton />
          <div className="lg:flex lg:w-full lg:items-center lg:justify-center">
            <input
              type="text"
              className="h-[4rem] w-[25rem] rounded-l-lg border border-gray-300 px-[1.2rem] text-[1.4rem] shadow-md md:w-[40rem] lg:w-[50rem]"
              placeholder="Search Item.."
            />
            <button className="h-[4rem] rounded-r-lg bg-green-600 px-[1rem] text-[1.3rem] text-white shadow-md lg:px-[2rem]">
              Search
            </button>
          </div>
        </div>
        <div className="mt-[2rem] grid w-[100rem] grid-cols-5 rounded-t-lg bg-green-600 py-[1.5rem] text-[1.5rem] text-white shadow-md">
          <div className="col-span-1 m-auto">ID</div>
          <div className="col-span-1 m-auto">Name</div>
          <div className="col-span-1 m-auto">Price Per Unit</div>
          <div className="col-span-1 m-auto">Category</div>
          <div className="col-span-1 m-auto">Actions</div>
        </div>
        {items.map((item) => (
          <div key={item.id} className="grid w-[100rem] grid-cols-5 rounded-t-lg bg-white py-[2rem] text-[1.5rem]">
            <div className="col-span-1 m-auto">{item.id}</div>
            <div className="col-span-1 m-auto flex items-center gap-[.5rem]">
              <div className="flex w-[20rem] items-center gap-[1rem] px-[1rem]">
                <div className="relative h-[2.5rem] w-[2.5rem]">
                  <Image src={item.images[0]} alt={item.title} className="rounded-sm" fill />
                </div>
                <p className="line-clamp-1">{item.title}</p>
              </div>
            </div>
            <div className="col-span-1 m-auto">${item.price}</div>
            <div className="col-span-1 m-auto flex gap-[.5rem]">
              {item.category.map((category, idx) => (
                <p key={category + item.title}>
                  {category}
                  {idx === item.category.length - 1 ? null : ","}
                </p>
              ))}
            </div>
            <div className="col-span-1 m-auto flex justify-center gap-[2.5rem]">
              <ItemActions id={item.id} item={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
