"use client";

import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { useCart } from "@/components/CartProvider";

export function HomeContent() {
  const { cartCount } = useCart();

  return (
    <SiteShell cartCount={cartCount}>
      <section
        className="hero hero-video container"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <video
          className="hero-video-smoke"
          src="/videos/hero-smoke.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="hero-video-fade" aria-hidden="true" />

        <div className="hero-links">
          {/* put your hero links here */}
        </div>

        <div style={{ position: "relative", zIndex: 2 }}>
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
