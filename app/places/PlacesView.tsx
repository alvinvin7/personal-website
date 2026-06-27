"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Place } from "@/content/places";

function PlaceCard({ place }: { place: Place }) {
  const [photoIdx, setPhotoIdx] = useState(0);
  const router = useRouter();
  const images = place.images ?? [];

  return (
    <div
      className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden cursor-pointer hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors flex flex-col"
      onClick={() => router.push(`/places/${place.slug}`)}
    >
      {images.length > 0 && (
        <div className="relative h-44 bg-neutral-100 dark:bg-neutral-900 shrink-0">
          <img
            src={images[photoIdx]}
            alt={place.name}
            className="w-full h-full object-cover"
          />
          {images.length > 1 && (
            <>
              <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
                <button
                  aria-label="Previous photo"
                  className="pointer-events-auto w-7 h-7 rounded-full bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-900 transition-colors text-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPhotoIdx((i) => (i - 1 + images.length) % images.length);
                  }}
                >
                  ←
                </button>
                <button
                  aria-label="Next photo"
                  className="pointer-events-auto w-7 h-7 rounded-full bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-900 transition-colors text-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPhotoIdx((i) => (i + 1) % images.length);
                  }}
                >
                  →
                </button>
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {images.map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      i === photoIdx ? "bg-white" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <span className="font-medium text-sm">{place.name}</span>
          <span className="text-xs px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded shrink-0">
            {place.category}
          </span>
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3 flex-1">
          {place.note}
        </p>
        <a
          href={place.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          Open in Maps →
        </a>
      </div>
    </div>
  );
}

type GroupedCity = { city: string; places: Place[] };

export default function PlacesView({
  grouped,
  mapEmbedUrl,
  mapsListUrl,
}: {
  grouped: GroupedCity[];
  mapEmbedUrl: string;
  mapsListUrl: string;
}) {
  const [view, setView] = useState<"list" | "map">("list");

  return (
    <>
      <div className="flex items-center justify-between mb-10">
        <div className="flex border border-neutral-200 dark:border-neutral-800 rounded overflow-hidden text-sm">
          <button
            className={`px-3 py-1.5 transition-colors ${
              view === "list"
                ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
            }`}
            onClick={() => setView("list")}
          >
            List
          </button>
          <button
            className={`px-3 py-1.5 border-l border-neutral-200 dark:border-neutral-800 transition-colors ${
              view === "map"
                ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
            }`}
            onClick={() => setView("map")}
          >
            Map
          </button>
        </div>
        <a
          href={mapsListUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
        >
          View on Google Maps →
        </a>
      </div>

      {view === "list" ? (
        <div className="space-y-10">
          {grouped.map(({ city, places }) => (
            <div key={city}>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
                {city}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {places.map((place) => (
                  <PlaceCard key={place.slug} place={place} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : mapEmbedUrl ? (
        <iframe
          src={mapEmbedUrl}
          className="w-full h-[500px] rounded-lg border border-neutral-200 dark:border-neutral-800"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        />
      ) : (
        <div className="flex flex-col items-center justify-center h-64 border border-neutral-200 dark:border-neutral-800 rounded-lg gap-3">
          <p className="text-sm text-neutral-400 dark:text-neutral-600">
            Map embed not configured.
          </p>
          <a
            href={mapsListUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline underline-offset-2 hover:opacity-75 transition-opacity"
          >
            View on Google Maps →
          </a>
        </div>
      )}
    </>
  );
}
