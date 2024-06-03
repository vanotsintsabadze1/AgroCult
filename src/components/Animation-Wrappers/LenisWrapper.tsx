"use client";
import { ReactLenis } from "lenis/react";

interface Props {
  children: React.ReactNode;
}

export default function LenisWrapper({ children }: Props) {
  return <ReactLenis root>{children}</ReactLenis>;
}
