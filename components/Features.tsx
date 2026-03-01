import { AnimateIn } from "@/components/ui/AnimateIn";
import { MotionCard } from "@/components/ui/MotionCard";

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" strokeWidth="1.5" stroke="#B5401A">
        <line x1="4" y1="16" x2="28" y2="16" />
        <line x1="4" y1="16" x2="4" y2="11" />
        <line x1="28" y1="16" x2="28" y2="11" />
        <rect x="10" y="9" width="12" height="7" />
        <line x1="16" y1="9" x2="16" y2="4" strokeDasharray="2 2" />
      </svg>
    ),
    title: "Price Range",
    description:
      "Know your floor and ceiling before you list. Built from real comps — items that actually sold, not just what sellers hoped to get.",
    detail: "Floor · Midpoint · Ceiling",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" strokeWidth="1.5" stroke="#B5401A">
        <circle cx="16" cy="16" r="10" />
        <polyline points="16,9 16,16 21,20" />
        <line x1="5" y1="5" x2="8" y2="8" strokeWidth="1" />
        <line x1="27" y1="5" x2="24" y2="8" strokeWidth="1" />
      </svg>
    ),
    title: "Sell-Through Speed",
    description:
      "See how long similar items sat before selling. Price to flip fast, or price to maximize — now it's an informed call.",
    detail: "Days listed · Turnover rate",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" strokeWidth="1.5" stroke="#B5401A">
        <rect x="4" y="4" width="10" height="10" />
        <rect x="18" y="4" width="10" height="10" />
        <rect x="4" y="18" width="10" height="10" />
        <rect x="18" y="18" width="10" height="10" />
        <line x1="18" y1="23" x2="28" y2="23" strokeWidth="1" />
        <line x1="18" y1="26" x2="25" y2="26" strokeWidth="1" />
      </svg>
    ),
    title: "Brand Database",
    description:
      "200+ of the most commonly resold vintage brands — Nike, Carhartt, Levi's, Champion, Ralph Lauren, and everything in between.",
    detail: "200+ brands covered",
  },
];

export default function Features() {
  return (
    <section style={{ paddingTop: "5rem", paddingBottom: "6rem" }}>
      <div className="section-container">
        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <AnimateIn delay={0} style={{ marginBottom: "0.875rem" }}>
            <span className="section-label">What you get</span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                color: "#1E1612",
                lineHeight: "1.05",
                letterSpacing: "-0.02em",
              }}
            >
              Everything you need to{" "}
              <em style={{ fontStyle: "italic", color: "#7A7060" }}>price right.</em>
            </h2>
          </AnimateIn>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, i) => (
            <MotionCard
              key={feature.title}
              delay={i * 0.1}
              style={{ padding: "2.25rem", display: "flex", flexDirection: "column" }}
            >
              {/* Icon */}
              <div style={{ marginBottom: "1.75rem" }}>{feature.icon}</div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: "#1E1612",
                  marginBottom: "0.75rem",
                  fontStyle: "italic",
                }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  color: "#7A7060",
                  lineHeight: "1.7",
                  margin: 0,
                  flexGrow: 1,
                }}
              >
                {feature.description}
              </p>

              {/* Detail tag */}
              <div
                style={{
                  marginTop: "1.75rem",
                  paddingTop: "1.25rem",
                  borderTop: "1px solid #C8BEA8",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.12em",
                  color: "#B5401A",
                  textTransform: "uppercase",
                }}
              >
                {feature.detail}
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
