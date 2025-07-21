// src/components/Header.tsx
"use client";

import { categories } from "@/lib/categories";
import { SITE_NAME } from "@/lib/constants";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder="Search…"
      className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
    />
  );
};

const CartIcon = () => {
  return (
    <Link href="/cart" className="relative">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
        0
      </span>
    </Link>
  );
};

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