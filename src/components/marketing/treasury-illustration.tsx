'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { NestMark } from '@/components/nest-mark';
import { familyMembers, savingsGoals } from '@/lib/data';
import { formatCurrency } from '@/lib/utils';

export function TreasuryIllustration() {
  const totalBalance = savingsGoals.reduce((sum, g) => sum + g.current, 0) + 84300;

  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div
        aria-hidden
        className="absolute -inset-16 -z-10 rounded-full bg-primary/15 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="glass-panel grain-surface relative rounded-3xl p-6 shadow-2xl"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <NestMark className="h-8 w-8" />
            <div>
              <p className="text-xs text-muted-foreground">Adeyemi Family Treasury</p>
              <p className="font-display text-2xl font-semibold">{formatCurrency(totalBalance)}</p>
            </div>
          </div>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            +6.4% this month
          </span>
        </div>

        <div className="mt-6 flex -space-x-2">
          {familyMembers.slice(0, 5).map((m) => (
            <div
              key={m.name}
              title={m.name}
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-card text-[11px] font-semibold text-white"
              style={{ backgroundColor: m.avatarColor }}
            >
              {m.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>
          ))}
          <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-card bg-secondary text-[11px] font-medium text-muted-foreground">
            +2
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {savingsGoals.slice(0, 3).map((goal) => {
            const pct = Math.min(100, Math.round((goal.current / goal.target) * 100));
            return (
              <div key={goal.name}>
                <div className="mb-1.5 flex items-center justify-between text-xs">
                  <span className="font-medium text-foreground">{goal.name}</span>
                  <span className="text-muted-foreground">{pct}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${pct}%`, backgroundColor: goal.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

