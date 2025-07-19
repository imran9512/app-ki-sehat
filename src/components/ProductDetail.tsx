// src/components/ProductDetail.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { NextSeo, ProductJsonLd } from "next-seo";
import { useCart } from "@/lib/cartStore";
import { CURRENCY, WHATSAPP_NUMBER } from "@/lib/constants";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { SITE_NAME } from "@/lib/constants";

export default function ProductDetail({ product }: { product: any }) {
  const [qty, setQty] = useState(1);
  const add = useCart((s) => s.add);

  const tier = product.priceTiers.slice().reverse().find((t) => qty >= t.qty)!;
  const price = tier.priceEach;

  const whatsMsg = encodeURIComponent(
    `Hi, I would like to buy ${qty} × ${product.name} for ${CURRENCY}${price} each.`
  );
  const whatsLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsMsg}`;

  // Related products
  const relatedProducts = product.relatedIds
    ? products.filter((p) => product.relatedIds.includes(p.id))
    : [];

  return (
    <>
      <NextSeo
        title={product.metaTitle}
        description={product.metaDesc}
      />
      <ProductJsonLd
        productName={product.name}
        images={product.images.map((i) => `https://my-store.vercel.app/images/${i}`)}
        description={product.metaDesc}
        brand={SITE_NAME}
        offers={[
          {
            price: price.toString(),
            priceCurrency: "PKR",
            availability: product.inStock ? "InStock" : "OutOfStock",
            url: `https://my-store.vercel.app/products/${product.category}/${product.slug || product.id}`,
          },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">
        <Image
          src={`/images/${product.images[0]}`}
          alt={product.name}
          width={600}
          height={600}
          className="rounded"
        />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-2 text-2xl">{CURRENCY}{price}</p>
          <p className="mt-1">
            {product.rating} ★ ({product.reviewsCount} reviews)
          </p>

          {/* Only show if provided */}
          {product.ingredients && (
            <p className="mt-2 text-sm">
              <b>Ingredients:</b> {product.ingredients}
            </p>
          )}
          {product.shortDesc && (
            <div className="mt-2" dangerouslySetInnerHTML={{ __html: product.shortDesc }} />
          )}

          <div className="mt-4 flex items-center gap-2">
            <label>Qty:</label>
            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(Math.max(1, +e.target.value))}
              className="w-20 border px-2 py-1 rounded"
            />
          </div>

          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <button
              disabled={!product.inStock}
              onClick={() => add(product.id, qty)}
              className={`px-6 py-2 rounded text-white ${product.inStock ? "bg-green-600" : "bg-gray-400"}`}
            >
              Add to cart
            </button>
            <a
              href={whatsLink}
              target="_blank"
              rel="noopener"
              className="px-6 py-2 rounded bg-[#25D366] text-white text-center"
            >
              Buy on WhatsApp
            </a>
          </div>

          {product.specialNote && (
            <div
              className="mt-4 text-sm text-blue-700"
              dangerouslySetInnerHTML={{ __html: product.specialNote }}
            />
          )}

          {product.fullDesc && (
            <details className="mt-6">
              <summary className="cursor-pointer font-semibold">Description</summary>
              <div className="mt-2" dangerouslySetInnerHTML={{ __html: product.fullDesc }} />
            </details>
          )}

          {product.reviews.length > 0 && (
            <details className="mt-4">
              <summary className="cursor-pointer font-semibold">Reviews</summary>
              <div className="mt-2 space-y-4">
                {product.reviews.map((r, i) => (
                  <div key={i} className="border-b pb-2">
                    <p>
                      <b>{r.name}</b> – {r.date}
                    </p>
                    <div dangerouslySetInnerHTML={{ __html: r.body }} />
                  </div>
                ))}
              </div>
            </details>
          )}
        </div>
      </div>

      {/* Related products (only if provided) */}
      {relatedProducts.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}