import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MapPin, ShoppingBasket, Store, Cross, Bus, Utensils, Coffee, Banknote, GraduationCap, Hospital, Pill, Dumbbell } from "lucide-react";

export const Route = createFileRoute("/nearby")({
  component: NearbyPage,
  head: () => ({
    meta: [
      { title: "Nearby — OM SAI Luxury Ladies PG" },
      { name: "description", content: "Explore shops, medical stores, ATMs and essentials near OM SAI Luxury Ladies PG, Yelahanka." },
      { property: "og:title", content: "Nearby — OM SAI Luxury Ladies PG" },
      { property: "og:description", content: "Everything essential is just minutes away." },
    ],
  }),
});

const places = [
  { name: "Village Mart", type: "Supermarket", distance: "2 min walk", icon: ShoppingBasket },
  { name: "Mini Mart", type: "Daily Essentials", distance: "1 min walk", icon: Store },
  { name: "Medical Store", type: "Pharmacy", distance: "3 min walk", icon: Pill },
  { name: "Apollo Clinic", type: "Hospital / Clinic", distance: "5 min drive", icon: Hospital },
  { name: "ATM (SBI / HDFC)", type: "Banking", distance: "4 min walk", icon: Banknote },
  { name: "Bus Stop — Yelahanka", type: "Public Transport", distance: "5 min walk", icon: Bus },
  { name: "Tiffin & Restaurants", type: "Food Outlets", distance: "2 min walk", icon: Utensils },
  { name: "Cafés & Bakery", type: "Snacks & Coffee", distance: "5 min walk", icon: Coffee },
  { name: "Reva University", type: "Educational Institute", distance: "10 min drive", icon: GraduationCap },
  { name: "Cult Fitness / Gym", type: "Fitness Centre", distance: "7 min walk", icon: Dumbbell },
  { name: "Cross Pharmacy", type: "24x7 Medical", distance: "6 min walk", icon: Cross },
];

function NearbyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl w-full px-5 pt-16 pb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Around the PG
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4">
            Nearby
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            Shops, medical stores, transport and essentials — all within a short walk of OM SAI Luxury Ladies PG, Yelahanka.
          </p>
          <div className="mt-6 mx-auto h-px w-16 bg-foreground/30" />
        </section>

        <section className="mx-auto max-w-6xl w-full px-5 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {places.map((p, i) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.name}
                  className="group relative rounded-2xl bg-card border border-border/60 p-5 shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                  style={{ animation: `hero-fade 0.5s ease-out ${i * 0.05}s both` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary grid place-items-center shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-lg tracking-tight">
                        {p.name}
                      </h3>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mt-0.5">
                        {p.type}
                      </p>
                      <div className="mt-2 inline-flex items-center gap-1.5 text-sm text-foreground/80">
                        <MapPin className="h-3.5 w-3.5 text-primary" />
                        {p.distance}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Om+Sai+Luxury+Ladies+PG+Yelahanka+Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
            >
              <MapPin className="h-4 w-4" />
              View Location on Google Maps
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
