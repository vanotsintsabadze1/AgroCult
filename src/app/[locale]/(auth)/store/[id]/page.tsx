import Image from "next/image";
import { getScopedI18n } from "@/locales/server";

interface Props {
  params: {
    id: number;
  };
}

async function fetchItem(id: number) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return data;
}

async function ItemPage({ params: { id } }: Props) {
  const item: ShopItem = await fetchItem(id);
  const word = await getScopedI18n("store");

  return (
    <section className="flex h-[80rem] w-full items-center justify-center">
      <div className="flex h-[50rem] w-[60rem] flex-col items-center rounded-[1rem] p-[4rem_2rem] shadow-soft dark:bg-white">
        <div className="flex h-[30rem] w-full items-center justify-center">
          <div className="relative h-[20rem] w-[30rem]">
            {item.images !== undefined ? <Image src={item.images[0]} alt="" fill /> : null}
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center text-center">
          <h1 className="text-[2.5rem] font-bold">{item.title}</h1>
          <p className="mt-[1rem] text-[1.5rem] font-medium">{item.description}</p>
          <p className="mt-[2rem] text-[1.5rem] font-bold">${item.price}</p>
        </div>
        <div className="mt-[2rem] flex w-full items-center justify-center">
          <button className="h-[4rem] w-[14rem] rounded-[.5rem] bg-black text-[1.1rem] font-bold uppercase text-white">
            {word("buy")}
          </button>
        </div>
      </div>
    </section>
  );
}

export default ItemPage;
