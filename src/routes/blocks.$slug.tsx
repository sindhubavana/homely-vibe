import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SingleMap } from "@/components/MapEmbed";
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
  const [openFloor, setOpenFloor] = useState<number>(1);

  const reservedCount = reserved.size;
  const memberLabel = reservedCount === 1 ? "member" : "members";

  return (
    <div className="min-h-screen flex flex-col grain">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-6 pb-8">
          <div className="mx-auto max-w-6xl px-5">
            <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              All blocks
            </Link>

            <div className="relative aspect-[16/8] sm:aspect-[16/6] rounded-[2rem] overflow-hidden shadow-card animate-pop-in">
              <img src={block.image} alt={block.name} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-background/90 text-foreground text-[11px] font-semibold uppercase tracking-wider">{block.audience}</span>
                  <span className="px-2.5 py-1 rounded-full bg-sage/95 text-sage-foreground text-[11px] font-semibold">{block.available} rooms left</span>
                </div>
                <div className="text-xs uppercase tracking-[0.2em] opacity-80">{block.tag}</div>
                <h1 className="font-display font-bold text-4xl sm:text-5xl mt-1">{block.name}</h1>
                <div className="mt-2 flex items-start gap-1.5 text-sm opacity-90 max-w-xl">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>{block.location}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="pb-10">
          <div className="mx-auto max-w-6xl px-5">
            <div className="relative rounded-[1.75rem] overflow-hidden p-6 sm:p-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-float animate-float-up">
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
              <div className="relative">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] opacity-90">Pricing</span>
                  <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold uppercase tracking-wider">Per Annum</span>
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl mb-5">All-inclusive accommodation</h2>
                <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6 sm:p-7 hover:bg-white/15 transition-colors max-w-md">
                  <div className="text-xs uppercase tracking-wider opacity-80">2 &amp; 3 Sharing</div>
                  <div className="font-display font-bold text-4xl sm:text-5xl mt-1">
                    ₹1,35,000
                    <span className="text-base font-medium opacity-80"> /year</span>
                  </div>
                  <div className="text-xs opacity-80 mt-2">Same all-inclusive fee for both 2-sharing and 3-sharing rooms</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floors */}
        <section className="pb-12">
          <div className="mx-auto max-w-6xl px-5">
            <div className="flex items-end justify-between mb-5 gap-4 flex-wrap">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-2">Browse by floor</p>
                <h2 className="font-display font-bold text-2xl sm:text-3xl">Available rooms</h2>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage/20 text-sage-foreground text-xs font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                {reservedCount} {memberLabel} reserved
              </div>
            </div>

            <div className="space-y-3">
              {block.floors.map((floor) => {
                const isOpen = openFloor === floor.number;
                return (
                  <div key={floor.number} className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden transition-all">
                    <button
                      onClick={() => setOpenFloor(isOpen ? -1 : floor.number)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 hover:bg-muted/40 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`h-11 w-11 rounded-xl grid place-items-center font-display font-bold transition-colors ${isOpen ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                          F{floor.number}
                        </div>
                        <div className="text-left">
                          <div className="font-display font-bold text-lg leading-tight">Floor {floor.number}</div>
                          <div className="text-xs text-muted-foreground">{floor.rooms.length} rooms available</div>
                        </div>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${isOpen ? "rotate-180" : ""}`}><path d="m6 9 6 6 6-6"/></svg>
                    </button>

                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 pt-1 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 animate-float-up">
                        {floor.rooms.map((room) => (
                          <RoomCard
                            key={room.id}
                            room={room}
                            reserved={reserved.has(room.id)}
                            onReserve={() => setActiveRoom(room)}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Block location map */}
        <section className="pb-16">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-2">Find us</p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-5">{block.name} location</h2>
            <SingleMap item={{ label: block.name, embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.42707869701!2d77.57219789999999!3d13.135439199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1900036550a9%3A0xb6a1655f92ddcdb8!2sOm%20Sai%20Luxury%20Ladies%20PG!5e0!3m2!1sen!2sin!4v1777381627491!5m2!1sen!2sin", address: block.location }} />
          </div>
        </section>

      </main>
      <SiteFooter />
      {activeRoom && (
        <ReserveModal
          room={activeRoom}
          onClose={() => setActiveRoom(null)}
          onConfirm={() => {
            setReserved((s) => {
              const next = new Set(s);
              next.add(activeRoom.id);
              return next;
            });
          }}
        />
      )}
    </div>
  );
}

function RoomCard({ room, reserved, onReserve }: { room: Room; reserved: boolean; onReserve: () => void }) {
  const capacity = room.type === "3-Sharing" ? 3 : 2;
  // Simulate baseline + live reservation: each reserved adds 1 member up to capacity
  const reservedMembers = reserved ? 1 : 0;
  const memberWord = reservedMembers === 1 ? "member" : "members";
  return (
    <article className="group rounded-2xl bg-background border border-border overflow-hidden hover:shadow-card hover:-translate-y-0.5 transition-all">
      <div className="aspect-[4/3] bg-muted overflow-hidden">
        <img src={room.image} alt={room.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between gap-2">
          <div className="font-display font-bold text-base leading-none">{room.name}</div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-sage/20 text-sage-foreground font-semibold whitespace-nowrap">{room.type}</span>
        </div>

        <div className="mt-2 text-[11px] text-muted-foreground">
          {reservedMembers} of {capacity} {memberWord} reserved
        </div>

        <button
          onClick={onReserve}
          disabled={reserved}
          className="mt-3 w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-primary text-primary-foreground font-medium text-xs hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-default"
        >
          {reserved ? (
            <>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              Reserved
            </>
          ) : (
            <>Reserve</>
          )}
        </button>
      </div>
    </article>
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
      onConfirm();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm grid place-items-center p-4 animate-pop-in" onClick={done ? undefined : onClose}>
      <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-md rounded-3xl bg-card shadow-float overflow-hidden">
        <button onClick={onClose} aria-label="Close" className="absolute top-3 right-3 z-10 h-9 w-9 rounded-full bg-background/90 grid place-items-center hover:scale-105 transition-transform">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>

        {done ? (
          <div className="p-8 text-center">
            <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-sage/30 grid place-items-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <h3 className="font-display font-bold text-2xl mb-2">Thank you!</h3>
            <p className="text-base text-foreground">Room is reserved.</p>
            <p className="text-xs text-muted-foreground mt-2">{room.name} · {room.type}</p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl border border-border bg-background text-sm font-medium hover:bg-muted transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="p-6">
            <div className="flex items-center gap-3 mb-5">
              <img src={room.image} alt={room.name} className="h-14 w-14 rounded-2xl object-cover" />
              <div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Reserving</div>
                <div className="font-display font-bold text-lg leading-tight">{room.name}</div>
                <div className="text-xs text-muted-foreground">{room.type}</div>
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
