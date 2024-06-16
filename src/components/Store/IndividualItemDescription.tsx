"use client";
import { useState } from "react";

export default function IndividualItemDescription({
  description,
  className,
}: {
  description: string;
  className: string;
}) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className={`${showMore ? "h-auto pb-[5rem]" : "h-[9rem]"} relative w-full py-[1rem] duration-300 ease-in-out`}>
      <div className={`h-full w-full ${className}`} id={showMore ? "" : "item-description-div"}>
        <p className="text-[1.3rem] font-normal">{description}</p>
      </div>
      <button
        onClick={() => setShowMore(!showMore)}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white px-[1rem] py-[.5rem] text-[1.3rem] font-bold"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}
