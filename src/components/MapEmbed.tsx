type MapItem = { label: string; embedSrc: string; address: string; fallbackUrl?: string };

const OM_SAI_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.42707869701!2d77.57219789999999!3d13.135439199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1900036550a9%3A0xb6a1655f92ddcdb8!2sOm%20Sai%20Luxury%20Ladies%20PG!5e0!3m2!1sen!2sin!4v1777381627491!5m2!1sen!2sin";

const DEFAULT_MAPS: MapItem[] = [
  {
    label: "OM SAI PG",
    embedSrc: OM_SAI_EMBED,
    address: "Om Sai Luxury Ladies PG, Bengaluru, Karnataka 560119",
    fallbackUrl: "https://www.google.com/maps/place/Om+Sai+Luxury+Ladies+PG",
  },
];

export function MapEmbed({
  className = "",
  items = DEFAULT_MAPS,
  heading = "Our location",
  intro = "Find us on the map below.",
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
        <div className={`grid gap-6 ${items.length > 1 ? "md:grid-cols-3" : ""}`}>
          {items.map((m) => (
            <SingleMap key={m.label} item={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SingleMap({ item }: { item: MapItem }) {
  const fallback =
    item.fallbackUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address)}`;
  return (
    <div className="rounded-2xl overflow-hidden shadow-card border border-border bg-card">
      <div className="px-4 py-3 border-b border-border">
        <div className="font-display font-bold text-lg leading-tight">{item.label}</div>
        <div className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{item.address}</div>
      </div>
      <iframe
        title={`${item.label} location`}
        src={item.embedSrc}
        width="100%"
        height={350}
        style={{ border: 0, display: "block", width: "100%" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="p-3 border-t border-border">
        <a
          href={fallback}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition"
        >
          View Location on Google Maps
        </a>
      </div>
    </div>
  );
}
