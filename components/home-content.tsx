"use client";

import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { useCart } from "@/components/CartProvider";

export function HomeContent() {
  const { cartCount } = useCart();

  return (
    <SiteShell cartCount={cartCount}>
      <section
        className="hero hero-smoke container"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div className="hero-smoke-layer" aria-hidden="true">
          <div className="hero-smoke-plume hero-smoke-plume-a" />
          <div className="hero-smoke-plume hero-smoke-plume-b" />
          <div className="hero-smoke-plume hero-smoke-plume-c" />
          <div className="hero-smoke-plume hero-smoke-plume-d" />
          <div className="hero-smoke-plume hero-smoke-plume-e" />
        </div>

        <div className="hero-links">
          {/* put your hero links here */}
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <h1>pick A batch</h1>
          <p className="lead">Know your batch. Choose better. Feel better.</p>
          <p className="lead">
            A cleaner, smarter botanical storefront built around transparency,
            consistent products, and the details that actually matter.
          </p>

          <div className="banner">
            <span>Venmo Business available now</span>
            <span>•</span>
            <span>Card processing coming soon</span>
          </div>

          <div className="hero-actions">
            <Link href="/products" className="btn">
              Enter Site
            </Link>
            <Link href="/about" className="btn-secondary">
              About Pick A Batch
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
