const steps = [
  {
    number: "01",
    title: "Input your item",
    description:
      "Brand, item type, decade, condition. Takes about 30 seconds. No spreadsheets, no guesswork.",
  },
  {
    number: "02",
    title: "We pull the comps",
    description:
      "Real sold listings from Depop — not asking prices. What people actually paid, for items like yours.",
  },
  {
    number: "03",
    title: "Price with data",
    description:
      "Get a price range, average sold price, and how quickly similar items moved. List in seconds.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
    >
      <div className="section-container">
        {/* Section header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="reveal section-label" style={{ animationDelay: "0s", marginBottom: "0.875rem" }}>
            The process
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
            From thrift find to listed
            <br />
            <em style={{ fontStyle: "italic", color: "#857565" }}>in under a minute.</em>
          </h2>
        </div>

        {/* Steps grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "0",
          }}
          className="md:grid-cols-3"
        >
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="reveal"
              style={{
                animationDelay: `${i * 0.12}s`,
                padding: "2.5rem",
                borderLeft: i === 0 ? "1px solid #2d2820" : "none",
                borderRight: "1px solid #2d2820",
                borderTop: "1px solid #2d2820",
                borderBottom: "1px solid #2d2820",
                position: "relative",
              }}
            >
              {/* Large decorative number */}
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "5rem",
                  lineHeight: "1",
                  color: "#e8b84b",
                  opacity: 0.12,
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.75rem",
                  letterSpacing: "-0.04em",
                  userSelect: "none",
                }}
              >
                {step.number}
              </div>

              {/* Step number label */}
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color: "#e8b84b",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: "1.25rem",
                }}
              >
                Step {step.number}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  color: "#f2ede4",
                  marginBottom: "0.75rem",
                  lineHeight: "1.3",
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9375rem",
                  color: "#857565",
                  lineHeight: "1.65",
                  margin: 0,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stat bar */}
        <div
          className="reveal"
          style={{
            animationDelay: "0.4s",
            borderLeft: "1px solid #2d2820",
            borderRight: "1px solid #2d2820",
            borderBottom: "1px solid #2d2820",
            padding: "1.75rem 2.5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "2.5rem",
          }}
        >
          {[
            { stat: "10–15 min", label: "Average time sellers spend pricing manually" },
            { stat: "< 60 sec", label: "Time to get a price with Appraise" },
            { stat: "200+", label: "Vintage brands in our database" },
          ].map(({ stat, label }) => (
            <div key={stat} style={{ display: "flex", alignItems: "baseline", gap: "1rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "1.5rem",
                  color: "#e8b84b",
                  letterSpacing: "-0.02em",
                  whiteSpace: "nowrap",
                }}
              >
                {stat}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  color: "#857565",
                  lineHeight: "1.4",
                  maxWidth: "160px",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
