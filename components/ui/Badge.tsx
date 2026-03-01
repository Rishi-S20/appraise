interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "muted" | "outline";
}

export function Badge({ children, variant = "accent" }: BadgeProps) {
  const styles: Record<string, React.CSSProperties> = {
    accent: {
      backgroundColor: "var(--c-accent)",
      color: "var(--c-bg)",
      border: "none",
    },
    muted: {
      backgroundColor: "transparent",
      color: "var(--c-muted)",
      border: "1px solid var(--c-border)",
    },
    outline: {
      backgroundColor: "transparent",
      color: "var(--c-accent)",
      border: "1px solid var(--c-accent)",
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
