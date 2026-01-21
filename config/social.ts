import { Github, Linkedin, Mail, Award } from "lucide-react";
import { SocialLink } from "@/types";

// ============================================
// CONFIGURATION DES LIENS SOCIAUX
// Modifier ce fichier pour mettre à jour vos liens
// ============================================

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/MalicknND",
    icon: Github,
    ariaLabel: "GitHub Profile",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/msnd/",
    icon: Linkedin,
    ariaLabel: "LinkedIn Profile",
  },
  {
    name: "Credly",
    url: "https://www.credly.com/users/msn/badges",
    icon: Award,
    ariaLabel: "Credly Certifications",
  },
  {
    name: "Email",
    url: "mailto:ndiayemalicksiguy@gmail.com",
    icon: Mail,
    ariaLabel: "Send Email",
  },
];

// Email de contact
export const CONTACT_EMAIL = "ndiayemalicksiguy@gmail.com";
