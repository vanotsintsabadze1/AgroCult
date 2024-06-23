import { BookCheck, Clock4Icon, MapPinIcon, ShipIcon } from "lucide-react";

export default function ServiceDetails() {
  return (
    <div className="hidden h-[15rem] w-full grid-cols-2 grid-rows-2 rounded-2xl lg:grid ">
      <div className="flex items-center justify-center p-[2rem]">
        <div className="flex h-[5rem] w-full items-center gap-[1rem] rounded-[1rem] border border-green-600 px-[2rem] py-[.5rem] shadow-sm shadow-green-800/50">
          <ShipIcon size={25} color="green" />
          <p className="text-[1.3rem] font-bold text-black">Nationwide Shipping</p>
        </div>
      </div>
      <div className="flex items-center justify-center p-[2rem]">
        <div className="flex h-[5rem] w-full items-center gap-[1rem] rounded-[1rem] border border-green-600 px-[2rem] py-[.5rem] shadow-sm shadow-green-800/50">
          <BookCheck size={25} color="green" />
          <p className="text-[1.3rem] font-bold text-black">Global Warranty</p>
        </div>
      </div>
      <div className="flex items-center justify-center p-[2rem]">
        <div className="flex h-[5rem] w-full items-center gap-[1rem] rounded-[1rem] border border-green-600 px-[2rem] py-[.5rem] shadow-sm shadow-green-800/50">
          <MapPinIcon size={25} color="green" />
          <p className="text-[1.3rem] font-bold text-black">Available to Order</p>
        </div>
      </div>
      <div className="flex items-center justify-center p-[2rem]">
        <div className="flex h-[5rem] w-full items-center gap-[1rem] rounded-[1rem] border border-green-600 px-[2rem] py-[.5rem] shadow-sm shadow-green-800/50">
          <Clock4Icon size={25} color="green" />
          <p className="text-[1.3rem] font-bold text-black">Fastest Delivery</p>
        </div>
      </div>
    </div>
  );
}
