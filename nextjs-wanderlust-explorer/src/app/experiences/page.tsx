import { Suspense } from "react";
import { ExperienceExplorer } from "@/components/ExperienceExplorer";

export default function ExperiencesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
      <section className="mb-8 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
          Discover
        </p>
        <h1 className="font-display text-4xl font-black text-slate-700 sm:text-5xl">
          Immerse yourself in 100 distinct escapes
        </h1>
        <p className="max-w-3xl text-slate-500">
          Search by title, mix and match filters, and share your URL-powered
          discovery state instantly.
        </p>
      </section>

      <Suspense
        fallback={
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center text-slate-600 shadow-sm">
            Loading explorer...
          </div>
        }
      >
        <ExperienceExplorer />
      </Suspense>
    </main>
  );
}
