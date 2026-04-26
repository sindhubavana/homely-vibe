import blockA from "@/assets/block-a-entrance.jpg";
import blockB from "@/assets/block-b-shyla.jpg";
import blockC from "@/assets/block-c-vista.jpg";
import roomSingle from "@/assets/room-single.jpg";
import roomDouble from "@/assets/room-double.jpg";
import roomTriple from "@/assets/room-triple.jpg";

export type Room = {
  id: string;
  name: string;
  type: "Single" | "Double Sharing" | "Triple Sharing";
  rent: number;
  left: number;
  image: string;
};

export type Block = {
  slug: string;
  name: string;
  tag: string;
  audience: "Girls" | "Boys";
  image: string;
  available: number;
  description: string;
  rooms: Room[];
};

export const blocks: Block[] = [
  {
    slug: "a",
    name: "Block A",
    tag: "Sri Saila Nilaya",
    audience: "Girls",
    image: blockA,
    available: 3,
    description: "Our flagship block with bright glass-front lounges and study spaces.",
    rooms: [
      { id: "a-101", name: "Room 101", type: "Single", rent: 9500, left: 1, image: roomSingle },
      { id: "a-102", name: "Room 102", type: "Double Sharing", rent: 7500, left: 1, image: roomDouble },
      { id: "a-205", name: "Room 205", type: "Triple Sharing", rent: 6500, left: 1, image: roomTriple },
    ],
  },
  {
    slug: "b",
    name: "Block B",
    tag: "Sri Shyla Nilaya",
    audience: "Girls",
    image: blockB,
    available: 5,
    description: "Quiet residential block with garden seating and dedicated study corners.",
    rooms: [
      { id: "b-201", name: "Room 201", type: "Single", rent: 9500, left: 2, image: roomSingle },
      { id: "b-204", name: "Room 204", type: "Double Sharing", rent: 7500, left: 2, image: roomDouble },
      { id: "b-301", name: "Room 301", type: "Triple Sharing", rent: 6500, left: 1, image: roomTriple },
    ],
  },
  {
    slug: "c",
    name: "Block C",
    tag: "Vista #44",
    audience: "Girls",
    image: blockC,
    available: 2,
    description: "Modern high-rise block with balcony rooms and the best skyline views.",
    rooms: [
      { id: "c-402", name: "Room 402", type: "Single", rent: 10000, left: 1, image: roomSingle },
      { id: "c-405", name: "Room 405", type: "Double Sharing", rent: 7800, left: 1, image: roomDouble },
    ],
  },
];

export function getBlock(slug: string) {
  return blocks.find((b) => b.slug === slug);
}
