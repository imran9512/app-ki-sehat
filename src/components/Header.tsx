// src/components/Header.tsx
"use client";
import { categories } from "@/lib/categories";
import { SITE_NAME } from "@/lib/constants";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import CartIcon from "@/components/CartIcon";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow sticky top-0 z-40">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <button onClick={() => setOpen(!open)} className="text-2xl">
            {open ? <X /> : <Menu />}
          </button>
          <SearchBar />
        </div>
        <Link href="/" className="text-xl font-bold">
          {SITE_NAME}
        </Link>
        <CartIcon />
      </div>
      {open && (
        <nav className="bg-white border-t px-4 py-2">
          {categories.map((c) => (
            <Link
              key={c}
              href={`/products/${c}`}
              className="block px-2 py-1 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              {c.replace("-", " ").toUpperCase()}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}