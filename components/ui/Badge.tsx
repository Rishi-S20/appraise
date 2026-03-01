interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "muted" | "outline";
}

export function Badge({ children, variant = "accent" }: BadgeProps) {
  const styles: Record<string, React.CSSProperties> = {
    accent: {
      backgroundColor: "#c5f135",
      color: "#0a0908",
      border: "none",
    },
    muted: {
      backgroundColor: "transparent",
      color: "#6a655a",
      border: "1px solid #2c2924",
    },
    outline: {
      backgroundColor: "transparent",
      color: "#c5f135",
      border: "1px solid #c5f135",
    },
  };

  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.6rem",
        letterSpacing: "0.13em",
        textTransform: "uppercase",
        padding: "0.25rem 0.65rem",
        display: "inline-block",
        ...styles[variant],
      }}
    >
      {children}
    </span>
  );
}
