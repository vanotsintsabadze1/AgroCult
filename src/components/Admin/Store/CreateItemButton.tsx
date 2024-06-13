"use client";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import ItemCreationModal from "./Item-Creation/ItemCreationModal";

export default function CreateItemButton() {
  const [shouldModalBeVisible, setShouldModalBeVisible] = useState(false);

  return (
    <>
      <AnimatePresence>
        {shouldModalBeVisible && <ItemCreationModal setModal={setShouldModalBeVisible} />}
      </AnimatePresence>

      <button
        onClick={() => setShouldModalBeVisible(true)}
        className="ml-[.2rem] mt-[6rem] w-[12rem] rounded-lg bg-green-600 py-[.5rem] text-[1.5rem] font-semibold text-white"
      >
        + Add Item
      </button>
    </>
  );
}
