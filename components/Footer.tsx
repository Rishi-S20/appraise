export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #2c2924", paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>
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
          {/* Logo */}
          <span
            style={{
              fontFamily: "var(--font-serif)",
              color: "#eeeae0",
              letterSpacing: "0.22em",
              fontSize: "0.9rem",
              textTransform: "uppercase",
            }}
          >
            Appraise
          </span>

          {/* Nav links */}
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

        {/* Bottom row */}
        <div
          style={{
            borderTop: "1px solid #1c1a17",
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
              color: "#6a655a",
              letterSpacing: "0.08em",
            }}
          >
            © 2025 Appraise. Built for vintage sellers.
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "#2c2924",
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
