"use client";
import { useState } from "react";
import { Eye, PaperclipIcon } from "lucide-react";
import TicketDetails from "./TicketDetails";
import { AnimatePresence } from "framer-motion";
import TicketAssigner from "./TicketAssigner";

interface Props {
  ticket: Ticket;
}

export default function TicketAction({ ticket }: Props) {
  const [ticketAssigner, setTicketAssigner] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);

  return (
    <>
      <AnimatePresence>{detailsModal && <TicketDetails ticket={ticket} setModal={setDetailsModal} />}</AnimatePresence>
      <AnimatePresence>
        {ticketAssigner && <TicketAssigner ticket={ticket} setModal={setTicketAssigner} />}
      </AnimatePresence>
      <button onClick={() => setDetailsModal(true)}>
        <Eye size={20} className="duration-300 ease-in-out hover:text-green-600" />
      </button>
      <button onClick={() => setTicketAssigner(true)}>
        <PaperclipIcon size={20} className="duration-300 ease-in-out hover:text-green-600" />
      </button>
    </>
  );
}
