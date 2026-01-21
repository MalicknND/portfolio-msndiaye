import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "@/components/providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";
import CookieConsent from "@/components/CookieConsent";
import ScrollToTop from "@/components/common/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.msndiaye.com"),
  title: "Malick Siguy Ndiaye | Développeur Full Stack React, Next.js, Node.js",
  description:
    "Portfolio officiel de Malick Siguy Ndiaye, développeur Full Stack JavaScript basé à Paris. React, Next.js, TypeScript, Node.js. Projets, expérience et contact.",
  keywords: [
    "Malick Siguy Ndiaye",
    "Malick Ndiaye",
    "développeur full stack",
    "freelance",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "JavaScript",
    "Paris",
    "développeur web",
    "création site web",
    "application web",
  ],
  authors: [{ name: "Malick Siguy Ndiaye" }],
  creator: "Malick Siguy Ndiaye",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://portfolio.msndiaye.com/",
    title: "Malick Siguy Ndiaye | Développeur Full Stack JavaScript",
    description:
      "Portfolio officiel de Malick Siguy Ndiaye. Expertise en React, Next.js, TypeScript et Node.js. Projets, expérience et contact.",
    siteName: "Malick Siguy Ndiaye - Portfolio",
    locale: "fr_FR",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Malick Siguy Ndiaye",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malick Siguy Ndiaye | Développeur Full Stack JavaScript",
    description:
      "Portfolio officiel de Malick Siguy Ndiaye. React, Next.js, TypeScript, Node.js.",
    images: ["/favicon.ico"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Malick Siguy Ndiaye",
  },
  applicationName: "Malick Siguy Ndiaye",
  other: {
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#8B5CF6",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Malick Siguy Ndiaye",
  url: "https://portfolio.msndiaye.com/",
  image: "https://portfolio.msndiaye.com/favicon.ico",
  jobTitle: "Développeur Full Stack JavaScript",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  email: "ndiayemalicksiguy@gmail.com",
  telephone: "+33766731263",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "JavaScript",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "GraphQL",
  ],
  sameAs: ["https://github.com/MalicknND", "https://linkedin.com/in/msnd"],
};

export function generateViewport() {
  return {
    themeColor: "#8B5CF6",
  };
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Portfolio de Malick Siguy Ndiaye",
  url: "https://portfolio.msndiaye.com/",
  inLanguage: "fr-FR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Google Analytics avec consent mode (GDPR compliant) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NBHXMWRQT7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Default consent to denied (GDPR compliant)
            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });
            
            gtag('js', new Date());
            gtag('config', 'G-NBHXMWRQT7');
          `}
        </Script>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <Providers>
          <div className="min-h-screen bg-background">
            <ScrollToTop />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <BackToTop />
            <CookieConsent />
          </div>
        </Providers>
      </body>
    </html>
  );
}
