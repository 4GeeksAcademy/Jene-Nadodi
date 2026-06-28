export interface Experience {
  id: string;
  title: string;
  description: string;
  category: "Adventure" | "Culture" | "Food" | "Wellness" | "Nature";
  destination: string;
  price: number;
  rating: number;
  imageUrl: string;
}

const categories: Experience["category"][] = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
];

const destinations = [
  "Bangkok, Thailand",
  "Split, Croatia",
  "Lisbon, Portugal",
  "Kyoto, Japan",
  "Marrakesh, Morocco",
  "Reykjavik, Iceland",
  "Medellin, Colombia",
  "Cape Town, South Africa",
  "Vancouver, Canada",
  "Queenstown, New Zealand",
  "Cusco, Peru",
  "Bali, Indonesia",
  "Seville, Spain",
  "Hanoi, Vietnam",
  "Dubrovnik, Croatia",
  "Athens, Greece",
  "Naples, Italy",
  "Lima, Peru",
  "Chiang Mai, Thailand",
  "Valletta, Malta",
];

const activityByCategory: Record<Experience["category"], string[]> = {
  Adventure: [
    "Sunrise Clifftop Trek",
    "Hidden Canyon Kayak",
    "Volcanic Ridge Hike",
    "Coastal Paraglide Session",
  ],
  Culture: [
    "Lantern District Story Walk",
    "Artisan Studio Crawl",
    "Old Town Heritage Tour",
    "Temple and Tea Ceremony",
  ],
  Food: [
    "Street Food After Dark",
    "Market-to-Table Cooking Lab",
    "Coastal Seafood Tasting",
    "Spice Route Kitchen Tour",
  ],
  Wellness: [
    "Saltwater Sound Bath",
    "Rooftop Sunset Yoga",
    "Forest Breathwork Journey",
    "Thermal Springs Retreat",
  ],
  Nature: [
    "Wildflower Valley Picnic",
    "Mangrove Wildlife Cruise",
    "Alpine Lake Discovery",
    "Starlit Desert Observatory",
  ],
};

const imageUrls = [
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=80",
];

export const experiences: Experience[] = categories.flatMap((category, catIndex) => {
  return destinations.map((destination, destIndex) => {
    // Calculate global index tracking sequence position (0 to 99)
    const globalIndex = catIndex * destinations.length + destIndex;
    
    // Select activity title sequentially from available 4 options per category
    const activities = activityByCategory[category];
    const activity = activities[destIndex % activities.length];
    
    const cityName = destination.split(",")[0];

    return {
      id: `exp-${String(globalIndex + 1).padStart(3, "0")}`,
      title: `${activity} in ${cityName}`,
      description: `A thoughtfully curated local ${category.toLowerCase()} experience led by expert hosts in ${cityName}. Blending immersive storytelling, regional flavor, and memorable moments tailored for curious travelers.`,
      category,
      destination,
      price: 50 + (globalIndex % 15) * 12, 
      rating: Number((4.0 + (globalIndex % 11) * 0.1).toFixed(1)), 
      imageUrl: imageUrls[globalIndex % imageUrls.length],
    };
  });
});

export const categoriesList: Experience["category"][] = categories;

export const destinationsList = Array.from(new Set(destinations));
