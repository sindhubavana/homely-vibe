import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { blocks } from "@/data/blocks";

type Result =
  | { kind: "block"; slug: string; title: string; subtitle: string }
  | { kind: "room"; slug: string; title: string; subtitle: string; floor: number }
  | { kind: "location"; slug: string; title: string; subtitle: string };

const ALL_RESULTS: Result[] = blocks.flatMap((b) => {
  const out: Result[] = [
    { kind: "block", slug: b.slug, title: b.name, subtitle: b.tag },
    { kind: "location", slug: b.slug, title: b.location, subtitle: `${b.name} — Location` },
  ];
  for (const f of b.floors) {
    for (const r of f.rooms) {
      out.push({
        kind: "room",
        slug: b.slug,
        title: `Room ${r.name}`,
        subtitle: `${b.name} · Floor ${f.number} · ${r.type}`,
        floor: f.number,
      });
    }
  }
  return out;
});

function normalize(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQ("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const nq = normalize(q);
    if (!nq) return [] as Result[];
    const tokens = nq.split(" ").filter(Boolean);
    return ALL_RESULTS.filter((r) => {
      const hay = normalize(`${r.title} ${r.subtitle}`);
      return tokens.every((t) => hay.includes(t));
    }).slice(0, 30);
  }, [q]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm p-4 sm:p-10 grid place-items-start sm:place-items-center animate-pop-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl rounded-3xl bg-card shadow-float overflow-hidden border border-border"
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center gap-3 px-5 py-4 border-b border-border"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search blocks, rooms, locations..."
            className="flex-1 bg-transparent outline-none text-sm sm:text-base placeholder:text-muted-foreground"
          />
          <button
            type="submit"
            className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity"
          >
            Search
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="h-8 w-8 grid place-items-center rounded-full hover:bg-muted"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </form>

        <div className="max-h-[60vh] overflow-y-auto">
          {q.trim() === "" ? (
            <div className="px-5 py-8 text-sm text-muted-foreground text-center">
              Try "Block A", "Room 101", or "Yelahanka"
            </div>
          ) : results.length === 0 ? (
            <div className="px-5 py-8 text-sm text-muted-foreground text-center">
              No results found
            </div>
          ) : (
            <ul className="py-2">
              {results.map((r, i) => (
                <li key={i}>
                  <Link
                    to="/blocks/$slug"
                    params={{ slug: r.slug }}
                    onClick={onClose}
                    className="flex items-center gap-3 px-5 py-3 hover:bg-muted/60 transition-colors"
                  >
                    <span className={`h-9 w-9 rounded-xl grid place-items-center text-[10px] font-bold uppercase tracking-wider ${
                      r.kind === "block" ? "bg-primary/15 text-primary" :
                      r.kind === "room" ? "bg-sage/30 text-sage-foreground" :
                      "bg-muted text-foreground"
                    }`}>
                      {r.kind === "block" ? "Blk" : r.kind === "room" ? "Rm" : "Loc"}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display font-semibold text-sm truncate">{r.title}</span>
                      <span className="block text-xs text-muted-foreground truncate">{r.subtitle}</span>
                    </span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
