"use client";

import Link from "next/link";
import { ExperienceCard } from "@/components/ExperienceCard";
import { experiences } from "@/data/experiences";
import { useFavorites } from "@/context/FavoritesContext";

export default function FavoritesPage() {
  const { favoriteIds } = useFavorites();
  const favoriteExperiences = experiences.filter((item) =>
    favoriteIds.includes(item.id),
  );

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
      <section className="mb-8 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-700">
          Saved
        </p>
        <h1 className="font-display text-4xl font-black text-slate-900 sm:text-5xl">
          Your favorites
        </h1>
        <p className="text-slate-600">
          Quickly revisit the experiences you marked with a heart.
        </p>
      </section>

      {favoriteExperiences.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
          <p className="text-2xl font-bold text-slate-800">No favorites yet</p>
          <p className="mt-2 text-slate-600">
            Explore and tap the heart icon to build your shortlist.
          </p>
          <Link
            href="/experiences"
            className="mt-6 inline-flex rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Browse experiences
          </Link>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {favoriteExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      )}
    </main>
  );
}
