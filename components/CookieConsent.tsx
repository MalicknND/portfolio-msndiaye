"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const CONSENT_KEY = "cookie-consent";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Nous utilisons des cookies",
      description:
        "Nous utilisons des cookies pour analyser le trafic et améliorer votre expérience.",
      privacyLink: "Politique de confidentialité",
      accept: "Accepter",
      decline: "Refuser",
    },
    en: {
      title: "We use cookies",
      description:
        "We use cookies to analyze traffic and improve your experience.",
      privacyLink: "Privacy Policy",
      accept: "Accept",
      decline: "Decline",
    },
  };

  const t = content[language];

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === null) {
      // No consent decision yet, show banner
      setShowBanner(true);
    } else if (consent === "accepted") {
      // User accepted, enable GA
      enableGA();
    }
    // If declined, GA stays disabled
  }, []);

  const enableGA = () => {
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  const disableGA = () => {
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  };

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    enableGA();
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    disableGA();
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50"
        >
          <div className="glass-card-strong border border-border/50 rounded-2xl p-5 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0">
                <Cookie className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{t.title}</h3>
                  <button
                    onClick={handleDecline}
                    className="p-1 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                  {t.description}{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-primary hover:underline font-medium"
                  >
                    {t.privacyLink}
                  </Link>
                </p>
                <div className="flex gap-3">
                  <Button
                    onClick={handleAccept}
                    size="sm"
                    className="flex-1"
                  >
                    {t.accept}
                  </Button>
                  <Button
                    onClick={handleDecline}
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    {t.decline}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
