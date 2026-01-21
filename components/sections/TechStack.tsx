"use client";
import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { TECHNOLOGIES } from "@/config";

// Composant mémorisé pour chaque tech card
const TechCard = memo(({ tech, index }: { tech: typeof TECHNOLOGIES[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true, amount: 0.2 }}
    className="flex flex-col items-center gap-4"
  >
    {/* Icon container */}
    <motion.div 
      className="w-20 h-20 rounded-2xl bg-secondary/50 border border-border/50 flex items-center justify-center transition-all duration-300 hover:bg-secondary/80 hover:border-primary/30"
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <tech.icon className={`w-9 h-9 ${tech.color}`} />
    </motion.div>
    
    {/* Text */}
    <div className="text-center">
      <p className="font-semibold text-foreground text-sm">{tech.name}</p>
      <p className="text-muted-foreground text-xs mt-0.5">{tech.description}</p>
    </div>
  </motion.div>
));
TechCard.displayName = "TechCard";

const TechStack = () => {
  const { t } = useLanguage();

  // Mémoriser le rendu des cartes
  const techCards = useMemo(
    () => TECHNOLOGIES.map((tech, index) => (
      <TechCard key={tech.name} tech={tech} index={index} />
    )),
    []
  );

  return (
    <section id="stack" className="py-32 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent" />
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-flex items-center gap-2 text-primary font-medium mb-6 text-sm tracking-wider uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="w-12 h-[2px] bg-primary rounded-full" />
            {t("stack.label")}
            <span className="w-12 h-[2px] bg-primary rounded-full" />
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-display">
            {t("stack.title1")} <span className="gradient-text">{t("stack.title2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("stack.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 lg:gap-12 max-w-5xl mx-auto">
          {techCards}
        </div>
      </div>
    </section>
  );
};

export default memo(TechStack);