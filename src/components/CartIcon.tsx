// src/components/CartIcon.tsx
"use client";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cartStore";
import Link from "next/link";

export default function CartIcon() {
  const total = useCart((s) => s.items.reduce((a, b) => a + b.qty, 0));
  return (
    <Link href="/cart" className="relative">
      <ShoppingCart size={28} />
      {total > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
          {total}
        </span>
      )}
    </Link>
  );
}