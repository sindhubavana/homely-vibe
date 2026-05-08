import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import snackImg from "@/assets/facility-induction-stove.png";
import pantryImg from "@/assets/facility-ro-water.png";
import healthImg from "@/assets/facility-fire-extinguisher.png";
import bankImg from "@/assets/block-a-entrance.jpg";

export const Route = createFileRoute("/hcu")({
  head: () => ({
    meta: [
      { title: "Residential Hostels — HCU" },
      { name: "description", content: "HCU residential hostels offer a safe, comfortable and academically supportive living environment with modern amenities." },
      { property: "og:title", content: "Residential Hostels — HCU" },
      { property: "og:description", content: "Hostel facilities, regulations and administration at HCU." },
    ],
  }),
  component: HCUPage,
});

const navLinks = [
  "Home",
  "Forms",
  "Facilities",
  "Administration",
  "Staff",
  "Gallery",
  "Regulations",
  "Complaints",
];

const facilities = [
  { title: "Snack Corner", image: snackImg },
  { title: "Shared Pantry", image: pantryImg },
  { title: "Health Center", image: healthImg },
  { title: "Banking Services", image: bankImg },
];

const accommodationRules = [
  "All visitors entering hostel premises must register at the security desk.",
  "Students are not allowed to keep unauthorized guests inside hostel rooms.",
  "Overnight stay for visitors requires prior approval from hostel authorities.",
  "Residents are responsible for safeguarding their personal belongings.",
  "Religious gatherings inside rooms are not permitted.",
  "Shared reading materials must remain in common areas.",
  "Hostel property and furniture should be handled responsibly.",
  "Students should use electricity and water carefully to avoid wastage.",
];

function HCUPage() {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <div className="min-h-screen bg-white text-[#333] hcu-root">
      <style>{`
        .hcu-root { font-family: Georgia, 'Times New Roman', serif; }
        .hcu-sans { font-family: Arial, Helvetica, sans-serif; }
        .hcu-blue { color: #1a4b8c; }
      `}</style>

      {/* Top dark teal strip */}
      <div className="h-2 w-full bg-[#0e3a4a]" />

      {/* Navbar */}
      <header className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <div className="h-11 w-11 rounded-full border-2 border-[#1a4b8c] grid place-items-center">
              <span className="text-[#1a4b8c] font-bold text-lg" style={{ fontFamily: "Georgia, serif" }}>H</span>
            </div>
            <span className="text-2xl font-semibold tracking-wide text-[#1a4b8c]">HCU</span>
          </a>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-6 ml-6 text-[15px] text-[#333]">
            {navLinks.map((l) => (
              <a key={l} href="#" className="hover:text-[#1a4b8c] transition-colors">
                {l}
              </a>
            ))}
            <a href="#" className="hover:text-[#1a4b8c] transition-colors flex items-center gap-1">
              Contact
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 9 6 6 6-6"/></svg>
            </a>
          </nav>

          {/* Search icon right */}
          <button aria-label="Search" className="ml-auto p-2 text-[#333] hover:text-[#1a4b8c] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Slider dots below navbar */}
      <div className="flex justify-center gap-2 py-4 border-b border-gray-100">
        {[0, 1, 2, 3].map((i) => (
          <button
            key={i}
            onClick={() => setActiveDot(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-colors ${activeDot === i ? "bg-[#1a4b8c]" : "bg-gray-300"}`}
          />
        ))}
      </div>

      {/* Hero / Introduction */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-normal text-[#1a4b8c] mb-10 tracking-tight">
          Residential Hostels
        </h1>
        <div className="space-y-6 text-[15px] leading-7 text-[#444] hcu-sans max-w-4xl">
          <p>
            Our residential hostels are designed to provide students with a safe, comfortable, and academically
            supportive living environment. Each hostel block includes modern amenities, proper ventilation,
            internet connectivity, and access to essential facilities.
          </p>
          <p>
            Hostel life encourages independence, discipline, collaboration, and meaningful friendships through an
            engaging campus atmosphere and year-round student activities.
          </p>
          <p>
            The campus consists of multiple hostel blocks with well-furnished rooms equipped with study tables,
            beds, storage units, and cooling facilities. Selected blocks also include shared accommodation options
            for students.
          </p>
        </div>
      </section>

      {/* Facilities Section — 2 column image grid */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
          {facilities.map((f) => (
            <figure key={f.title} className="flex flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden border border-gray-200 bg-gray-50">
                <img src={f.image} alt={f.title} className="h-full w-full object-cover" />
              </div>
              <figcaption className="mt-4 text-center text-[17px] text-[#1a4b8c]">
                {f.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Rules Section */}
      <section className="mx-auto max-w-4xl px-6 py-16 border-t border-gray-200">
        <h2 className="text-center text-3xl md:text-4xl font-normal text-[#1a4b8c] tracking-[0.15em] mb-10">
          ACCOMMODATION
        </h2>
        <ul className="space-y-4 text-[15px] leading-7 text-[#444] hcu-sans list-disc pl-6">
          {accommodationRules.map((rule, i) => (
            <li key={i}>{rule}</li>
          ))}
        </ul>
      </section>

      {/* Footer thin strip */}
      <div className="h-2 w-full bg-[#0e3a4a] mt-8" />
    </div>
  );
}
