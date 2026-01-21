"use client";
import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { EXPERIENCES } from "@/config";
import type { Experience as ExperienceType } from "@/types";

// Composant mémorisé pour chaque expérience
const ExperienceCard = memo(({ exp, index, t, isLast }: {
  exp: ExperienceType;
  index: number;
  t: (key: string) => string;
  isLast: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true, amount: 0.3 }}
    className="relative pl-16 sm:pl-24 pb-16 last:pb-0"
  >
    {/* Timeline line */}
    {!isLast && (
      <div className="absolute left-[27px] sm:left-[39px] top-16 bottom-0 w-px bg-gradient-to-b from-primary/60 to-primary/20" />
    )}

    {/* Icon circle */}
    <div className="absolute left-2 sm:left-5 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-primary bg-background flex items-center justify-center">
      {exp.type === "work" ? (
        <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
      ) : (
        <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
      )}
    </div>

    {/* Content */}
    <div>
      {/* Title and period */}
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-1">
        <h3 className="text-lg sm:text-xl font-bold text-foreground">{t(exp.titleKey)}</h3>
        <span className="text-primary font-medium text-xs sm:text-sm">{t(exp.periodKey)}</span>
      </div>

      {/* Company */}
      <p className="text-muted-foreground text-xs sm:text-sm mb-4">{t(exp.companyKey)}</p>

      {/* Description */}
      <p className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">{t(exp.descriptionKey)}</p>

      {/* Achievements */}
      <ul className="space-y-3">
        {exp.achievementKeys.map((achievementKey, i) => (
          <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm sm:text-base">
            <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
            <span>{t(achievementKey)}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
));
ExperienceCard.displayName = "ExperienceCard";

const Experience = () => {
  const { t } = useLanguage();

  const experienceCards = useMemo(
    () => EXPERIENCES.map((exp, index) => (
      <ExperienceCard 
        key={exp.id} 
        exp={exp} 
        index={index} 
        t={t} 
        isLast={index === EXPERIENCES.length - 1}
      />
    )),
    [t]
  );

  return (
    <section id="experience" className="py-32 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent" />
      
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
            {t("experience.label")}
            <span className="w-12 h-[2px] bg-primary rounded-full" />
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-display">
            {t("experience.title1")} <span className="gradient-text">{t("experience.title2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("experience.subtitle")}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experienceCards}
        </div>
      </div>
    </section>
  );
};

export default memo(Experience);