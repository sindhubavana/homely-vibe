import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MapEmbed } from "@/components/MapEmbed";
import { blocks } from "@/data/blocks";
import hero1 from "@/assets/hero-real-1.png";
import hero2 from "@/assets/hero-real-2.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const heroSlides = [hero1, hero2];

function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % heroSlides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const go = (dir: -1 | 1) =>
    setActive((i) => (i + dir + heroSlides.length) % heroSlides.length);

  return (
    <section className="relative h-[calc(100svh-4rem)] min-h-[560px] w-full overflow-hidden bg-black">
      {/* Slides */}
      {heroSlides.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== active}
        >
          <img
            src={src}
            alt="OM SAI PG building"
            className={`h-full w-full object-cover ${
              i === active ? "animate-hero-zoom" : ""
            }`}
            {...(i === 0 ? { fetchPriority: "high" as const } : { loading: "lazy" as const })}
          />
        </div>
      ))}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* Centered content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
        <div className="max-w-4xl">
          <p className="text-white/80 text-xs sm:text-sm tracking-[0.35em] uppercase font-medium mb-5 animate-hero-fade" style={{ animationDelay: "100ms" }}>
            Welcome to
          </p>
          <h1 className="font-display font-bold uppercase tracking-tight text-white text-[2.4rem] leading-[0.95] sm:text-6xl lg:text-7xl animate-hero-fade" style={{ animationDelay: "250ms" }}>
            <span className="block">BMSIT Hostels</span>
            <span className="block mt-2 sm:mt-3 text-clay italic font-display">OM SAI PG</span>
          </h1>

          <div className="mx-auto my-7 sm:my-9 h-px w-24 sm:w-32 bg-white/60 animate-hero-fade" style={{ animationDelay: "450ms" }} />
        </div>
      </div>

      {/* Slider arrows */}
      <button
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 grid h-11 w-11 sm:h-14 sm:w-14 place-items-center rounded-full border border-white/30 text-white bg-black/20 backdrop-blur hover:bg-white hover:text-black transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 grid h-11 w-11 sm:h-14 sm:w-14 place-items-center rounded-full border border-white/30 text-white bg-black/20 backdrop-blur hover:bg-white hover:text-black transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-8 bg-white" : "w-3 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />

        {/* Blocks */}
        <section id="blocks" className="py-14 sm:py-20 grain">
          <div className="mx-auto max-w-6xl px-5">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold">Our Blocks</h2>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-sage" /> Live availability
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {blocks.map((b, i) => (
                <Link
                  key={b.slug}
                  to="/blocks/$slug"
                  params={{ slug: b.slug }}
                  className="group relative aspect-[4/5] rounded-[1.75rem] overflow-hidden bg-muted shadow-soft hover:shadow-float transition-all hover:-translate-y-1 animate-float-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <img src={b.image} alt={b.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-background/90 backdrop-blur text-[11px] font-semibold uppercase tracking-wider">
                      {b.audience}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-sage/95 text-sage-foreground text-[11px] font-semibold flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-sage-foreground" />
                      {b.available} left
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <div className="text-[11px] uppercase tracking-[0.2em] opacity-80">{b.tag}</div>
                    <div className="font-display font-bold text-2xl mt-0.5">{b.name}</div>
                    <div className="mt-2 flex items-start gap-1.5 text-xs opacity-90">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      <span className="leading-snug line-clamp-2">{b.location}</span>
                    </div>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
                      View rooms
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <MapEmbed
          items={blocks.map((b) => ({ label: b.name, query: b.mapQuery, address: b.location }))}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
