import { sql } from "@vercel/postgres";
import Image from "next/image";
import ItemActions from "../../../../../components/Admin/Store/ItemActions";
import CreateItemButton from "../../../../../components/Admin/Store/CreateItemButton";

async function getCurrentItems() {
  try {
    const res = await sql`SELECT * FROM products`;

    return res.rows;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function page() {
  const items = (await getCurrentItems()) as ShopItem[];

  return (
    <div className="flex w-full flex-col items-center pl-[6rem] lg:px-[8rem]">
      <div className="mt-[10rem] flex w-full flex-col overflow-x-auto last:rounded-lg">
        <div className="flex flex-grow flex-col gap-[2rem] px-[1rem] py-[2rem] lg:items-end">
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
        <div className="grid min-w-[105rem] grid-cols-5 rounded-t-lg bg-green-600 py-[1.5rem] text-[1.5rem] text-white shadow-md">
          <div className="col-span-1 m-auto">ID</div>
          <div className="col-span-1 m-auto">Name</div>
          <div className="col-span-1 m-auto">Description</div>
          <div className="col-span-1 m-auto">Price Per Unit</div>
          <div className="col-span-1 m-auto">Actions</div>
        </div>
        {items.map((item) => (
          <div
            key={item.id}
            className="grid min-w-[105rem] grid-cols-5 rounded-t-lg bg-white py-[1.5rem] text-[1.5rem]"
          >
            <div className="col-span-1 m-auto">{item.id}</div>
            <div className="col-span-1 m-auto flex items-center gap-[.5rem]">
              <div className="flex w-[18rem] gap-[1rem] px-[1rem]">
                <Image
                  src={"/images/logos/main-logo-colored.webp"}
                  alt={item.title}
                  className="rounded-sm"
                  width={20}
                  height={20}
                />
                <p className="line-clamp-1">{item.title}</p>
              </div>
            </div>
            <div className="col-span-1 line-clamp-1 ">{item.description}</div>
            <div className="col-span-1 m-auto">${item.price}</div>
            <div className="col-span-1 m-auto flex justify-center gap-[1.5rem]">
              <ItemActions id={item.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
