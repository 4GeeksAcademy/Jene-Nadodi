"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Experience } from "@/data/experiences";
import { useFavorites } from "@/context/FavoritesContext";
import { FavoriteToggle } from "@/components/FavoriteToggle";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <Link href={`/experiences/${experience.id}`}>
          <Image
            src={experience.imageUrl}
            alt={experience.title}
            width={1200}
            height={800}
            className="h-52 w-full object-cover"
            unoptimized
          />
        </Link>
        <div className="absolute right-3 top-3">
          <FavoriteToggle
            isActive={isFavorite(experience.id)}
            onToggle={() => toggleFavorite(experience.id)}
          />
        </div>
      </div>

      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-800">
            {experience.category}
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            {experience.rating.toFixed(1)}
          </span>
        </div>

        <Link href={`/experiences/${experience.id}`}>
          <h3 className="line-clamp-2 text-lg font-bold leading-snug text-slate-900 transition group-hover:text-emerald-800">
            {experience.title}
          </h3>
        </Link>

        <p className="text-sm text-slate-600">{experience.destination}</p>

        <div className="flex items-center justify-between pt-2">
          <p className="text-xl font-bold text-slate-900">${experience.price}</p>
          <Link
            href={`/experiences/${experience.id}`}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-500"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
