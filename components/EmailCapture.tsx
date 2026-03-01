"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

type FormState = "idle" | "loading" | "success";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [focused, setFocused] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setState("loading");
    // TODO: wire up to API route (e.g. Resend, ConvertKit)
    await new Promise((r) => setTimeout(r, 900));
    setState("success");
  }

  return (
    <section
      id="waitlist"
      style={{
        borderTop: "1px solid #2c2924",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      <div className="section-container" style={{ maxWidth: "44rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "0.875rem" }}
        >
          <span className="section-label">Early access</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
            color: "#eeeae0",
            lineHeight: "1.05",
            letterSpacing: "-0.02em",
            marginBottom: "1rem",
          }}
        >
          Be first in line.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1rem",
            color: "#6a655a",
            lineHeight: "1.65",
            marginBottom: "2.5rem",
          }}
        >
          Appraise is in closed beta. Join the waitlist and get early access
          before public launch — plus a free month of Pro when we ship.
        </motion.p>

        <AnimatePresence mode="wait">
          {state === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1.25rem 1.5rem",
                border: "1px solid #4dcc84",
                backgroundColor: "rgba(77, 204, 132, 0.06)",
              }}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "#4dcc84" }}>
                ✓
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  color: "#4dcc84",
                  letterSpacing: "0.04em",
                }}
              >
                You&apos;re on the list. We&apos;ll reach out when access opens.
              </span>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onSubmit={handleSubmit}
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                animate={{ borderColor: focused ? "#c5f135" : "#2c2924" }}
                transition={{ duration: 0.15 }}
                style={{
                  flex: "1 1 240px",
                  backgroundColor: "#131110",
                  border: "1px solid #2c2924",
                  borderRight: "none",
                  color: "#eeeae0",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  padding: "0.9rem 1.25rem",
                  outline: "none",
                  letterSpacing: "0.04em",
                }}
              />
              <Button type="submit" variant="accent" disabled={state === "loading"} style={{ flexShrink: 0 }}>
                {state === "loading" ? "..." : "Join Waitlist"}
              </Button>
            </motion.form>
          )}
        </AnimatePresence>

        {state !== "success" && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "#6a655a",
              letterSpacing: "0.08em",
              marginTop: "1rem",
            }}
          >
            No spam. Unsubscribe any time.
          </motion.p>
        )}
      </div>
    </section>
  );
}
