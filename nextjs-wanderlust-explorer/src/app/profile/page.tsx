"use client";

import React, { useState } from "react";
import { useFavorites } from "@/context/FavoritesContext";

import { 
  SparklesIcon, 
  MapPinIcon, 
  GlobeAltIcon, 
  PlusIcon 
} from "@heroicons/react/24/outline";


const INITIAL_PROFILE = {
  name: "Maya Rivera",
  title: "Product designer, remote explorer, and collector of immersive local experiences around the globe.",
  personality: "Adventure Junkie",
  instagram: "maya_explores",
  tiktok: "maya_wanders",
  countries: ["Iceland", "Japan", "Peru", "Morocco"],
  bucketList: [
    "See the Northern Lights",
    "Scuba dive the Great Barrier Reef",
    "Hike the Inca Trail",
  ],
};

export default function ProfilePage() {
  const { favoriteIds } = useFavorites();
  const [profile, setProfile] = useState(INITIAL_PROFILE);
  const [newCountry, setNewCountry] = useState("");
  const [newBucketItem, setNewBucketItem] = useState("");

  
  const handleAddCountry = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCountry.trim() && !profile.countries.includes(newCountry.trim())) {
      setProfile({
        ...profile,
        countries: [...profile.countries, newCountry.trim()],
      });
      setNewCountry("");
    }
  };

  
  const handleAddBucketItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (newBucketItem.trim()) {
      setProfile({
        ...profile,
        bucketList: [...profile.bucketList, newBucketItem.trim()],
      });
      setNewBucketItem("");
    }
  };

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-8">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Traveler profile
              </p>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                <SparklesIcon className="h-3 w-3 text-emerald-600" />
                {profile.personality}
              </span>
            </div>
            
            <h1 className="font-display text-4xl font-black text-slate-900">
               {profile.name}
            </h1>
            <p className="max-w-xl text-slate-600">
             {profile.title}
            </p>

            <div className="flex gap-4 pt-1 text-sm font-medium text-slate-500">
              <a
                href={`https://instagram.com{profile.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-600 transition-colors"
              >
                Instagram: @{profile.instagram}
              </a>
              <a
                href={`https://tiktok.com{profile.tiktok}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-black transition-colors"
              >
                TikTok: @{profile.tiktok}
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-stone-400 to-slate-200 p-6 text-white shadow-lg min-w-[160px] text-center sm:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
              Saved favorites
            </p>
            <p className="mt-1 text-5xl font-black">{favoriteIds.length}</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          
          {/* Countries Visited Block */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
              Countries Visited ({profile.countries.length})
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.countries.map((country, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-800"
                >
                  <MapPinIcon className="h-4 w-4 text-slate-500" />
                  {country}
                </span>
              ))}
            </div>
            
            <form onSubmit={handleAddCountry} className="flex gap-2 max-w-sm">
              <input
                type="text"
                placeholder="Add a country..."
                value={newCountry}
                onChange={(e) => setNewCountry(e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-3 py-1.5 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1 rounded-xl bg-slate-400 px-4 py-1.5 text-sm font-semibold text-white hover:bg-slate-500 transition-colors"
              >
                <PlusIcon className="h-4 w-4" />
                Add
              </button>
            </form>
          </div>

          {/* Travel Bucket List Block */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
              Travel Bucket List
            </h3>
            <ul className="space-y-2">
              {profile.bucketList.map((item, index) => (
                <li
                  key={index}
                  className="text-sm text-slate-700 border-b border-dashed border-slate-100 pb-2 flex items-center gap-2"
                >
                  <GlobeAltIcon className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <form onSubmit={handleAddBucketItem} className="flex gap-2 max-w-sm">
              <input
                type="text"
                placeholder="Add bucket list experience..."
                value={newBucketItem}
                onChange={(e) => setNewBucketItem(e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-3 py-1.5 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1 rounded-xl bg-slate-400 px-4 py-1.5 text-sm font-semibold text-white hover:bg-slate-500 transition-colors"
              >
                <PlusIcon className="h-4 w-4" />
                Add
              </button>
            </form>
          </div>

        </div>

      </section>
    </main>
  );
}