// ============================================
// TYPES & INTERFACES CENTRALISÉS
// ============================================

import { LucideIcon } from "lucide-react";

// Navigation
export interface NavItem {
  labelKey: string;
  href: string;
  isRoute?: boolean;
}

// Social Links
export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  ariaLabel: string;
}

// Skills
export interface Skill {
  labelKey: string;
  icon: LucideIcon;
}

// Statistics
export interface Stat {
  value: string;
  labelKey: string;
}

// Technologies
export interface Technology {
  name: string;
  icon: LucideIcon;
  color: string;
  description: string;
}

// Projects
export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  stack: string[];
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
  color: string;
  image?: string;
}

// Experience
export interface Experience {
  id: string;
  type: "work" | "education";
  titleKey: string;
  companyKey: string;
  periodKey: string;
  descriptionKey: string;
  achievementKeys: string[];
}

// Testimonials
export interface Testimonial {
  id: string;
  quoteKey: string;
  name: string;
  roleKey: string;
  companyKey: string;
}

// Language
export type Language = "fr" | "en";

export interface TranslationKeys {
  [key: string]: string;
}
