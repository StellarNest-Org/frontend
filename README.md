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

