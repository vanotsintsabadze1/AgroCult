import { topSellingItems } from "../../../data/topSellingItems";
import ItemCard from "./ItemCard";

function ItemsWrapper() {
  return (
    <section className="overflow mt-[5rem] w-full">
      <div className="flex w-full items-center justify-center">
        <h2 className="mb-[2rem] text-[2.2rem] font-bold uppercase tracking-wide">Top Sellers</h2>
      </div>
      <div className="flex w-full items-center justify-center p-[0_1rem]">
        <div className=" flex w-full snap-x snap-mandatory gap-[5rem] overflow-auto p-[2rem] lg:gap-[8rem] xl:w-[130rem]">
          {topSellingItems.map((item, index) => {
            return <ItemCard itemData={item} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default ItemsWrapper;
