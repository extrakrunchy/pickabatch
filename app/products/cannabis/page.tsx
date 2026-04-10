"use client";

import { SiteShell } from "@/components/SiteShell";
import { useCart } from "@/components/CartProvider";

const types = [
  "Flower",
  "Gummies",
  "Dabables",
  "Edibles",
  "Topical",
];

const cannabinoids = [
  "Delta-8 THC",
  "Delta-9 THC",
  "Delta-10 THC",
  "HHC",
  "CBD",
];

export default function CannabisPage() {
  const { cartCount } = useCart();

  return (
    <SiteShell cartCount={cartCount}>
      <section className="section-container">
        <p className="eyebrow">Cannabis</p>
        <h1>Refine your search.</h1>
        <p className="section-intro">
          Browse cannabis products by type or cannabinoid.
        </p>

        {/* TYPE */}
        <div style={{ marginTop: 40 }}>
          <h2 style={{ marginBottom: 16 }}>Shop by Type</h2>
          <div className="grid">
            {types.map((type) => (
              <div key={type} className="card">
                <div style={{ padding: "1.5rem", textAlign: "center" }}>
                  <h3>{type}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CANNABINOID */}
        <div style={{ marginTop: 50 }}>
          <h2 style={{ marginBottom: 16 }}>Shop by Cannabinoid</h2>
          <div className="grid">
            {cannabinoids.map((c) => (
              <div key={c} className="card">
                <div style={{ padding: "1.5rem", textAlign: "center" }}>
                  <h3>{c}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
