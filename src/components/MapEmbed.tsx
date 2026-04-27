export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <section className={`py-14 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-2">Find us</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold">Our location</h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-md">
              Sri Saila Nilaya, opp. Sriram Sahana Apartment, Avalahalli, Yelahanka, Bangalore — 560064
            </p>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-card border border-border aspect-[16/9] bg-muted">
          <iframe
            title="OM SAI PG location"
            src="https://www.google.com/maps?q=Avalahalli+Yelahanka+Bangalore+560064&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
