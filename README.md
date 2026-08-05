# <img src="assets/logo.svg" width="32" height="32" align="center" alt="" /> StellarNest — Frontend

The marketing site and product surface for **StellarNest**, a family
financial coordination platform built on Stellar.

Most families manage money the same fragmented way: a joint bank account
for the obvious shared bills, a spreadsheet nobody fully trusts for
savings goals, a group chat for "can you approve this," and a lawyer on
retainer for the inheritance conversation nobody wants to have out loud.
None of it is programmable, and none of it actually enforces what the
family agreed to — a spending limit is a promise, not a rule; an
approval is a text message, not a signature.

StellarNest replaces all of that with **one shared treasury per family**:
a Soroban smart contract on the Stellar network that holds the money and
enforces the rules — who can spend how much, how many approvals a large
withdrawal needs, how savings goals track contributions, when bills get
paid automatically, and how an inheritance vault distributes wealth to
the next generation once specific, family-set conditions are met. No
single person — not a parent, not StellarNest itself — can override
those rules once they're set, because they're checked by the contract on
every transaction, not by a person's judgment in the moment.

> One treasury. One family. Infinite trust.

**This repo is the part of StellarNest a person actually sees**: the
public marketing site explaining what the product does and why (home,
features, pricing, roadmap, docs, blog, and more — see [Pages](#pages)),
plus a `/app` route previewing what the treasury dashboard itself looks
like once it's wired up to real data. It's a Next.js application with no
backend of its own — every number, goal, bill, and family member you see
on this site today is realistic placeholder content defined in
`src/lib/data.ts`, standing in for what will eventually come from the
[`backend`](https://github.com/StellarNest-Org/backend)'s GraphQL API.
It's one of three StellarNest repos:

| Repo | Purpose |
|---|---|
| [`contracts`](https://github.com/StellarNest-Org/contracts) | The Soroban `treasury` contract |
| [`backend`](https://github.com/StellarNest-Org/backend) | GraphQL API, Postgres data layer, non-custodial Stellar integration |
| [`frontend`](https://github.com/StellarNest-Org/frontend) *(this repo)* | Marketing site + product preview (Next.js) |

## Table of contents

- [New to this stack? Start here](#new-to-this-stack-start-here)
- [Stack](#stack)
- [Pages](#pages)
- [Structure](#structure)
- [Component inventory](#component-inventory)
- [Design system](#design-system)
- [The `/app` dashboard preview](#the-app-dashboard-preview)
- [SEO & metadata](#seo--metadata)
- [Development](#development)
- [Testing what you changed](#testing-what-you-changed)
- [Accessibility & performance](#accessibility--performance)
- [Deployment](#deployment)
- [Contributing](#contributing)

## New to this stack? Start here

A few concepts recur throughout this codebase. If any of these are new
to you, this section should be enough to follow the rest of the README:

- **Next.js** is a framework built on top of React that adds file-based
  **routing** (a folder under `src/app/` becomes a URL — `src/app/about/`
  is `/about`), **rendering on the server** (pages are built to HTML
  before they reach the browser, which is faster and better for SEO than
  a blank page that fills in with JavaScript), and conventions for
  things every real site needs — metadata, sitemaps, image optimization
  — without extra libraries. The **App Router** (the `app/` directory,
  as opposed to the older `pages/` directory) is Next's current routing
  system; every route in this repo is a `page.tsx` file inside a folder
  named for its URL segment.
- **Server vs. Client Components.** In the App Router, every component
  is a Server Component by default — it renders once on the server and
  ships only HTML to the browser, no JavaScript for that component at
  all. A component becomes a **Client Component** (add `'use client'` at
  the top of the file) only when it needs interactivity — state, event
  handlers, browser APIs like `window`. In this repo, that's things like
  `Navbar` (menu open/close state), the theme toggle, the testimonials
  carousel, and any chart. Everything else — most of the marketing
  sections — is a Server Component, which keeps the amount of JavaScript
  sent to the browser small.
- **Turbopack** is Next's newer, faster bundler (the tool that turns all
  these `.tsx` files into what a browser can run) — as of Next.js 16
  it's the default for both `next dev` and `next build`, replacing
  Webpack.
- **Tailwind CSS** lets you style elements with utility classes directly
  in JSX (`className="rounded-2xl border p-6"`) instead of writing
  separate CSS files. **Tailwind v4** changed how theming works: instead
  of a `tailwind.config.js` file, colors/fonts/spacing are defined as
  plain CSS custom properties inside an `@theme` block in
  `src/app/globals.css` — that's why you won't find a config file in
  this repo, just that one CSS file.
- **Radix UI** provides unstyled, fully-accessible interactive
  components (keyboard navigation, correct ARIA attributes) that this
  repo wraps with its own Tailwind classes — e.g. `Accordion` in
  `src/components/ui/accordion.tsx` is Radix's accordion primitive with
  StellarNest's own look applied on top.
- **`next/font`** downloads and self-hosts Google Fonts (Fraunces,
  Inter, JetBrains Mono here) at build time, so the browser never makes
  a separate request to Google's servers — faster, and avoids a
  flash-of-different-font as the page loads.
- **`next/og`** generates images (like the Open Graph preview image you
  see when a link is shared on social media) on the fly from JSX/CSS,
  the same way a page renders — see `src/app/opengraph-image.tsx`. No
  static image file to keep in sync with the brand by hand.

## Stack

Next.js 16 (App Router, Turbopack, React 19) · TypeScript · Tailwind CSS 4
(CSS-first `@theme`, no `tailwind.config.js`) · Framer Motion · Radix UI
primitives (`accordion`, `slot`) · Recharts · React Hook Form + Zod v4 ·
`next-themes` for dark/light mode · TanStack Query · `next/font` (Fraunces
+ Inter + JetBrains Mono) · `next/og` for dynamically generated OG/Twitter
images and the Apple touch icon.

