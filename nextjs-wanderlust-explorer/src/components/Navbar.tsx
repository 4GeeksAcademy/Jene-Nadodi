"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/favorites", label: "Favorites" },
  { href: "/profile", label: "Profile" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 group transition-transform duration-200 active:scale-95">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-200 to-teal-800 font-bold text-white shadow-md shadow-emerald-100 ring-2 ring-white transition-all duration-300 group-hover:shadow-emerald-200">
            <span className="text-xl font-medium tracking-normal font-sans leading-none pb-0.5 select-none">
              நா
             </span>
           </div>
  
            <div className="flex flex-col justify-center leading-none">
            <div className="flex items-center gap-1">
             <span className="text-lg font-black tracking-tight text-slate-700 uppercase">Nadodi</span>
              </div>
             <span className="text-xs font-medium tracking-wide text-slate-400 mt-0.5">
               A Wanderlust Explorer
             </span>
           </div>
        </Link>
        <nav className="flex items-center gap-1 rounded-full bg-slate-100/80 p-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-white text-emerald-800 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
