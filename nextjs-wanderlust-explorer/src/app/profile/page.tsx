"use client";

import { useFavorites } from "@/context/FavoritesContext";

export default function ProfilePage() {
  const { favoriteIds } = useFavorites();

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Traveler profile
            </p>
            <h1 className="font-display text-4xl font-black text-slate-900">
              Maya Rivera
            </h1>
            <p className="max-w-xl text-slate-600">
              Product designer, remote explorer, and collector of immersive
              local experiences around the globe.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-sky-600 to-cyan-500 p-6 text-white shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
              Saved favorites
            </p>
            <p className="mt-1 text-5xl font-black">{favoriteIds.length}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
