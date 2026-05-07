import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import power from "@/assets/facility-power.jpg";
import waterTank from "@/assets/facility-water-tank.png";
import terraceDrying from "@/assets/facility-terrace-drying.png";
import washingMachines from "@/assets/facility-washing-machines.png";
import wifiRouter from "@/assets/facility-wifi-router.png";
import roWater from "@/assets/facility-ro-water.png";
import cctvCamera from "@/assets/facility-cctv-camera.png";
import fireExtinguisher from "@/assets/facility-fire-extinguisher.png";
import inductionStove from "@/assets/facility-induction-stove.png";

export const Route = createFileRoute("/facilities")({
  component: FacilitiesPage,
  head: () => ({
    meta: [
      { title: "Our Facilities — OM SAI Luxury Ladies PG" },
      { name: "description", content: "Explore the facilities at OM SAI Luxury Ladies PG — dining, hot water, WiFi, security and more." },
      { property: "og:title", content: "Our Facilities — OM SAI Luxury Ladies PG" },
      { property: "og:description", content: "Everything you need for comfortable living." },
    ],
  }),
});

const facilities = [
  { name: "Washing Machines", image: washingMachines, desc: "Fully automatic Samsung washers for everyday laundry." },
  { name: "Hot & Cold RO Water", image: roWater, desc: "Commercial RO plant with hot and cold drinking water." },
  { name: "High-Speed WiFi Router", image: wifiRouter, desc: "Dedicated fiber router delivering reliable internet across all rooms." },
  { name: "CCTV Surveillance", image: cctvCamera, desc: "HD surveillance cameras across every floor and corridor." },
  { name: "Overhead Water Tanks", image: waterTank, desc: "Large rooftop tanks ensure 24/7 water supply." },
  { name: "Terrace Drying Area", image: terraceDrying, desc: "Open rooftop space for fresh-air clothes drying." },
  { name: "Fire Safety Equipment", image: fireExtinguisher, desc: "ISI-certified fire extinguishers on every floor." },
  { name: "Induction Cooktop", image: inductionStove, desc: "Prestige induction stove for safe, quick cooking." },
  { name: "Power Backup", image: power, desc: "Uninterrupted power for studies, work and comfort." },
  { name: "Weekly Food Menu", image: menuChart, desc: "Balanced weekly menu with breakfast, lunch, snacks and dinner." },
];

function FacilitiesPage() {
  const [lightbox, setLightbox] = useState<{ image: string; name: string; desc: string } | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Header */}
        <section className="mx-auto max-w-6xl w-full px-5 pt-16 pb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            What we offer
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4">
            Our Facilities
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            Everything you need for comfortable living.
          </p>
          <div className="mt-6 mx-auto h-px w-16 bg-foreground/30" />
        </section>

        {/* Grid */}
        <section className="mx-auto max-w-6xl w-full px-5 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {facilities.map((f, i) => (
              <article
                key={f.name}
                className="group relative rounded-3xl overflow-hidden bg-card border border-border/60 shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5"
                style={{ animation: `hero-fade 0.6s ease-out ${i * 0.05}s both` }}
              >
                <button
                  type="button"
                  onClick={() => setLightbox(f)}
                  className="block w-full aspect-[4/3] overflow-hidden bg-muted cursor-zoom-in"
                  aria-label={`View ${f.name} fullscreen`}
                >
                  <img
                    src={f.image}
                    alt={f.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </button>
                <div className="p-6 text-center">
                  <h3 className="font-display font-semibold text-xl sm:text-2xl tracking-tight">
                    {f.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
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
            <img src={lightbox.image} alt={lightbox.name} className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-float" />
            <figcaption className="text-white/90 text-sm font-medium text-center">
              <div className="font-display font-semibold text-lg">{lightbox.name}</div>
              <div className="text-white/70 text-xs mt-1">{lightbox.desc}</div>
            </figcaption>
          </figure>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
