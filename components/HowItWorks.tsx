import { AnimateIn } from "@/components/ui/AnimateIn";

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
    <section id="how-it-works" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
      <div className="section-container">
        <div style={{ marginBottom: "3.5rem" }}>
          <AnimateIn delay={0} style={{ marginBottom: "0.875rem" }}>
            <span className="section-label">The process</span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                color: "var(--c-text)",
                lineHeight: "1.05",
                letterSpacing: "-0.02em",
              }}
            >
              From thrift find to listed
              <br />
              <em style={{ fontStyle: "italic", color: "var(--c-muted)" }}>in under a minute.</em>
            </h2>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {steps.map((step, i) => (
            <AnimateIn key={step.number} delay={i * 0.1}>
              <div
                style={{
                  padding: "2.5rem",
                  borderLeft: i === 0 ? "1px solid var(--c-border)" : "none",
                  borderRight: "1px solid var(--c-border)",
                  borderTop: "1px solid var(--c-border)",
                  borderBottom: "1px solid var(--c-border)",
                  position: "relative",
                  height: "100%",
                  boxSizing: "border-box",
                  backgroundColor: "var(--c-bg)",
                  transition: "background-color 0.25s ease, border-color 0.25s ease",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "6rem",
                    lineHeight: "1",
                    color: "var(--c-accent)",
                    opacity: 0.08,
                    position: "absolute",
                    top: "1.25rem",
                    right: "1.5rem",
                    letterSpacing: "-0.04em",
                    userSelect: "none",
                    fontWeight: 900,
                  }}
                >
                  {step.number}
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.62rem",
                    color: "var(--c-accent)",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    marginBottom: "1.5rem",
                  }}
                >
                  Step {step.number}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 700,
                    fontSize: "1.35rem",
                    color: "var(--c-text)",
                    marginBottom: "0.875rem",
                    lineHeight: "1.2",
                    fontStyle: "italic",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                    color: "var(--c-muted)",
                    lineHeight: "1.65",
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.35}>
          <div
            style={{
              borderLeft: "1px solid var(--c-border)",
              borderRight: "1px solid var(--c-border)",
              borderBottom: "1px solid var(--c-border)",
              padding: "1.75rem 2.5rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "2.5rem",
              backgroundColor: "var(--c-surface)",
              transition: "background-color 0.25s ease",
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
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.75rem",
                    color: "var(--c-accent)",
                    letterSpacing: "-0.03em",
                    whiteSpace: "nowrap",
                    fontWeight: 700,
                  }}
                >
                  {stat}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8rem",
                    color: "var(--c-muted)",
                    lineHeight: "1.4",
                    maxWidth: "160px",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
