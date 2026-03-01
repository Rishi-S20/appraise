interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "muted" | "outline";
}

export function Badge({ children, variant = "accent" }: BadgeProps) {
  const styles: Record<string, React.CSSProperties> = {
    accent: {
      backgroundColor: "#B5401A",
      color: "#F7F2E9",
      border: "none",
    },
    muted: {
      backgroundColor: "transparent",
      color: "#7A7060",
      border: "1px solid #C8BEA8",
    },
    outline: {
      backgroundColor: "transparent",
      color: "#B5401A",
      border: "1px solid #B5401A",
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
