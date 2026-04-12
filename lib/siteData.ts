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
  flavors?: string[];
};

export const products: Product[] = [
  {
    id: "mystic-gummies-5ct",
    name: "Mystic Labs Gummies — 5 Count",
    details: "5 count pack",
    note: "Flavors shown by product image.",
    price: "$15.99",
    imageMode: "single",
    imageSrc: "/images/mystic-gummies-5ct.png",
    coaUrl: "#replace-with-5ct-coa-link",
    action: "cart",
    flavors: [
      "Mystic Berry",
      "Blood Orange",
      "Twisted Lime",
      "Yuzu Lemonade",
      "Caribbean Punch",
      "Mango Pineapple",
    ],
  },
  {
    id: "mystic-gummies-30ct",
    name: "Mystic Labs Gummies — 30 Count",
    details: "30 count jar",
    note: "Flavors shown by product image.",
    price: "$64.99",
    imageMode: "single",
    imageSrc: "/images/mystic-gummies-30ct.png",
    coaUrl: "#replace-with-30ct-coa-link",
    action: "cart",
    flavors: [
      "Mystic Berry",
      "Blood Orange",
      "Twisted Lime",
      "Yuzu Lemonade",
      "Caribbean Punch",
      "Mango Pineapple",
    ],
  },
  {
    id: "mystic-tablets",
    name: "Mystic Labs Tablets — Coming Soon",
    details: "Coming in 5ct blister pack and 10ct bottle",
    note: "Berry Rush only.",
    price: "Coming Soon",
    imageMode: "single",
    imageSrc: "/images/mystic-tablets-combined.png",
    coaUrl: "#replace-with-tablets-coa-link",
    action: "soon",
    flavors: ["Berry Rush"],
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
