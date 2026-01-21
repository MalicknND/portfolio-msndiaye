// ============================================
// POINT D'ENTRÉE CENTRALISÉ DE LA CONFIGURATION
// Importer depuis "@/config" pour accéder à toutes les configs
// ============================================

export * from "./navigation";
export * from "./social";
export * from "./skills";
export * from "./technologies";
export * from "./projects";
export * from "./experiences";
export * from "./testimonials";

// Constantes globales
export const SITE_CONFIG = {
  name: "Malick Siguy Ndiaye",
  title: "Full Stack JavaScript Engineer",
  description: "I build scalable, high-performance web applications",
  url: "https://malick.dev",
  email: "contact@malick.dev",
} as const;
