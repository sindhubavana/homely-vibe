import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import rulesBoard from "@/assets/rules-board.png";
import rulesTimings from "@/assets/rules-timings.png";

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
  { title: "Entry & timings", body: "Main gate closes at 9:30 PM. Late entries with prior intimation only." },
  { title: "Visitors", body: "Guests are welcome in the common visiting area, between 10 AM and 7 PM." },
  { title: "Quiet hours", body: "Please keep noise low between 10 PM and 7 AM out of respect for everyone." },
  { title: "Cleanliness", body: "Keep your room and shared spaces tidy. Housekeeping covers common areas daily." },
  { title: "Food & kitchen", body: "Meals are served in the dining hall. Cooking inside rooms is not permitted." },
  { title: "Safety", body: "CCTV is active 24×7. Please carry your ID and report any concerns to the warden." },
  { title: "Payments", body: "Rent is due by the 5th of every month. Receipts are shared digitally." },
  { title: "Notice period", body: "A 30-day notice is required when vacating. Security deposit refunded after handover." },
];

function RulesPage() {
  const [index, setIndex] = useState(0);
  const current = notices[index];
  const prev = () => setIndex((i) => (i - 1 + notices.length) % notices.length);
  const next = () => setIndex((i) => (i + 1) % notices.length);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-4xl w-full px-5 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">House guide</p>
        <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-4">Rules & Regulations</h1>
        <p className="text-muted-foreground text-lg max-w-xl mb-10">Simple guidelines that help us keep OM SAI safe, calm and comfortable for everyone.</p>

        <div className="grid sm:grid-cols-2 gap-4">
          {rules.map((r, i) => (
            <div key={i} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-7 w-7 rounded-full bg-primary text-primary-foreground grid place-items-center font-display font-bold text-sm">{i + 1}</div>
                <h3 className="font-display font-bold text-lg">{r.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>

        <section className="mt-14">
          <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight mb-6 text-center">Official Notices</h2>
          <div className="relative max-w-2xl mx-auto">
            <figure className="rounded-3xl overflow-hidden border border-border bg-card shadow-soft">
              <img
                key={current.src}
                src={current.src}
                alt={current.alt}
                loading="lazy"
                className="w-full h-auto object-contain animate-pop-in"
              />
              <figcaption className="p-4 text-sm text-muted-foreground text-center">{current.caption}</figcaption>
            </figure>

            <button
              onClick={prev}
              aria-label="Previous notice"
              className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-background/95 border border-border shadow-card grid place-items-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next notice"
              className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-background/95 border border-border shadow-card grid place-items-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="flex justify-center gap-2 mt-4">
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
