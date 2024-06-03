"use client";
import { Fade } from "react-awesome-reveal";

interface Props {
  children: React.ReactNode;
  direction: "up" | "down" | "left" | "right";
  duration: number;
  delay: number;
  className?: string;
}

export default function FadeWrapper({
  children,
  direction,
  duration,
  delay,
  className,
}: Props) {
  return (
    <Fade
      direction={direction}
      duration={duration}
      triggerOnce
      delay={delay}
      className={className}
    >
      {children}
    </Fade>
  );
}
