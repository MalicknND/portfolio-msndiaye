import { Project } from "@/types";

// ============================================
// CONFIGURATION DES PROJETS
// Modifier ce fichier pour ajouter/modifier vos projets
// ============================================

export const PROJECTS: Project[] = [
  {
    id: "home-experts",
    titleKey: "project.homeExperts.title",
    descriptionKey: "project.homeExperts.description",
    stack: ["React", "TypeScript", "Shadcn/ui", "Radix UI", "Tailwind CSS"],
    liveUrl: "https://home-experts.fr/",
    featured: true,
    color: "from-teal-500/20 to-amber-500/20",
    image: "/projects/home-experts.webp",
  },
  {
    id: "vedette-senegal",
    titleKey: "project.vedette.title",
    descriptionKey: "project.vedette.description",
    stack: ["React", "TypeScript", "Tailwind CSS", "WhatsApp API"],
    liveUrl: "https://www.vedettesenegal.com/",
    featured: true,
    color: "from-amber-700/20 to-stone-600/20",
    image: "/projects/vedette-senegal.webp",
  },
];

// Helper pour récupérer les projets featured
export const getFeaturedProjects = () =>
  PROJECTS.filter((project) => project.featured);

// Helper pour récupérer un projet par ID
export const getProjectById = (id: string) =>
  PROJECTS.find((project) => project.id === id);
