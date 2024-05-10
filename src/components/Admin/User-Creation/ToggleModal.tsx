"use client";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function ToggleModal({ children }: Props) {
  const [shouldModalOpen, setShouldModalOpen] = useState(false);

  function setModalVisibility() {
    setShouldModalOpen(!shouldModalOpen);
  }
  return (
    <>
      <div>
        <button
          className="w-[17rem] shadow-sm rounded-[.5rem] h-[3.7rem] bg-black text-white font-bold text-[1.1rem]"
          onClick={setModalVisibility}
        >
          {shouldModalOpen ? "Close" : "Create User"}
        </button>
      </div>
      {shouldModalOpen && children}
    </>
  );
}
