import type {
  BlogPost,
  FamilyRoleDefinition,
  NavLink,
  NavMenu,
  PricingPlan,
  RoadmapPhase,
  Testimonial,
} from '@/types';

export const siteConfig = {
  name: 'StellarNest',
  tagline: 'One treasury. One family. Infinite trust.',
  description:
    'StellarNest is a family financial coordination platform built on Stellar. Save, pay bills, invest, and plan inheritance together from one programmable family treasury.',
  url: 'https://stellarnest.org',
  github: 'https://github.com/StellarNest-Org',
  x: 'https://x.com/stellarnest',
  discord: 'https://discord.gg/stellarnest',
};

export const mainNav: (NavMenu | NavLink)[] = [
  {
    label: 'Product',
    items: [
      { label: 'Features', href: '/features', description: 'Savings, bills, investing, inheritance, rules.' },
      { label: 'Roadmap', href: '/roadmap', description: 'What we’re shipping next.' },
      { label: 'Pricing', href: '/pricing', description: 'Plans for one family or a family office.' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'Documentation', href: '/docs', description: 'Integrate and self-host StellarNest.' },
      { label: 'Developers', href: '/developers', description: 'Open-source stack and APIs.' },
      { label: 'Blog', href: '/blog', description: 'Notes on family finance and Stellar.' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = {
  Product: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Roadmap', href: '/roadmap' },
    { label: 'Launch App', href: '/app' },
  ],
  Resources: [
    { label: 'Documentation', href: '/docs' },
    { label: 'Developers', href: '/developers' },
    { label: 'Blog', href: '/blog' },
    { label: 'GitHub', href: 'https://github.com/StellarNest-Org' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/StellarNest-Org' },
  { label: 'X', href: 'https://x.com/stellarnest' },
  { label: 'Discord', href: 'https://discord.gg/stellarnest' },
];

