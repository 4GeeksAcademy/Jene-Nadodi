import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Star } from "lucide-react";
import { experiences } from "@/data/experiences";
import { DetailFavoriteButton } from "@/components/DetailFavoriteButton";

interface ExperienceDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const { id } = await params;
  const experience = experiences.find((item) => item.id === id);

  if (!experience) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
        <Image
          src={experience.imageUrl}
          alt={experience.title}
          width={1600}
          height={900}
          className="h-[340px] w-full object-cover sm:h-[460px]"
          unoptimized
        />
        <div className="absolute right-4 top-4">
          <DetailFavoriteButton id={experience.id} />
        </div>
      </div>

      <section className="mt-8 space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">
            {experience.category}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">
            <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
            {experience.rating.toFixed(1)}
          </span>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
            ${experience.price} per person
          </span>
        </div>

        <h1 className="font-display text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
          {experience.title}
        </h1>
        <p className="text-lg font-medium text-slate-600">{experience.destination}</p>
        <p className="max-w-3xl text-slate-700">{experience.description}</p>

        <Link
          href="/experiences"
          className="inline-flex rounded-xl border border-slate-200 px-4 py-2 font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-800"
        >
          Back to explorer
        </Link>
      </section>
    </main>
  );
}
