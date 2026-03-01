const freeTier = {
  name: "Free",
  price: "$0",
  period: "forever",
  features: [
    "10 price lookups per month",
    "Suggested price range",
    "Average sold price",
    "Top vintage brands",
  ],
  cta: "Start for Free",
  ctaHref: "#waitlist",
};

const proTier = {
  name: "Pro",
  price: "$8",
  period: "per month",
  features: [
    "Unlimited price lookups",
    "Sell-through speed data",
    "Trend alerts",
    "Full brand database",
    "Early access to new features",
    "Priority support",
  ],
  cta: "Go Pro",
  ctaHref: "#waitlist",
};

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{ paddingTop: "5rem", paddingBottom: "6rem" }}
    >
      <div className="section-container">
        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <div
            className="reveal section-label"
            style={{ animationDelay: "0s", marginBottom: "0.875rem" }}
          >
            Pricing
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
            }}
          >
            Simple pricing.{" "}
            <em style={{ fontStyle: "italic", color: "#857565" }}>
              No surprises.
            </em>
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
            maxWidth: "52rem",
          }}
          className="md:grid-cols-2"
        >
          {/* Free */}
          <div
            className="reveal card"
            style={{ animationDelay: "0.1s", padding: "2.5rem", display: "flex", flexDirection: "column" }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.16em",
                color: "#857565",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              {freeTier.name}
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "3.5rem",
                  color: "#f2ede4",
                  lineHeight: "1",
                }}
              >
                {freeTier.price}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "#857565",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginLeft: "0.75rem",
                }}
              >
                {freeTier.period}
              </span>
            </div>

            <div
              style={{
                borderTop: "1px solid #2d2820",
                paddingTop: "1.5rem",
                marginBottom: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                flexGrow: 1,
              }}
            >
              {freeTier.features.map((f) => (
                <div
                  key={f}
                  style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "#857565",
                    }}
                  >
                    ·
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9rem",
                      color: "#857565",
                    }}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>

            <a href={freeTier.ctaHref} className="btn-ghost" style={{ textAlign: "center" }}>
              {freeTier.cta}
            </a>
          </div>

          {/* Pro */}
          <div
            className="reveal card-accent"
            style={{ animationDelay: "0.2s", padding: "2.5rem", display: "flex", flexDirection: "column" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.16em",
                  color: "#e8b84b",
                  textTransform: "uppercase",
                }}
              >
                {proTier.name}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  color: "#0c0a09",
                  backgroundColor: "#e8b84b",
                  padding: "0.2rem 0.6rem",
                  textTransform: "uppercase",
                }}
              >
                Most Popular
              </div>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "3.5rem",
                  color: "#f2ede4",
                  lineHeight: "1",
                }}
              >
                {proTier.price}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "#857565",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginLeft: "0.75rem",
                }}
              >
                {proTier.period}
              </span>
            </div>

            <div
              style={{
                borderTop: "1px solid #2d2820",
                paddingTop: "1.5rem",
                marginBottom: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                flexGrow: 1,
              }}
            >
              {proTier.features.map((f) => (
                <div
                  key={f}
                  style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "#e8b84b",
                    }}
                  >
                    ✓
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9rem",
                      color: "#f2ede4",
                    }}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>

            <a href={proTier.ctaHref} className="btn-accent" style={{ textAlign: "center" }}>
              {proTier.cta}
            </a>
          </div>
        </div>

        {/* Pay-per-lookup note */}
        <div
          className="reveal"
          style={{
            animationDelay: "0.3s",
            marginTop: "1.5rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            color: "#857565",
            letterSpacing: "0.08em",
          }}
        >
          Also available: $0.50 per lookup — no subscription needed.
        </div>
      </div>
    </section>
  );
}
