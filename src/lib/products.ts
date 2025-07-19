// src/lib/products.ts
// Add / edit products here.  Leave any field empty to hide it on the page.
export interface Product {
  id: string;                       // Internal SKU
  slug?: string;                    // Optional pretty URL (letters/numbers/hyphen)
  name: string;                     // Product title
  metaTitle: string;                // SEO <title> (tab text)
  metaDesc: string;                 // SEO meta description
  images: string[];                 // File names inside /public/images
  inStock: boolean;                 // Show / disable Add-to-cart
  basePrice: number;                // Price for 1 pc
  priceTiers: { qty: number; priceEach: number }[]; // Quantity discounts
  rating: number;                   // 0–5
  reviewsCount: number;
  ingredients?: string;             // Shown only if provided
  shortDesc: string;                // Accepts HTML
  fullDesc: string;                 // Accepts HTML
  specialNote?: string;             // Optional extra note (HTML)
  reviews: { name: string; date: string; rating: number; body: string }[];
  category: string;                 // Must match a category below
  relatedIds?: string[];            // Optional related product IDs (leave empty → no section)
}

export const products: Product[] = [
  {
    id: "ashwagandha-60",
    slug: "ashwagandha-capsules",
    name: "Ashwagandha Capsules 60's",
    metaTitle: "Buy Ashwagandha Capsules – Stress Relief",
    metaDesc: "Pure Ashwagandha extract for stress & immunity.",
    images: ["ashwagandha-1.jpg"],
    inStock: true,
    basePrice: 100,
    priceTiers: [
      { qty: 1, priceEach: 100 },
      { qty: 2, priceEach: 95 },
      { qty: 3, priceEach: 90 },
    ],
    rating: 4.8,
    reviewsCount: 212,
    ingredients: "Ashwagandha Root Extract 500 mg",
    shortDesc: "Helps reduce stress naturally.",
    fullDesc: "<p><strong>Ashwagandha</strong> is an ancient herb…</p>",
    specialNote: "⚡ Free shipping on 3+ units!",
    reviews: [
      { name: "Ali", date: "2024-06-01", rating: 5, body: "Great product!" },
    ],
    category: "herbal-supplements",
    relatedIds: ["turmeric-60", "ginseng-60"], // optional
  },
  // Add more products here…
];

export const categories = [
  "herbal-supplements",
  "ayurvedic-oils",
  "hair-care",
  "skin-care",
  "wellness-kits",
];