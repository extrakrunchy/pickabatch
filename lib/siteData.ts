export type Product = {
  id: string;
  name: string;
  details: string;
  note: string;
  price: string;
  imageMode: "single" | "dual";
  imageSrc?: string;
  imageSrcA?: string;
  imageSrcB?: string;
  coaUrl: string;
  action: "cart" | "soon";
};

export const products: Product[] = [
  {
    id: "mystic-gummies-5ct",
    name: "Mystic Labs Gummies — 5 Count",
    details: "5 count pack",
    note: "Flavors shown by product image.",
    price: "$14.99",
    imageMode: "single",
    imageSrc: "/images/mystic-gummies-5ct.jpeg",
    coaUrl: "#replace-with-5ct-coa-link",
    action: "cart",
  },
  {
    id: "mystic-gummies-30ct",
    name: "Mystic Labs Gummies — 30 Count",
    details: "30 count jar",
    note: "Flavors shown by product image.",
    price: "$54.99",
    imageMode: "single",
    imageSrc: "/images/mystic-gummies-30ct.webp",
    coaUrl: "#replace-with-30ct-coa-link",
    action: "cart",
  },
  {
    id: "mystic-tablets-soon",
    name: "Mystic Labs Tablets — Coming Soon",
    details: "Coming in 5ct blister pack and 10ct bottle",
    note: "Berry Rush only.",
    price: "Coming Soon",
    imageMode: "dual",
    imageSrcA: "/images/mystic-tablets-blister.webp",
    imageSrcB: "/images/mystic-tablets-bottle.webp",
    coaUrl: "#replace-with-tablet-coa-link",
    action: "soon",
  },
];

export const brandTiles = [
  { type: "text", label: "Mystic Labs" },
  { type: "image", label: "7STAX", imageSrc: "/images/7stax-logo.jpg", maskLowerText: true, caption: "nano-mitragynine line" },
  { type: "text", label: "Brand Logo" },
  { type: "text", label: "Brand Logo" },
  { type: "text", label: "Brand Logo" },
  { type: "text", label: "Brand Logo" },
] as const;
