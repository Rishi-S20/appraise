"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{ borderBottom: "1px solid #2c2924", backgroundColor: "#0a0908" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="section-container h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <motion.span
            style={{
              fontFamily: "var(--font-mono)",
              color: "#eeeae0",
              letterSpacing: "0.22em",
              fontSize: "2rem",
              textTransform: "uppercase",
              display: "inline-block",
            }}
            whileHover={{ color: "#c5f135" }}
            transition={{ duration: 0.15 }}
          >
            Appraise
          </motion.span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#how-it-works" className="nav-link">
            How it works
          </Link>
          <Link href="#pricing" className="nav-link">
            Pricing
          </Link>
          <Button href="#waitlist" variant="accent">
            Get Early Access
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.25 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <motion.span
            style={{
              display: "block",
              width: "22px",
              height: "1px",
              backgroundColor: "#eeeae0",
            }}
            animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            style={{
              display: "block",
              width: "22px",
              height: "1px",
              backgroundColor: "#eeeae0",
            }}
            animate={{ opacity: open ? 0 : 1 }}
            transition={{ duration: 0.15 }}
          />
          <motion.span
            style={{
              display: "block",
              width: "22px",
              height: "1px",
              backgroundColor: "#eeeae0",
            }}
            animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              overflow: "hidden",
              borderTop: "1px solid #2c2924",
              backgroundColor: "#0a0908",
            }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              <Link
                href="#how-it-works"
                onClick={() => setOpen(false)}
                className="nav-link"
              >
                How it works
              </Link>
              <Link
                href="#pricing"
                onClick={() => setOpen(false)}
                className="nav-link"
              >
                Pricing
              </Link>
              <Button
                href="#waitlist"
                variant="accent"
                style={{ textAlign: "center" }}
              >
                Get Early Access
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
