## Gallery Masonry Redesign

Refresh `src/routes/gallery.tsx` to a modern, perfectly-aligned masonry grid without touching content or the lightbox behavior.

### Changes to `src/routes/gallery.tsx`

- Replace the current CSS `columns-*` masonry with a **CSS Grid masonry** using `grid-template-rows: masonry` with a robust JS-free fallback via `grid-auto-rows` + row-span calculation from natural image aspect ratios, so images never overlap and gaps stay uniform.
  - Approach: use a fixed `grid-auto-rows: 8px` with `gap-4`, and compute `grid-row: span N` per image from its `naturalHeight/naturalWidth` on `onLoad` (stored in local state keyed by src). This guarantees:
    - Equal horizontal AND vertical gaps
    - No overlap
    - Perfect alignment on resize
- Responsive columns: `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4` with `gap-4 md:gap-5`.
- Each tile:
  - `rounded-3xl overflow-hidden` with `shadow-soft hover:shadow-float` transition
  - Image `w-full h-full object-cover` with `transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]`
  - Subtle gradient overlay from bottom (`from-black/55 via-black/10 to-transparent`) that fades in on hover
  - Caption pinned bottom-left, `text-white`, translates up slightly on hover
  - Focus ring for keyboard users
- Image loading optimization:
  - `loading="lazy"` and `decoding="async"` on all images
  - First 4 images get `loading="eager"` + `fetchpriority="high"` for LCP
  - `sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"`
- Staggered `animate-float-up` entrance with `style={{ animationDelay: ... }}`.
- Keep the existing lightbox modal exactly as-is (open on click, close on backdrop/×).
- Keep header copy ("A peek inside" / "Gallery") and photo list unchanged.

### Fallback

Add `@supports (grid-template-rows: masonry)` path that uses native masonry where supported, and the row-span JS calculation otherwise — both produce identical visual balance.

### Out of scope

- No change to photo list, routes, header, chatbot, or other pages.
- No new dependencies.
