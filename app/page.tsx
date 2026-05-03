export default function HomePage() {
  return (
    <div className="page-shell">
      <section className="hero-video">
        <video className="hero-video-smoke" autoPlay muted loop playsInline>
          <source src="/hero-smoke.mp4" type="video/mp4" />
        </video>

        <div className="hero-video-fade" />

        <div className="hero-content">
          <h1 className="hero-title">
            PICK <span className="smoke-accent">A&nbsp;BATCH</span>
          </h1>

          <p className="lead">
            Know Your Batch. Choose Better. Feel Better.
          </p>

          <div className="hero-actions">
            <button className="btn-disabled">VIEW PRODUCTS</button>
            <button className="enter-button">ENTER SITE</button>
          </div>
        </div>
      </section>

      <div className="maintenance-x-overlay">
        <div className="tape tape-one">
          UNDER MAINTENANCE — BIG THINGS ON THE WAY
        </div>

        <div className="tape tape-two">
          UNDER MAINTENANCE — BIG THINGS ON THE WAY
        </div>

        <div className="maintenance-notice">
          <h2>Private Access Only — Relaunch In Progress</h2>

          <p>
            Pick A Batch is currently being refined with tighter product curation,
            improved batch transparency, and a more focused experience.
          </p>

          <p className="small-text">For access, updates and even special requests please use either emaail below:</p>

          <div className="maintenance-emails">
            <a href="mailto:pickabatch@gmail.com">pickabatch@gmail.com</a>
            <a href="mailto:info@pickabatch.co.site">
              info@pickabatch.co.site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
