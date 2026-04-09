"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/lib/siteData";
import { useCart } from "@/components/CartProvider";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [selectedFlavor, setSelectedFlavor] = useState("");

  const requiresFlavor =
    product.action === "cart" && Array.isArray(product.flavors) && product.flavors.length > 0;

  const canAddToCart = !requiresFlavor || selectedFlavor !== "";

  const cartId = requiresFlavor && selectedFlavor
    ? `${product.id}-${selectedFlavor.toLowerCase().replace(/\s+/g, "-")}`
    : product.id;

  const cartName = requiresFlavor && selectedFlavor
    ? `${product.name} — ${selectedFlavor}`
    : product.name;

  return (
    <article className="card">
      <div className="image-frame">
        {product.imageMode === "single" && product.imageSrc ? (
          <Image src={product.imageSrc} alt={product.name} width={900} height={900} />
        ) : (
          <div className="dual-frame">
            {product.imageSrcA && (
              <Image
                src={product.imageSrcA}
                alt={`${product.name} blister`}
                width={700}
                height={700}
              />
            )}
            {product.imageSrcB && (
              <Image
                src={product.imageSrcB}
                alt={`${product.name} bottle`}
                width={700}
                height={700}
              />
            )}
          </div>
        )}
      </div>

      <h3>{product.name}</h3>
      <p>{product.details}</p>
      <div className="card-meta">{product.note}</div>

      {requiresFlavor ? (
        <select
          className="field"
          value={selectedFlavor}
          onChange={(e) => setSelectedFlavor(e.target.value)}
          aria-label={`Choose a flavor for ${product.name}`}
        >
          <option value="">Select flavor</option>
          {product.flavors!.map((flavor) => (
            <option key={flavor} value={flavor}>
              {flavor}
            </option>
          ))}
        </select>
      ) : null}

      <div className="card-footer">
        <a
          className="link-soft"
          href={product.coaUrl}
          target="_blank"
          rel="noreferrer"
        >
          {product.action === "soon" ? "COA link coming soon" : "View Product COA"}
        </a>

        {product.action === "cart" ? (
          <button
            className={canAddToCart ? "btn" : "btn-disabled"}
            disabled={!canAddToCart}
            onClick={() => {
              if (!canAddToCart) return;
              addItem({ id: cartId, name: cartName });
            }}
          >
            Add to Cart
          </button>
        ) : (
          <span className="btn-disabled">Coming Soon</span>
        )}
      </div>
    </article>
  );
}
