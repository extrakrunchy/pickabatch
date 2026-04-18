export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
        color: "#fff",
        textAlign: "center",
        padding: "24px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div>
        <h1 style={{ fontSize: "2rem", letterSpacing: "0.18em", marginBottom: "16px" }}>
          PICK A BATCH
        </h1>
        <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)" }}>
          This site is temporarily unavailable for maintenance.
        </p>
      </div>
    </main>
  );
}
