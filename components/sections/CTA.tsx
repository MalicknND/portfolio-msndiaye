"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const CTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-accent/5" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-display">
            {t("cta.title1")}{" "}
            <span className="gradient-text">{t("cta.title2")}</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-10">
            {t("cta.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" asChild className="gap-2">
              <Link href="/contact">
                {t("cta.getInTouch")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href="mailto:ndiayemalicksiguy@gmail.com"
              className="p-4 glass-card rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/msnd/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass-card rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/MalicknND"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass-card rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(CTA);
