import Link from "next/link";

export default function HomePage() {
  return (
    <main className="maintenance-page">
      <section className="maintenance-card">
        <h1>PICK A BATCH</h1>

        <p className="status-pill">SITE IS BEING UPDATED</p>

        <h2>We’re tightening things up.</h2>

        <p>
          Pick A Batch is currently being updated with cleaner product pages,
          improved batch information, and a better overall experience.
        </p>

        <p className="small-text">
          For access, product questions, or updates:
        </p>

        <a href="mailto:info@pickabatch.co.site" className="email-button">
          Email for Access
        </a>
      </section>
    </main>
  );
}
