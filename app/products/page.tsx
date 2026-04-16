"use client";

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
          <h1 className="hero-title">
            curated <span className="smoke-accent">products</span>
          </h1>

          <p className="lead">
            A focused selection of products worth your attention — based on
            quality, consistency, and real demand.
          </p>
        </section>

        <section className="grid product-grid">
          {/* PRODUCT CARD 1 */}
          <div className="card">
            <div className="image-frame">
              <img src="/products/mystic-5ct.png" alt="Mystic Labs 5ct" />
            </div>

            <h3>Mystic Labs Gummies (5ct)</h3>
            <p>150mg total extract · Made in USA</p>

            <div className="card-actions">
              <button className="btn">VIEW PRODUCT</button>
            </div>
          </div>

          {/* PRODUCT CARD 2 */}
          <div className="card">
            <div className="image-frame">
              <img src="/products/mystic-30ct.png" alt="Mystic Labs 30ct" />
            </div>

            <h3>Mystic Labs Gummies (30ct)</h3>
            <p>900mg total extract · Lab tested</p>

            <div className="card-actions">
              <button className="btn">VIEW PRODUCT</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
