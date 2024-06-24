import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useScopedI18n } from "@/locales/client";

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

export default function TicketDetails({ ticket, setModal }: Props) {
  const word = useScopedI18n("admin.tickets");

  return createPortal(
    <motion.div
      className="fixed z-[40] flex h-screen w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]"
      variants={divAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="flex min-h-[50rem] w-[35rem] flex-col gap-[1.5rem] rounded-[1rem] bg-white py-[1.5rem] shadow-md md:w-[50rem] lg:w-[60rem]">
        <div className="flex w-full flex-col gap-[.5rem] px-[2rem]">
          <h4 className="text-[1.2rem] font-bold uppercase text-gray-400">ID</h4>
          <p className="text-[1.3rem] font-medium">{ticket.id}</p>
        </div>
        <div className="flex w-full flex-col gap-[.5rem] px-[2rem]">
          <h4 className="text-[1.2rem] font-bold uppercase text-gray-400">{word("ticket.issuer_name")}</h4>
          <p className="text-[1.3rem] font-medium">{ticket.issuer_name}</p>
        </div>
        <div className="flex w-full flex-col gap-[.5rem] px-[2rem]">
          <h4 className="text-[1.2rem] font-bold uppercase text-gray-400">{word("ticket.issuer_email")}</h4>
          <p className="text-[1.3rem] font-medium">{ticket.issuer_email}</p>
        </div>
        <div className="flex w-full flex-col gap-[.5rem] px-[2rem]">
          <h4 className="text-[1.2rem] font-bold uppercase text-gray-400">{word("ticket.topic")}</h4>
          <p className="text-[1.3rem] font-medium">{ticket.topic}</p>
        </div>
        <div className="flex w-full flex-col gap-[.5rem] px-[2rem]">
          <h4 className="text-[1.2rem] font-bold uppercase text-gray-400">{word("ticket.description")}</h4>
          <textarea
            readOnly
            defaultValue={ticket.description}
            className="h-[4rem] w-full resize-none overflow-y-auto text-[1.3rem] outline-none"
          ></textarea>
        </div>
        <div className="flex w-full flex-col gap-[.5rem] px-[2rem]">
          <h4 className="text-[1.2rem] font-bold uppercase text-gray-400">{word("ticket.created_at")}</h4>
          <p className="text-[1.3rem] font-medium">{ticket.created_at.toDateString()}</p>
        </div>
        <div className="flex w-full flex-col gap-[.5rem] px-[2rem]">
          <h4 className="text-[1.2rem] font-bold uppercase text-gray-400">Stage</h4>
          <div
            className={`flex h-[3rem] min-w-[12rem] max-w-[15rem] items-center justify-center ${ticket.stage === "open" ? "border-2 border-green-400 text-green-400" : ticket.stage === "in progress" ? "border-2 border-yellow-500 text-yellow-500" : "border-2 border-red-500 text-red-500"} px-[2rem] text-[1.3rem] font-medium`}
          >
            {ticket.stage === "open"
              ? word("ticket.status.open")
              : ticket.stage === "in progress"
                ? word("ticket.status.inProgress")
                : word("ticket.status.closed")}
          </div>
        </div>
        <div className="flex w-full items-center justify-center py-[1rem]">
          <button
            onClick={() => setModal(false)}
            className="h-[3.5rem] w-[12rem] rounded-[1rem] bg-green-600 text-[1.3rem] font-bold text-white shadow-md"
          >
            {word("ticket.close")}
          </button>
        </div>
      </div>
    </motion.div>,
    document.body,
  );
}
