import type { Metadata } from "next";
import { places, mapEmbedUrl, mapsListUrl } from "@/content/places";
import PlacesView from "./PlacesView";

export const metadata: Metadata = {
  title: "Places",
};

export default function PlacesPage() {
  const cities = Array.from(new Set(places.map((p) => p.city)));
  const grouped = cities.map((city) => ({
    city,
    places: places.filter((p) => p.city === city),
  }));

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
