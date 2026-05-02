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
        {/* Hero with building background */}
        <section className="relative h-[340px] sm:h-[420px] overflow-hidden">
          <img
            src={heroBuilding}
            alt="OM SAI PG building"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-5">
            <h1 className="font-display font-bold text-white text-3xl sm:text-5xl lg:text-6xl tracking-tight drop-shadow-lg">
              Rules &amp; Regulations of Hostel
            </h1>
            <p className="mt-4 text-white/90 text-lg sm:text-2xl font-display">
              OM SAI Luxury Ladies PG, Yelahanka
            </p>
          </div>
        </section>

        {/* Document-style content */}
        <section className="bg-background">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 py-14">
            <div className="bg-card border border-border rounded-lg shadow-card p-6 sm:p-12">
              <header className="text-center border-b border-border pb-6 mb-8">
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
                  OM SAI Luxury Ladies PG
                </h2>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                  Yelahanka, Bengaluru &middot; Phone: +91 94495 10381
                </p>
                <p className="mt-1 text-sm text-muted-foreground italic">
                  Rules and Regulations for Residents
                </p>
              </header>

              <div className="space-y-8">
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-primary uppercase tracking-wide mb-4">
                    General
                  </h3>
                  <ul className="space-y-3 list-disc pl-6 marker:text-primary text-foreground/85 leading-relaxed">
                    {rules.map((r) => (
                      <li key={r.title}>
                        <span className="font-semibold text-foreground">{r.title}.</span>{" "}
                        {r.body}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-l-4 border-primary/60 bg-primary/5 p-5 rounded-r-md">
                  <p className="text-sm sm:text-[15px] text-foreground/85 leading-relaxed">
                    <span className="font-semibold text-foreground">A note from the warden — </span>
                    if anything ever feels unclear or uncomfortable, please come talk to us.
                    We'd much rather hear it directly than leave you wondering.
                  </p>
                </div>
              </div>

              {/* Notice board */}
              <div className="mt-12 pt-10 border-t border-border">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-primary uppercase tracking-wide text-center mb-6">
                  Official Notices
                </h3>

                <div className="relative">
                  <figure className="rounded-md overflow-hidden border border-border bg-muted/30">
                    <img
                      key={current.src}
                      src={current.src}
                      alt={current.alt}
                      loading="lazy"
                      className="w-full h-auto object-contain animate-pop-in"
                    />
                    <figcaption className="p-4 text-sm text-muted-foreground text-center border-t border-border">
                      {current.caption}
                    </figcaption>
                  </figure>

                  <button
                    onClick={prev}
                    aria-label="Previous notice"
                    className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-foreground/70 text-background grid place-items-center hover:bg-foreground transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next notice"
                    className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-foreground/70 text-background grid place-items-center hover:bg-foreground transition-colors"
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
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

