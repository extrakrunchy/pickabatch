import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";
import { brandTiles } from "@/lib/siteData";
import { CartCountClient } from "@/components/cart-count-client";

export default function AboutPage() {
  return (
    <CartCountClient>
      {(cartCount) => (
        <SiteShell cartCount={cartCount}>
          <section className="section container">
            <h1>Built to cut through the noise.</h1>
            <div className="section-intro">
              Pick A Batch was built to highlight products that genuinely deserve attention. The idea started from a simple problem: too many people are expected to sort through inconsistent products, vague claims, and cluttered shelves without enough real guidance. This site is meant to clean that up.
            </div>

            <div className="section-intro">
              What makes Pick A Batch different is that the standard is personal, practical, and community-aware. Products are not featured just because they exist. They are featured because they pass a higher bar for authenticity, consistency, and overall value. In other words, they meet the #pickabatch standard.
            </div>

            <div className="section-intro">
              The long-term model also gives the community a voice. Through the #foundabatch idea, customers and followers can spotlight products or batches worth attention, helping shape what earns a place on the site. That means Pick A Batch becomes more than a storefront. It becomes a curated filter for what is actually worth knowing about, talking about, and buying.
            </div>

            <div className="note-box">
              Not everything makes the cut. Only products that pass real-world use, trusted standards, and community-backed interest earn a place here.
            </div>

            <div className="section" style={{ paddingBottom: 0 }}>
              <div className="card-meta">Brands to expect / brands to watch</div>
              <div className="brand-grid">
                {brandTiles.map((brand, index) => (
                  <div key={`${brand.label}-${index}`}>
                    <div className="brand-tile">
                      {brand.type === "image" && brand.imageSrc ? (
                        <>
                          <Image src={brand.imageSrc} alt={brand.label} width={900} height={260} />
                          {brand.maskLowerText ? <div className="brand-mask" /> : null}
                        </>
                      ) : (
                        <span>{brand.label}</span>
                      )}
                    </div>
                    <div className="brand-caption">
                      {brand.type === "image" && brand.caption ? brand.caption : brand.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </SiteShell>
      )}
    </CartCountClient>
  );
}
