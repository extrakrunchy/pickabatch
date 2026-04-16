import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="page-shell about-page-shell">
      <div className="page-video-bg">
        <video
          className="page-video-bg__video"
          src="/about-smoke.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>

      <header className="header">
        <div className="container header-inner">
          <Link href="/" className="logo">
            PICK A BATCH
          </Link>

          <nav className="nav">
            <Link href="/products">PRODUCTS</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/cart" className="cart-chip">
              CART (0)
            </Link>
          </nav>
        </div>
      </header>

      <main className="container page-content about-page">
        <section className="about-hero">
          <div className="about-inner">
            <p className="about-eyebrow">ABOUT PICK A BATCH</p>

            <h1>Know your batch. Choose better. Feel better.</h1>

            <p className="about-lead">
              Pick A Batch was built to create a cleaner, smarter botanical storefront
              centered around transparency, consistency, and the details that actually matter.
            </p>

            <p>
              Too often, people are left sorting through cluttered product listings,
              vague claims, inconsistent inventory, and very little useful direction.
              The goal here is simple: narrow the field to the products actually worth
              paying attention to.
            </p>

            <p>
              Instead of overwhelming customers with endless options, Pick A Batch
              focuses on helping people better understand quality, consistency,
              and batch-level information that can actually help them make smarter decisions.
            </p>

            <p>
              This site is being built as both a curated storefront and an educational
              resource — a place where products, lab results, and practical consumer
              understanding all work together.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
