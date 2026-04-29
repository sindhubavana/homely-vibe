import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import hero1 from "@/assets/hero-real-1.png";

export const Route = createFileRoute("/overview")({
  head: () => ({
    meta: [
      { title: "Overview — OM SAI PG, Yelahanka" },
      {
        name: "description",
        content:
          "OM SAI PG, Yelahanka — a well-maintained girls' hostel near BMSIT offering a clean, secure and convenient stay for students and working women.",
      },
      { property: "og:title", content: "Overview — OM SAI PG, Yelahanka" },
      {
        property: "og:description",
        content:
          "Comfortable, secure girls' hostel near BMSIT in Yelahanka with easy access to colleges, markets and daily essentials.",
      },
      { property: "og:image", content: hero1 },
    ],
  }),
  component: OverviewPage,
});

function OverviewPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero banner */}
        <section className="relative h-[40svh] min-h-[280px] w-full overflow-hidden bg-black">
          <img
            src={hero1}
            alt="OM SAI PG building"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
            <p className="text-white/80 text-xs sm:text-sm tracking-[0.35em] uppercase mb-3">
              Overview
            </p>
            <h1 className="font-display font-bold uppercase tracking-tight text-white text-3xl sm:text-5xl lg:text-6xl">
              OM SAI PG, Yelahanka
            </h1>
            <div className="mx-auto mt-5 h-px w-20 bg-white/60" />
          </div>
        </section>

        {/* Body */}
        <section className="py-14 sm:py-20 grain">
          <div className="mx-auto max-w-3xl px-5">
            <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
              OM SAI PG, Yelahanka is a well-maintained girls' hostel located
              near BMSIT, offering a comfortable and convenient stay for
              students and working women. With its prime location, residents
              have easy access to colleges, markets, and daily essentials.
            </p>
            <p className="mt-5 text-base sm:text-lg text-foreground/85 leading-relaxed">
              The PG provides a clean, organized, and secure environment that
              supports a focused and hassle-free lifestyle. It is an ideal
              choice for those looking for reliable accommodation in Yelahanka.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
