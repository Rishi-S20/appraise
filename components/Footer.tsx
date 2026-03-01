export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--c-border)", paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>
      <div className="section-container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--c-text)",
              letterSpacing: "0.06em",
              fontSize: "1.1rem",
              fontWeight: 700,
              fontStyle: "italic",
            }}
          >
            Appraise
          </span>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
            {[
              { label: "How it works", href: "#how-it-works" },
              { label: "Pricing", href: "#pricing" },
              { label: "Join Waitlist", href: "#waitlist" },
            ].map(({ label, href }) => (
              <a key={label} href={href} className="nav-link">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--c-surface-2)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "var(--c-muted)",
              letterSpacing: "0.08em",
            }}
          >
            © 2025 Appraise. Built for vintage sellers.
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "var(--c-border)",
              letterSpacing: "0.08em",
            }}
          >
            v0.1 — beta
          </span>
        </div>
      </div>
    </footer>
  );
}
