"use client";
import { useState } from "react";
import { useScopedI18n } from "@/locales/client";

type Details = Pick<ShopItem, "extra_details" | "description">;

export default function ItemExtraDetails({ description, extra_details }: Details) {
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

        <div className="my-[2rem] flex flex-col gap-[1rem]">
          <h2 className="text-[1.8rem] font-bold">{word("details")}</h2>
          {Object.entries(extra_details).map(([key, val], idx) => (
            <div className="flex w-full items-center justify-between" key={idx}>
              <p className="text-[1.3rem] font-medium">{key}</p>
              <input
                readOnly
                type="text"
                defaultValue={val}
                className="w-[10rem] bg-transparent text-[1.3rem] font-normal outline-none lg:w-[15rem]"
              />
            </div>
          ))}
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
