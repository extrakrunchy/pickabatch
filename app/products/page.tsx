"use client";

import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { useCart } from "@/components/CartProvider";

export default function ProductsGatewayPage() {
  const { cartCount } = useCart();

  return (
    <SiteShell cartCount={cartCount}>
      <section className="section-container">
        <p className="eyebrow">Products</p>
        <h1>Choose your lane.</h1>
        <p className="section-intro">
          Explore curated products by category. Start with Cannabis or Kratom.
        </p>

        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 24 }}
        >
          <Link href="/products/cannabis" className="card" style={{ textDecoration: "none" }}>
            <div style={{ padding: "2rem", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🌿</div>
              <h2 style={{ marginBottom: "0.75rem" }}>Cannabis</h2>
              <p className="muted">
                Browse by type and cannabinoid including gummies, flower,
                topicals, and more.
              </p>
              <div className="btn" style={{ marginTop: "1.5rem", display: "inline-flex" }}>
                Enter Cannabis
              </div>
            </div>
          </Link>

          <Link href="/products/kratom" className="card" style={{ textDecoration: "none" }}>
            <div style={{ padding: "2rem", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🍃</div>
              <h2 style={{ marginBottom: "0.75rem" }}>Kratom</h2>
              <p className="muted">
                Explore curated kratom products including gummies and upcoming
                tablets.
              </p>
              <div className="btn" style={{ marginTop: "1.5rem", display: "inline-flex" }}>
                Enter Kratom
              </div>
            </div>
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
