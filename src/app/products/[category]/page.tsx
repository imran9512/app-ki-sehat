// src/app/products/[category]/page.tsx
import { products, categories } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c }));
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  if (!categories.includes(params.category)) notFound();
  const list = products.filter((p) => p.category === params.category);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl capitalize mb-6">{params.category.replace("-", " ")}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}