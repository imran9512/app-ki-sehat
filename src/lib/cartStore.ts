// src/lib/cartStore.ts
// Browser-only cart stored in localStorage
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: string;
  qty: number;
}

export const useCart = create<{
  items: CartItem[];
  add: (id: string, qty: number) => void;
  remove: (id: string) => void;
  update: (id: string, qty: number) => void;
  clear: () => void;
}>()(
  persist(
    (set) => ({
      items: [],
      add: (id, qty) =>
        set((s) => {
          const idx = s.items.findIndex((i) => i.id === id);
          if (idx === -1) return { items: [...s.items, { id, qty }] };
          const clone = [...s.items];
          clone[idx].qty += qty;
          return { items: clone };
        }),
      remove: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
      update: (id, qty) =>
        set((s) => ({ items: s.items.map((i) => (i.id === id ? { ...i, qty } : i)) })),
      clear: () => set({ items: [] }),
    }),
    { name: "cart" }
  )
);