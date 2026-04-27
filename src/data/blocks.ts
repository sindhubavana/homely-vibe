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
  available: number;
  description: string;
  pricing: { type: Sharing; price: number }[];
  floors: Floor[];
};

const PRICE_2 = 135000;
const PRICE_3 = 135000;

function buildFloors(prefix: string): Floor[] {
  return [1, 2, 3, 4, 5].map((floor) => ({
    number: floor,
    rooms: Array.from({ length: 9 }).map((_, i) => {
      const roomNum = floor * 100 + (i + 1);
      const isTriple = i % 2 === 1; // alternate
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
    location: "Sri Saila Nilaya, Yelahanka New Town, Bengaluru",
    available: 12,
    description: "Our flagship block with bright glass-front lounges and study spaces.",
    pricing: [
      { type: "2-Sharing", price: PRICE_2 },
      { type: "3-Sharing", price: PRICE_3 },
    ],
    floors: buildFloors("A"),
  },
  {
    slug: "b",
    name: "Block B",
    tag: "Premium Girls Accommodation",
    audience: "Girls",
    image: blockB,
    location: "Sri Shyla Nilaya, Yelahanka, Bengaluru",
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
    location: "Vista #44, Yelahanka, Bengaluru",
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
