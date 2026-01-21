import { Code2, Zap, Users, Server, TestTube } from "lucide-react";
import { Skill, Stat } from "@/types";

// ============================================
// CONFIGURATION DES COMPÉTENCES
// Modifier ce fichier pour mettre à jour vos skills
// ============================================

export const SKILLS: Skill[] = [
  { labelKey: "about.cleanCode", icon: Code2 },
  { labelKey: "about.performance", icon: Zap },
  { labelKey: "about.uxFirst", icon: Users },
  { labelKey: "about.api", icon: Server },
  { labelKey: "about.tests", icon: TestTube },
];

export const STATS: Stat[] = [
  { value: "3+", labelKey: "about.years" },
  { value: "20+", labelKey: "about.projects" },
  { value: "15+", labelKey: "about.clients" },
];
