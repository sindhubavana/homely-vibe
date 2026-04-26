import { Link } from "@tanstack/react-router";
import { useState } from "react";

const navItems: { to: "/" | "/contact" | "/gallery" | "/facilities" | "/rules"; label: string; exact?: boolean }[] = [
  { to: "/", label: "Home", exact: true },
  { to: "/facilities", label: "Facilities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
  { to: "/rules", label: "Rules & Regulations" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="h-9 w-9 rounded-2xl bg-primary text-primary-foreground grid place-items-center font-display font-bold text-lg shadow-soft transition-transform group-hover:scale-105">
            ॐ
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-[15px] tracking-tight">OM SAI</div>
            <div className="text-[10px] text-muted-foreground -mt-0.5 tracking-[0.18em] uppercase">Luxury Ladies PG</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative px-3.5 py-2 rounded-full font-medium text-foreground/80 hover:text-foreground transition-colors after:content-[''] after:absolute after:left-1/2 after:bottom-1 after:h-0.5 after:w-0 after:bg-primary after:rounded-full after:transition-all hover:after:w-5 hover:after:-translate-x-1/2"
              activeProps={{ className: "text-foreground after:w-5 after:-translate-x-1/2" }}
              activeOptions={item.exact ? { exact: true } : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            className="hidden sm:grid h-10 w-10 place-items-center rounded-full hover:bg-muted transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </button>
          <a href="tel:+919449510381" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity">
            Call us
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-full hover:bg-muted transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6l-12 12" /> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <nav className="mx-auto max-w-7xl px-5 py-3 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-xl text-sm font-medium hover:bg-muted transition-colors"
                activeProps={{ className: "bg-muted" }}
                activeOptions={item.exact ? { exact: true } : undefined}
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:+919449510381" className="mt-2 inline-flex items-center justify-center gap-2 text-sm font-medium px-4 py-2.5 rounded-full bg-foreground text-background">
              Call us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
