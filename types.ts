import type { ReactNode } from 'react';

export interface Prize {
  category: string;
  division?: string;
  value: string;
  winners: string;
  details: string[];
}

export interface Judge {
  name: string;
  affiliation: string;
  description?: string;
}

export interface Sponsor {
  name: string;
  tier: 'Platinum' | 'Gold' | 'Silver';
}

export interface ImpactStat {
  value: string;
  label: string;
}

export interface Tutorial {
  title: string;
  description: string;
  links: { name: string; url: string; }[];
}

export interface JudgingCriterion {
  title: string;
  description: string;
}