"use client";
import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { TESTIMONIALS } from "@/config";
import { Testimonial } from "@/types";

// Composant mémorisé pour chaque témoignage
const TestimonialCard = memo(({ testimonial, index, t }: {
  testimonial: Testimonial;
  index: number;
  t: (key: string) => string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true, amount: 0.2 }}
    whileHover={{ y: -4 }}
    className="group"
  >
    <div className="glass-card-strong rounded-2xl p-6 h-full flex flex-col transition-all duration-300 border-gradient hover:shadow-glow">
      {/* Quote icon */}
      <div className="mb-4">
        <Quote className="w-8 h-8 text-primary/40 group-hover:text-primary/60 transition-colors" />
      </div>

      {/* Quote text */}
      <blockquote className="text-muted-foreground flex-1 mb-6 italic">
      &quot;{t(testimonial.quoteKey)}&quot;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-medium text-sm">{testimonial.name}</p>
          <p className="text-muted-foreground text-xs">
            {t(testimonial.roleKey)}, {t(testimonial.companyKey)}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
));
TestimonialCard.displayName = "TestimonialCard";

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonialCards = useMemo(
    () => TESTIMONIALS.map((testimonial, index) => (
      <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} t={t} />
    )),
    [t]
  );

  return (
    <section id="testimonials" className="py-32 lg:py-40 relative">
      <div className="container px-4 sm:px-6 lg:px-8">
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
            {t("testimonials.label")}
            <span className="w-12 h-[2px] bg-primary rounded-full" />
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-display">
            {t("testimonials.title1")} <span className="gradient-text">{t("testimonials.title2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonialCards}
        </div>
      </div>
    </section>
  );
};

export default memo(Testimonials);
