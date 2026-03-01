const brands = [
  "NIKE", "CARHARTT", "LEVI'S", "RALPH LAUREN", "CHAMPION",
  "STARTER", "TOMMY HILFIGER", "WRANGLER", "WOOLRICH", "L.L. BEAN",
  "COLUMBIA", "PENDLETON", "LEE", "DICKIES", "PATAGONIA",
  "THE NORTH FACE", "NAUTICA", "POLO SPORT", "FILA", "REEBOK",
  "ADIDAS", "TIMBERLAND",
];

export default function BrandTicker() {
  return (
    <div
      aria-hidden="true"
      style={{
        borderTop: "1px solid var(--c-border)",
        borderBottom: "1px solid var(--c-border)",
        overflow: "hidden",
        paddingTop: "0.875rem",
        paddingBottom: "0.875rem",
        backgroundColor: "var(--c-surface)",
        transition: "background-color 0.25s ease, border-color 0.25s ease",
      }}
    >
      <div className="ticker-track">
        {[...brands, ...brands].map((brand, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              color: "var(--c-accent)",
              textTransform: "uppercase",
              paddingLeft: "2.5rem",
              paddingRight: "2.5rem",
              flexShrink: 0,
            }}
          >
            {brand}
            <span style={{ marginLeft: "2.5rem", color: "var(--c-border)" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
