import type { Metadata } from 'next';
import { HeartHandshake, Scale, ShieldCheck, Sparkles } from 'lucide-react';
import { PageHero } from '@/components/marketing/page-hero';
import { StatsBand } from '@/components/marketing/stats-band';
import { CtaSection } from '@/components/marketing/cta-section';
import { Container, Section } from '@/components/ui/container';
import { SectionHeader } from '@/components/marketing/section-header';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Why we built StellarNest: a family financial coordination platform on Stellar, and the team behind it.',
};

const values = [
  {
    icon: ShieldCheck,
    title: 'Rules over trust',
    description: 'A family shouldn’t need to fully trust one person with money — rules, enforced on-chain, should do that work.',
  },
  {
    icon: Scale,
    title: 'Transparent by default',
    description: 'Every member with view access sees the same history. No one gets a different version of the truth.',
  },
  {
    icon: HeartHandshake,
    title: 'Built for real families',
    description: 'Not a trading terminal wearing a family skin — every feature starts from an actual household decision.',
  },
  {
    icon: Sparkles,
    title: 'Open, always',
    description: 'Contracts, backend, and frontend are open source. A family’s financial infrastructure shouldn’t be a black box.',
  },
];

const team = [
  { name: 'Amaka Chukwu', role: 'Co-founder & CEO', focus: 'Product & family research' },
  { name: 'Femi Adeyemi', role: 'Co-founder & CTO', focus: 'Soroban contracts' },
  { name: 'Sarah Mensah', role: 'Head of Design', focus: 'Product design' },
  { name: 'Daniel Osei', role: 'Backend Lead', focus: 'API & infrastructure' },
  { name: 'Priya Nair', role: 'Security Lead', focus: 'Contract audits' },
  { name: 'Kwame Boateng', role: 'Community', focus: 'Developer relations' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About StellarNest"
        title="We build for the family, not just the individual"
        description="Most financial products are built for one person. StellarNest is built for the unit families actually operate in — parents, children, guardians, and advisors, coordinating one shared future."
      />

      <Section>
        <Container className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-semibold">Why we started here</h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Every family we talked to was running the same workaround: a joint account for the
              obvious things, a spreadsheet for the goals nobody trusted the bank to track, a group
              chat for approvals, and a lawyer on retainer for the inheritance conversation nobody
              wanted to have out loud.
            </p>
            <p>
              None of it was programmable. A spending limit was a promise, not a rule. An approval
              was a text message, not a signature. And when it came to passing wealth on, families
              were stuck choosing between an expensive will and an account someone else quietly
              controlled.
            </p>
            <p>
              StellarNest is what we built instead: one treasury, governed by rules the family
              agrees on and a smart contract enforces — savings, bills, investing, and inheritance,
              in one place, visible to everyone who should see it.
            </p>
          </div>
        </Container>
      </Section>

      <StatsBand />

