import { AnimateIn } from "@/components/ui/AnimateIn";
import { MotionCard } from "@/components/ui/MotionCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

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
    <section id="pricing" style={{ paddingTop: "5rem", paddingBottom: "6rem" }}>
      <div className="section-container">
        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <AnimateIn delay={0} style={{ marginBottom: "0.875rem" }}>
            <span className="section-label">Pricing</span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                color: "#eeeae0",
                lineHeight: "1.05",
                letterSpacing: "-0.02em",
              }}
            >
              Simple pricing.{" "}
              <em style={{ fontStyle: "italic", color: "#6a655a" }}>No surprises.</em>
            </h2>
          </AnimateIn>
        </div>

        {/* Cards — fix: Tailwind handles columns, no inline gridTemplateColumns */}
        <div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          style={{ maxWidth: "52rem" }}
        >
          {/* Free */}
          <MotionCard delay={0.1} style={{ padding: "2.5rem", display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                letterSpacing: "0.16em",
                color: "#6a655a",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              {freeTier.name}
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "4rem",
                  color: "#eeeae0",
                  lineHeight: "1",
                }}
              >
                {freeTier.price}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  color: "#6a655a",
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
                borderTop: "1px solid #2c2924",
                paddingTop: "1.5rem",
                marginBottom: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.875rem",
                flexGrow: 1,
              }}
            >
              {freeTier.features.map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#6a655a" }}>
                    ·
                  </span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "#6a655a" }}>
                    {f}
                  </span>
                </div>
              ))}
            </div>

            <Button href={freeTier.ctaHref} variant="ghost" style={{ textAlign: "center", display: "block" }}>
              {freeTier.cta}
            </Button>
          </MotionCard>

          {/* Pro */}
          <MotionCard
            accent
            delay={0.2}
            style={{ padding: "2.5rem", display: "flex", flexDirection: "column" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.16em",
                  color: "#c5f135",
                  textTransform: "uppercase",
                }}
              >
                {proTier.name}
              </span>
              <Badge variant="accent">Most Popular</Badge>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "4rem",
                  color: "#eeeae0",
                  lineHeight: "1",
                }}
              >
                {proTier.price}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  color: "#6a655a",
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
                borderTop: "1px solid #2c2924",
                paddingTop: "1.5rem",
                marginBottom: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.875rem",
                flexGrow: 1,
              }}
            >
              {proTier.features.map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#c5f135" }}>
                    ✓
                  </span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "#eeeae0" }}>
                    {f}
                  </span>
                </div>
              ))}
            </div>

            <Button href={proTier.ctaHref} variant="accent" style={{ textAlign: "center", display: "block" }}>
              {proTier.cta}
            </Button>
          </MotionCard>
        </div>

        {/* Pay-per-lookup note */}
        <AnimateIn delay={0.3} style={{ marginTop: "1.5rem" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              color: "#6a655a",
              letterSpacing: "0.08em",
            }}
          >
            Also available: $0.50 per lookup — no subscription needed.
          </span>
        </AnimateIn>
      </div>
    </section>
  );
}
