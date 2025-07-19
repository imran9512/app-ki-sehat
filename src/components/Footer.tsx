// src/components/Footer.tsx
import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 text-sm">
      <div className="space-x-4">
        <Link href="/privacy" className="hover:underline">Privacy</Link> •
        <Link href="/about" className="hover:underline">About Us</Link> •
        <Link href="/contact" className="hover:underline">Contact Us</Link>
      </div>
      <p className="mt-1">
        © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
      </p>
    </footer>
  );
}