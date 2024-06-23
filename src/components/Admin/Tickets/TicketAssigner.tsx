import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useState } from "react";
import { assignTicket } from "@/scripts/actions/admin-panel/assignTicket";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { addLog } from "@/scripts/actions/admin-panel/addLog";

const divAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

interface Props {
  ticket: Ticket;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TicketAssigner({ ticket, setModal }: Props) {
  const [stage, setStage] = useState("open");
  const router = useRouter();

  async function onStageSubmit() {
    const res = await assignTicket(ticket.id, stage === "open" ? 1 : stage === "inp" ? 2 : 3);

    if (res?.status === 200) {
      toast.success("Ticket stage updated successfully");
      addLog("Updated Ticket", `Ticket ID: ${ticket.id}`);
      setModal(false);
      router.refresh();
      return;
    }

    toast.error("An error occurred while updating the ticket stage");
  }

  return createPortal(
    <motion.div
      className="fixed z-[40] flex h-screen w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]"
      variants={divAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="w-[30rem] rounded-[1rem] bg-white py-[2rem] shadow-md">
        <div className="flex flex-col items-center justify-center gap-[1rem]">
          <h2 className="text-[1.5rem] font-bold">Ticket Status</h2>
          <select
            onChange={(e) => setStage(e.target.value)}
            className="mt-[1rem] h-[3.5rem] w-[12rem] rounded-[1rem] bg-gray-200 px-[2rem] text-[1.3rem] font-medium shadow-md"
          >
            <option value="open">Open</option>
            <option value="inp">In Progress</option>
            <option value="closed">Closed</option>
          </select>
        </div>
        <div className="mt-[3rem] flex w-full flex-col items-center justify-center gap-[1.5rem]">
          <button
            onClick={() => onStageSubmit()}
            className="h-[3.5rem] w-[12rem] rounded-[1rem] bg-green-600 px-[2rem] text-[1.3rem] font-bold text-white shadow-md"
          >
            Save
          </button>
          <button
            onClick={() => setModal(false)}
            className="h-[3.5rem] w-[12rem] rounded-[1rem] border-2 border-green-600 px-[2rem] text-[1.3rem] font-bold shadow-md"
          >
            Close
          </button>
        </div>
      </div>
    </motion.div>,
    document.body,
  );
}
