import {
  FileCode2,
  Boxes,
  Database,
  Server,
  Container,
  GitBranch,
  Palette,
  Zap,
  Cloud,
  Layers,
  Github,
  Gitlab,
  Workflow,
  Share2,
  TableProperties,
} from "lucide-react";
import { Technology } from "@/types";

// ============================================
// CONFIGURATION DES TECHNOLOGIES
// Modifier ce fichier pour ajouter/modifier votre stack
// ============================================

export const TECHNOLOGIES: Technology[] = [
  {
    name: "React",
    icon: Boxes,
    color: "text-primary",
    description: "UI Library",
  },
  {
    name: "Next.js",
    icon: Zap,
    color: "text-foreground",
    description: "Framework",
  },
  {
    name: "TypeScript",
    icon: FileCode2,
    color: "text-blue-400",
    description: "Type Safety",
  },
  {
    name: "Node.js",
    icon: Server,
    color: "text-green-400",
    description: "Runtime",
  },
  {
    name: "Express",
    icon: Layers,
    color: "text-muted-foreground",
    description: "Backend",
  },
  {
    name: "Tailwind CSS",
    icon: Palette,
    color: "text-primary",
    description: "Styling",
  },
  {
    name: "PostgreSQL",
    icon: TableProperties,
    color: "text-blue-500",
    description: "Database",
  },
  {
    name: "MongoDB",
    icon: Database,
    color: "text-green-500",
    description: "NoSQL",
  },
  {
    name: "Supabase",
    icon: Cloud,
    color: "text-green-400",
    description: "BaaS",
  },
  {
    name: "GraphQL",
    icon: Share2,
    color: "text-pink-400",
    description: "API Query",
  },
  {
    name: "Docker",
    icon: Container,
    color: "text-blue-400",
    description: "DevOps",
  },
  {
    name: "AWS",
    icon: Cloud,
    color: "text-orange-400",
    description: "Cloud",
  },
  {
    name: "GitHub",
    icon: Github,
    color: "text-foreground",
    description: "Version Control",
  },
  {
    name: "GitLab",
    icon: Gitlab,
    color: "text-orange-500",
    description: "CI/CD",
  },
  {
    name: "CI/CD",
    icon: Workflow,
    color: "text-primary",
    description: "Pipeline",
  },
];