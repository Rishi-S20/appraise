"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        borderBottom: "1px solid #2d2820",
        backgroundColor: "#0c0a09",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="section-container h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span
            style={{
              fontFamily: "var(--font-serif)",
              color: "#f2ede4",
              letterSpacing: "0.22em",
              fontSize: "1rem",
              textTransform: "uppercase",
            }}
          >
            Appraise
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#how-it-works"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#857565",
              textDecoration: "none",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f2ede4")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#857565")}
          >
            How it works
          </Link>
          <Link
            href="#pricing"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#857565",
              textDecoration: "none",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f2ede4")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#857565")}
          >
            Pricing
          </Link>
          <a href="#waitlist" className="btn-accent">
            Get Early Access
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1px",
              backgroundColor: "#f2ede4",
              transition: "transform 0.2s ease, opacity 0.2s ease",
              transform: open ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1px",
              backgroundColor: "#f2ede4",
              opacity: open ? 0 : 1,
              transition: "opacity 0.2s ease",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1px",
              backgroundColor: "#f2ede4",
              transition: "transform 0.2s ease",
              transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            borderTop: "1px solid #2d2820",
            backgroundColor: "#0c0a09",
          }}
          className="md:hidden px-6 py-6 flex flex-col gap-5"
        >
          <Link
            href="#how-it-works"
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#857565",
              textDecoration: "none",
            }}
          >
            How it works
          </Link>
          <Link
            href="#pricing"
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#857565",
              textDecoration: "none",
            }}
          >
            Pricing
          </Link>
          <a href="#waitlist" className="btn-accent" style={{ textAlign: "center" }}>
            Get Early Access
          </a>
        </div>
      )}
    </nav>
  );
}
