import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { FavoritesProvider } from "@/context/FavoritesContext";
import { Navbar } from "@/components/Navbar";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nadodi",
  description: "Explore curated travel experiences with rich search and filters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--page-bg)] text-slate-900">
        <FavoritesProvider>
          <div className="relative min-h-full overflow-x-clip">
            <Navbar />
            {children}
          </div>
        </FavoritesProvider>
      </body>
    </html>
  );
}
