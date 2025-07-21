// src/app/cart/page.tsx
"use client";
import Image from "next/image";
import { useCart } from "@/lib/cartStore";
import { products, CURRENCY } from "@/lib/products";

export default function CartPage() {
  const items = useCart((s) => s.items);
  const update = useCart((s) => s.update);
  const remove = useCart((s) => s.remove);

  const rows = items
    .map(({ id, qty }) => {
      const p = products.find((i) => i.id === id);
      if (!p) return null;
      const tier = p.priceTiers.findLast((t) => qty >= t.qty) ?? p.priceTiers[0];
      return { ...p, qty, priceEach: tier.priceEach, total: tier.priceEach * qty };
    })
    .filter(Boolean);

  const grand = rows.reduce((a, b) => a + b.total, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl mb-6">Cart</h1>
      {rows.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {rows.map((p) => (
              <div key={p.id} className="flex gap-4 border p-2 rounded">
                <Image
                  src={`/images/${p.images[0]}`}
                  alt={p.name}
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
                <div>
                  <h2 className="font-bold">{p.name}</h2>
                  <p>{CURRENCY}{p.priceEach} each</p>
                  <input
                    type="number"
                    min="1"
                    value={p.qty}
                    onChange={(e) => update(p.id, Math.max(1, +e.target.value))}
                    className="w-16 border px-1"
                  />
                  <button
                    onClick={() => remove(p.id)}
                    className="ml-4 text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-right">
            <p className="text-xl font-bold">Total: {CURRENCY}{grand}</p>
            <a
              href="/checkout"
              className="inline-block mt-2 bg-green-600 text-white px-4 py-2 rounded"
            >
              Checkout
            </a>
          </div>
        </>
      )}
    </div>
  );
}