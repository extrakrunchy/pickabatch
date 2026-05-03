import Link from "next/link";

export default function HomePage() {
  return (
    <main className="maintenance-page">

      {/* 💨 Smoke Background */}
      <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero-smoke.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Dark Overlay */}
      <div className="overlay" />

      {/* ⚠️ Caution Tape X */}
      <div className="maintenance-x-overlay">
        <div className="tape tape-one">
          UNDER MAINTENANCE • BIG THINGS ON THE WAY
        </div>

        <div className="tape tape-two">
          UNDER MAINTENANCE • BIG THINGS ON THE WAY
        </div>

        {/* 🧠 Center Message */}
        <div className="maintenance-notice">
          <h1>PICK A BATCH</h1>

          <p className="status-pill">SITE IS BEING UPDATED</p>

          <h2>We’re tightening things up.</h2>

          <p>
            Pick A Batch is currently being refined with cleaner product pages,
            improved batch transparency, and a more focused experience.
          </p>

          <p className="small-text">
            For access, product questions, or early updates:
          </p>

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

    </main>
  );
}
