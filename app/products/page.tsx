import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="page-shell noir-products">
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
        <section className="products-hero dramatic">
          <p className="section-kicker">CURATED / TESTED / SELECTIVE</p>
          <h1 className="hero-title">
            curated <span className="smoke-accent">products</span>
          </h1>

          <p className="lead">
            Not an endless shelf. Not random inventory. Just products worth a
            closer look — chosen for quality, consistency, and actual demand.
          </p>
        </section>

        <section className="grid product-grid">
          <div className="card dark-card">
            <div className="image-frame dark-frame">
              <img src="/mystic-5ct.png" alt="Mystic Labs Gummies 5 Count" />
            </div>

            <div className="card-copy">
              <p className="eyebrow">MYSTIC LABS / KRATOM</p>
              <h3>Mystic Labs Gummies — 5 Count</h3>
              <p className="product-desc">
                150mg total extract · 30mg per gummy
              </p>
              <p className="product-meta">
                Made in USA · Third-party tested · Shipping only
              </p>
            </div>

            <div className="card-actions">
              <button className="btn btn-ghost">VIEW PRODUCT</button>
            </div>
          </div>

          <div className="card dark-card">
            <div className="image-frame dark-frame">
              <img src="/mystic-30ct.png" alt="Mystic Labs Gummies 30 Count" />
            </div>

            <div className="card-copy">
              <p className="eyebrow">MYSTIC LABS / KRATOM</p>
              <h3>Mystic Labs Gummies — 30 Count</h3>
              <p className="product-desc">
                900mg total extract · 30mg per gummy
              </p>
              <p className="product-meta">
                Lab tested · Made in USA · Shipping only
              </p>
            </div>

            <div className="card-actions">
              <button className="btn btn-ghost">VIEW PRODUCT</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
