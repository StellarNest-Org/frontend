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

export const roles: FamilyRoleDefinition[] = [
  {
    name: 'Owner',
    description: 'Founds the treasury, sets the constitution, holds ultimate recovery authority.',
    permissions: ['create', 'freeze', 'invite', 'approve', 'spend', 'invest', 'inherit', 'view'],
  },
  {
    name: 'Parent',
    description: 'Co-manages the treasury, approves spending, sets allowances and rules.',
    permissions: ['invite', 'approve', 'spend', 'invest', 'view'],
  },
  {
    name: 'Guardian',
    description: 'Trusted outside the immediate family — approves large withdrawals and inheritance claims.',
    permissions: ['approve', 'view'],
  },
  {
    name: 'Child',
    description: 'Spends within an allowance and per-transaction limit set by a Parent.',
    permissions: ['spend (limited)', 'view (own)'],
  },
  {
    name: 'Advisor',
    description: 'A financial advisor or accountant with visibility, without spend authority.',
    permissions: ['view', 'suggest'],
  },
  {
    name: 'Viewer',
    description: 'Read-only access — grandparents, family office staff, or auditors.',
    permissions: ['view'],
  },
];

export const permissionMatrix = {
  actions: [
    'Create savings goal',
    'Approve withdrawal > threshold',
    'Spend within limit',
    'Configure rules',
    'Invite / remove member',
    'Freeze treasury',
    'Approve inheritance claim',
    'View activity',
  ],
  roles: ['Owner', 'Parent', 'Guardian', 'Child', 'Advisor', 'Viewer'] as const,
  grid: [
    [true, true, false, false, false, false],
    [true, true, true, false, false, false],
    [true, true, false, true, false, false],
    [true, true, false, false, false, false],
    [true, true, false, false, false, false],
    [true, true, true, false, false, false],
    [false, false, true, false, false, false],
    [true, true, true, true, true, true],
  ],
};

export const savingsGoals = [
  { name: 'Emergency Fund', target: 25000, current: 18250, asset: 'USDC', color: 'var(--color-primary)' },
  { name: 'Vacation — Lagos', target: 6000, current: 4120, asset: 'XLM', color: 'var(--color-accent)' },
  { name: 'House Purchase', target: 180000, current: 61300, asset: 'USDC', color: '#5B8A72' },
  { name: 'Education Fund', target: 40000, current: 22900, asset: 'EURC', color: '#8C6A3F' },
];

export const upcomingBills = [
  { name: 'Rent', category: 'Rent', amount: 2200, dueIn: '2 days', status: 'due' as const },
  { name: 'City Power & Light', category: 'Electricity', amount: 184, dueIn: '5 days', status: 'upcoming' as const },
  { name: 'Fibernet Home', category: 'Internet', amount: 65, dueIn: '9 days', status: 'upcoming' as const },
  { name: 'Greenwood Academy', category: 'School fees', amount: 1400, dueIn: '14 days', status: 'upcoming' as const },
  { name: 'Family Health Cover', category: 'Insurance', amount: 310, dueIn: '21 days', status: 'upcoming' as const },
];

export const portfolioAllocation = [
  { name: 'Stable (USDC/EURC)', value: 42, color: '#0f6b4c' },
  { name: 'XLM growth', value: 28, color: '#c08a2e' },
  { name: 'Yield strategies', value: 18, color: '#5b8a72' },
  { name: 'AQUA / experimental', value: 12, color: '#8c6a3f' },
];

export const portfolioHistory = [
  { month: 'Feb', value: 132000 },
  { month: 'Mar', value: 138500 },
  { month: 'Apr', value: 135200 },
  { month: 'May', value: 149800 },
  { month: 'Jun', value: 158100 },
  { month: 'Jul', value: 162400 },
  { month: 'Aug', value: 171900 },
];

