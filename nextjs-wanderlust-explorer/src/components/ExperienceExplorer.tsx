"use client";

import { ExperienceCard } from "@/components/ExperienceCard";
import { FilterBar } from "@/components/FilterBar";
import { SearchBar } from "@/components/SearchBar";
import { experiences } from "@/data/experiences";
import { useExperienceFilters } from "@/hooks/useExperienceFilters";

export function ExperienceExplorer() {
  const {
    searchTerm,
    category,
    destination,
    setSearchTerm,
    setCategory,
    setDestination,
    filteredExperiences,
  } = useExperienceFilters(experiences);

  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm sm:p-7">
        <div className="grid gap-5">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <FilterBar
            category={category}
            destination={destination}
            onCategoryChange={setCategory}
            onDestinationChange={setDestination}
          />
        </div>
      </div>

      {filteredExperiences.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
          <p className="text-2xl font-bold text-slate-800">No results found</p>
          <p className="mt-2 text-slate-600">
            Try another keyword, category, or destination.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      )}
    </section>
  );
}
