import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="page-shell">
      <header className="header">
        <div className="container header-inner">
          <Link href="/" className="logo">
            PICK A BATCH
          </Link>

          <nav className="nav">
            <Link href="/products">PRODUCTS</Link>
            <Link href="/about">ABOUT</Link>
            <button className="cart-chip">CART (0)</button>
          </nav>
        </div>
      </header>

      <main className="container page-content">
        <section className="products-hero">
          <p className="section-kicker">CURATED SELECTION</p>
          <h1 className="hero-title">Products worth your attention.</h1>

          <p className="lead">
            A focused collection built around quality, consistency, and real
            demand — not clutter, guesswork, or filler.
          </p>
        </section>

        <section className="grid product-grid">
          <div className="card">
            <div className="image-frame">
              <img src="/mystic-5ct.png" alt="Mystic Labs Gummies 5 Count" />
            </div>

            <div className="card-copy">
              <p className="eyebrow">MYSTIC LABS</p>
              <h3>Mystic Labs Gummies — 5 Count</h3>
              <p className="product-desc">
                150mg total extract · 30mg per gummy
              </p>
              <p className="product-meta">
                Made in USA · Third-party tested · Shipping only
              </p>
            </div>

            <div className="card-actions">
              <button className="btn">VIEW PRODUCT</button>
            </div>
          </div>

          <div className="card">
            <div className="image-frame">
              <img src="/mystic-30ct.png" alt="Mystic Labs Gummies 30 Count" />
            </div>

            <div className="card-copy">
              <p className="eyebrow">MYSTIC LABS</p>
              <h3>Mystic Labs Gummies — 30 Count</h3>
              <p className="product-desc">
                900mg total extract · 30mg per gummy
              </p>
              <p className="product-meta">
                Lab tested · Made in USA · Shipping only
              </p>
            </div>

            <div className="card-actions">
              <button className="btn">VIEW PRODUCT</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
