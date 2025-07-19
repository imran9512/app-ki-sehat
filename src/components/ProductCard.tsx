// src/components/ProductCard.tsx
import Link from "next/link";
import Image from "next/image";
import { CURRENCY } from "@/lib/constants";

export default function ProductCard({ product }: { product: any }) {
  const tier = product.priceTiers[0];
  return (
    <Link
      href={`/products/${product.category}/${product.slug || product.id}`}
      className="border rounded p-4 hover:shadow flex flex-col"
    >
      <Image
        src={`/images/${product.images[0]}`}
        alt={product.name}
        width={300}
        height={300}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="mt-2 font-bold">{product.name}</h2>
      <p className="text-sm text-gray-600">{CURRENCY}{tier.priceEach}</p>
    </Link>
  );
}