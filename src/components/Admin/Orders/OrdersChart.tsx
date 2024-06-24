import OrderActions from "./OrderActions";
import { getScopedI18n } from "@/locales/server";

interface Props {
  payments: Payment[];
}

export default async function OrdersChart({ payments }: Props) {
  const word = await getScopedI18n("profile.payments");

  return (
    <div className="mt-[2rem] flex h-full w-full flex-col overflow-x-auto px-[1rem] lg:items-center">
      <div className="grid w-[100rem] grid-cols-6 rounded-t-xl bg-green-600 px-[1rem] py-[1.5rem] text-white">
        <div className="col-span-1 m-auto text-[1.5rem]">PID</div>
        <div className="col-span-1 m-auto text-[1.5rem]">{word("price")}</div>
        <div className="col-span-1 m-auto text-[1.5rem]">{word("status.title")}</div>
        <div className="col-span-2 m-auto text-[1.5rem]">{word("date")}</div>
        <div className="col-span-1 m-auto text-[1.5rem]">{word("actions")}</div>
      </div>
      {payments.map((payment) => (
        <div key={payment.id} className="grid w-[100rem] grid-cols-6 bg-white px-[1rem] py-[1.5rem] text-black">
          <div className="col-span-1 m-auto w-[10rem] truncate text-[1.5rem]">{payment.id}</div>
          <div className="col-span-1 m-auto text-[1.5rem]">${(payment.amount / 100).toLocaleString()}</div>
          <div className="col-span-1 m-auto text-[1.5rem]">
            {!payment.latest_charge.refunded &&
              (payment.status === "succeeded" ? (
                <div className="font -bold flex w-[12rem] items-center justify-center border-2 border-green-500 px-[1rem] py-[.5rem] text-[1.2rem] uppercase text-green-600">
                  {word("status.succeeded")}
                </div>
              ) : (
                <div className="flex w-[12rem] items-center justify-center border-2 border-red-500 px-[1rem] py-[.5rem] text-[1.2rem] font-bold uppercase text-red-500">
                  Cancelled
                </div>
              ))}

            {payment.latest_charge.refunded && payment.status === "succeeded" && (
              <div className="flex w-[12rem] items-center justify-center border-2 border-purple-500 px-[1rem] py-[.5rem] text-[1.2rem] font-bold uppercase text-purple-500">
                {word("status.refunded")}
              </div>
            )}
          </div>
          <div className="col-span-2 m-auto text-[1.5rem]">
            {new Date(payment.created * 1000).toLocaleDateString()} |{" "}
            {new Date(payment.created * 1000).toLocaleTimeString()}
          </div>
          <div className="col-span-1 m-auto flex items-center justify-center gap-[2rem] text-[1.5rem]">
            <OrderActions payment={payment} />
          </div>
        </div>
      ))}
    </div>
  );
}
