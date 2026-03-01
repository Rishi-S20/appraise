const brands = [
  "NIKE",
  "CARHARTT",
  "LEVI'S",
  "RALPH LAUREN",
  "CHAMPION",
  "STARTER",
  "TOMMY HILFIGER",
  "WRANGLER",
  "WOOLRICH",
  "L.L. BEAN",
  "COLUMBIA",
  "PENDLETON",
  "LEE",
  "DICKIES",
  "PATAGONIA",
  "THE NORTH FACE",
  "NAUTICA",
  "POLO SPORT",
  "FILA",
  "REEBOK",
  "ADIDAS",
  "TIMBERLAND",
];

export default function BrandTicker() {
  return (
    <div
      aria-hidden="true"
      style={{
        borderTop: "1px solid #2d2820",
        borderBottom: "1px solid #2d2820",
        overflow: "hidden",
        paddingTop: "0.875rem",
        paddingBottom: "0.875rem",
      }}
    >
      <div className="ticker-track">
        {[...brands, ...brands].map((brand, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.16em",
              color: "#2d2820",
              textTransform: "uppercase",
              paddingLeft: "2.5rem",
              paddingRight: "2.5rem",
              flexShrink: 0,
            }}
          >
            {brand}
            <span style={{ marginLeft: "2.5rem", color: "#201c18" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
