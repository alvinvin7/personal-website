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

export const mapEmbedUrl =
  "https://www.google.com/maps/d/embed?mid=1F_I0lplYNoAdVhfaczM97I_Gm9_ZYXU";

export const mapsListUrl =
  "https://www.google.com/maps/d/viewer?mid=1F_I0lplYNoAdVhfaczM97I_Gm9_ZYXU";

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
