"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Politique de Confidentialité",
      lastUpdate: "Dernière mise à jour : Janvier 2026",
      back: "Retour à l'accueil",
      sections: [
        {
          title: "1. Introduction",
          content:
            "Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles lorsque vous visitez notre site web malickndiaye.dev.",
        },
        {
          title: "2. Données collectées",
          content:
            "Nous collectons des données de navigation anonymes via Google Analytics pour comprendre comment les visiteurs utilisent notre site. Ces données incluent : pages visitées, durée de visite, type d'appareil, localisation géographique approximative, et source de trafic.",
        },
        {
          title: "3. Cookies",
          content:
            "Nous utilisons des cookies analytiques (Google Analytics) uniquement après votre consentement explicite. Ces cookies nous aident à améliorer l'expérience utilisateur. Vous pouvez retirer votre consentement à tout moment en supprimant vos cookies de navigation.",
        },
        {
          title: "4. Utilisation des données",
          content:
            "Les données collectées sont utilisées exclusivement pour : analyser le trafic du site, améliorer le contenu et l'expérience utilisateur, et comprendre les tendances d'utilisation. Nous ne vendons ni ne partageons vos données avec des tiers à des fins commerciales.",
        },
        {
          title: "5. Vos droits (RGPD)",
          content:
            "Conformément au RGPD, vous disposez des droits suivants : droit d'accès, de rectification, d'effacement, de limitation du traitement, et de portabilité de vos données. Pour exercer ces droits, contactez-nous à ndiayemalicksiguy@gmail.com.",
        },
        {
          title: "6. Sécurité",
          content:
            "Nous prenons la sécurité de vos données au sérieux et utilisons des mesures techniques appropriées pour protéger vos informations contre tout accès non autorisé.",
        },
        {
          title: "7. Contact",
          content:
            "Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter à : ndiayemalicksiguy@gmail.com",
        },
      ],
    },
    en: {
      title: "Privacy Policy",
      lastUpdate: "Last updated: January 2026",
      back: "Back to home",
      sections: [
        {
          title: "1. Introduction",
          content:
            "This privacy policy explains how we collect, use, and protect your personal data when you visit our website malickndiaye.dev.",
        },
        {
          title: "2. Data Collected",
          content:
            "We collect anonymous browsing data through Google Analytics to understand how visitors use our site. This data includes: pages visited, visit duration, device type, approximate geographic location, and traffic source.",
        },
        {
          title: "3. Cookies",
          content:
            "We use analytical cookies (Google Analytics) only after your explicit consent. These cookies help us improve user experience. You can withdraw your consent at any time by deleting your browser cookies.",
        },
        {
          title: "4. Use of Data",
          content:
            "Collected data is used exclusively to: analyze site traffic, improve content and user experience, and understand usage trends. We do not sell or share your data with third parties for commercial purposes.",
        },
        {
          title: "5. Your Rights (GDPR)",
          content:
            "Under GDPR, you have the following rights: right of access, rectification, erasure, restriction of processing, and data portability. To exercise these rights, contact us at ndiayemalicksiguy@gmail.com.",
        },
        {
          title: "6. Security",
          content:
            "We take data security seriously and use appropriate technical measures to protect your information against unauthorized access.",
        },
        {
          title: "7. Contact",
          content:
            "For any questions regarding this privacy policy, you can contact us at: ndiayemalicksiguy@gmail.com",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-16">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="mb-12">
              <Button asChild variant="ghost" size="sm" className="mb-6 gap-2">
                <Link href="/">
                  <ArrowLeft className="w-4 h-4" />
                  {t.back}
                </Link>
              </Button>

              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                  <Shield className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold font-display">
                    {t.title}
                  </h1>
                  <p className="text-muted-foreground mt-1">{t.lastUpdate}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {t.sections.map((section, index) => (
                <motion.section
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 rounded-2xl"
                >
                  <h2 className="text-xl font-semibold mb-3 text-foreground">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </motion.section>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
