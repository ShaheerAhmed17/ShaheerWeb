import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  dataAiHint?: string;
  demoLink?: string;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  details?: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  priceDescription?: string;
  features: string[];
  timeline: string;
  cta: string;
  isPopular?: boolean;
}

export interface FaqItemData {
  id: string;
  question: string;
  answer: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}
