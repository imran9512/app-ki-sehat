// src/components/SearchBar.tsx
"use client";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { products } from "@/lib/products";
import Fuse from "fuse.js";

const fuse = new Fuse(products, {
  keys: ["name", "category", "ingredients"],
  threshold: 0.3,
});

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const results = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query).slice(0, 6).map((r) => r.item);
  }, [query]);

  return (
    <div className="relative hidden sm:block">
      <div className="flex items-center border rounded px-2">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="outline-none px-2 py-1 w-52 lg:w-64"
        />
      </div>
      {results.length > 0 && (
        <ul className="absolute top-full left-0 right-0 bg-white border rounded shadow max-h-80 overflow-y-auto z-50">
          {results.map((p) => (
            <li
              key={p.id}
              onClick={() => {
                router.push(`/products/${p.category}/${p.slug || p.id}`);
                setQuery("");
              }}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {p.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}