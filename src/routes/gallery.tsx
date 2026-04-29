import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import blockA from "@/assets/block-a-entrance.jpg";
import blockB from "@/assets/block-b-shyla.jpg";
import blockC from "@/assets/block-c-vista.jpg";
import roomDouble from "@/assets/room-double.jpg";
import roomTriple from "@/assets/room-triple.jpg";
import food from "@/assets/amenity-food.jpg";
import roomDoor from "@/assets/pg-room-door.png";
import buildingExterior from "@/assets/pg-building-exterior.png";
import reception from "@/assets/pg-reception.png";
import diningHall from "@/assets/pg-dining-hall.png";
import kitchenServery from "@/assets/pg-kitchen-servery.png";
import washingArea from "@/assets/pg-washing-area.png";
import utensilsRack from "@/assets/pg-utensils-rack.png";
import refrigerator from "@/assets/pg-refrigerator.png";
import lift from "@/assets/pg-lift.png";
import corridorRooms from "@/assets/pg-corridor-rooms.png";
import shoeRack from "@/assets/pg-shoe-rack.png";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — OM SAI Luxury Ladies PG" },
      { name: "description", content: "Browse photos of OM SAI Luxury Ladies PG: blocks, rooms and amenities." },
    ],
  }),
});

const photos = [
  { src: blockA, label: "Block A — Entrance" },
  { src: blockB, label: "Block B — Shyla" },
  { src: blockC, label: "Block C — Vista" },
  { src: roomDouble, label: "Double sharing" },
  { src: roomTriple, label: "Triple sharing" },
  { src: food, label: "Home-style meals" },
  { src: roomDoor, label: "Room entrance" },
  { src: buildingExterior, label: "Building exterior" },
  { src: reception, label: "Reception desk" },
  { src: diningHall, label: "Dining hall" },
  { src: kitchenServery, label: "Kitchen & servery" },
  { src: washingArea, label: "Hand wash area" },
  { src: utensilsRack, label: "Utensils rack" },
  { src: refrigerator, label: "Refrigerator" },
  { src: lift, label: "Lift access" },
  { src: corridorRooms, label: "Room corridor" },
  { src: shoeRack, label: "Shoe rack" },
];

function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-6xl w-full px-5 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">A peek inside</p>
        <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-10">Gallery</h1>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {photos.map((p, i) => (
            <figure key={i} className="mb-4 break-inside-avoid rounded-3xl overflow-hidden shadow-soft group">
              <img src={p.src} alt={p.label} loading="lazy" className="w-full h-auto group-hover:scale-105 transition-transform duration-700" />
              <figcaption className="px-4 py-3 text-sm font-medium bg-card">{p.label}</figcaption>
            </figure>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
