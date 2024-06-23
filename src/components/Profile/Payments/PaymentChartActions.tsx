"use client";
import { Eye } from "lucide-react";
import Link from "next/link";
import { Link as ReceiptURLIcon } from "lucide-react";
import { useState } from "react";
import PaymentDetails from "./PaymentDetails";
import { AnimatePresence } from "framer-motion";

interface Props {
  payment: Payment;
}

export default function PaymentChartActions({ payment }: Props) {
  const [shouldModalOpen, setShouldModalOpen] = useState(false);

  function enableDetailsModal() {
    setShouldModalOpen(true);
  }

  return (
    <>
      <AnimatePresence>
        {shouldModalOpen && <PaymentDetails payment={payment} setModal={setShouldModalOpen} />}
      </AnimatePresence>

      <button onClick={enableDetailsModal}>
        <Eye size={20} className="duration-300 ease-in-out hover:text-green-600" />
      </button>
      <Link href={payment.latest_charge.receipt_url} target="_blank">
        <ReceiptURLIcon size={20} className="duration-300 ease-in-out hover:text-green-600" />
      </Link>
    </>
  );
}
