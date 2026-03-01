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
        borderTop: "1px solid #C8BEA8",
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
            color: "#1E1612",
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
            color: "#7A7060",
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
                border: "1px solid #3D7A52",
                backgroundColor: "rgba(61, 122, 82, 0.06)",
              }}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "#3D7A52" }}>
                ✓
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  color: "#3D7A52",
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
                animate={{ borderColor: focused ? "#B5401A" : "#C8BEA8" }}
                transition={{ duration: 0.15 }}
                style={{
                  flex: "1 1 240px",
                  backgroundColor: "#EDE6D4",
                  border: "1px solid #C8BEA8",
                  borderRight: "none",
                  color: "#1E1612",
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
              color: "#7A7060",
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
