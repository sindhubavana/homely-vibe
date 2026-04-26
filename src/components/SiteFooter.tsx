export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-10 grid sm:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-9 w-9 rounded-2xl bg-primary text-primary-foreground grid place-items-center font-display font-bold">ॐ</div>
            <div className="font-display font-bold">OM SAI Luxury Ladies PG</div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">Simple. Comfortable. Reliable. A safe space for working women and students in Yelahanka.</p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Visit</div>
          <p className="text-sm leading-relaxed">Sri Saila Nilaya,<br/>opp. Sriram Sahana Apartment,<br/>Avalahalli, Yelahanka,<br/>Bangalore — 560064</p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Call</div>
          <ul className="text-sm space-y-1">
            <li><a className="hover:text-primary" href="tel:+919449510381">+91 94495 10381</a></li>
            <li><a className="hover:text-primary" href="tel:+919482052116">+91 94820 52116</a></li>
            <li><a className="hover:text-primary" href="tel:+916363473962">+91 63634 73962</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} OM SAI Luxury Ladies PG · Designed for everyday living.</div>
    </footer>
  );
}
