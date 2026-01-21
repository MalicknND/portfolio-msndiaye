"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotFound() {
  const pathname = usePathname();
  const { language } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  const content = {
    fr: {
      title: "Page introuvable",
      subtitle: "Oups ! La page que vous recherchez n'existe pas ou a été déplacée.",
      home: "Retour à l'accueil",
      back: "Page précédente",
    },
    en: {
      title: "Page not found",
      subtitle: "Oops! The page you're looking for doesn't exist or has been moved.",
      home: "Back to home",
      back: "Go back",
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-pulse delay-1000" />

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-[10rem] sm:text-[14rem] font-bold leading-none gradient-text font-display select-none">
              404
            </span>
          </motion.div>

          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8"
          >
            <div className="inline-flex p-6 glass-card-strong rounded-full border-gradient">
              <Search className="w-12 h-12 text-primary" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mb-4 font-display"
          >
            {t.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-muted-foreground mb-10"
          >
            {t.subtitle}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild variant="hero" size="lg" className="gap-2">
              <Link href="/">
                <Home className="w-5 h-5" />
                {t.home}
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5" />
              {t.back}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
