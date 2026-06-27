import type { Metadata } from "next";
import { places, mapEmbedUrl, mapsListUrl } from "@/content/places";
import type { PlaceCategory } from "@/content/places";
import PlacesView from "./PlacesView";

export const metadata: Metadata = {
  title: "Places",
};

const CATEGORY_ORDER: PlaceCategory[] = [
  "food",
  "coffee",
  "bar",
  "winery",
  "nature",
  "activity",
  "parkrun",
];

// These categories render as a flat grid — no city subheadings
const FLAT_CATEGORIES = new Set<PlaceCategory>(["winery", "parkrun"]);

export default function PlacesPage() {
  const grouped = CATEGORY_ORDER.flatMap((category) => {
    const categoryPlaces = places.filter((p) => p.category === category);
    if (categoryPlaces.length === 0) return [];

    if (FLAT_CATEGORIES.has(category)) {
      return [{ category, flat: true, cities: [{ city: "", places: categoryPlaces }] }];
    }

    const cities = Array.from(new Set(categoryPlaces.map((p) => p.city)));
    return [
      {
        category,
        flat: false,
        cities: cities.map((city) => ({
          city,
          places: categoryPlaces.filter((p) => p.city === city),
        })),
      },
    ];
  });

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-3">Places</h1>
      <p className="text-neutral-500 dark:text-neutral-400 mb-10">
        Spots I keep coming back to.
      </p>
      <PlacesView
        grouped={grouped}
        mapEmbedUrl={mapEmbedUrl}
        mapsListUrl={mapsListUrl}
      />
    </div>
  );
}
