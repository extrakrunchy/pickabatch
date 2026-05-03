import Link from "next/link";

export default function HomePage() {
  return (
    <div className="page-shell">

      {/* 💨 HERO (REAL HOMEPAGE FEEL) */}
      <section className="hero-video">

        <video
          className="hero-video-smoke"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-smoke.mp4" type="video/mp4" />
        </video>

        <div className="hero-video-fade" />

        <div className="hero-content container">
          <h1 className="hero-title">
            PICK <span className="smoke-accent">A BATCH</span>
          </h1>

          <p className="lead">
            Know Your Batch. Choose Better. Feel Better.
          </p>

          {/* 👇 FAKE BUTTONS (visual only) */}
          <div style={{ marginTop: "28px", display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-disabled">VIEW PRODUCTS</button>
            <button className="btn-disabled">LEARN MORE</button>
          </div>
        </div>
      </section>

      {/* ⚠️ FULL PAGE LOCK OVERLAY */}
      <div className="maintenance-x-overlay">

        {/* ⚠️ Animated Tape */}
        <div className="tape tape-one">
          UNDER MAINTENANCE — BIG THINGS ON THE WAY
        </div>

        <div className="tape tape-two">
          UNDER MAINTENANCE — BIG THINGS ON THE WAY
        </div>

        {/* 🧠 CENTER PANEL */}
        <div className="maintenance-notice">

          <h2>Private Access Only — Relaunch In Progress</h2>

          <p>
            Pick A Batch is currently being refined with tighter product curation,
            improved batch transparency, and a more focused platform.
          </p>

          <p className="small-text">
            For access, product questions, or early updates:
          </p>

          {/* ✉️ EMAIL LINKS */}
          <div className="maintenance-emails">
            <a href="mailto:pickabatch@gmail.com">
              pickabatch@gmail.com
            </a>

            <a href="mailto:info@pickabatch.co.site">
              info@pickabatch.co.site
            </a>
          </div>

        </div>
      </div>

    </div>
  );
}
