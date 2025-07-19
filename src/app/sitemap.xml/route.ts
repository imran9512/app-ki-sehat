// src/app/sitemap.xml/route.ts
import { products, categories } from "@/lib/products";
import { SITE_NAME } from "@/lib/constants";

export async function GET() {
  const baseUrl = "https://my-store.vercel.app";

  const urls = [
    `${baseUrl}`,
    `${baseUrl}/cart`,
    `${baseUrl}/checkout`,
    `${baseUrl}/privacy`,
    `${baseUrl}/about`,
    `${baseUrl}/contact`,
    ...categories.map((c) => `${baseUrl}/products/${c}`),
    ...products.map((p) => `${baseUrl}/products/${p.category}/${p.slug || p.id}`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (u) => `
    <url>
      <loc>${u}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`
      )
      .join("")}
  </urlset>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}