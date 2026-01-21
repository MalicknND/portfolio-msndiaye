"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code2, Zap, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SKILLS, STATS } from "@/config";

// Composant mémorisé pour les stats
const StatItem = memo(({ value, label, index }: { value: string; label: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
    viewport={{ once: true }}
    className="text-center"
  >
    <div className="text-3xl lg:text-4xl font-bold gradient-text font-display mb-1">
      {value}
    </div>
    <div className="text-muted-foreground text-sm">{label}</div>
  </motion.div>
));
StatItem.displayName = "StatItem";

// Composant mémorisé pour les skills
const SkillBadge = memo(({ skill, index, t }: { skill: typeof SKILLS[0]; index: number; t: (key: string) => string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05, y: -2 }}
  >
    <Badge variant="tech" className="gap-2.5 py-2.5 px-5 text-sm">
      <skill.icon className="w-4 h-4" />
      {t(skill.labelKey)}
    </Badge>
  </motion.div>
));
SkillBadge.displayName = "SkillBadge";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Avatar / Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -100, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-lg mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 blur-3xl scale-110" />
              
              <div className="relative rounded-3xl overflow-hidden glass-card-strong border-gradient card-shine p-2">
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-secondary via-card to-secondary aspect-square flex items-center justify-center">
                  <motion.div 
                    className="text-[120px] lg:text-[150px] font-bold gradient-text font-display"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    M
                  </motion.div>
                </div>
              </div>

              <motion.div
                className="absolute -top-6 -right-6 p-5 glass-card-strong rounded-2xl border-gradient shadow-premium hidden sm:block"
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code2 className="w-7 h-7 text-primary" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 p-5 glass-card-strong rounded-2xl border-gradient shadow-premium hidden sm:block"
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Zap className="w-7 h-7 text-accent" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-10 p-4 glass-card-strong rounded-xl border-gradient shadow-premium hidden lg:block"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-5 h-5 text-primary" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 100, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="order-1 lg:order-2"
          >
            <motion.span 
              className="inline-flex items-center gap-2 text-primary font-medium mb-6 text-sm tracking-wider uppercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="w-12 h-[2px] bg-primary rounded-full" />
              {t("about.label")}
            </motion.span>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 font-display">
              {t("about.title1")}
              <br />
              <span className="gradient-text">{t("about.title2")}</span>
            </h2>
            
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed mb-10">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mb-10">
              {STATS.map((stat, index) => (
                <StatItem
                  key={stat.labelKey}
                  value={stat.value}
                  label={t(stat.labelKey)}
                  index={index}
                />
              ))}
            </div>

            {/* Skills badges */}
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill, index) => (
                <SkillBadge key={skill.labelKey} skill={skill} index={index} t={t} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);
