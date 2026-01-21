"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 p-1 rounded-xl glass-card">
      <button
        onClick={() => setLanguage("en")}
        className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 ${
          language === "en"
            ? "text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {language === "en" && (
          <motion.span
            layoutId="langIndicator"
            className="absolute inset-0 bg-primary rounded-lg"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>
      <button
        onClick={() => setLanguage("fr")}
        className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 ${
          language === "fr"
            ? "text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {language === "fr" && (
          <motion.span
            layoutId="langIndicator"
            className="absolute inset-0 bg-primary rounded-lg"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10">FR</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
