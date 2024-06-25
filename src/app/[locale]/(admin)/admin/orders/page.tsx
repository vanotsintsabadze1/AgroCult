import OrdersChart from "@/components/Admin/Orders/OrdersChart";
import { getAllPayments } from "@/scripts/helpers/getAllPayments";
import { getScopedI18n } from "@/locales/server";

export default async function page() {
  const payments = await getAllPayments();
  const word = await getScopedI18n("admin.payments");

  return (
    <div className="flex min-h-[60rem] flex-col justify-center pl-[6rem]">
      <div className="mt-[4rem] flex w-full items-center pl-[1rem] md:justify-center">
        <h1 className="text-[2.5rem] font-bold dark:text-white">{word("title")}</h1>
      </div>
      <OrdersChart payments={payments} />
    </div>
  );
}
