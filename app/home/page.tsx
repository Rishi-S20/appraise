import { stackServerApp } from "../../stack/server";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const user = await stackServerApp.getUser();
  if (!user) redirect("/handler/sign-in");

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0908",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#6a655a",
            marginBottom: "1rem",
          }}
        >
          Welcome back
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            color: "#eeeae0",
            lineHeight: "1.05",
          }}
        >
          {user.displayName ?? user.primaryEmail}
        </h1>
      </div>
    </main>
  );
}
