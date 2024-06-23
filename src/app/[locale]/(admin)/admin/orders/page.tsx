import OrdersChart from "@/components/Admin/Orders/OrdersChart";
import { getAllPayments } from "@/scripts/helpers/getAllPayments";

export default async function page() {
  const payments = await getAllPayments();

  return (
    <div className="flex min-h-[60rem] flex-col justify-center pl-[6rem]">
      <div className="flex w-full items-center pl-[1rem] md:justify-center">
        <h1 className="text-[2.5rem] font-bold">Payments</h1>
      </div>
      <OrdersChart payments={payments} />
    </div>
  );
}
