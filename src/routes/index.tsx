import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Chatbot } from "@/components/Chatbot";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { InfoCards } from "@/components/InfoCards";
import { blocks } from "@/data/blocks";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col grain">
      <SiteHeader />
      <main className="flex-1">
        {/* Welcome */}
        <section className="pt-10 sm:pt-16 pb-8">
          <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-xs font-medium mb-5 animate-float-up">
                <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                Now welcoming new residents
              </div>
              <h1 className="font-display font-bold text-[44px] sm:text-6xl leading-[1.02] tracking-tight text-balance animate-float-up" style={{ animationDelay: "60ms" }}>
                A calm place to <span className="text-primary italic">live, study</span> & belong.
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-md leading-relaxed animate-float-up" style={{ animationDelay: "120ms" }}>
                Simple. Comfortable. Reliable. <br className="hidden sm:block" />Designed for everyday living.
              </p>
              <div className="mt-7 flex flex-wrap gap-3 animate-float-up" style={{ animationDelay: "180ms" }}>
                <a href="#blocks" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity">
                  Explore blocks
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </a>
                <a href="#amenities" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border font-medium text-sm hover:bg-muted transition-colors">
                  See amenities
                </a>
              </div>

              <div className="mt-10 flex items-center gap-6 animate-float-up" style={{ animationDelay: "260ms" }}>
                <div>
                  <div className="font-display font-bold text-2xl">3</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Blocks</div>
                </div>
                <div className="h-8 w-px bg-border" />
                <div>
                  <div className="font-display font-bold text-2xl">10+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Amenities</div>
                </div>
                <div className="h-8 w-px bg-border" />
                <div>
                  <div className="font-display font-bold text-2xl">24×7</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Security</div>
                </div>
              </div>
            </div>

            {/* Branding visual */}
            <div className="order-1 lg:order-2 relative animate-pop-in">
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-card bg-gradient-to-br from-primary/85 to-clay">
                <div className="absolute inset-0 grain opacity-40" />
                <div className="absolute inset-0 flex flex-col justify-between p-7 text-primary-foreground">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-2xl bg-primary-foreground/20 backdrop-blur grid place-items-center font-display font-bold text-xl">ॐ</div>
                      <div className="text-[11px] uppercase tracking-[0.2em] opacity-80">Est. Yelahanka</div>
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.2em] opacity-80">№ 01</div>
                  </div>
                  <div>
                    <div className="font-display font-bold text-5xl sm:text-6xl leading-[0.95] tracking-tight">OM<br/>SAI</div>
                    <div className="mt-3 text-sm uppercase tracking-[0.25em] opacity-90">Luxury Ladies PG</div>
                    <div className="mt-6 flex items-center gap-3 text-xs">
                      <div className="h-px w-10 bg-primary-foreground/60" />
                      <span className="opacity-80">A second home, made simple.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-3xl bg-sage shadow-card grid place-items-center text-2xl">🌿</div>
              <div className="absolute -top-3 -right-3 px-3 py-2 rounded-2xl bg-card shadow-card text-xs font-semibold flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                10 rooms available
              </div>
            </div>
          </div>
        </section>

        {/* Blocks */}
        <section id="blocks" className="py-12 sm:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="flex items-end justify-between mb-7">
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
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
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
