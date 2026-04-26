import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Chatbot } from "@/components/Chatbot";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { getBlock, type Room } from "@/data/blocks";

export const Route = createFileRoute("/blocks/$slug")({
  loader: ({ params }) => {
    const block = getBlock(params.slug);
    if (!block) throw notFound();
    return { block };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.block.name} — OM SAI Luxury Ladies PG` },
          { name: "description", content: loaderData.block.description },
          { property: "og:title", content: `${loaderData.block.name} — OM SAI Ladies PG` },
          { property: "og:description", content: loaderData.block.description },
          { property: "og:image", content: loaderData.block.image },
        ]
      : [],
  }),
  component: BlockPage,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold mb-2">Block not found</h1>
        <Link to="/" className="text-primary underline">Back home</Link>
      </div>
    </div>
  ),
});

function BlockPage() {
  const { block } = Route.useLoaderData();
  const [reserved, setReserved] = useState<Set<string>>(new Set());
  const [activeRoom, setActiveRoom] = useState<Room | null>(null);

  return (
    <div className="min-h-screen flex flex-col grain">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-6 pb-10">
          <div className="mx-auto max-w-6xl px-5">
            <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              All blocks
            </Link>

            <div className="relative aspect-[16/8] sm:aspect-[16/6] rounded-[2rem] overflow-hidden shadow-card animate-pop-in">
              <img src={block.image} alt={block.name} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-background/90 text-foreground text-[11px] font-semibold uppercase tracking-wider">{block.audience}</span>
                  <span className="px-2.5 py-1 rounded-full bg-sage/95 text-sage-foreground text-[11px] font-semibold">{block.available} rooms left</span>
                </div>
                <div className="text-xs uppercase tracking-[0.2em] opacity-80">{block.tag}</div>
                <h1 className="font-display font-bold text-4xl sm:text-5xl mt-1">{block.name}</h1>
                <p className="text-sm sm:text-base opacity-90 mt-2 max-w-xl">{block.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Rooms feed */}
        <section className="pb-10">
          <div className="mx-auto max-w-2xl px-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display font-bold text-2xl">Available rooms</h2>
              <span className="text-xs text-muted-foreground">{block.rooms.length} posts</span>
            </div>
            <div className="space-y-6">
              {block.rooms.map((room, i) => (
                <RoomCard key={room.id} room={room} index={i} reserved={reserved.has(room.id)} onReserve={() => setActiveRoom(room)} />
              ))}
            </div>
          </div>
        </section>

        <AmenitiesSection />
      </main>
      <SiteFooter />
      <Chatbot />
      {activeRoom && (
        <ReserveModal
          room={activeRoom}
          onClose={() => setActiveRoom(null)}
          onConfirm={() => {
            setReserved((s) => new Set(s).add(activeRoom.id));
            setActiveRoom(null);
          }}
        />
      )}
    </div>
  );
}

function ReserveModal({ room, onClose, onConfirm }: { room: Room; onClose: () => void; onConfirm: () => void }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const valid =
    name.trim().length >= 2 &&
    /^[0-9]{10}$/.test(mobile.trim()) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
      setTimeout(() => onConfirm(), 1400);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm grid place-items-center p-4 animate-pop-in" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-md rounded-3xl bg-card shadow-float overflow-hidden">
        <button onClick={onClose} aria-label="Close" className="absolute top-3 right-3 z-10 h-9 w-9 rounded-full bg-background/90 grid place-items-center hover:scale-105 transition-transform">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>

        {done ? (
          <div className="p-8 text-center">
            <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-sage/30 grid place-items-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <h3 className="font-display font-bold text-2xl mb-1">Reserved!</h3>
            <p className="text-sm text-muted-foreground">Thanks {name.split(" ")[0]} — we'll call you on {mobile} shortly to confirm {room.name}.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="p-6">
            <div className="flex items-center gap-3 mb-5">
              <img src={room.image} alt={room.name} className="h-14 w-14 rounded-2xl object-cover" />
              <div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Reserving</div>
                <div className="font-display font-bold text-lg leading-tight">{room.name}</div>
                <div className="text-xs text-muted-foreground">₹{room.rent.toLocaleString("en-IN")}/mo · {room.type}</div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-foreground/80 mb-1.5 block">Your name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  maxLength={80}
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground/80 mb-1.5 block">Mobile number</label>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="10-digit mobile"
                  inputMode="numeric"
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground/80 mb-1.5 block">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  maxLength={120}
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={!valid || submitting}
              className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {submitting ? "Reserving…" : "Confirm reservation"}
            </button>
            <p className="mt-2 text-[11px] text-muted-foreground text-center">We'll call you to verify before final booking.</p>
          </form>
        )}
      </div>
    </div>
  );
}

function RoomCard({ room, index, reserved, onReserve }: { room: Room; index: number; reserved: boolean; onReserve: () => void }) {
  const [liked, setLiked] = useState(false);

  return (
    <article
      className="rounded-3xl bg-card border border-border shadow-soft overflow-hidden animate-float-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-primary text-primary-foreground grid place-items-center font-display font-bold text-sm">ॐ</div>
          <div className="leading-tight">
            <div className="font-semibold text-sm">{room.name}</div>
            <div className="text-[11px] text-muted-foreground">{room.type}</div>
          </div>
        </div>
        <span className="text-[11px] px-2 py-1 rounded-full bg-sage/20 text-sage-foreground font-semibold">{room.left} left</span>
      </div>

      <div className="aspect-square bg-muted">
        <img src={room.image} alt={room.name} loading="lazy" className="h-full w-full object-cover" />
      </div>

      <div className="px-4 py-3 flex items-center gap-4">
        <button onClick={() => setLiked((l) => !l)} aria-label="Like" className="transition-transform active:scale-90">
          <svg width="24" height="24" viewBox="0 0 24 24" fill={liked ? "oklch(0.55 0.13 40)" : "none"} stroke={liked ? "oklch(0.55 0.13 40)" : "currentColor"} strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
        <div className="ml-auto text-right">
          <div className="font-display font-bold text-lg leading-none">₹{room.rent.toLocaleString("en-IN")}<span className="text-xs font-medium text-muted-foreground">/mo</span></div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <p className="text-sm text-foreground/80 leading-relaxed">
          <span className="font-semibold">{room.name}</span> · {room.type.toLowerCase()} · meals included · attached bath · study desk · wardrobe
        </p>
        <button
          onClick={onReserve}
          disabled={reserved}
          className="mt-3 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-default"
        >
          {reserved ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              Reserved — we'll call you shortly
            </>
          ) : (
            <>Reserve this room</>
          )}
        </button>
      </div>
    </article>
  );
}
