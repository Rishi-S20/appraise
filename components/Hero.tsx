import { AnimateIn } from "@/components/ui/AnimateIn";
import { MotionCard } from "@/components/ui/MotionCard";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      style={{ paddingTop: "8rem", paddingBottom: "6rem" }}
      className="section-container"
    >
      {/* Fix: use only className for grid columns — no inline gridTemplateColumns */}
      <div className="grid grid-cols-1 gap-16 items-center md:grid-cols-[3fr_2fr]">

        {/* Left — headline + CTAs */}
        <div>
          <AnimateIn delay={0} style={{ marginBottom: "1.5rem" }}>
            <span className="section-label">Built for Depop vintage sellers</span>
          </AnimateIn>

          <AnimateIn delay={0.1} style={{ marginBottom: "1.75rem" }}>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
                lineHeight: "0.92",
                color: "#eeeae0",
                letterSpacing: "-0.02em",
              }}
            >
              Stop
              <br />
              guessing.
              <br />
              <em style={{ color: "#c5f135", fontStyle: "italic" }}>Price right.</em>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.2} style={{ marginBottom: "2.5rem" }}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.0625rem",
                color: "#6a655a",
                lineHeight: "1.7",
                maxWidth: "32rem",
              }}
            >
              Vintage pricing built on real Depop sold data. Know your price range
              before you list — stop leaving money on the table.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3} style={{ marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
              <Button href="#waitlist" variant="accent">
                Get Early Access
              </Button>
              <Button href="#how-it-works" variant="ghost">
                See How It Works
              </Button>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.4}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                color: "#6a655a",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              10 lookups / month free · No card required
            </span>
          </AnimateIn>
        </div>

        {/* Right — Mock lookup card */}
        <MotionCard delay={0.2} style={{ padding: "2rem" }}>
          {/* Input rows */}
          <div style={{ marginBottom: "1.5rem" }}>
            {[
              { label: "BRAND", value: "CARHARTT" },
              { label: "TYPE", value: "CHORE COAT" },
              { label: "ERA", value: "1990s" },
              { label: "CONDITION", value: "Good" },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  padding: "0.5rem 0",
                  borderBottom: "1px solid #1c1a17",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.14em",
                    color: "#6a655a",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    color: "#eeeae0",
                    letterSpacing: "0.06em",
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Label */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              letterSpacing: "0.18em",
              color: "#6a655a",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            — Suggested Price Range —
          </div>

          {/* Price range */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "3rem",
              color: "#c5f135",
              lineHeight: "1",
              marginBottom: "1.5rem",
              letterSpacing: "-0.03em",
            }}
          >
            $65{" "}
            <span style={{ color: "#2c2924", fontSize: "2rem" }}>—</span>{" "}
            $95
          </div>

          {/* Stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            {[
              { label: "AVG SOLD PRICE", value: "$78", color: "#4dcc84" },
              { label: "AVG SELL TIME", value: "4–7 days", color: "#eeeae0" },
              { label: "COMPS ANALYZED", value: "23 listings", color: "#eeeae0" },
            ].map(({ label, value, color }) => (
              <div
                key={label}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    color: "#6a655a",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    color,
                    letterSpacing: "0.04em",
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Terminal footer */}
          <div
            style={{
              borderTop: "1px solid #2c2924",
              marginTop: "1.25rem",
              paddingTop: "0.875rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.58rem",
                color: "#2c2924",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              appraise v0.1
            </span>
            <span className="cursor-blink" />
          </div>
        </MotionCard>
      </div>
    </section>
  );
}
