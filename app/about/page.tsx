"use client";

import { SiteShell } from "@/components/SiteShell";
import { useCart } from "@/components/CartProvider";

export default function AboutPage() {
  const { cartCount } = useCart();

  return (
    <SiteShell cartCount={cartCount}>
      <section className="section-container">
        <p className="eyebrow">About Pick A Batch</p>
        <h1>Know Your Batch. Choose Better. Feel Better.</h1>

        <p className="section-intro">
          Pick A Batch was built to cut through the noise.
        </p>

        <div className="stack-lg">
          <p>
            Too many products. Too many claims. Not enough clarity.
          </p>

          <p>
            Most people shopping in this space are left guessing — relying on
            branding, hype, or whatever happens to be in stock. The products
            that actually matter are often buried, inconsistent, or overpriced
            without explanation.
          </p>

          <p>
            That never sat right.
          </p>

          <p>
            Pick A Batch exists to bring structure back into the process.
            Instead of overwhelming people with endless options, the goal is to
            focus on a smaller group of products that consistently prove
            themselves — backed by real demand, repeat buyers, and most
            importantly, the data behind the batch.
          </p>

          <p>
            This is not just a storefront. It is a curated system built to help
            people understand what they are buying and why it matters.
          </p>
        </div>

        <div className="card" style={{ marginTop: "2rem", padding: "1.5rem" }}>
          <h2 style={{ marginBottom: "1rem" }}>Why Pick A Batch?</h2>
          <p>
            Because the batch matters.
          </p>
          <p>
            Not just the brand. Not just the label. The batch.
          </p>
          <p>
            Two products can look almost identical and perform completely
            differently depending on how they were produced, tested, and
            handled. That is the gap most people never get to see.
          </p>
          <p>
            Pick A Batch exists to close that gap through batch-level quality,
            consistency, and transparency — so customers can make better
            decisions without the guesswork.
          </p>
        </div>

        <div className="card" style={{ marginTop: "2rem", padding: "1.5rem" }}>
          <h2 style={{ marginBottom: "1rem" }}>How We Choose Products</h2>
          <ul style={{ paddingLeft: "1.25rem", lineHeight: 1.8 }}>
            <li>Verified COAs and testing transparency</li>
            <li>Consistency from batch to batch</li>
            <li>Products that earn real repeat demand</li>
            <li>Clear value, not just loud branding</li>
            <li>Practical quality markers that actually matter</li>
          </ul>
        </div>

        <div className="card" style={{ marginTop: "2rem", padding: "1.5rem" }}>
          <h2 style={{ marginBottom: "1rem" }}>Built from Experience</h2>
          <p>
            Pick A Batch was not created from the outside looking in.
          </p>
          <p>
            It comes from years of direct experience with cannabis — from early
            recreational markets in Colorado to managing dispensaries and
            helping build large-scale grow operations across multiple states.
          </p>
          <p>
            That experience shaped the standard behind this site:
            testing matters, consistency matters, and understanding what is
            behind the label matters.
          </p>
          <p>
            As the space continues to evolve — including categories like kratom,
            hemp, and other botanical products — the mission stays the same:
            apply a sharper eye, higher standards, and real-world product
            understanding across everything featured here.
          </p>
          <p>
            No shortcuts. No guesswork. No filler.
          </p>
        </div>

        <div className="card" style={{ marginTop: "2rem", padding: "1.5rem" }}>
          <h2 style={{ marginBottom: "1rem" }}>What Makes This Different</h2>
          <p>
            Pick A Batch is built around product selection with a point of view.
          </p>
          <p>
            Not everything makes the cut — and that is the point.
          </p>
          <p>
            The goal is not to dump endless options in front of people. The goal
            is to identify what is actually worth the attention, explain why,
            and make the buying process cleaner, smarter, and more transparent.
          </p>
        </div>

        <div style={{ marginTop: "2.5rem" }}>
          <p className="section-intro" style={{ marginBottom: 0 }}>
            Know your batch.
          </p>
          <p className="section-intro" style={{ marginBottom: 0 }}>
            Choose better.
          </p>
          <p className="section-intro">Feel better.</p>
        </div>
      </section>
    </SiteShell>
  );
}
