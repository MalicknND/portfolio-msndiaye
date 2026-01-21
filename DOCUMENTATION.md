# Documentation Technique - Portfolio Next.js

Documentation complète pour la maintenance et le développement du portfolio.

## 📑 Table des matières

1. [Architecture](#architecture)
2. [Composants](#composants)
3. [Routing](#routing)
4. [Styling](#styling)
5. [State Management](#state-management)
6. [Internationalisation](#internationalisation)
7. [Performance](#performance)
8. [SEO](#seo)
9. [Déploiement](#déploiement)
10. [Troubleshooting](#troubleshooting)

---

## 🏗️ Architecture

### App Router (Next.js 15)

Le projet utilise le **App Router** de Next.js 15, la nouvelle architecture de routing basée sur les dossiers.

```
app/
├── layout.tsx          # Layout racine (Server Component)
├── page.tsx            # Page d'accueil (Client Component)
├── globals.css         # Styles globaux
└── [route]/
    └── page.tsx        # Page de la route
```

### Server vs Client Components

**Server Components** (par défaut) :
- Rendu côté serveur
- Pas d'accès aux hooks React
- Pas d'événements utilisateur
- Meilleures performances

**Client Components** (`"use client"`) :
- Rendu côté client
- Accès aux hooks, événements, APIs browser
- Utilisé pour : interactions, animations, state local

### Structure des composants

```
components/
├── layout/             # Composants de layout
│   ├── Navbar.tsx     # Navigation principale
│   └── Footer.tsx      # Pied de page
├── sections/           # Sections de la page d'accueil
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── TechStack.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Testimonials.tsx
│   └── CTA.tsx
├── ui/                 # Composants UI réutilisables (shadcn/ui)
└── common/             # Composants communs
    └── ScrollToTop.tsx
```

---

## 🧩 Composants

### Layout Components

#### `Navbar.tsx`

Navigation principale avec :
- Menu responsive (mobile/desktop)
- Indicateur de page active
- Switch de langue
- Animation au scroll

**Props**: Aucune (utilise `usePathname()` et `useLanguage()`)

**Usage**:
```tsx
import Navbar from "@/components/layout/Navbar";

// Dans layout.tsx
<Navbar />
```

#### `Footer.tsx`

Pied de page avec :
- Liens sociaux
- Copyright
- Lien vers privacy policy

**Props**: Aucune

### Section Components

Tous les composants de section suivent le même pattern :

```tsx
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const SectionName = () => {
  const { t } = useLanguage();
  
  return (
    <section id="section-id" className="py-32">
      {/* Contenu */}
    </section>
  );
};

export default SectionName;
```

#### `Hero.tsx`

Section hero avec :
- Animations parallax au scroll
- Gradient orbs animés
- CTA buttons
- Stats

**Animations**:
- `useScroll` et `useTransform` de Framer Motion
- Orbs animés (désactivés sur mobile pour performance)

#### `Projects.tsx`

Affichage des projets avec :
- Cards animées
- Images avec lazy loading
- Liens vers live demo et GitHub

**Data source**: `config/projects.ts`

### UI Components (shadcn/ui)

Tous les composants UI sont dans `components/ui/` et suivent les conventions shadcn/ui.

**Composants principaux**:
- `Button` - Boutons avec variants
- `Card` - Cards avec glassmorphism
- `Dialog` - Modales
- `Toast` - Notifications
- Et plus...

**Usage**:
```tsx
import { Button } from "@/components/ui/button";

<Button variant="default" size="lg">
  Cliquez-moi
</Button>
```

---

## 🛣️ Routing

### Routes disponibles

| Route             | Fichier                       | Description                  |
| ----------------- | ----------------------------- | ---------------------------- |
| `/`               | `app/page.tsx`                | Page d'accueil               |
| `/projects`       | `app/projects/page.tsx`       | Liste des projets            |
| `/contact`        | `app/contact/page.tsx`        | Formulaire de contact        |
| `/blog`           | `app/blog/page.tsx`           | Blog (coming soon)           |
| `/project`        | `app/project/page.tsx`        | Page projet individuel       |
| `/privacy-policy` | `app/privacy-policy/page.tsx` | Politique de confidentialité |
| `*`               | `app/not-found.tsx`           | Page 404                     |

### Navigation

Utilisez `next/link` pour la navigation :

```tsx
import Link from "next/link";

<Link href="/projects">Projets</Link>
```

Pour la navigation programmatique :

```tsx
"use client";
import { useRouter } from "next/navigation";

const router = useRouter();
router.push("/projects");
```

### Active Link

Le `Navbar` détecte automatiquement la page active avec `usePathname()`.

---

## 🎨 Styling

### TailwindCSS

Configuration dans `tailwind.config.ts` :

```typescript
export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        // ...
      },
    },
  },
}
```

### Variables CSS

Définies dans `app/globals.css` :

```css
:root {
  --primary: 165 80% 58%;
  --accent: 270 70% 65%;
  --background: 240 10% 4%;
  /* ... */
}
```

### Classes personnalisées

**Glassmorphism**:
```tsx
<div className="glass-card">      // Effet verre léger
<div className="glass-card-strong"> // Effet verre fort
```

**Gradients**:
```tsx
<span className="gradient-text">Texte avec gradient</span>
<div className="mesh-gradient">   // Fond mesh gradient
```

**Animations**:
```tsx
<div className="animate-fade-up">  // Fade up
<div className="animate-float">    // Float animation
```

### Responsive Design

Breakpoints Tailwind :
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

**Usage**:
```tsx
<div className="text-sm md:text-base lg:text-lg">
  Texte responsive
</div>
```

---

## 🔄 State Management

### Language Context

Gestion de la langue via `LanguageContext` :

```tsx
"use client";
import { useLanguage } from "@/contexts/LanguageContext";

const MyComponent = () => {
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <div>
      <p>{t("my.key")}</p>
      <button onClick={() => setLanguage("en")}>EN</button>
    </div>
  );
};
```

**Storage**: LocalStorage (`portfolio-language`)

### React Query

Pour les futures requêtes API :

```tsx
import { useQuery } from "@tanstack/react-query";

const { data, isLoading } = useQuery({
  queryKey: ["projects"],
  queryFn: fetchProjects,
});
```

### Local State

Pour le state local, utilisez `useState` :

```tsx
const [isOpen, setIsOpen] = useState(false);
```

---

## 🌍 Internationalisation

### Structure

```
locales/
├── fr.ts    # Traductions françaises
├── en.ts    # Traductions anglaises
└── index.ts # Export
```

### Ajouter une traduction

1. **Ajouter la clé dans les fichiers de locale** :

```typescript
// locales/fr.ts
export const fr: TranslationKeys = {
  "ma.section.cle": "Texte en français",
};

// locales/en.ts
export const en: TranslationKeys = {
  "ma.section.cle": "Text in English",
};
```

2. **Utiliser dans un composant** :

```tsx
const { t } = useLanguage();
<p>{t("ma.section.cle")}</p>
```

### Format des clés

Organisation hiérarchique :
- `nav.*` - Navigation
- `hero.*` - Section hero
- `about.*` - Section about
- `project.*` - Projets
- etc.

### Ajouter une langue

1. Créer `locales/es.ts` (exemple)
2. Mettre à jour `types/index.ts` :
```typescript
export type Language = "fr" | "en" | "es";
```
3. Exporter dans `locales/index.ts`
4. Ajouter le bouton dans `LanguageSwitcher.tsx`

---

## ⚡ Performance

### Optimisations implémentées

1. **Images** :
   - Format WebP
   - Lazy loading
   - Optimisation Next.js Image (si utilisé)

2. **Code Splitting** :
   - Automatique avec App Router
   - Lazy loading des composants lourds

3. **Animations** :
   - Désactivées sur mobile (performance)
   - Utilisation de `will-change` CSS

4. **Fonts** :
   - Google Fonts optimisées
   - `display: swap`

### Mesures de performance

```bash
# Build avec analyse
npm run build

# Vérifier le bundle size
npm run build -- --analyze
```

### Lighthouse

Objectifs :
- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## 🔍 SEO

### Métadonnées

Configurées dans `app/layout.tsx` :

```typescript
export const metadata: Metadata = {
  title: "Titre",
  description: "Description",
  openGraph: { /* ... */ },
  twitter: { /* ... */ },
};
```

### Structured Data (JSON-LD)

Données structurées pour :
- Person (auteur)
- WebSite

### Sitemap

Fichier statique : `public/sitemap.xml`

Pour un sitemap dynamique, créez `app/sitemap.ts` :

```typescript
export default function sitemap() {
  return [
    {
      url: 'https://portfolio.msndiaye.com',
      lastModified: new Date(),
    },
  ];
}
```

### Robots.txt

Fichier : `public/robots.txt`

---

## 🚀 Déploiement

### Vercel (Recommandé)

1. **Connecter le repo** :
   - Import depuis GitHub
   - Vercel détecte Next.js automatiquement

2. **Variables d'environnement** (si nécessaire) :
   ```
   NEXT_PUBLIC_SITE_URL=https://portfolio.msndiaye.com
   ```

3. **Build Settings** :
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Autres plateformes

#### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Ou utiliser le plugin Next.js

#### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

### Pré-déploiement

Checklist :
- [ ] `npm run build` réussit
- [ ] Toutes les images sont optimisées
- [ ] Variables d'environnement configurées
- [ ] Sitemap à jour
- [ ] Robots.txt correct
- [ ] Métadonnées complètes

---

## 🐛 Troubleshooting

### Erreurs communes

#### 1. Module not found

```bash
# Solution
rm -rf node_modules .next
npm install
```

#### 2. Type errors

```bash
# Vérifier TypeScript
npx tsc --noEmit
```

#### 3. Styles non appliqués

Vérifier `tailwind.config.ts` :
```typescript
content: [
  "./app/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
]
```

#### 4. Images non trouvées

- Vérifier que les images sont dans `public/`
- Utiliser des chemins absolus : `/image.webp`
- Pas de `@/public/...`

#### 5. Hydration errors

- Vérifier les différences SSR/CSR
- Utiliser `suppressHydrationWarning` si nécessaire
- Éviter `window` dans Server Components

### Debug

#### Mode développement

```bash
npm run dev
# Ouvrir http://localhost:3000
```

#### Logs

```tsx
// Client Component
console.log("Debug:", data);

// Server Component
console.log("Server:", data);
```

#### React DevTools

Installer l'extension pour inspecter les composants.

---

## 📚 Ressources

### Documentation officielle

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

### Composants UI

- [shadcn/ui](https://ui.shadcn.com)
- [Radix UI](https://www.radix-ui.com)

### Outils

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [ESLint Rules](https://eslint.org/docs/rules/)

---

## 🔐 Sécurité

### Bonnes pratiques

1. **Variables d'environnement** :
   - Ne jamais commiter `.env.local`
   - Utiliser `NEXT_PUBLIC_*` pour le client

2. **Dépendances** :
   - Mettre à jour régulièrement
   - `npm audit` pour vérifier les vulnérabilités

3. **Content Security Policy** :
   - Configurée dans `next.config.ts` si nécessaire

---

## 📝 Maintenance

### Mises à jour régulières

1. **Dépendances** :
```bash
npm outdated
npm update
```

2. **Next.js** :
```bash
npm install next@latest
```

3. **Audit de sécurité** :
```bash
npm audit
npm audit fix
```

### Backup

- Sauvegarder régulièrement le code
- Versionner avec Git
- Backup de la base de données (si applicable)

---

## 🎯 Roadmap

### Améliorations futures

- [ ] Mode sombre
- [ ] Blog fonctionnel avec MDX
- [ ] Page détaillée pour chaque projet
- [ ] Tests unitaires (Jest + React Testing Library)
- [ ] E2E tests (Playwright)
- [ ] Analytics dashboard
- [ ] Formulaire de contact fonctionnel (API)

---

## 📞 Support

Pour toute question ou problème :
- Email: ndiayemalicksiguy@gmail.com
- GitHub Issues: [Créer une issue](https://github.com/MalicknND/portfolio/issues)

---

**Dernière mise à jour**: Janvier 2026
