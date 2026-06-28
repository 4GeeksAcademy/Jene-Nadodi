"use client";

import { useMemo, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Experience } from "@/data/experiences";

interface UseExperienceFiltersResult {
  searchTerm: string;
  category: string;
  destination: string;
  setSearchTerm: (value: string) => void;
  setCategory: (value: string) => void;
  setDestination: (value: string) => void;
  filteredExperiences: Experience[];
}

function normalize(value: string) {
  return value.trim();
}

export function useExperienceFilters(
  allExperiences: Experience[],
): UseExperienceFiltersResult {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(() => searchParams.get("search") ?? "");
  const [category, setCategory] = useState(() => searchParams.get("category") ?? "");
  const [destination, setDestination] = useState(() =>
    searchParams.get("destination") ?? "",
  );

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    const normalizedSearch = normalize(searchTerm);
    const normalizedCategory = normalize(category);
    const normalizedDestination = normalize(destination);

    if (normalizedSearch) {
      params.set("search", normalizedSearch);
    } else {
      params.delete("search");
    }

    if (normalizedCategory) {
      params.set("category", normalizedCategory);
    } else {
      params.delete("category");
    }

    if (normalizedDestination) {
      params.set("destination", normalizedDestination);
    } else {
      params.delete("destination");
    }

    const query = params.toString();
    const target = query ? `${pathname}?${query}` : pathname;
    const current = searchParams.toString()
      ? `${pathname}?${searchParams.toString()}`
      : pathname;

    if (target !== current) {
      router.replace(target, { scroll: false });
    }
  }, [searchTerm, category, destination, pathname, router, searchParams]);

  const filteredExperiences = useMemo(() => {
    const normalizedDestination = destination.trim().toLowerCase();

    let titleMatcher: (title: string) => boolean = () => true;

    if (searchTerm.trim()) {
      try {
        const term = searchTerm.trim();
        titleMatcher = (title) => new RegExp(term, "i").test(title);
      } catch {
        const escaped = searchTerm
          .trim()
          .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        titleMatcher = (title) => new RegExp(escaped, "i").test(title);
      }
    }

    return allExperiences.filter((experience) => {
      const matchesTitle = titleMatcher(experience.title);
      const matchesCategory = category ? experience.category === category : true;
      const matchesDestination = normalizedDestination
        ? experience.destination.toLowerCase().includes(normalizedDestination)
        : true;

      return matchesTitle && matchesCategory && matchesDestination;
    });
  }, [allExperiences, searchTerm, category, destination]);

  return {
    searchTerm,
    category,
    destination,
    setSearchTerm,
    setCategory,
    setDestination,
    filteredExperiences,
  };
}
