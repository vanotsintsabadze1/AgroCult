"use client";

import Image from "next/image";
import { useState } from "react";
import LogInformation from "./LogInformation";
import { AnimatePresence } from "framer-motion";

export default function LogActions(props: Logs) {
  const [shouldDetailsModalOpen, setShouldDetailsModalOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {shouldDetailsModalOpen && <LogInformation {...props} setModal={setShouldDetailsModalOpen} />}
      </AnimatePresence>

      <button onClick={() => setShouldDetailsModalOpen(true)}>
        <Image
          src="/images/icons/admin-icons/actions-icons/see-details.webp"
          alt={`see-details.webp-${props.id}`}
          width={20}
          height={20}
          className="brighthness-100 grayscale invert duration-500 ease-in-out hover:scale-110 hover:brightness-75 hover:grayscale-0 hover:invert-0"
        />
      </button>
    </>
  );
}
