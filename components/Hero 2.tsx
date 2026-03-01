export default function Hero() {
  return (
    <section
      style={{ paddingTop: "8rem", paddingBottom: "6rem" }}
      className="section-container"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "4rem",
          alignItems: "center",
        }}
        className="md:grid-cols-[55fr_45fr]"
      >
        {/* Left — headline + CTAs */}
        <div>
          <div
            className="reveal section-label"
            style={{ animationDelay: "0s", marginBottom: "1.5rem" }}
          >
            Built for Depop vintage sellers
          </div>

          <h1
            className="reveal"
            style={{
              animationDelay: "0.1s",
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              lineHeight: "0.95",
              color: "#f2ede4",
              marginBottom: "1.75rem",
              letterSpacing: "-0.01em",
            }}
          >
            Stop guessing.
            <br />
            Price with{" "}
            <em style={{ color: "#e8b84b", fontStyle: "italic" }}>
              confidence.
            </em>
          </h1>

          <p
            className="reveal"
            style={{
              animationDelay: "0.2s",
              fontFamily: "var(--font-sans)",
              fontSize: "1.0625rem",
              color: "#857565",
              lineHeight: "1.7",
              maxWidth: "34rem",
              marginBottom: "2.5rem",
            }}
          >
            Vintage pricing built on real Depop sold data. Know your price range
            before you list — stop leaving money on the table and stop pricing
            yourself out.
          </p>

          <div
            className="reveal"
            style={{
              animationDelay: "0.3s",
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
            }}
          >
            <a href="#waitlist" className="btn-accent">
              Get Early Access
            </a>
            <a href="#how-it-works" className="btn-ghost">
              See How It Works
            </a>
          </div>

          <div
            className="reveal"
            style={{
              animationDelay: "0.4s",
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "#857565",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              10 lookups/month free · No card required
            </span>
          </div>
        </div>

        {/* Right — Mock lookup card */}
        <div
          className="reveal-right card"
          style={{ animationDelay: "0.25s", padding: "2rem" }}
        >
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
                  borderBottom: "1px solid #201c18",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.14em",
                    color: "#857565",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    color: "#f2ede4",
                    letterSpacing: "0.06em",
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Divider + label */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.16em",
              color: "#857565",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            — Suggested Price Range —
          </div>

          {/* Price range — hero of the card */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "2.75rem",
              color: "#e8b84b",
              lineHeight: "1",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            $65{" "}
            <span style={{ color: "#2d2820", fontSize: "2rem" }}>—</span>{" "}
            $95
          </div>

          {/* Stats rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            {[
              { label: "AVG SOLD PRICE", value: "$78", color: "#5dbf7a" },
              { label: "AVG SELL TIME", value: "4–7 days", color: "#f2ede4" },
              { label: "COMPS ANALYZED", value: "23 listings", color: "#f2ede4" },
            ].map(({ label, value, color }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.625rem",
                    letterSpacing: "0.12em",
                    color: "#857565",
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

          {/* Terminal cursor */}
          <div
            style={{
              borderTop: "1px solid #2d2820",
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
                fontSize: "0.6rem",
                color: "#2d2820",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              appraise v0.1
            </span>
            <span className="cursor-blink" />
          </div>
        </div>
      </div>
    </section>
  );
}
