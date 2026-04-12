"use client";

import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { useCart } from "@/components/CartProvider";

export default function AboutPage() {
  const { cartCount } = useCart();

  return (
    <SiteShell cartCount={cartCount}>
      <section
        className="section-container"
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          paddingTop: "3rem",
          paddingBottom: "4rem",
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "3rem 1.5rem 2.5rem",
            borderRadius: 28,
            border: "1px solid rgba(255,255,255,0.08)",
            background:
              "radial-gradient(circle at top, rgba(255,255,255,0.06), rgba(255,255,255,0.015) 35%, rgba(0,0,0,0.35) 75%)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
            marginBottom: "2rem",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 20% 15%, rgba(255,255,255,0.09), transparent 25%), radial-gradient(circle at 80% 18%, rgba(255,255,255,0.06), transparent 22%), radial-gradient(circle at 50% 0%, rgba(255,255,255,0.05), transparent 35%)",
              filter: "blur(30px)",
              opacity: 0.8,
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1, maxWidth: 840 }}>
            <p
              className="eyebrow"
              style={{
                letterSpacing: "0.18em",
                marginBottom: "1rem",
                opacity: 0.85,
              }}
            >
              ABOUT PICK A BATCH
            </p>

            <h1
              style={{
                fontSize: "clamp(2.6rem, 7vw, 5rem)",
                lineHeight: 0.96,
                margin: 0,
                letterSpacing: "-0.04em",
                maxWidth: 760,
              }}
            >
              Know Your Batch.
              <br />
              Choose Better.
              <br />
              Feel Better.
            </h1>

            <p
              style={{
                marginTop: "1.5rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.82)",
                maxWidth: 700,
              }}
            >
              A cleaner, smarter botanical storefront built around transparency,
              consistency, and the details that actually matter.
            </p>

            <div
              style={{
                display: "flex",
                gap: "0.9rem",
                flexWrap: "wrap",
                marginTop: "1.75rem",
              }}
            >
              <Link
                href="/products"
                className="btn"
                style={{
                  borderRadius: 999,
                  paddingInline: "1.25rem",
                }}
              >
                Browse Products
              </Link>

              <a
                href="#our-standard"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.78rem 1.2rem",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "white",
                  textDecoration: "none",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                Our Standard
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "1.5rem",
            alignItems: "stretch",
          }}
        >
          <SectionCard title="Why This Exists">
            <p>
              Pick A Batch was built to cut through the noise.
            </p>
            <p>
              Too many products. Too many claims. Not enough clarity.
            </p>
            <p>
              Most people shopping in this space are left guessing — relying on
              branding, hype, or whatever happens to be in stock. The products
              that actually matter are often buried, inconsistent, overpriced,
              or backed by vague promises instead of real transparency.
            </p>
            <p>
              That never sat right.
            </p>
            <p>
              Pick A Batch exists to bring structure back into the process.
              Instead of overwhelming people with endless options, the goal is
              to focus on a smaller group of products that consistently prove
              themselves — backed by real demand, repeat buyers, and the data
              behind the batch.
            </p>
          </SectionCard>

          <QuoteCard
            quote="Not just the brand. Not just the label. The batch."
            kicker="The whole point"
          />
        </div>

        <SmokeDivider />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "1.5rem",
          }}
        >
          <SectionCard title="Why Pick A Batch?">
            <p>
              Because the batch matters.
            </p>
            <p>
              Two products can look nearly identical and perform completely
              differently depending on how they were produced, tested, stored,
              and handled. That is the gap most people never get to see.
            </p>
            <p>
              Pick A Batch exists to close that gap by focusing on batch-level
              quality, consistency, and transparency — so people can make better
              decisions without the usual guesswork.
            </p>
          </SectionCard>

          <SectionCard title="How We Choose Products">
            <ul
              style={{
                paddingLeft: "1.2rem",
                margin: 0,
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.88)",
              }}
            >
              <li>Verified COAs and testing transparency</li>
              <li>Consistency from batch to batch</li>
              <li>Real demand and repeat buyer interest</li>
              <li>Clear value, not just loud branding</li>
              <li>Quality markers that actually matter</li>
            </ul>

            <p style={{ marginTop: "1rem" }}>
              Not everything makes the cut — and that is the point.
            </p>
          </SectionCard>
        </div>

        <SmokeDivider />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.95fr 1.05fr",
            gap: "1.5rem",
            alignItems: "stretch",
          }}
        >
          <SectionCard title="Built from Experience">
            <p>
              Pick A Batch was not created from the outside looking in.
            </p>
            <p>
              It comes from years of direct hands-on experience in cannabis —
              including early recreational markets in Colorado, managing
              dispensaries, and helping build and oversee large-scale grow
              operations across multiple states.
            </p>
            <p>
              That experience shaped the standard behind this site: testing
              matters, consistency matters, and understanding what is behind the
              label matters.
            </p>
          </SectionCard>

          <SectionCard title="What Makes This Different">
            <p>
              Pick A Batch is built around product selection with a point of
              view.
            </p>
            <p>
              The goal is not to flood the page with endless options. The goal
              is to identify what is actually worth buying, explain why it made
              the cut, and help customers shop with more confidence and less
              noise.
            </p>
            <p>
              That means looking beyond labels and hype to focus on what really
              matters: batch consistency, testing transparency, real demand, and
              practical product understanding.
            </p>
          </SectionCard>
        </div>

        <SmokeDivider />

        <SectionCard title="Our Standard" id="our-standard">
          <p>
            As the space continues to evolve — including hemp, kratom, and other
            botanical products — the mission stays the same: apply a sharper
            eye, stronger standards, and real-world product understanding across
            everything featured here.
          </p>
          <p>
            We believe people should not have to guess their way through this
            space.
          </p>
          <p>
            They should be able to look at a product, understand why it is
            there, review the details that matter, and feel more confident about
            what they are buying.
          </p>
          <p>
            That is the standard behind Pick A Batch — a cleaner, more informed,
            and more intentional way to shop.
          </p>

          <div
            style={{
              display: "flex",
              gap: "0.9rem",
              flexWrap: "wrap",
              marginTop: "1.5rem",
            }}
          >
            <Link href="/products/kratom" className="btn">
              Explore Kratom
            </Link>
            <Link
              href="/products/cannabis"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.78rem 1.2rem",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.14)",
                color: "white",
                textDecoration: "none",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              Explore Cannabis
            </Link>
          </div>
        </SectionCard>

        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
            padding: "2rem 1rem 0",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.3rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Know your batch.
          </p>
          <p
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.3rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              margin: "0.35rem 0 0",
            }}
          >
            Choose better.
          </p>
          <p
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.3rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              margin: "0.35rem 0 0",
            }}
          >
            Feel better.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}

function SectionCard({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div
      id={id}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "1.6rem",
        borderRadius: 24,
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.03)",
        boxShadow: "0 14px 40px rgba(0,0,0,0.28)",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top, rgba(255,255,255,0.04), transparent 38%)",
          opacity: 0.9,
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <h2
          style={{
            marginTop: 0,
            marginBottom: "1rem",
            fontSize: "1.4rem",
            letterSpacing: "-0.03em",
          }}
        >
          {title}
        </h2>
        <div
          style={{
            color: "rgba(255,255,255,0.84)",
            lineHeight: 1.85,
            fontSize: "1.02rem",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function QuoteCard({
  quote,
  kicker,
}: {
  quote: string;
  kicker: string;
}) {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "1.8rem",
        borderRadius: 24,
        border: "1px solid rgba(255,255,255,0.08)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.02))",
        boxShadow: "0 14px 40px rgba(0,0,0,0.28)",
        display: "flex",
        alignItems: "center",
        minHeight: 260,
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.06), transparent 42%)",
          filter: "blur(16px)",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <p
          style={{
            margin: 0,
            letterSpacing: "0.18em",
            fontSize: "0.76rem",
            opacity: 0.68,
            textTransform: "uppercase",
          }}
        >
          {kicker}
        </p>
        <p
          style={{
            margin: "1rem 0 0",
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.04em",
          }}
        >
          {quote}
        </p>
      </div>
    </div>
  );
}

function SmokeDivider() {
  return (
    <div
      aria-hidden="true"
      style={{
        height: 56,
        margin: "1rem 0",
        background:
          "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08), transparent 36%)",
        filter: "blur(18px)",
        opacity: 0.7,
      }}
    />
  );
}
