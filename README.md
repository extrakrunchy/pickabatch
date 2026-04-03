# Pick A Batch — Vercel-ready Next.js site

This project includes:
- Home page
- Products page
- About page
- Checkout page
- Confirmation page
- Real uploaded product images wired into the product cards
- 7STAX logo tile with the lower text visually masked in white
- Lighter smoke effect on all pages
- Venmo Business messaging now, card processing coming soon

## Quick start

1. Upload this folder to GitHub.
2. Import the repo into Vercel.
3. Vercel should detect it as a Next.js project automatically.
4. Deploy.

## Run locally

```bash
npm install
npm run dev
```

## Important files to edit later

### Product COA links
Edit `lib/siteData.ts` and replace these placeholders:
- `#replace-with-5ct-coa-link`
- `#replace-with-30ct-coa-link`
- `#replace-with-tablet-coa-link`

### Brand tiles
Edit `lib/siteData.ts` to replace placeholder brand tiles with real logos or names.

### Prices / checkout math
Right now checkout uses a placeholder quantity-based total because you did not finalize prices yet. Update `app/checkout/page.tsx` when prices are ready.

### Venmo handle / email follow-up
Add your real Venmo Business handle and later wire email sending if you want order confirmations to email automatically.
