"use client";

import { SiteShell } from "@/components/SiteShell";
import { useCart } from "@/components/CartProvider";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/siteData";

export default function ProductsPage() {
  const { cartCount } = useCart();

  return (
    <SiteShell cartCount={cartCount}>
      <section className="section container">
        <h1>Curated products worth your attention.</h1>
        <p className="section-intro">
          Curated products backed by real demand, trusted use, and a cleaner standard for what earns a place on the site.
        </p>

        <div className="banner" style={{ marginTop: 20 }}>
          <span>Venmo Business available now</span>
          <span>•</span>
          <span>Card processing coming soon</span>
        </div>

        <div className="grid product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
