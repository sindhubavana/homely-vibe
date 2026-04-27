type MapItem = { label: string; query: string; address: string };

const DEFAULT_MAPS: MapItem[] = [
  {
    label: "Block A",
    query: "Sri Saila Nilaya Avalahalli Yelahanka Bangalore 560064",
    address: "Sri Saila Nilaya, Avalahalli, Yelahanka, Bangalore — 560064",
  },
  {
    label: "Block B",
    query: "Sri Shyla Nilaya Yelahanka Bangalore",
    address: "Sri Shyla Nilaya, Yelahanka, Bangalore",
  },
  {
    label: "Block C",
    query: "Vista 44 Yelahanka Bangalore",
    address: "Vista #44, Yelahanka, Bangalore",
  },
];

export function MapEmbed({
  className = "",
  items = DEFAULT_MAPS,
  heading = "Our locations",
  intro = "Find each block on the map below.",
}: {
  className?: string;
  items?: MapItem[];
  heading?: string;
  intro?: string;
}) {
  return (
    <section className={`py-14 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-2">Find us</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">{heading}</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-md">{intro}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((m) => (
            <SingleMap key={m.label} item={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SingleMap({ item }: { item: MapItem }) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(item.query)}&output=embed`;
  return (
    <div className="rounded-2xl overflow-hidden shadow-card border border-border bg-card">
      <div className="px-4 py-3 border-b border-border">
        <div className="font-display font-bold text-lg leading-tight">{item.label}</div>
        <div className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{item.address}</div>
      </div>
      <iframe
        title={`${item.label} location`}
        src={src}
        width="100%"
        height="300"
        style={{ border: 0, display: "block", width: "100%" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
