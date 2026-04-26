import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

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
      </main>
      <SiteFooter />
    </div>
  );
}
