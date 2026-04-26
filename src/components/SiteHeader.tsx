import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="h-9 w-9 rounded-2xl bg-primary text-primary-foreground grid place-items-center font-display font-bold text-lg shadow-soft transition-transform group-hover:scale-105">
            ॐ
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-[15px] tracking-tight">OM SAI</div>
            <div className="text-[10.5px] text-muted-foreground -mt-0.5 tracking-wider uppercase">Luxury Ladies PG</div>
          </div>
        </Link>
        <nav className="hidden sm:flex items-center gap-1 text-sm">
          <Link to="/" className="px-3 py-1.5 rounded-full hover:bg-muted transition-colors" activeProps={{ className: "bg-muted font-semibold" }} activeOptions={{ exact: true }}>
            Home
          </Link>
          <a href="#amenities" className="px-3 py-1.5 rounded-full hover:bg-muted transition-colors">Amenities</a>
          <a href="#info" className="px-3 py-1.5 rounded-full hover:bg-muted transition-colors">Info</a>
        </nav>
        <a href="tel:+919449510381" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity">
          Call us
        </a>
      </div>
    </header>
  );
}
