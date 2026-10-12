# joshbradley.me

A personal blog built with Next.js 16 and Tailwind CSS v4, where each post is a hand-written React component. That makes it easy to embed interactive content like canvas animations, math, and highlighted code.

Every page, feed, and OG image is prerendered at build time.

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Adding a Post

1. Add the post's metadata to `posts` in `lib/posts.ts`, with an ISO `date` (e.g. `"2025-03-20"`). Set `draft: true` to keep it out of the feeds, sitemap, and post list.
2. Create `app/thoughts/<slug>/page.tsx`. Copy an existing post for the `PostHeader`, `BlogJsonLd`, and `generateMetadata` boilerplate. Drafts should call `assertPublished(post)` so they 404 in production; they stay viewable in development.

An OG image is generated for each published post at `/api/og/<slug>`.

## Writing Components

- `H2` and `H3` (`components/Headings.tsx`) generate anchor ids from their text. Posts with three or more `H2`s get a table of contents on wide screens.
- `BlockCode` and `InlineCode` highlight code at build time, with light and dark themes.
- `BlockMath` and `InlineMath` render KaTeX at build time.
- `Figure` wraps `next/image`. For short animations, use `Video` with an MP4 in `public/videos/` instead of a GIF, which is typically 4–5× smaller.
- `FootnotesProvider`, `FootnoteLink`, and `Footnotes` render footnotes, shown as sidenotes on wide screens.
- `ExecuteAnimationScript` runs a script against a container element, e.g. to draw on a canvas.

## Scripts

- `pnpm build`: production build
- `pnpm lint`: ESLint
