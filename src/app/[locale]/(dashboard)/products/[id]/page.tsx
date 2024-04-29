import Image from "next/image";
import { ShopItem } from "../../../../../types/types";
import { lang } from "../../../../../dict/dictionary";

interface Props {
  params: {
    id: number;
    locale: string;
  };
}

async function fetchItem(id: number) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return data;
}

async function ItemPage({ params: { id, locale } }: Props) {
  const item: ShopItem = await fetchItem(id);
  const word = lang[locale as keyof typeof lang];

  return (
    <section className="w-full h-[80rem] flex items-center justify-center">
      <div className="shadow-soft rounded-[1rem] w-[60rem] h-[50rem] flex flex-col items-center p-[4rem_2rem] dark:bg-white">
        <div className="w-full h-[30rem] flex items-center justify-center">
          <div className="w-[30rem] h-[20rem] relative">
            {item.images !== undefined ? <Image src={item.images[0]} alt="" fill /> : null}
          </div>
        </div>

        <div className="w-full flex items-center justify-center text-center flex-col">
          <h1 className="text-[2.5rem] font-bold">{item.title}</h1>
          <p className="text-[1.5rem] font-medium mt-[1rem]">{item.description}</p>
          <p className="text-[1.5rem] font-bold mt-[2rem]">${item.price}</p>
        </div>
        <div className="w-full flex mt-[2rem] items-center justify-center">
          <button className="h-[4rem] w-[14rem] rounded-[.5rem] bg-footer text-[1.1rem] font-bold uppercase text-white">
            {word?.landing.buy}
          </button>
        </div>
      </div>
    </section>
  );
}

export default ItemPage;
