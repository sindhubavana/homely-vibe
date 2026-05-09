import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — OM SAI Luxury Ladies PG" },
      { name: "description", content: "Get in touch with OM SAI Luxury Ladies PG in Yelahanka, Bangalore. Call, visit or book a room today." },
    ],
  }),
});

const hostelOwners = [
  { label: "Sanjay", number: "+91 63634 73962" },
  { label: "Raghu", number: "+91 88616 60259" },
];

const facultyCoordinator = [
  { label: "Harika", number: "+91 99163 77391" },
];

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-5xl w-full px-5 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Get in touch</p>
        <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-4">Contact Us</h1>
        <p className="text-muted-foreground text-lg max-w-xl mb-10">We'd love to show you around. Drop by, call us, or message — we'll help you find a room that feels like home.</p>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Visit us</div>
            <p className="text-base leading-relaxed">
              Sri Saila Nilaya,<br />
              opp. Sriram Sahana Apartment,<br />
              Avalahalli, Yelahanka,<br />
              Bangalore — 560064
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Call us</div>
            <ul className="space-y-2.5">
              {phones.map((p) => (
                <li key={p.number} className="flex items-center justify-between gap-3">
                  <span className="text-sm text-muted-foreground">{p.label}</span>
                  <a className="font-medium hover:text-primary transition-colors" href={`tel:${p.number.replace(/\s/g, "")}`}>{p.number}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
