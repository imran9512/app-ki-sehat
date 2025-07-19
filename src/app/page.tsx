// src/app/page.tsx
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function HomePage() {
  const featured = products.slice(0, 6);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}