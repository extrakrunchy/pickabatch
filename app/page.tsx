export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000000",
        color: "#ffffff",
        textAlign: "center",
        padding: "24px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div style={{ maxWidth: "720px", width: "100%" }}>
        <div
          style={{
            width: "260px",
            height: "1px",
            background: "rgba(255,255,255,0.72)",
            margin: "0 auto 30px",
          }}
        />

        <h1
          style={{
            margin: "0 0 18px",
            fontSize: "clamp(2rem, 6vw, 3.2rem)",
            fontWeight: 300,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
          }}
        >
          Pick A Batch
        </h1>

        <p
          style={{
            margin: "0 auto",
            maxWidth: "620px",
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.72)",
          }}
        >
          Our website is temporarily unavailable while we make updates behind
          the scenes. Please check back soon.
        </p>
      </div>
    </main>
  );
}
