import { useState } from "react";

type Msg = { from: "bot" | "user"; text: string };

const QUICK = [
  "Room availability?",
  "What's the rent?",
  "Visiting hours?",
  "Food included?",
];

function answer(q: string): string {
  const s = q.toLowerCase();
  if (s.includes("avail") || s.includes("room")) return "Block A has 3 rooms left, Block B has 5, Block C has 2. Tap any block to see room cards.";
  if (s.includes("rent") || s.includes("price") || s.includes("cost")) return "Single ₹9,500 • Double ₹7,500 • Triple ₹6,500 per month — meals included.";
  if (s.includes("food") || s.includes("meal")) return "Yes! 3 home-style meals daily — breakfast, lunch and dinner.";
  if (s.includes("visit")) return "Visitors are welcome in the lounge area between 10 AM – 8 PM.";
  if (s.includes("wifi")) return "Free high-speed WiFi across all blocks, 24×7.";
  if (s.includes("location") || s.includes("where")) return "Avalahalli Village, Yelahanka, Bangalore — close to BMSIT College.";
  return "I can help with rooms, rent, food, visiting hours and amenities. Try one of the quick questions below 👇";
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "bot", text: "Hi! 👋 I'm Saira, your PG assistant. How can I help today?" },
  ]);
  const [input, setInput] = useState("");

  function send(text: string) {
    if (!text.trim()) return;
    setMsgs((m) => [...m, { from: "user", text }, { from: "bot", text: answer(text) }]);
    setInput("");
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
        className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-float grid place-items-center hover:scale-105 active:scale-95 transition-transform"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[min(92vw,360px)] h-[min(70vh,520px)] rounded-3xl bg-card shadow-float border border-border flex flex-col overflow-hidden animate-pop-in">
          <div className="px-4 py-3 bg-primary text-primary-foreground flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-primary-foreground/15 grid place-items-center text-base">💬</div>
            <div className="leading-tight">
              <div className="font-semibold text-sm">Saira</div>
              <div className="text-[11px] opacity-80">Usually replies instantly</div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 bg-surface/40">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-3.5 py-2 rounded-2xl text-sm leading-snug ${m.from === "user" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-card border border-border rounded-bl-sm"}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="px-3 pb-2 flex gap-1.5 overflow-x-auto no-scrollbar">
            {QUICK.map((q) => (
              <button key={q} onClick={() => send(q)} className="shrink-0 text-[11.5px] px-2.5 py-1.5 rounded-full bg-muted hover:bg-accent transition-colors whitespace-nowrap">
                {q}
              </button>
            ))}
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="p-3 border-t border-border flex gap-2 bg-card"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message…"
              className="flex-1 px-3.5 py-2 rounded-full bg-muted text-sm outline-none focus:ring-2 focus:ring-ring/40"
            />
            <button type="submit" className="h-9 w-9 rounded-full bg-primary text-primary-foreground grid place-items-center hover:opacity-90">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
