"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setState("loading");
    // TODO: wire up to API route (e.g. Resend, ConvertKit, etc.)
    await new Promise((r) => setTimeout(r, 900));
    setState("success");
  }

  return (
    <section
      id="waitlist"
      style={{
        borderTop: "1px solid #2d2820",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      <div
        className="section-container"
        style={{ maxWidth: "42rem" }}
      >
        <div
          className="reveal section-label"
          style={{ animationDelay: "0s", marginBottom: "1rem" }}
        >
          Early access
        </div>

        <h2
          className="reveal"
          style={{
            animationDelay: "0.1s",
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#f2ede4",
            lineHeight: "1.05",
            letterSpacing: "-0.01em",
            marginBottom: "1rem",
          }}
        >
          Be first in line.
        </h2>

        <p
          className="reveal"
          style={{
            animationDelay: "0.2s",
            fontFamily: "var(--font-sans)",
            fontSize: "1rem",
            color: "#857565",
            lineHeight: "1.65",
            marginBottom: "2.5rem",
          }}
        >
          Appraise is in closed beta. Join the waitlist and get early access
          before public launch — plus a free month of Pro when we ship.
        </p>

        {state === "success" ? (
          <div
            className="reveal"
            style={{
              animationDelay: "0s",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1.25rem 1.5rem",
              border: "1px solid #5dbf7a",
              backgroundColor: "rgba(93, 191, 122, 0.06)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                color: "#5dbf7a",
                letterSpacing: "0.1em",
              }}
            >
              ✓
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                color: "#5dbf7a",
                letterSpacing: "0.04em",
              }}
            >
              You&apos;re on the list. We&apos;ll reach out when access opens.
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="reveal"
            style={{
              animationDelay: "0.25s",
              display: "flex",
              flexWrap: "wrap",
              gap: "0",
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              style={{
                flex: "1 1 240px",
                backgroundColor: "#181512",
                border: "1px solid #2d2820",
                borderRight: "none",
                color: "#f2ede4",
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                padding: "0.875rem 1.25rem",
                outline: "none",
                letterSpacing: "0.04em",
                transition: "border-color 0.15s ease",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#e8b84b")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#2d2820")}
            />
            <button
              type="submit"
              disabled={state === "loading"}
              className="btn-accent"
              style={{
                flexShrink: 0,
                opacity: state === "loading" ? 0.6 : 1,
                cursor: state === "loading" ? "not-allowed" : "pointer",
              }}
            >
              {state === "loading" ? "..." : "Join Waitlist"}
            </button>
          </form>
        )}

        {state !== "success" && (
          <p
            className="reveal"
            style={{
              animationDelay: "0.35s",
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "#857565",
              letterSpacing: "0.08em",
              marginTop: "1rem",
            }}
          >
            No spam. Unsubscribe any time.
          </p>
        )}
      </div>
    </section>
  );
}
