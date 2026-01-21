# Portfolio - Malick Siguy Ndiaye

Portfolio professionnel moderne développé avec **Next.js 15**, **TypeScript**, et **TailwindCSS**. Design premium avec animations fluides, support multilingue (FR/EN), et optimisé pour le SEO et les performances.

## 🚀 Technologies

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 3.4
- **UI Components**: shadcn/ui (Radix UI)
- **Animations**: Framer Motion
- **State Management**: React Context API
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Fonts**: Inter, Space Grotesk, JetBrains Mono

## 📋 Prérequis

- Node.js 18+ 
- npm ou yarn ou pnpm

## 🛠️ Installation

```bash
# Cloner le repository
git clone https://github.com/MalicknND/portfolio-msndiaye.git
cd portfolio-msndiaye

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📜 Scripts disponibles

```bash
# Développement
npm run dev          # Lance le serveur de développement

# Production
npm run build        # Build de production
npm run start        # Lance le serveur de production

# Qualité de code
npm run lint         # Vérifie le code avec ESLint
```

## 📁 Structure du projet

```
msndiaye-nextjs/
├── app/                    # App Router (Next.js 15)
│   ├── layout.tsx         # Layout racine avec providers
│   ├── page.tsx           # Page d'accueil
│   ├── globals.css        # Styles globaux
│   ├── favicon.ico        # Favicon
│   ├── projects/          # Route /projects
│   ├── contact/           # Route /contact
│   ├── blog/              # Route /blog
│   ├── project/           # Route /project
│   └── privacy-policy/    # Route /privacy-policy
│
├── components/             # Composants React
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Sections de la page d'accueil
│   ├── ui/                # Composants UI (shadcn/ui)
│   ├── common/            # Composants communs
│   └── providers.tsx      # Providers (QueryClient, Language, etc.)
│
├── config/                 # Configuration
│   ├── navigation.ts      # Items de navigation
│   ├── projects.ts        # Liste des projets
│   ├── experiences.ts     # Expériences professionnelles
│   ├── skills.ts          # Compétences
│   ├── technologies.ts    # Technologies
│   ├── testimonials.ts    # Témoignages
│   └── social.ts          # Liens sociaux
│
├── contexts/              # Contextes React
│   └── LanguageContext.tsx # Gestion multilingue
│
├── hooks/                 # Hooks personnalisés
│   ├── use-mobile.tsx     # Détection mobile
│   └── use-toast.ts       # Toast notifications
│
├── lib/                   # Utilitaires
│   └── utils.ts           # Fonctions utilitaires (cn, etc.)
│
├── locales/               # Traductions
│   ├── fr.ts              # Français
│   ├── en.ts              # Anglais
│   └── index.ts           # Export des traductions
│
├── public/                # Assets statiques
│   ├── projects/          # Images des projets
│   ├── robots.txt         # Configuration robots
│   ├── sitemap.xml        # Sitemap
│   └── site.webmanifest   # Web manifest
│
├── types/                 # Types TypeScript
│   └── index.ts           # Types et interfaces
│
├── tailwind.config.ts     # Configuration Tailwind
├── tsconfig.json          # Configuration TypeScript
├── next.config.ts         # Configuration Next.js
└── package.json           # Dépendances
```

## 🎨 Personnalisation

### Ajouter un projet

Éditez `config/projects.ts` :

```typescript
export const PROJECTS: Project[] = [
  {
    id: "mon-projet",
    titleKey: "project.monProjet.title",
    descriptionKey: "project.monProjet.description",
    stack: ["React", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/user/repo", // Optionnel
    featured: true,
    color: "from-blue-500/20 to-purple-500/20",
    image: "/projects/mon-projet.webp",
  },
];
```

Ajoutez les traductions dans `locales/fr.ts` et `locales/en.ts` :

```typescript
"project.monProjet.title": "Mon Projet",
"project.monProjet.description": "Description du projet...",
```

### Modifier les couleurs

Éditez `app/globals.css` pour changer les variables CSS :

```css
:root {
  --primary: 165 80% 58%;        /* Couleur principale */
  --accent: 270 70% 65%;         /* Couleur d'accent */
  --background: 240 10% 4%;      /* Fond */
  --foreground: 0 0% 98%;        /* Texte */
}
```

### Ajouter une section

1. Créez un composant dans `components/sections/`
2. Importez-le dans `app/page.tsx`
3. Ajoutez-le dans le JSX

## 🌐 Internationalisation

Le projet supporte le français et l'anglais via `LanguageContext`.

### Ajouter une traduction

1. Ajoutez la clé dans `locales/fr.ts` et `locales/en.ts`
2. Utilisez-la avec `const { t } = useLanguage(); t("ma.cle")`

### Ajouter une langue

1. Créez `locales/es.ts` (exemple pour l'espagnol)
2. Ajoutez le type dans `types/index.ts` : `export type Language = "fr" | "en" | "es";`
3. Exportez dans `locales/index.ts`
4. Ajoutez le bouton dans `components/LanguageSwitcher.tsx`

## 🔧 Configuration

### Google Analytics

L'ID de tracking est dans `app/layout.tsx` :

```typescript
<Script src="https://www.googletagmanager.com/gtag/js?id=G-NBHXMWRQT7" />
```

Pour changer l'ID, modifiez cette ligne.

### Métadonnées SEO

Éditez `app/layout.tsx` dans la section `metadata` :

```typescript
export const metadata: Metadata = {
  title: "Votre titre",
  description: "Votre description",
  // ...
};
```

## 🚀 Déploiement

### Vercel (Recommandé)

1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Déployez !

### Autres plateformes

```bash
# Build
npm run build

# Le dossier .next contient l'application prête pour la production
```

## 📝 Variables d'environnement

Créez un fichier `.env.local` pour les variables d'environnement :

```env
# Google Analytics (optionnel, déjà dans le code)
NEXT_PUBLIC_GA_ID=G-NBHXMWRQT7

# URL du site
NEXT_PUBLIC_SITE_URL=https://portfolio.msndiaye.com
```

## 🐛 Dépannage

### Erreur de build

```bash
# Nettoyer et réinstaller
rm -rf node_modules .next
npm install
npm run build
```

### Problème de styles

Vérifiez que `tailwind.config.ts` inclut tous les chemins nécessaires dans `content`.

### Images non trouvées

Assurez-vous que les images sont dans `public/` et utilisent des chemins relatifs (`/image.webp`).

## 📚 Documentation complète

Consultez [DOCUMENTATION.md](./DOCUMENTATION.md) pour la documentation technique complète.

## 🤝 Contribution

Ce projet est un portfolio personnel. Pour toute suggestion ou question, n'hésitez pas à ouvrir une issue.

## 📄 Licence

Tous droits réservés - Malick Siguy Ndiaye

## 👤 Auteur

**Malick Siguy Ndiaye**
- Portfolio: [portfolio.msndiaye.com](https://portfolio.msndiaye.com)
- GitHub: [@MalicknND](https://github.com/MalicknND)
- LinkedIn: [msnd](https://linkedin.com/in/msnd)
- Email: ndiayemalicksiguy@gmail.com

---

⭐ Si ce projet vous a aidé, n'hésitez pas à mettre une étoile !
