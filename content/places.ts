export type PlaceCategory = "coffee" | "food" | "bar" | "activity" | "nature";

export type Place = {
  slug: string;
  name: string;
  category: PlaceCategory;
  city: string;
  note: string;
  mapsUrl: string;
  images?: string[];
};

// Google Maps → your saved list → Share → "Embed a map" → copy the src URL
export const mapEmbedUrl = "";

// Link to your full Google Maps saved list
export const mapsListUrl = "https://maps.app.goo.gl/hi5mQffyG75ZF7QW8";

export const places: Place[] = [
  {
    slug: "single-o-surry-hills",
    name: "Single O Surry Hills",
    category: "coffee",
    city: "Sydney",
    note: "The place that got me into specialty coffee. Their Reservoir blend is what every morning should taste like — order it as a batch brew and sit at the window.",
    mapsUrl: "https://maps.app.goo.gl/hi5mQffyG75ZF7QW8",
    images: [],
  },
];
