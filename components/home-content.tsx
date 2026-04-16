"use client";

import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { useCart } from "@/components/CartProvider";

export function HomeContent() {
  const { cartCount } = useCart();

  return (
    <SiteShell cartCount={cartCount}>
      <section className="hero hero-video container">
        
        {/* 🔥 SMOKE VIDEO */}
        <video
          className="hero-video-smoke"
          src="/hero-smoke.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
        />

        {/* LIGHT OVERLAY */}
        <div className="hero-video-fade" />

        <div className="hero-content">
          
          <h1 className="hero-title">
            pick A batch
          </h1>

          <p className="lead hero-tagline">
            Know your batch.{" "}
            <span className="smoke-accent">Choose better.</span>{" "}
            <span className="smoke-accent">Feel better.</span>
          </p>

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
