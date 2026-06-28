"use client";

import { Heart } from "lucide-react";

interface FavoriteToggleProps {
  isActive: boolean;
  onToggle: () => void;
  className?: string;
}

export function FavoriteToggle({
  isActive,
  onToggle,
  className = "",
}: FavoriteToggleProps) {
  return (
    <button
      type="button"
      aria-label={isActive ? "Remove from favorites" : "Add to favorites"}
      onClick={onToggle}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/90 text-slate-700 shadow-sm transition hover:scale-105 hover:bg-white ${className}`}
    >
      <Heart
        className={`h-5 w-5 transition ${
          isActive ? "fill-rose-500 text-rose-500" : "text-slate-700"
        }`}
      />
    </button>
  );
}
