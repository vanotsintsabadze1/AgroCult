"use client";
import { useState } from "react";

export default function CreateItemButton() {
  const [shouldModalBeVisible, setShouldModalBeVisible] = useState(false);

  return (
    <button className="ml-[.2rem] w-[12rem] rounded-lg bg-green-600 py-[.5rem] text-[1.5rem] font-semibold text-white">
      + Add Item
    </button>
  );
}
