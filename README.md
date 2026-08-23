# Chaos Haus — Phase 1

A premium fashion digital experience featuring a cinematic intro, forest entry scene, and scroll-driven parallax animation.

## Design Philosophy

**Premium Fashion + Editorial + Cinematic Storytelling + Controlled Chaos**

### Design Tokens

**Colors:**
- **Primary Black**: #252522
- **Warm Paper**: #F3EEE4
- **Muted Olive**: #7C8066
- **Dusty Blue**: #7E8C91
- **Washed Clay**: #A57968

**Typography:**
- **Display**: Large, editorial, sophisticated, spacious
- **Information**: Small, uppercase, letter-spaced, archive/system language

## Phase 1 Scope

✅ Global premium navigation
✅ Cinematic intro gate
✅ Forest entry scene
✅ Scroll-driven parallax animation
✅ Otter character integration
✅ Responsive design
✅ Performance optimization
✅ Accessibility support

## Project Structure

```
chaos-haus/
├── app/                 # Next.js app directory
├── components/          # Reusable components
│   ├── navigation/      # Global nav
│   ├── intro/           # Intro gate
│   ├── forest/          # Forest scene
│   └── ui/              # Shared UI
├── lib/                 # Utilities & constants
├── public/              # Static assets
└── styles/              # Global styles
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Technology Stack

- **Next.js 14** — React framework with SSR & optimization
- **TypeScript** — Type safety
- **Tailwind CSS** — Design tokens & responsive utilities
- **Framer Motion** — Smooth, performant animations

## Performance Optimizations

- GPU-optimized transforms (translate3d, transform)
- Lazy-loaded images with next/image
- Responsive image sizes
- Scroll event throttling
- Prefers-reduced-motion support
- Optimized animations with Framer Motion

## Accessibility

- Semantic HTML
- Keyboard navigation
- Focus states
- Alt text on images
- Reduced motion support
- Readable contrast (WCAG AA+)

## Next Steps (Phase 2+)

- Door entrance
- Living room
- Archive system
- Wardrobe/shop
- Chaos Lab
- Product pages
- Cart system

---

**Status**: Phase 1 Foundation Complete
**Awaiting**: Design review & feedback before Phase 2 development
