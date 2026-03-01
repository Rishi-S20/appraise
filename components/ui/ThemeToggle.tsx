"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.4rem",
        background: "none",
        border: "1px solid var(--c-border)",
        cursor: "pointer",
        padding: "0.4rem 0.65rem",
        color: "var(--c-muted)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.62rem",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        transition: "border-color 0.15s ease, color 0.15s ease",
        flexShrink: 0,
      }}
      whileHover={{ borderColor: "var(--c-accent)", color: "var(--c-accent)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.15 }}
    >
      <motion.span
        key={theme}
        initial={{ opacity: 0, rotate: -15 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.2 }}
        style={{ display: "flex", alignItems: "center" }}
      >
        {isDark ? (
          /* Sun icon */
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <circle cx="8" cy="8" r="3" />
            <line x1="8" y1="1" x2="8" y2="3" />
            <line x1="8" y1="13" x2="8" y2="15" />
            <line x1="1" y1="8" x2="3" y2="8" />
            <line x1="13" y1="8" x2="15" y2="8" />
            <line x1="3.05" y1="3.05" x2="4.46" y2="4.46" />
            <line x1="11.54" y1="11.54" x2="12.95" y2="12.95" />
            <line x1="12.95" y1="3.05" x2="11.54" y2="4.46" />
            <line x1="4.46" y1="11.54" x2="3.05" y2="12.95" />
          </svg>
        ) : (
          /* Moon icon */
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M13.5 10.5A6 6 0 0 1 5.5 2.5a6 6 0 1 0 8 8z" />
          </svg>
        )}
      </motion.span>
      {isDark ? "Light" : "Dark"}
    </motion.button>
  );
}
