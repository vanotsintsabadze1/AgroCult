import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useScopedI18n } from "@/locales/client";

const divAnimations = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

interface Props {
  payment: Payment;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function OrderDetails({ payment, setModal }: Props) {
  const word = useScopedI18n("profile.payments");

  return createPortal(
    <motion.div
      variants={divAnimations}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed z-[40] flex h-screen w-screen items-center justify-center bg-[rgba(0,0,0,0.4)]"
    >
      <div className="min-h-[55rem] w-[40rem] rounded-[2rem] bg-white px-[2rem] pb-[2rem] shadow-md xs:w-full">
        <div className="mt-[2rem] flex w-full flex-col gap-[.5rem] overflow-x-auto">
          <h4 className="text-[1.2rem] font-bold uppercase text-gray-400">PID</h4>
          <p className="text-[1.4rem] font-medium ">{payment.id}</p>
        </div>
        <div className="mt-[2rem] flex w-full flex-col gap-[.5rem] overflow-x-auto">
          <h4 className="text-[1.2rem] font-bold uppercase text-gray-400">{word("extra_details.receipt_number")}</h4>
          <p className="text-[1.4rem] font-medium ">{payment.latest_charge.receipt_number}</p>
        </div>
        <div className="mt-[2rem] flex w-full flex-col gap-[.5rem] overflow-x-auto">
          <h4 className="text-[1.2rem] font-bold uppercase text-gray-400">{word("extra_details.name")}</h4>
          <p className="text-[1.4rem] font-medium ">{payment.latest_charge.billing_details.name}</p>
        </div>
        <div className="mt-[2rem] flex w-full flex-col gap-[.5rem] overflow-x-auto">
          <h4 className="text-[1.2rem] font-bold uppercase text-gray-400">{word("extra_details.email")}</h4>
          <p className="text-[1.4rem] font-medium ">{payment.metadata.email}</p>
        </div>
        <div className="mt-[2rem] flex flex-col gap-[.5rem]">
          <h4 className="text-[1.2rem] font-bold uppercase text-gray-400">{word("extra_details.paidWith")}</h4>
          <p className="text-[1.4rem] font-medium ">
            {payment?.latest_charge?.payment_method_details?.card.brand.toLocaleUpperCase()}
          </p>
        </div>
        <div className="mt-[2rem] flex flex-col gap-[.5rem]">
          <h4 className="text-[1.2rem] font-bold uppercase text-gray-400">{word("extra_details.date")}</h4>
          <p className="text-[1.4rem] font-medium ">
            {new Date(payment.created * 1000).toLocaleDateString()} |{" "}
            {new Date(payment.created * 1000).toLocaleTimeString()}
          </p>
        </div>
        <div className="mt-[2rem] flex flex-col gap-[.5rem]">
          <h4 className="text-[1.2rem] font-bold uppercase text-gray-400">{word("status.title")}</h4>
          <div className="text-[1.4rem] font-medium ">
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
        </div>
        <div className="mt-[2rem] flex w-full flex-col gap-[.5rem] overflow-x-auto">
          <h4 className="text-[1.2rem] font-bold uppercase text-gray-400">{word("price")}</h4>
          <p className="text-[1.4rem] font-medium">${(payment.amount / 100).toLocaleString()}</p>
        </div>
        <div className="mt-[2rem] flex w-full items-center justify-center ">
          <button
            onClick={() => setModal(false)}
            className="h-[3.5rem] w-[15rem] rounded-[1rem] bg-green-600 text-[1.3rem] font-bold text-white shadow-md"
          >
            {word("extra_details.close")}
          </button>
        </div>
      </div>
    </motion.div>,
    document.body,
  );
}
