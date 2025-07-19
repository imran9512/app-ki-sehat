// src/app/layout.tsx
// Root layout with global head tags and footer links
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_NAME, GOOGLE_SEARCH_CONSOLE_TAG } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: "100 % natural herbal supplements delivered across Pakistan.",
  verification: { google: GOOGLE_SEARCH_CONSOLE_TAG },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}