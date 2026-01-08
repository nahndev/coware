"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { PropsWithChildren, useRef } from "react";

export type ScrollAreaProps = PropsWithChildren<{
  className?: string;
}>;

const ScrollArea: React.FC<ScrollAreaProps> = ({ children, className }) => {
  const ref = useRef(null);
  return (
    <div ref={ref} className={cn("w-full", className)}>
      <motion.div className="w-max" drag="x" dragConstraints={ref} dragElastic={0.1}>
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollArea;
