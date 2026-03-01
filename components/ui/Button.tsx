"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "accent" | "ghost";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const accentBase: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "var(--c-accent)",
  color: "var(--c-bg)",
  fontFamily: "var(--font-sans)",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  fontSize: "0.72rem",
  padding: "0.9rem 2.25rem",
  border: "none",
  cursor: "pointer",
  textDecoration: "none",
};

const ghostBase: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "transparent",
  color: "var(--c-text)",
  fontFamily: "var(--font-sans)",
  fontWeight: 600,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  fontSize: "0.72rem",
  padding: "0.9rem 2.25rem",
  border: "1px solid var(--c-border)",
  cursor: "pointer",
  textDecoration: "none",
};

export function Button({
  children,
  variant = "accent",
  href,
  onClick,
  type = "button",
  disabled,
  className,
  style,
}: ButtonProps) {
  const base = variant === "accent" ? accentBase : ghostBase;

  const hoverProps =
    variant === "accent"
      ? { backgroundColor: "var(--c-accent-dim)", y: -2 }
      : { borderColor: "var(--c-accent)", color: "var(--c-accent)", y: -2 };

  const combinedStyle: React.CSSProperties = {
    ...base,
    ...style,
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? "not-allowed" : "pointer",
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={className}
        style={combinedStyle}
        whileHover={!disabled ? hoverProps : undefined}
        whileTap={!disabled ? { scale: 0.97 } : undefined}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={combinedStyle}
      whileHover={!disabled ? hoverProps : undefined}
      whileTap={!disabled ? { scale: 0.97 } : undefined}
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
      {children}
    </motion.button>
  );
}
