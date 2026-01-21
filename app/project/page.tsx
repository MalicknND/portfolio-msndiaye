"use client";

import { motion } from "framer-motion";
import { Folder, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProjectPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 noise-overlay" />
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            className="w-24 h-24 mx-auto mb-8 rounded-3xl glass-card-strong border-gradient flex items-center justify-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Folder className="w-12 h-12 text-primary" />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-display">
            {t("projectPage.title")} <span className="gradient-text">{t("projectPage.title2")}</span>
          </h1>

          <p className="text-muted-foreground text-lg mb-10">
            {t("projectPage.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="heroOutline" size="lg" asChild className="gap-2">
              <Link href="/">
                <ArrowLeft className="w-4 h-4" />
                {t("projectPage.backHome")}
              </Link>
            </Button>
            <Button variant="hero" size="lg" asChild className="gap-2">
              <Link href="/projects">
                {t("projectPage.viewProjects")}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
