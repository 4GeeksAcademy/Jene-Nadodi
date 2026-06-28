import { categoriesList, destinationsList } from "@/data/experiences";

interface FilterBarProps {
  category: string;
  destination: string;
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
}

export function FilterBar({
  category,
  destination,
  onCategoryChange,
  onDestinationChange,
}: FilterBarProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-slate-700">Category</span>
        <select
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
        >
          <option value="">All categories</option>
          {categoriesList.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-slate-700">Destination</span>
        <input
          type="text"
          list="destinations"
          value={destination}
          onChange={(event) => onDestinationChange(event.target.value)}
          placeholder="Filter by city or country"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
        />
        <datalist id="destinations">
          {destinationsList.map((item) => (
            <option key={item} value={item} />
          ))}
        </datalist>
      </label>
    </div>
  );
}
