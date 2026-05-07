import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroBuilding from "@/assets/rules-hero-building.jpg";

export const Route = createFileRoute("/rules")({
  component: RulesPage,
  head: () => ({
    meta: [
      { title: "Rules & Regulations — OM SAI Luxury Ladies PG" },
      { name: "description", content: "Hostel timings, food timings and house rules at OM SAI Luxury Ladies PG, Yelahanka." },
    ],
  }),
});

const hostelTimings = [
  { label: "Closes at", value: "07:30 PM" },
  { label: "Opens at", value: "06:00 AM" },
];

const foodTimings = [
  { label: "Breakfast", value: "07:30 AM to 08:30 AM" },
  { label: "Lunch", value: "12:30 PM to 01:30 PM" },
  { label: "Snacks", value: "05:00 PM to 05:30 PM" },
  { label: "Dinner", value: "07:30 PM to 09:00 PM" },
];

const generalRules = [
  "All the residents must be aware of the present rules and regulations of the hostels and obey very strictly. If residents are found violating any of these hostel rules, you may be rusticated from the hostel without any further excuse.",
  "Residents should respect all the Hostel/Mess staff, Security Personnel, Housekeeping staff & others.",
  "Residents should not indulge / participate in / abet / propagate through any act that may be constituted as ragging of any form, on & off the hostel premises.",
  "Residents should obey the hostel gate closing time and should be in the hostel by 7:30 PM to 6:00 AM next day.",
  "Residents going on leave must inform & take prior written permission from the warden & also enter details in the register.",
  "Residents should not consume alcohol / intoxicated drugs / prohibited items in & out of the hostel premises.",
  "Residents should not indulge in gambling / keeping of any drugs / weapons in the hostel premises.",
  "Residents should not involve in celebrating birthday parties of any hostel inmates in the hostel premises.",
  "Residents should not use or possess any inflammables / explosives (including crackers) inside the hostel premises.",
  "Residents should be present to give the attendance daily when the security brings the register after the closure of the main gate.",
  "Residents should attend to all classes, labs / workshops, and other college activities on time & maintain the required attendance without any shortage of attendance.",
  "Residents should not indulge in any verbal / written / physical abuse towards other students / staff.",
  "Residents should not damage / misuse / steal any equipment or material in the hostel premises.",
  "Residents should not involve in any threatening / intimidation / acts of violence and attack and any kind of immoral activity.",
  "Residents should not involve in any malpractice / proxy / impersonation in attendance / tests / exams.",
  "Residents should not indulge in misuse of mobile phones, laptops & other gadgets.",
  "Residents should not involve in any behaviour which brings the college & hostels into disrepute / spreading harmful rumors.",
  "Follow the Rules & Regulations as mentioned in the rule book in the interest of college / hostels and all the hostel inmates.",
];

function RulesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[340px] sm:h-[420px] overflow-hidden">
          <img src={heroBuilding} alt="OM SAI PG building" className="absolute inset-0 w-full h-full object-cover" />
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

        {/* Document content */}
        <section className="bg-background">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 py-14">
            <div className="bg-card border border-border rounded-lg shadow-card p-6 sm:p-12">
              <header className="text-center border-b border-border pb-6 mb-10">
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
                  OM SAI Luxury Girls PG
                </h2>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                  BMS Institute of Technology &amp; Management
                </p>
                <p className="mt-1 text-sm text-muted-foreground italic">
                  Yelahanka, Bengaluru &middot; Phone: +91 94495 10381
                </p>
              </header>

              <div className="space-y-12">
                {/* Hostel Timings */}
                <section>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-primary uppercase tracking-wide mb-5">
                    Hostel Timings
                  </h3>
                  <div className="overflow-hidden rounded-md border border-border">
                    <table className="w-full text-left">
                      <tbody>
                        {hostelTimings.map((t, i) => (
                          <tr key={t.label} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                            <th className="px-5 py-3 font-semibold text-foreground w-1/2">{t.label}</th>
                            <td className="px-5 py-3 text-foreground/85">{t.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Food Timings */}
                <section>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-primary uppercase tracking-wide mb-5">
                    Food Timings
                  </h3>
                  <div className="overflow-hidden rounded-md border border-border">
                    <table className="w-full text-left">
                      <tbody>
                        {foodTimings.map((t, i) => (
                          <tr key={t.label} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                            <th className="px-5 py-3 font-semibold text-foreground w-1/2">{t.label}</th>
                            <td className="px-5 py-3 text-foreground/85">{t.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* General Rules */}
                <section>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-primary uppercase tracking-wide mb-5">
                    General Rules &amp; Regulations
                  </h3>
                  <ol className="space-y-3 list-decimal pl-6 marker:text-primary marker:font-semibold text-foreground/85 leading-relaxed">
                    {generalRules.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ol>
                </section>

                <div className="border-l-4 border-primary/60 bg-primary/5 p-5 rounded-r-md">
                  <p className="text-sm sm:text-[15px] text-foreground/85 leading-relaxed">
                    <span className="font-semibold text-foreground">A note from the warden — </span>
                    if anything ever feels unclear or uncomfortable, please come talk to us.
                    We'd much rather hear it directly than leave you wondering.
                  </p>
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
