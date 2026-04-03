"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { SiteShell } from "@/components/SiteShell";
import { useCart } from "@/components/CartProvider";

export default function CheckoutPage() {
  const { cart, cartCount, changeQty, clearCart } = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [coupon, setCoupon] = useState("");

  const subtotal = cartCount * 1;
  const discount = coupon.trim().toUpperCase() === "BATCH10" ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const params = new URLSearchParams({
      name,
      email,
      total: total.toFixed(2),
    });
    window.location.href = `/confirmation?${params.toString()}`;
  }

  return (
    <SiteShell cartCount={cartCount}>
      <section className="section container">
        <h1>Finalize your order.</h1>
        <p className="section-intro">
          Customers can add multiple products to a real cart, apply a coupon, and submit an order cleanly before payment instructions appear.
        </p>

        <div className="checkout-grid">
          <div className="panel">
            <div className="card-meta">Your Cart</div>
            {cart.length === 0 ? (
              <div className="note-box">Your cart is empty right now. Add products first so this page has something to work with.</div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="cart-line">
                  <div>
                    <strong>{item.name}</strong>
                    <div className="muted" style={{ marginTop: 6 }}>Qty in cart: {item.qty}</div>
                  </div>
                  <div className="qty-controls">
                    <button type="button" onClick={() => changeQty(item.id, -1)}>−</button>
                    <span>{item.qty}</span>
                    <button type="button" onClick={() => changeQty(item.id, 1)}>+</button>
                  </div>
                </div>
              ))
            )}

            <form onSubmit={onSubmit} style={{ marginTop: 18 }}>
              <input className="field" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
              <input className="field" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
              <textarea className="field" rows={4} placeholder="Shipping address" value={address} onChange={(e) => setAddress(e.target.value)} />
              <input className="field" placeholder="Coupon code (try BATCH10)" value={coupon} onChange={(e) => setCoupon(e.target.value)} />

              <div className="hero-actions" style={{ justifyContent: "flex-start", marginTop: 18 }}>
                <button type="submit" className="btn" disabled={cart.length === 0}>Submit Order</button>
                <button type="button" className="btn-secondary" onClick={clearCart}>Clear Cart</button>
              </div>
            </form>
          </div>

          <div className="panel">
            <div className="card-meta">Payment options</div>
            <div className="note-box">
              <strong>Venmo Business is available right now.</strong>
              <br /><br />
              Customers can submit their order and then receive clean payment instructions using your business Venmo account and order number.
            </div>

            <div className="note-box">
              <strong>Secure card processing is coming soon.</strong>
              <br /><br />
              Card checkout can be added later for eligible product categories without changing the overall site layout.
            </div>

            <div className="note-box">
              <div style={{ display: "flex", justifyContent: "space-between" }}><span>Cart quantity value</span><span>{subtotal.toFixed(2)}</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}><span>Discount</span><span>- {discount.toFixed(2)}</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.08)" }}><strong>Total</strong><strong>{total.toFixed(2)}</strong></div>
            </div>

            <div className="link-soft" style={{ marginTop: 14 }}>
              After submission, customers land on a clean payment instruction page and can receive the same guidance by email later when you wire that part in.
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
