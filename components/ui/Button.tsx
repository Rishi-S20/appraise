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
  backgroundColor: "#c5f135",
  color: "#0a0908",
  fontFamily: "var(--font-sans)",
  fontWeight: 700,
  letterSpacing: "0.07em",
  textTransform: "uppercase",
  fontSize: "0.75rem",
  padding: "0.9rem 2.25rem",
  border: "none",
  cursor: "pointer",
  textDecoration: "none",
  boxShadow: "0 2px 14px rgba(197, 241, 53, 0.22)",
};

const ghostBase: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "transparent",
  color: "#eeeae0",
  fontFamily: "var(--font-sans)",
  fontWeight: 600,
  letterSpacing: "0.07em",
  textTransform: "uppercase",
  fontSize: "0.75rem",
  padding: "0.9rem 2.25rem",
  border: "1px solid #2c2924",
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
      ? {
          backgroundColor: "#a8d420",
          boxShadow: "0 4px 22px rgba(197, 241, 53, 0.38)",
          y: -2,
        }
      : { borderColor: "#c5f135", color: "#c5f135", y: -2 };

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
