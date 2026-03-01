"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  fromRight?: boolean;
}

export function AnimateIn({
  children,
  delay = 0,
  className,
  style,
  fromRight = false,
}: AnimateInProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, x: fromRight ? 32 : 0, y: fromRight ? 0 : 22 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
