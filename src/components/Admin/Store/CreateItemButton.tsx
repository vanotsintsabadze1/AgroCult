"use client";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import ItemCreationModal from "./Item-Creation/ItemCreationModal";
import { useScopedI18n } from "@/locales/client";

export default function CreateItemButton() {
  const [shouldModalBeVisible, setShouldModalBeVisible] = useState(false);
  const word = useScopedI18n("admin.store");

  return (
    <>
      <AnimatePresence>
        {shouldModalBeVisible && <ItemCreationModal setModal={setShouldModalBeVisible} />}
      </AnimatePresence>

      <button
        onClick={() => setShouldModalBeVisible(true)}
        className="ml-[.2rem] mt-[6rem] w-[12rem] rounded-lg bg-green-600 py-[.8rem] text-[1.3rem] font-medium text-white"
      >
        + {word("add_item")}
      </button>
    </>
  );
}
