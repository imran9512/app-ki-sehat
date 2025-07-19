// src/app/products/[category]/[slug]/page.tsx
import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";

export async function generateStaticParams() {
  return products.map((p) => ({ category: p.category, slug: p.slug || p.id }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => (p.slug || p.id) === params.slug);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}