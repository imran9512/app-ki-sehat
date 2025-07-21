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
    images: ["m1.png", "m2.png"],
    inStock: true,
    basePrice: 100,
    priceTiers: [
      { qty: 1, priceEach: 110 },
      { qty: 2, priceEach: 100 },
      { qty: 3, priceEach: 95 },
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
    relatedIds: ["turmeric-90", "ginseng-60"], // optional
  },
  {
    id: "turmeric-90",
    slug: "turmeric-curcumin",
    name: "Turmeric Curcumin 90's",
    metaTitle: "Buy Turmeric Curcumin – Joint Support",
    metaDesc: "High-potency curcumin for healthy joints & inflammation.",
    images: ["m1.png", "m2.png", "m3.png", "m4.png"],
    inStock: true,
    basePrice: 120,
    priceTiers: [
      { qty: 1, priceEach: 135 },
      { qty: 2, priceEach: 125 },
      { qty: 3, priceEach: 115 },
    ],
    rating: 4.7,
    reviewsCount: 189,
    ingredients: "Turmeric Extract 95% Curcuminoids 650 mg",
    shortDesc: "Supports joint health & mobility.",
    fullDesc: "<p><strong>Turmeric</strong> is packed with curcumin…</p>",
    specialNote: "🚚 Free shipping on 2+ bottles!",
    reviews: [
      { name: "Sara", date: "2024-05-20", rating: 5, body: "Knee pain is gone!" },
    ],
    category: "herbal-supplements",
    relatedIds: ["ashwagandha-60", "ginseng-60","ginseng-120"],
  },
  {
    id: "ginseng-120",
    slug: "korean-ginseng",
    name: "Korean Ginseng 120's",
    metaTitle: "Buy Korean Ginseng – Energy Boost",
    metaDesc: "Premium ginseng for mental focus & stamina.",
    images: ["m1.png", "m2.png", "m3.png", "m4.png"],
    inStock: true,
    basePrice: 150,
    priceTiers: [
      { qty: 1, priceEach: 170 },
      { qty: 2, priceEach: 155 },
      { qty: 3, priceEach: 145 },
    ],
    rating: 4.9,
    reviewsCount: 301,
    ingredients: "Korean Red Ginseng 500 mg (8% ginsenosides)",
    shortDesc: "Boosts energy & cognitive performance.",
    fullDesc: "<p><strong>Korean Ginseng</strong> is revered for vitality…</p>",
    specialNote: "🎁 Free travel-size on 3+ bottles!",
    reviews: [
      { name: "Rahul", date: "2024-06-10", rating: 5, body: "Feel awake all day!" },
    ],
    category: "skin-care",
    relatedIds: ["ashwagandha-60", "turmeric-90", "moringa-180"],
  },
  {
    id: "moringa-180",
    slug: "moringa-leaf",
    name: "Moringa Leaf Capsules 180's",
    metaTitle: "Buy Moringa – Superfood Nutrition",
    metaDesc: "Nutrient-dense moringa for immunity & detox.",
    images: ["m1.png", "m2.png", "m3.png", "m4.png"],
    inStock: true,
    basePrice: 90,
    priceTiers: [
      { qty: 1, priceEach: 100 },
      { qty: 2, priceEach: 92 },
      { qty: 3, priceEach: 85 },
    ],
    rating: 4.6,
    reviewsCount: 167,
    ingredients: "Organic Moringa Oleifera Leaf Powder 400 mg",
    shortDesc: "Rich in antioxidants & essential nutrients.",
    fullDesc: "<p><strong>Moringa</strong> is a powerhouse of vitamins…</p>",
    specialNote: "🌱 Vegan, non-GMO. Free shipping on 3+!",
    reviews: [
      { name: "Nida", date: "2024-04-30", rating: 4, body: "Great energy lift!" },
    ],
    category: "skin-care",
    relatedIds: ["ashwagandha-60", "turmeric-90", "ginseng-120"],
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