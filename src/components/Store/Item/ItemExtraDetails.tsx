"use client";
import { useState } from "react";
import { useScopedI18n } from "@/locales/client";
import ReactLenis from "lenis/react";

type Details = Pick<ShopItem, "extra_details" | "description" | "brand" | "discount" | "category">;

export default function ItemExtraDetails({ brand, discount, description, extra_details }: Details) {
  const [showMore, setShowMore] = useState(false);
  const word = useScopedI18n("store.product");

  return (
    <div
      className={`duration-400 relative overflow-hidden transition-all ease-in-out ${showMore ? "max-h-[100rem]" : "max-h-[12rem] lg:max-h-none"}`}
    >
      <div
        className={`flex h-full flex-col gap-[1rem] pb-[5rem] lg:pb-0 ${showMore ? "" : "[@media(max-width:1023px)]:item-description-div"}`}
      >
        <div className="mt-[1rem] flex flex-col gap-[1rem]">
          <h2 className="text-[1.8rem] font-bold">{word("description")}</h2>
          <p className="text-[1.3rem] font-medium lg:w-[35rem]">{description}</p>
        </div>
        <div className="my-[2rem] flex h-[20rem] flex-col gap-[1.5rem]">
          <h2 className="text-[1.8rem] font-bold">{word("details")}</h2>
          <ReactLenis options={{ prevent: true }}>
            <div className="item-description-div flex h-[20rem] flex-col gap-[1.5rem] overflow-y-scroll pb-[8rem] scrollbar-hide">
              <div className="flex w-full items-center justify-between">
                <p className="text-[1.3rem] font-medium">Brand:</p>
                <p className="text-[1.3rem] font-medium">{brand}</p>
              </div>
              <div className="flex w-full items-center justify-between">
                <p className="text-[1.3rem] font-medium">Discount:</p>
                <p className="text-[1.3rem] font-medium">{discount === 0 ? "None" : `${discount}%`}</p>
              </div>
              <div className="flex w-full items-center justify-between">
                <p className="text-[1.3rem] font-medium">Category:</p>
                <p className="text-[1.3rem] font-medium">{brand}</p>
              </div>
              {Object.entries(extra_details).map(([key, val], idx) => (
                <div className="flex w-full items-center justify-between" key={idx}>
                  <p className="text-[1.3rem] font-medium">{key}:</p>
                  <p className="w-[10rem] truncate bg-transparent text-right text-[1.3rem] font-normal outline-none">
                    {val}
                  </p>
                </div>
              ))}
            </div>
          </ReactLenis>
        </div>
      </div>
      <button
        onClick={() => setShowMore(!showMore)}
        className="absolute bottom-[1rem] left-1/2 -translate-x-[50%] transform rounded-lg bg-white px-[1rem] py-[.5rem] text-[1.3rem] font-bold text-black lg:hidden"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}
