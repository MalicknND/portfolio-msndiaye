import { NavItem } from "@/types";

// ============================================
// CONFIGURATION DE LA NAVIGATION
// Modifier ce fichier pour ajouter/modifier les liens
// ============================================

export const NAV_ITEMS: NavItem[] = [
  { labelKey: "nav.projects", href: "/projects", isRoute: true },
  { labelKey: "nav.blog", href: "/blog", isRoute: true },
  { labelKey: "nav.contact", href: "/contact", isRoute: true },
];
