"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  accent?: boolean;
  delay?: number;
}

export function MotionCard({
  children,
  className,
  style,
  accent = false,
  delay = 0,
}: MotionCardProps) {
  return (
    <motion.div
      className={accent ? `card-accent${className ? ` ${className}` : ""}` : `card${className ? ` ${className}` : ""}`}
      style={style}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
    >
      {children}
    </motion.div>
  );
}
