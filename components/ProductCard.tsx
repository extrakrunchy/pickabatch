"use client";

import Image from "next/image";
import type { Product } from "@/lib/siteData";
import { useCart } from "@/components/CartProvider";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="card">
      <div className="image-frame">
        {product.imageMode === "single" && product.imageSrc ? (
          <Image src={product.imageSrc} alt={product.name} width={900} height={900} />
        ) : (
          <div className="dual-frame">
            {product.imageSrcA && <Image src={product.imageSrcA} alt={`${product.name} blister`} width={700} height={700} />}
            {product.imageSrcB && <Image src={product.imageSrcB} alt={`${product.name} bottle`} width={700} height={700} />}
          </div>
        )}
      </div>

      <h3>{product.name}</h3>
      <p>{product.details}</p>
      <div className="card-meta">{product.note}</div>

      <div className="card-footer">
        <a className="link-soft" href={product.coaUrl}>
          {product.action === "soon" ? "COA link coming soon" : "See this batch's COA"}
        </a>
        {product.action === "cart" ? (
          <button className="btn" onClick={() => addItem({ id: product.id, name: product.name })}>
            Add to Cart
          </button>
        ) : (
          <span className="btn-disabled">Coming Soon</span>
        )}
      </div>
    </article>
  );
}
