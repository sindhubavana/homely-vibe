const cards = [
  { emoji: "🚪", title: "Visitor Policy", text: "Friends and family welcome in the lounge between 10 AM – 8 PM." },
  { emoji: "📍", title: "Prime Location", text: "Avalahalli, Yelahanka — close to BMSIT, cafes and bus stops." },
  { emoji: "🔑", title: "Separate Entry", text: "Keyless ladies-only entry. Each block has its own private gate." },
  { emoji: "📚", title: "Study Space", text: "Quiet study lounges open 24×7 with desks, lamps and free coffee." },
];

export function InfoCards() {
  return (
    <section id="info" className="py-12 sm:py-20 bg-surface">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-2">Good to know</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">Little things that matter</h2>
        </div>
        <div className="-mx-5 px-5 overflow-x-auto no-scrollbar">
          <div className="flex gap-4 sm:grid sm:grid-cols-4">
            {cards.map((c, i) => (
              <div
                key={c.title}
                className="shrink-0 w-72 sm:w-auto p-6 rounded-3xl bg-card border border-border shadow-soft hover:shadow-card transition-shadow animate-float-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="h-12 w-12 rounded-2xl bg-accent grid place-items-center text-2xl mb-4">
                  {c.emoji}
                </div>
                <h3 className="font-display font-bold text-lg mb-1.5">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
