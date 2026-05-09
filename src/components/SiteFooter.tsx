export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-10 grid sm:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-9 w-9 rounded-2xl bg-primary text-primary-foreground grid place-items-center font-display font-bold text-sm">OS</div>
            <div className="font-display font-bold">OM SAI Luxury Ladies PG</div>
          </div>
          
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Visit</div>
          <p className="text-sm leading-relaxed">Sri Saila Nilaya,<br/>opp. Sriram Sahana Apartment,<br/>Avalahalli, Yelahanka,<br/>Bangalore — 560064</p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Hostel Owners</div>
          <ul className="text-sm space-y-1 mb-4">
            <li>Sanjay — <a className="hover:text-primary" href="tel:+916363473962">+91 63634 73962</a></li>
            <li>Raghu — <a className="hover:text-primary" href="tel:+918861660259">+91 88616 60259</a></li>
          </ul>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Faculty Coordinator</div>
          <ul className="text-sm space-y-1">
            <li>Harika — <a className="hover:text-primary" href="tel:+919916377391">+91 99163 77391</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} OM SAI Luxury Ladies PG · Designed for everyday living.</div>
    </footer>
  );
}
