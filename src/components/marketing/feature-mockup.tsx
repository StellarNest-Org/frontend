'use client';

import { motion } from 'framer-motion';
import { Check, Lock, ShieldCheck, TrendingDown, TrendingUp } from 'lucide-react';
import {
  automationWorkflows,
  familyRules,
  portfolioAllocation,
  savingsGoals,
  upcomingBills,
} from '@/lib/data';
import { formatCurrency } from '@/lib/utils';

type Kind = 'savings' | 'bills' | 'investments' | 'inheritance' | 'rules';

function SavingsMockup() {
  return (
    <div className="space-y-4">
      {savingsGoals.map((goal) => {
        const pct = Math.min(100, Math.round((goal.current / goal.target) * 100));
        return (
          <div key={goal.name}>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="font-medium">{goal.name}</span>
              <span className="text-muted-foreground">
                {formatCurrency(goal.current)} / {formatCurrency(goal.target)}
              </span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-full rounded-full"
                style={{ backgroundColor: goal.color }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function BillsMockup() {
  return (
    <div className="space-y-2.5">
      {upcomingBills.map((bill) => (
        <div
          key={bill.name}
          className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3"
        >
          <div>
            <p className="text-sm font-medium">{bill.name}</p>
            <p className="text-xs text-muted-foreground">{bill.category}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold">{formatCurrency(bill.amount)}</p>
            <p
              className={`text-xs ${bill.status === 'due' ? 'text-warning' : 'text-muted-foreground'}`}
            >
              Due in {bill.dueIn}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

