import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, Moon, Sparkles, UtensilsCrossed, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import rulesBoard from "@/assets/rules-board.png";
import rulesTimings from "@/assets/rules-timings.png";
import heroBuilding from "@/assets/hero-building.jpg";

const notices = [
  { src: rulesBoard, alt: "Hostel rules and regulations notice", caption: "Hostel Rules & Regulations" },
  { src: rulesTimings, alt: "Hostel gate and mess timings", caption: "Gate & Mess Timings" },
];

export const Route = createFileRoute("/rules")({
  component: RulesPage,
  head: () => ({
    meta: [
      { title: "Rules & Regulations — OM SAI Luxury Ladies PG" },
      { name: "description", content: "House rules and regulations to keep OM SAI PG safe, comfortable and respectful for everyone." },
    ],
  }),
});

const rules = [
  { icon: Clock, title: "Entry & timings", body: "Main gate closes at 7:30 PM. Late entries with prior intimation only." },
  { icon: Users, title: "Visitors", body: "Guests are welcome in the common visiting area, between 10 AM and 7 PM." },
  { icon: Moon, title: "Quiet hours", body: "Please keep noise low between 10 PM and 7 AM out of respect for everyone." },
  { icon: Sparkles, title: "Cleanliness", body: "Keep your room and shared spaces tidy. Housekeeping covers common areas daily." },
  { icon: UtensilsCrossed, title: "Food & kitchen", body: "Meals are served in the dining hall. Cooking inside rooms is not permitted." },
  { icon: ShieldCheck, title: "Safety", body: "CCTV is active 24×7. Please carry your ID and report any concerns to the warden." },
];

function RulesPage() {
  const [index, setIndex] = useState(0);
  const current = notices[index];
  const prev = () => setIndex((i) => (i - 1 + notices.length) % notices.length);
  const next = () => setIndex((i) => (i + 1) % notices.length);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background pointer-events-none" />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="relative mx-auto max-w-5xl px-5 pt-16 pb-12">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary mb-4">
              <span className="h-px w-8 bg-primary/60" />
              House guide
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-5">
              A few simple rules,<br />
              <span className="italic font-normal text-primary">a lot of comfort.</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
              Think of these less as rules and more as little promises we make to each other —
              so OM SAI stays safe, calm and feels like home.
            </p>
          </div>
        </section>

        {/* Rules grid */}
        <section className="mx-auto max-w-5xl w-full px-5 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rules.map((r, i) => {
              const Icon = r.icon;
              return (
                <article
                  key={r.title}
                  className="group relative rounded-2xl bg-card border border-border/70 p-6 hover:border-primary/40 hover:shadow-soft transition-all duration-300"
                >
                  <div className="absolute top-5 right-5 text-[11px] font-mono text-muted-foreground/50 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary grid place-items-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-semibold text-lg tracking-tight mb-1.5">
                    {r.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.body}</p>
                </article>
              );
            })}
          </div>

          {/* Hand-written aside */}
          <div className="mt-10 rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-5 sm:p-6 flex items-start gap-4">
            <div className="h-10 w-10 rounded-full bg-primary/15 text-primary grid place-items-center shrink-0 font-display font-bold">
              !
            </div>
            <p className="text-sm sm:text-[15px] text-foreground/80 leading-relaxed">
              <span className="font-semibold text-foreground">A note from the warden — </span>
              if anything ever feels unclear or uncomfortable, please come talk to us.
              We'd much rather hear it directly than leave you wondering.
            </p>
          </div>
        </section>

        {/* Notices */}
        <section className="border-t border-border/60 bg-muted/30">
          <div className="mx-auto max-w-3xl px-5 py-14">
            <div className="text-center mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary mb-2">From our notice board</p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight">Official notices</h2>
            </div>

            <div className="relative">
              <figure className="rounded-3xl overflow-hidden border border-border bg-card shadow-soft">
                <img
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  loading="lazy"
                  className="w-full h-auto object-contain animate-pop-in"
                />
                <figcaption className="p-4 text-sm text-muted-foreground text-center border-t border-border/60">
                  {current.caption}
                </figcaption>
              </figure>

              <button
                onClick={prev}
                aria-label="Previous notice"
                className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-background border border-border shadow-card grid place-items-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next notice"
                className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-background border border-border shadow-card grid place-items-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-5">
              {notices.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Show notice ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-primary" : "w-2 bg-border"}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
