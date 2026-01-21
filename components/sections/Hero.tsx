"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Sparkles, Award } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Animated gradient orbs - disabled on mobile for performance */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(165 80% 58% / 0.15) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
            animate={{
              x: [0, 80, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(270 70% 65% / 0.12) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
            animate={{
              x: [0, -60, 0],
              y: [0, -80, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(165 80% 58% / 0.1) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
            animate={{
              x: [0, 40, 0],
              y: [0, -40, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      )}

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Spotlight effect - hidden on mobile for performance */}
      {!isMobile && <div className="spotlight absolute inset-0" />}

      <motion.div 
        style={{ y, opacity }}
        className="container relative z-10 px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-5xl mx-auto">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full glass-card border-gradient text-xs sm:text-sm font-medium">
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-primary" />
              </span>
              <span className="text-foreground/80 whitespace-nowrap">{t("hero.available")}</span>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary shrink-0" />
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4 sm:mb-6 font-display"
          >
            <span className="text-foreground">Malick Siguy Ndiaye</span>
            <br />
            <span className="gradient-text text-glow">{t("hero.title")}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm sm:text-lg lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2"
          >
            {t("hero.subtitle1")}{" "}
            <span className="text-foreground font-medium">{t("hero.subtitle2")}</span>,{" "}
            <span className="text-foreground font-medium">{t("hero.subtitle3")}</span>
            <br className="hidden sm:block" />
            {t("hero.subtitle4")}{" "}
            <span className="text-primary">Next.js</span>,{" "}
            <span className="text-primary">React</span> &{" "}
            <span className="text-primary">Node.js</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4"
          >
            <Button variant="hero" size="lg" asChild className="group w-full sm:w-auto text-sm sm:text-base">
              <Link href="/projects">
                {t("hero.viewProjects")}
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild className="w-full sm:w-auto text-sm sm:text-base">
              <Link href="/contact">{t("hero.contactMe")}</Link>
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center gap-6 sm:gap-8 mb-8 sm:mb-32"
          >
            <a
              href="https://github.com/MalicknND"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl glass-card border-gradient transition-all duration-300 hover:shadow-glow"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </a>
            <a
              href="https://www.linkedin.com/in/msnd/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl glass-card border-gradient transition-all duration-300 hover:shadow-glow"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </a>
            <a
              href="https://www.credly.com/users/msn/badges"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl glass-card border-gradient transition-all duration-300 hover:shadow-glow"
              aria-label="Credly Certifications"
            >
              <Award className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </a>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default Hero;
