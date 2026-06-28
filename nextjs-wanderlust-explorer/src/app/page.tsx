import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 items-center px-6 py-14">
      <section className="relative w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-xl sm:p-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-stone-300/35 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-stone-300/30 blur-3xl" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-slate-200 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-800">
              Nadodi: Poha Vendum Ododi
            </p>
            <h1 className="font-display text-5xl font-black leading-[1.05] text-slate-700 sm:text-6xl">
              Find your next unforgettable local story.
            </h1>
            <p className="max-w-2xl text-lg text-slate-700">
              From thermal-spring rituals to cliffside sunrise hikes, discover
              destination-first experiences with instant search, smart filters,
              and shareable exploration links.
            </p>
            <Link
              href="/experiences"
              className="inline-flex rounded-xl bg-gradient-to-r from-emerald-300 to-teal-800 px-6 py-4 text-base font-bold text-white shadow-lg shadow-slate-700/20 transition hover:-translate-y-0.5 hover:bg-slate-400 hover:text-slate-700"
            >
              Explore Experiences
            </Link>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-stone-50 to-stone-200 p-5 shadow-inner">
            <Image
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1000&q=80"
              alt="Travelers exploring a vibrant destination"
              width={1000}
              height={800}
              className="h-72 w-full rounded-xl object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>
    </main>
  );
}
