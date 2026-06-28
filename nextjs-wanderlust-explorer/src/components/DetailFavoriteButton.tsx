"use client";

import { FavoriteToggle } from "@/components/FavoriteToggle";
import { useFavorites } from "@/context/FavoritesContext";

interface DetailFavoriteButtonProps {
  id: string;
}

export function DetailFavoriteButton({ id }: DetailFavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <FavoriteToggle isActive={isFavorite(id)} onToggle={() => toggleFavorite(id)} />
  );
}
