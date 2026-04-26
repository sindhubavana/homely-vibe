import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Chatbot } from "@/components/Chatbot";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { InfoCards } from "@/components/InfoCards";
import { blocks } from "@/data/blocks";
import hero1 from "@/assets/hero-building.jpg";
import hero2 from "@/assets/hero-building-2.jpg";
import hero3 from "@/assets/hero-building-3.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const heroSlides = [hero1, hero2, hero3];

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
            Welcome to Yelahanka
          </p>
          <h1 className="font-display font-bold uppercase tracking-tight text-white text-[2.6rem] leading-[0.95] sm:text-7xl lg:text-8xl animate-hero-fade" style={{ animationDelay: "250ms" }}>
            Luxury PG Facilities
            <span className="block mt-2 sm:mt-3">
              At <span className="text-clay italic font-display">OM SAI PG</span>
            </span>
          </h1>

          <div className="mx-auto my-7 sm:my-9 h-px w-24 sm:w-32 bg-white/60 animate-hero-fade" style={{ animationDelay: "450ms" }} />

          <p className="text-white/90 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed animate-hero-fade" style={{ animationDelay: "600ms" }}>
            A comfortable, secure & student-friendly living experience.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 animate-hero-fade" style={{ animationDelay: "800ms" }}>
            <a
              href="#blocks"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-clay hover:text-white transition-colors"
            >
              Explore Blocks
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a
              href="tel:+919449510381"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition-colors backdrop-blur"
            >
              Book a visit
            </a>
          </div>
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
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-2">Pick a home</p>
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
                    <p className="text-sm opacity-90 mt-1.5 line-clamp-2">{b.description}</p>
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

        <AmenitiesSection />
        <InfoCards />
      </main>
      <SiteFooter />
      <Chatbot />
    </div>
  );
}
