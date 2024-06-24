"use client";

import { Eye, ArrowLeftSquare } from "lucide-react";
import { useState } from "react";
import OrderDetails from "./OrderDetails";
import { refundPayment } from "@/scripts/actions/admin-panel/refundPayment";
import ConfirmationModal from "../Users/ConfirmationModal";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { addLog } from "@/scripts/actions/admin-panel/addLog";

interface Props {
  payment: Payment;
}

export default function OrderActions({ payment }: Props) {
  const [detailsModal, setDetailsModal] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const cid = payment?.latest_charge.id;
  const router = useRouter();

  function onDetailsClick() {
    setDetailsModal(true);
  }

  async function onRefund() {
    const res = await refundPayment(cid);

    if (!res?.status) {
      toast.error("Failed to refund payment");
    }

    if (res?.status === 200) {
      toast.success("Payment refunded successfully");
      router.refresh();
      addLog("Refunded payment", `Refunded payment with charge id: ${cid}`)
    }
  }

  return (
    <>
      {confirmationModal && <ConfirmationModal cb={() => onRefund()} setConfirmationModal={setConfirmationModal} />}
      {detailsModal && <OrderDetails payment={payment} setModal={setDetailsModal} />}

      <button onClick={onDetailsClick}>
        <Eye size={20} className="duration-300 ease-in-out hover:text-green-600" />
      </button>
      {!payment.latest_charge.refunded && (
        <button onClick={() => setConfirmationModal(true)}>
          <ArrowLeftSquare size={20} className="duration-300 ease-in-out hover:text-green-600" />
        </button>
      )}
    </>
  );
}
