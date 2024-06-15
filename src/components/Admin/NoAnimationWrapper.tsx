'use client';
import ReactLenis from "lenis/react";

interface Props {
    children: React.ReactNode;  
}
export default function NoAnimationWrapper({ children }: Props) {
  return (
    <ReactLenis options={{prevent: true}}>
        {children}
    </ReactLenis>
  )
}
