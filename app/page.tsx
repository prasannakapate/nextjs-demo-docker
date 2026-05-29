import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--background)",
      }}
    >
      <main
        style={{
          display: "flex",
          flex: 1,
          width: "100%",
          maxWidth: "48rem",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "8rem",
          paddingBottom: "8rem",
          paddingLeft: "4rem",
          paddingRight: "4rem",
          backgroundColor: "var(--card)",
          color: "var(--foreground)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              maxWidth: "20rem",
              fontSize: "1.875rem",
              fontWeight: "600",
              lineHeight: "2.5rem",
              letterSpacing: "-0.02em",
              color: "var(--foreground)",
            }}
          >
            Hello World! This is a Next.js app running in a Docker container.
          </h1>
        </div>
      </main>
    </div>
  );
}
