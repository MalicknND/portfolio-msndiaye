import { Experience } from "@/types";

// ============================================
// CONFIGURATION DES EXPÉRIENCES
// Modifier ce fichier pour ajouter/modifier vos expériences
// ============================================

export const EXPERIENCES: Experience[] = [
  {
    id: "fullstack-freelance",
    type: "work",
    titleKey: "exp.fullstack.title",
    companyKey: "exp.fullstack.company",
    periodKey: "exp.fullstack.period",
    descriptionKey: "exp.fullstack.description",
    achievementKeys: [
      "exp.fullstack.achievement1",
      "exp.fullstack.achievement2",
      "exp.fullstack.achievement3",
    ],
  },
  {
    id: "it-support",
    type: "work",
    titleKey: "exp.it.title",
    companyKey: "exp.it.company",
    periodKey: "exp.it.period",
    descriptionKey: "exp.it.description",
    achievementKeys: [
      "exp.it.achievement1",
      "exp.it.achievement2",
      "exp.it.achievement3",
    ],
  },
  {
    id: "education",
    type: "education",
    titleKey: "exp.education.title",
    companyKey: "exp.education.company",
    periodKey: "exp.education.period",
    descriptionKey: "exp.education.description",
    achievementKeys: [
      "exp.education.achievement1",
      "exp.education.achievement2",
      "exp.education.achievement3",
    ],
  },
];
