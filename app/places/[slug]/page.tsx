import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { places } from "@/content/places";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return places.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const place = places.find((p) => p.slug === slug);
  if (!place) return {};
  return { title: place.name };
}

export default async function PlaceDetail({ params }: Props) {
  const { slug } = await params;
  const place = places.find((p) => p.slug === slug);
  if (!place) notFound();

  const images = place.images ?? [];

  return (
    <div>
      <Link
        href="/places"
        className="inline-flex items-center gap-1 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-8"
      >
        ← Places
      </Link>

      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded">
          {place.category}
        </span>
        <span className="text-xs text-neutral-400 dark:text-neutral-500">
          {place.city}
        </span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight mb-4">{place.name}</h1>
      {place.note && (
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
          {place.note}
        </p>
      )}

      {images.length > 0 && (
        <div
          className={`grid gap-3 mb-8 ${images.length >= 2 ? "grid-cols-2" : "grid-cols-1"}`}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className={`rounded-lg overflow-hidden ${
                images.length >= 3 && i === 0 ? "col-span-2" : ""
              }`}
              style={{
                aspectRatio:
                  images.length >= 3 && i === 0
                    ? "16/7"
                    : images.length === 1
                      ? "16/9"
                      : "4/3",
              }}
            >
              <img
                src={src}
                alt={`${place.name} photo ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      <a
        href={`https://maps.google.com/?q=${encodeURIComponent(`${place.name}, ${place.city}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm border border-neutral-200 dark:border-neutral-800 rounded px-4 py-2 text-neutral-600 dark:text-neutral-400 hover:border-neutral-300 dark:hover:border-neutral-700 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
      >
        Open in Google Maps →
      </a>
    </div>
  );
}
