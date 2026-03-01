const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" strokeWidth="1.5" stroke="#e8b84b">
        <line x1="4" y1="14" x2="24" y2="14" />
        <line x1="4" y1="14" x2="4" y2="10" />
        <line x1="24" y1="14" x2="24" y2="10" />
        <rect x="9" y="8" width="10" height="6" />
        <line x1="14" y1="8" x2="14" y2="4" strokeDasharray="2 2" />
      </svg>
    ),
    title: "Price Range",
    description:
      "Know your floor and ceiling before you list. Our range is built from real comps — items that actually sold, not just what sellers hoped to get.",
    detail: "Floor · Midpoint · Ceiling",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" strokeWidth="1.5" stroke="#e8b84b">
        <circle cx="14" cy="14" r="9" />
        <polyline points="14,8 14,14 18,17" />
        <line x1="5" y1="5" x2="7" y2="7" strokeWidth="1" />
        <line x1="23" y1="5" x2="21" y2="7" strokeWidth="1" />
      </svg>
    ),
    title: "Sell-Through Speed",
    description:
      "See how long similar items sat before selling. Price to flip fast, or price to maximize — it's your call, now it's an informed one.",
    detail: "Days listed · Turnover rate",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" strokeWidth="1.5" stroke="#e8b84b">
        <rect x="4" y="4" width="8" height="8" />
        <rect x="16" y="4" width="8" height="8" />
        <rect x="4" y="16" width="8" height="8" />
        <rect x="16" y="16" width="8" height="8" rx="0" />
        <line x1="16" y1="20" x2="24" y2="20" strokeWidth="1" />
        <line x1="16" y1="22.5" x2="22" y2="22.5" strokeWidth="1" />
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
        {/* Section header */}
        <div style={{ marginBottom: "3rem" }}>
          <div
            className="reveal section-label"
            style={{ animationDelay: "0s", marginBottom: "0.875rem" }}
          >
            What you get
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
            Everything you need to{" "}
            <em style={{ fontStyle: "italic", color: "#857565" }}>price right.</em>
          </h2>
        </div>

        {/* Feature cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
          }}
          className="md:grid-cols-3"
        >
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="reveal card"
              style={{
                animationDelay: `${i * 0.12}s`,
                padding: "2.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "0",
              }}
            >
              {/* Icon */}
              <div style={{ marginBottom: "1.5rem" }}>{feature.icon}</div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "1.0625rem",
                  color: "#f2ede4",
                  marginBottom: "0.75rem",
                  letterSpacing: "0.01em",
                }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  color: "#857565",
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
                  borderTop: "1px solid #2d2820",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  color: "#e8b84b",
                  textTransform: "uppercase",
                }}
              >
                {feature.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
