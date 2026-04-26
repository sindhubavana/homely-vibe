import { useState } from "react";
import { amenities, type Amenity } from "@/data/amenities";

export function AmenitiesSection() {
  const [active, setActive] = useState<Amenity | null>(null);

  return (
    <section id="amenities" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-2">Inside the PG</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-balance">Everything you need, taken care of</h2>
          </div>
          <div className="hidden sm:block text-sm text-muted-foreground">Tap to view →</div>
        </div>

        <div className="-mx-5 px-5 overflow-x-auto no-scrollbar">
          <div className="flex gap-3 sm:grid sm:grid-cols-5 sm:gap-4">
            {amenities.map((a, i) => (
              <button
                key={a.id}
                onClick={() => setActive(a)}
                className="group relative shrink-0 w-32 sm:w-auto aspect-[3/4] rounded-3xl overflow-hidden bg-muted shadow-soft hover:shadow-card transition-all hover:-translate-y-0.5 animate-float-up"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <img src={a.image} alt={a.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute top-2.5 left-2.5 h-8 w-8 rounded-full bg-background/90 backdrop-blur grid place-items-center text-base">
                  {a.emoji}
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <div className="text-white font-semibold text-sm leading-tight drop-shadow">{a.name}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm grid place-items-center p-4 animate-pop-in"
          onClick={() => setActive(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl rounded-3xl overflow-hidden bg-card shadow-float"
          >
            <img src={active.image} alt={active.name} className="w-full aspect-square sm:aspect-video object-cover" />
            <button
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 h-9 w-9 rounded-full bg-background/90 grid place-items-center hover:scale-105 transition-transform"
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
            <div className="px-5 py-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-muted grid place-items-center text-lg">{active.emoji}</div>
              <div>
                <div className="font-display font-bold text-lg leading-tight">{active.name}</div>
                <div className="text-xs text-muted-foreground">Available across all blocks</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
