"use client";

import Image from "next/image";
import { useScopedI18n } from "../../locales/client";
import { addToCart } from "../../scripts/actions/cart/addToCart";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

interface Props extends ShopItem {
  layout: string;
}

function ItemCard({ images, id, title, description, price, layout }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const multiColView =
    "flex md:w-[30rem] w-[32rem] dark:bg-dark-secondary dark:text-white dark:shadow-xl sm:w-[38rem] flex-col items-center rounded-lg bg-white p-[2rem] shadow-md ";
  const singleColView =
    "flex w-[32rem] flex-col dark:bg-dark-secondary dark:text-white dark:shadow-xl items-center rounded-[1.5rem] bg-white p-[2rem] shadow-md sm:w-[40rem] lg:min-w-[60rem] xl:min-w-[80rem] lg:flex-row lg:gap-x-[2rem]";
  const word = useScopedI18n("store");
  const router = useRouter();
  const { user } = useUser();

  function redirectOnClick() {
    router.push(`/store/${id}`);
  }

  async function onAddToCart() {
    setIsSubmitting(true);
    if (!user) {
      window.location.href = "/api/auth/login";
    }

    if (user) {
      if (price !== 0) {
        const res = await addToCart(user.sub as string, id);

        if (res?.status !== 200) {
          toast.error("Failed to add to cart");
        }
        router.refresh();
        setIsSubmitting(false);
      }
    }
  }

  return (
    <div className={layout === "multi" ? multiColView : singleColView}>
      <div className="flex w-full items-center justify-center lg:w-auto lg:flex-shrink-0">
        <div className="relative sm:h-[25rem] sm:w-[35rem] md:h-[20rem] md:w-[25rem] lg:h-[18rem] lg:w-[25rem] xs:h-[25rem] xs:w-[30rem]">
          <Image src={images[0]} alt={title} fill className="rounded-md" />
        </div>
      </div>
      <div className="flex w-full flex-col lg:gap-y-[3rem] xs:gap-[1rem]">
        <div className="flex w-full flex-grow flex-col gap-[.5rem] lg:flex-shrink-0">
          <h4 className="mt-[1rem] line-clamp-1 text-[1.8rem] font-bold">{title}</h4>
          <p className="line-clamp-2 w-full break-words text-[1.3rem] font-medium">{description}</p>
          <p className="line-clamp-2 text-[1.5rem] font-medium">
            <b>Price</b>: {price === 0 ? "Negotiable" : `$${price}`}
          </p>
        </div>
        <div
          className={`flex h-[5rem] w-full items-center gap-[1rem] ${layout === "multi" ? "justify-center sm:mt-[2rem] sm:pt-[2rem] md:mt-0 xs:mt-[2rem]" : "justify-center lg:justify-start"}`}
        >
          <button
            onClick={redirectOnClick}
            className={`w-[20rem] rounded-lg bg-green-700 py-[.7rem] text-[1.4rem] text-white  ${layout === "multi" ? "w-[20rem]" : "lg:w-[85%] "}`}
          >
            {word("buy")}
          </button>
          <button
            disabled={price === 0 || isSubmitting}
            className={`rounded-md bg-gray-200 p-[.5rem] px-[1rem] shadow-sm ${price === 0 ? "cursor-not-allowed opacity-30" : ""} ${isSubmitting ? "opacity-30" : ""} flex items-center justify-center ${layout === "multi" ? "w-[20%]" : "lg:w-[15%]"}`}
            onClick={onAddToCart}
          >
            <ShoppingCart color="black" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
