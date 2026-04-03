"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import { useCart } from "@/components/CartProvider";

function ConfirmationDetails() {
  const params = useSearchParams();
  const name = params.get("name") || "Customer Name";
  const email = params.get("email") || "email@example.com";
  const total = params.get("total") || "0.00";

  return (
    <div className="about-grid">
      <div className="panel">
        <div className="card-meta">Customer</div>
        <div style={{ marginTop: 16 }}>
          <div><strong>{name}</strong></div>
          <div className="muted" style={{ marginTop: 8 }}>{email}</div>
        </div>
        <div className="note-box">
          Use order number <strong>PAB-2048</strong> in the Venmo payment note so orders can be matched quickly.
        </div>
      </div>

      <div className="panel">
        <div className="card-meta">Payment note</div>
        <div className="note-box">
          <strong>Venmo Business available now</strong>
          <br /><br />
          Send payment to your business Venmo handle after order submission. Card processing for eligible products will be added soon.
        </div>
        <div className="note-box">
          <strong>Order total:</strong> {total}
        </div>
      </div>
    </div>
  );
}

function ConfirmationFallback() {
  return (
    <div className="about-grid">
      <div className="panel">
        <div className="card-meta">Customer</div>
        <div className="note-box">Loading order details...</div>
      </div>
      <div className="panel">
        <div className="card-meta">Payment note</div>
        <div className="note-box">Preparing payment instructions...</div>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  const { cartCount } = useCart();

  return (
    <SiteShell cartCount={cartCount}>
      <section className="section container">
        <h1>Next step: payment instructions.</h1>
        <p className="section-intro">
          This is the point where the live site can send the customer an order summary, order number, and Venmo Business payment instructions while secure card processing is being added.
        </p>

        <Suspense fallback={<ConfirmationFallback />}>
          <ConfirmationDetails />
        </Suspense>
      </section>
    </SiteShell>
  );
}
