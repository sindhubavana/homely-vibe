import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-6xl w-full px-5 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">A peek inside</p>
        <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-10">Gallery</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {photos.map((p, i) => (
            <figure
              key={i}
              className="group flex flex-col animate-float-up"
              style={{ animationDelay: `${Math.min(i * 40, 400)}ms` }}
            >
              <button
                type="button"
                onClick={() => setLightbox(p)}
                className="relative aspect-square w-full rounded-2xl overflow-hidden bg-muted shadow-soft hover:shadow-float transition-shadow duration-500 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label={`View ${p.label} fullscreen`}
              >
                <img
                  src={p.src}
                  alt={p.label}
                  loading={i < 4 ? "eager" : "lazy"}
                  decoding="async"
                  // @ts-expect-error fetchpriority is valid but not typed
                  fetchpriority={i < 4 ? "high" : "auto"}
                  sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
                  className="absolute inset-0 w-full h-full object-contain p-3 transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                />
              </button>
              <figcaption className="mt-3 text-center text-sm font-medium text-foreground/80 tracking-wide">
                {p.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </main>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm grid place-items-center p-4 animate-pop-in cursor-zoom-out"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-background/90 grid place-items-center hover:scale-105 transition-transform z-10"
            aria-label="Close"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
          <figure className="max-w-[95vw] max-h-[95vh] flex flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.label} className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-float" />
            <figcaption className="text-white/90 text-sm font-medium">{lightbox.label}</figcaption>
          </figure>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
