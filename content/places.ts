export type PlaceCategory =
  | "coffee"
  | "food"
  | "bar"
  | "winery"
  | "sightseeing"
  | "stay"
  | "parkrun";

export type Place = {
  slug: string;
  name: string;
  category: PlaceCategory;
  city: string;
  note: string;
  images?: string[];
};

export const mapEmbedUrl =
  "https://www.google.com/maps/d/embed?mid=1F_I0lplYNoAdVhfaczM97I_Gm9_ZYXU";

export const mapsListUrl =
  "https://www.google.com/maps/d/viewer?mid=1F_I0lplYNoAdVhfaczM97I_Gm9_ZYXU";

export const places: Place[] = [
  // ── Sydney ──────────────────────────────────────────────────────────────
  {
    slug: "the-baxter-inn",
    name: "The Baxter Inn",
    category: "bar",
    city: "Sydney",
    note: "",
  },
  {
    slug: "maybe-sammy",
    name: "Maybe Sammy",
    category: "bar",
    city: "Sydney",
    note: "",
  },
  {
    slug: "the-barber-shop",
    name: "The Barber Shop",
    category: "bar",
    city: "Sydney",
    note: "",
  },
  {
    slug: "old-mates-place",
    name: "Old Mate's Place",
    category: "bar",
    city: "Sydney",
    note: "",
  },
  {
    slug: "opera-bar",
    name: "Opera Bar",
    category: "bar",
    city: "Sydney",
    note: "",
  },
  {
    slug: "deadwax",
    name: "Deadwax",
    category: "bar",
    city: "Sydney",
    note: "",
  },
  {
    slug: "the-caterpillar-club",
    name: "The Caterpillar Club",
    category: "bar",
    city: "Sydney",
    note: "",
  },
  {
    slug: "evies-redfern",
    name: "Evie's Redfern",
    category: "coffee",
    city: "Sydney",
    note: "",
  },
  {
    slug: "social-society",
    name: "Social Society",
    category: "coffee",
    city: "Sydney",
    note: "",
  },
  {
    slug: "quick-brown-fox-eatery",
    name: "Quick Brown Fox Eatery",
    category: "coffee",
    city: "Sydney",
    note: "",
  },
  {
    slug: "rovollo-restaurant",
    name: "Rovollo Restaurant and Wine Room",
    category: "food",
    city: "Sydney",
    note: "",
  },
  {
    slug: "morena",
    name: "Morena",
    category: "food",
    city: "Sydney",
    note: "",
  },
  {
    slug: "cin-yen",
    name: "Cin Yen Indonesian Medan Food",
    category: "food",
    city: "Sydney",
    note: "",
  },
  {
    slug: "sushi-mori",
    name: "Sushi-mori",
    category: "food",
    city: "Sydney",
    note: "",
  },
  {
    slug: "bopp-and-tone",
    name: "Bopp & Tone",
    category: "food",
    city: "Sydney",
    note: "",
  },
  {
    slug: "maeda-newtown",
    name: "Maeda Newtown",
    category: "food",
    city: "Sydney",
    note: "",
  },
  {
    slug: "the-gidley",
    name: "The Gidley",
    category: "food",
    city: "Sydney",
    note: "",
  },
  {
    slug: "rainieris-deli",
    name: "Raineri's Continental Delicatessen",
    category: "food",
    city: "Sydney",
    note: "",
  },
  {
    slug: "pellegrino-2000",
    name: "Pellegrino 2000",
    category: "food",
    city: "Sydney",
    note: "",
  },
  {
    slug: "palace-chinese-restaurant",
    name: "Palace Chinese Restaurant",
    category: "food",
    city: "Sydney",
    note: "",
  },
  {
    slug: "vinh-phat",
    name: "Vinh Phat Chinese Seafood Restaurant",
    category: "food",
    city: "Sydney",
    note: "",
  },
  {
    slug: "bistro-grenier",
    name: "Bistro Grenier",
    category: "food",
    city: "Sydney",
    note: "",
  },
  {
    slug: "louie",
    name: "Louie",
    category: "food",
    city: "Sydney",
    note: "",
  },
  {
    slug: "mensho-tokyo-ramen-sydney",
    name: "Mensho Tokyo Ramen Sydney",
    category: "food",
    city: "Sydney",
    note: "",
  },
  {
    slug: "four-ate-five",
    name: "Four Ate Five",
    category: "food",
    city: "Sydney",
    note: "",
  },
  {
    slug: "takam",
    name: "Takam, Filipino Food Forward",
    category: "food",
    city: "Sydney",
    note: "",
  },
  {
    slug: "bar-luca",
    name: "Bar Luca",
    category: "food",
    city: "Sydney",
    note: "",
  },
  {
    slug: "black-star-pastry",
    name: "Black Star Pastry Sydney CBD",
    category: "food",
    city: "Sydney",
    note: "",
  },
  {
    slug: "bourke-street-bakery",
    name: "Bourke Street Bakery Surry Hills",
    category: "food",
    city: "Sydney",
    note: "",
  },
  {
    slug: "o-bar-and-dining",
    name: "O Bar and Dining",
    category: "food",
    city: "Sydney",
    note: "",
  },
  {
    slug: "cafe-paci",
    name: "Cafe Paci",
    category: "food",
    city: "Sydney",
    note: "",
  },
  {
    slug: "lokha",
    name: "LOKHA",
    category: "food",
    city: "Sydney",
    note: "",
  },
  {
    slug: "circular-quay-wharf-3",
    name: "Circular Quay Wharf 3",
    category: "sightseeing",
    city: "Sydney",
    note: "",
  },
  {
    slug: "bondi-to-coogee-walk",
    name: "Bondi to Coogee Walk",
    category: "sightseeing",
    city: "Sydney",
    note: "",
  },
  // ── Blue Mountains ───────────────────────────────────────────────────────
  {
    slug: "valley-of-the-waters",
    name: "Valley of the Waters Lookout",
    category: "sightseeing",
    city: "Blue Mountains",
    note: "",
  },
  {
    slug: "grand-canyon-walking-track",
    name: "Grand Canyon Walking Track",
    category: "sightseeing",
    city: "Blue Mountains",
    note: "",
  },
  // ── Hunter Valley ────────────────────────────────────────────────────────
  {
    slug: "tamburlaine-organic-wines",
    name: "Tamburlaine Organic Wines",
    category: "winery",
    city: "Hunter Valley",
    note: "",
  },
  // ── Mudgee ──────────────────────────────────────────────────────────────
  {
    slug: "lowe-family-wine-co",
    name: "Lowe Family Wine Co",
    category: "winery",
    city: "Mudgee",
    note: "",
  },
  // ── Orange ──────────────────────────────────────────────────────────────
  {
    slug: "logan-wines",
    name: "Logan Wines",
    category: "winery",
    city: "Orange",
    note: "",
  },
  // ── Melbourne ───────────────────────────────────────────────────────────
  {
    slug: "sachi-melbourne",
    name: "Sachi Melbourne",
    category: "food",
    city: "Melbourne",
    note: "",
  },
  {
    slug: "hectors-deli",
    name: "Hector's Deli",
    category: "food",
    city: "Melbourne",
    note: "",
  },
  {
    slug: "the-cornish-arms",
    name: "The Cornish Arms Hotel",
    category: "bar",
    city: "Melbourne",
    note: "",
  },
  {
    slug: "berlin-bar",
    name: "Berlin Bar",
    category: "bar",
    city: "Melbourne",
    note: "",
  },
  {
    slug: "rooftop-at-qt",
    name: "Rooftop at QT",
    category: "bar",
    city: "Melbourne",
    note: "",
  },
  {
    slug: "dukes-coffee-roasters",
    name: "Dukes Coffee Roasters",
    category: "coffee",
    city: "Melbourne",
    note: "",
  },
  // ── Brisbane ─────────────────────────────────────────────────────────────
  {
    slug: "hanoi-dna",
    name: "HaNoi DnA",
    category: "food",
    city: "Brisbane",
    note: "",
  },
  {
    slug: "madame-wu",
    name: "Madame Wu",
    category: "food",
    city: "Brisbane",
    note: "",
  },
  {
    slug: "honto",
    name: "hôntô",
    category: "food",
    city: "Brisbane",
    note: "",
  },
  {
    slug: "donna-chang",
    name: "Donna Chang",
    category: "food",
    city: "Brisbane",
    note: "",
  },
  {
    slug: "the-calile-hotel",
    name: "The Calile Hotel",
    category: "stay",
    city: "Brisbane",
    note: "",
  },
  // ── Adelaide ─────────────────────────────────────────────────────────────
  {
    slug: "prohibition-liquor-co",
    name: "Prohibition Liquor Co",
    category: "bar",
    city: "Adelaide",
    note: "",
  },
  // ── Cairns ───────────────────────────────────────────────────────────────
  {
    slug: "piccolo-cucina",
    name: "Piccolo Cucina",
    category: "food",
    city: "Cairns",
    note: "",
  },
  // ── Hobart ───────────────────────────────────────────────────────────────
  {
    slug: "pancho-villa",
    name: "Pancho Villa",
    category: "food",
    city: "Hobart",
    note: "",
  },
  {
    slug: "westside-laundry",
    name: "Westside Laundry",
    category: "food",
    city: "Hobart",
    note: "",
  },
  {
    slug: "da-angelo-ristorante",
    name: "Da Angelo Ristorante",
    category: "food",
    city: "Hobart",
    note: "",
  },
  // ── Bruny Island ─────────────────────────────────────────────────────────
  {
    slug: "get-shucked",
    name: "Get Shucked",
    category: "food",
    city: "Bruny Island",
    note: "",
  },
  // ── Christchurch ─────────────────────────────────────────────────────────
  {
    slug: "hagley-parkrun",
    name: "Hagley parkrun",
    category: "parkrun",
    city: "Christchurch",
    note: "",
  },
  {
    slug: "castle-hill-kura-tawhiti",
    name: "Castle Hill / Kura Tawhiti Conservation Area",
    category: "sightseeing",
    city: "Christchurch",
    note: "",
  },
  {
    slug: "the-church-pub",
    name: "The Church Pub",
    category: "bar",
    city: "Christchurch",
    note: "",
  },
  // ── Singapore ────────────────────────────────────────────────────────────
  {
    slug: "east-coast-park-parkrun",
    name: "East Coast Park parkrun",
    category: "parkrun",
    city: "Singapore",
    note: "",
  },
  // ── Bali ─────────────────────────────────────────────────────────────────
  {
    slug: "la-favela",
    name: "La Favela",
    category: "bar",
    city: "Bali",
    note: "",
  },
  // ── Khao Lak ─────────────────────────────────────────────────────────────
  {
    slug: "family-thai-food-and-seafood",
    name: "Family Thai Food & Seafood",
    category: "food",
    city: "Khao Lak",
    note: "",
  },
  // ── Hội An ───────────────────────────────────────────────────────────────
  {
    slug: "hadi-coffee",
    name: "Hadi Coffee",
    category: "coffee",
    city: "Hội An",
    note: "",
  },
  {
    slug: "bale-well-restaurant",
    name: "Bale Well Restaurant",
    category: "food",
    city: "Hội An",
    note: "",
  },
  // ── Hanoi ────────────────────────────────────────────────────────────────
  {
    slug: "bun-cha-huong-lien",
    name: "Bún chả Hương Liên",
    category: "food",
    city: "Hanoi",
    note: "",
  },
  // ── Nha Trang ────────────────────────────────────────────────────────────
  {
    slug: "skylight-la-kitchen",
    name: "Skylight & Lá Kitchen",
    category: "bar",
    city: "Nha Trang",
    note: "",
  },
  // ── Vang Vieng ───────────────────────────────────────────────────────────
  {
    slug: "viengtara-resort",
    name: "ViengTara VangVieng Resort",
    category: "stay",
    city: "Vang Vieng",
    note: "",
  },
  // ── Luang Prabang ────────────────────────────────────────────────────────
  {
    slug: "avani-luang-prabang",
    name: "Avani+ Luang Prabang Hotel",
    category: "stay",
    city: "Luang Prabang",
    note: "",
  },
  // ── London ───────────────────────────────────────────────────────────────
  {
    slug: "casse-croute",
    name: "Casse-Croûte",
    category: "food",
    city: "London",
    note: "",
  },
  {
    slug: "fallow",
    name: "Fallow",
    category: "food",
    city: "London",
    note: "",
  },
  {
    slug: "osteria-angelina",
    name: "Osteria Angelina",
    category: "food",
    city: "London",
    note: "",
  },
  // ── Los Angeles ──────────────────────────────────────────────────────────
  {
    slug: "barrique-venice",
    name: "Barrique Venice",
    category: "food",
    city: "Los Angeles",
    note: "",
  },
];
