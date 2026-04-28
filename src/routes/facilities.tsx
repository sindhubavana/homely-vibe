import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import power from "@/assets/facility-power.jpg";
import study from "@/assets/facility-study.jpg";
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
  { name: "Dining Area", image: dining, desc: "Spacious common dining for warm shared meals." },
  { name: "Cafeteria / Food Facility", image: food, desc: "Home-style breakfast, lunch and dinner served daily." },
  { name: "Washing Machine", image: washing, desc: "Modern washing machines available round the clock." },
  { name: "24×7 Hot Water", image: hotwater, desc: "Geyser-powered hot water in every bathroom, anytime." },
  { name: "Free WiFi", image: wifi, desc: "High-speed internet across all rooms and common areas." },
  { name: "Power Backup", image: power, desc: "Uninterrupted power for studies, work and comfort." },
  { name: "CCTV Security", image: cctv, desc: "24/7 surveillance covering all entrances and corridors." },
  { name: "Study Area", image: study, desc: "Quiet, well-lit study zones designed for focus." },
  { name: "Overhead Water Tanks", image: waterTank, desc: "Large rooftop tanks ensure 24/7 water supply." },
  { name: "Terrace Drying Area", image: terraceDrying, desc: "Open rooftop space for fresh-air clothes drying." },
  { name: "Premium Washing Machines", image: washingMachines, desc: "Fully automatic Samsung washers for everyday laundry." },
  { name: "High-Speed WiFi Router", image: wifiRouter, desc: "Dedicated fiber router delivering reliable internet." },
  { name: "Hot & Cold RO Water", image: roWater, desc: "Commercial RO plant with hot and cold drinking water." },
  { name: "CCTV Cameras", image: cctvCamera, desc: "HD surveillance cameras across every floor and corridor." },
  { name: "Fire Safety Equipment", image: fireExtinguisher, desc: "ISI-certified fire extinguishers on every floor." },
  { name: "Induction Cooktop", image: inductionStove, desc: "Prestige induction stove for safe, quick cooking." },
];

function FacilitiesPage() {
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
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={f.image}
                    alt={f.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
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
      <SiteFooter />
    </div>
  );
}
