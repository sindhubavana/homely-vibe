import blockA from "@/assets/block-a-entrance.jpg";
import blockB from "@/assets/block-b-shyla.jpg";
import blockC from "@/assets/block-c-vista.jpg";
import roomDouble from "@/assets/room-double.jpg";
import roomTriple from "@/assets/room-triple.jpg";

export type Sharing = "2-Sharing" | "3-Sharing";

export type Room = {
  id: string;
  name: string;
  type: Sharing;
  rent: number; // per annum
  image: string;
};

export type Floor = {
  number: number;
  rooms: Room[];
};

export type Block = {
  slug: string;
  name: string;
  tag: string;
  audience: "Girls" | "Boys";
  image: string;
  location: string;
  mapQuery: string;
  available: number;
  description: string;
  pricing: { type: Sharing; price: number }[];
  floors: Floor[];
};

const PRICE_2 = 135000;
const PRICE_3 = 135000;

// Per-floor sharing pattern (positions 1..9). "T" = 3-Sharing, "D" = 2-Sharing.
const DEFAULT_PATTERN: ("T" | "D")[] = ["D", "T", "D", "T", "D", "T", "D", "T", "D"];
const BLOCK_A_PATTERN: ("T" | "D")[] = ["T", "D", "D", "D", "T", "D", "T", "D", "T"];

function buildFloors(prefix: string, pattern: ("T" | "D")[] = DEFAULT_PATTERN): Floor[] {
  return [1, 2, 3, 4, 5].map((floor) => ({
    number: floor,
    rooms: pattern.map((p, i) => {
      const roomNum = floor * 100 + (i + 1);
      const isTriple = p === "T";
      return {
        id: `${prefix}-${roomNum}`,
        name: `${prefix}${roomNum}`,
        type: isTriple ? "3-Sharing" : "2-Sharing",
        rent: isTriple ? PRICE_3 : PRICE_2,
        image: isTriple ? roomTriple : roomDouble,
      } as Room;
    }),
  }));
}

export const blocks: Block[] = [
  {
    slug: "a",
    name: "Block A",
    tag: "Premium Girls Accommodation",
    audience: "Girls",
    image: blockA,
    location: "Om Sai Luxury Ladies PG, Bengaluru, Karnataka 560119",
    mapQuery: "Om Sai Luxury Ladies PG Bengaluru 560119",
    available: 12,
    description: "Our flagship block with bright glass-front lounges and study spaces.",
    pricing: [
      { type: "2-Sharing", price: PRICE_2 },
      { type: "3-Sharing", price: PRICE_3 },
    ],
    floors: buildFloors("A", BLOCK_A_PATTERN),
  },
  {
    slug: "b",
    name: "Block B",
    tag: "Premium Girls Accommodation",
    audience: "Girls",
    image: blockB,
    location: "Om Sai Luxury Ladies PG, Bengaluru, Karnataka 560119",
    mapQuery: "Om Sai Luxury Ladies PG Bengaluru 560119",
    available: 8,
    description: "Quiet residential block with garden seating and dedicated study corners.",
    pricing: [
      { type: "2-Sharing", price: PRICE_2 },
      { type: "3-Sharing", price: PRICE_3 },
    ],
    floors: buildFloors("B"),
  },
  {
    slug: "c",
    name: "Block C",
    tag: "Premium Girls Accommodation",
    audience: "Girls",
    image: blockC,
    location: "Om Sai Luxury Ladies PG, Bengaluru, Karnataka 560119",
    mapQuery: "Om Sai Luxury Ladies PG Bengaluru 560119",
    available: 6,
    description: "Modern high-rise block with balcony rooms and the best skyline views.",
    pricing: [
      { type: "2-Sharing", price: PRICE_2 },
      { type: "3-Sharing", price: PRICE_3 },
    ],
    floors: buildFloors("C"),
  },
];

export function getBlock(slug: string) {
  return blocks.find((b) => b.slug === slug);
}
