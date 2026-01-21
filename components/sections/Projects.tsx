"use client";
import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowUpRight, Folder } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PROJECTS } from "@/config";
import { Project } from "@/types";

// Composant mémorisé pour chaque carte projet
const ProjectCard = memo(({ project, index, t }: { 
  project: Project; 
  index: number; 
  t: (key: string) => string;
}) => (
  <motion.article
    initial={{ opacity: 0, y: 60, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true, amount: 0.2 }}
    className="group relative"
  >
    <motion.div 
      className="glass-card-strong rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-500 border-gradient hover:shadow-premium"
      whileHover={{ y: -8 }}
    >
      <div className={`relative h-40 sm:h-48 lg:h-52 bg-gradient-to-br ${project.color} overflow-hidden`}>
        {project.image ? (
          <picture>
            <source srcSet={project.image} type="image/webp" />
            <img 
              src={project.image} 
              alt={t(project.titleKey)}
              loading="lazy"
              decoding="async"
              fetchPriority={index === 0 ? "high" : "low"}
              width={400}
              height={208}
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </picture>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="p-6 rounded-2xl glass-card"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Folder className="w-12 h-12 text-foreground/80" />
            </motion.div>
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {project.featured && (
          <div className="absolute top-4 right-4">
            <Badge variant="tech" className="shadow-lg">
              ✨ {t("projects.featured")}
            </Badge>
          </div>
        )}

        <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg glass-card hover:bg-primary/20 transition-colors"
            aria-label="Live demo"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass-card hover:bg-primary/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <div className="p-6 lg:p-8 flex-1 flex flex-col">
        <h3 className="text-xl lg:text-2xl font-bold mb-3 font-display group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
          {t(project.titleKey)}
          <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </h3>
        <p className="text-muted-foreground text-sm lg:text-base mb-6 flex-1 leading-relaxed">
          {t(project.descriptionKey)}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="glass" className="text-xs font-medium">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="default" size="sm" asChild className="gap-2 flex-1 sm:flex-none">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              {t("projects.liveDemo")}
            </a>
          </Button>
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild className="gap-2">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                {t("projects.code")}
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  </motion.article>
));
ProjectCard.displayName = "ProjectCard";

const Projects = () => {
  const { t } = useLanguage();

  const projectCards = useMemo(
    () => PROJECTS.map((project, index) => (
      <ProjectCard key={project.id} project={project} index={index} t={t} />
    )),
    [t]
  );

  return (
    <section id="projects" className="py-32 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
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
            {t("projects.label")}
            <span className="w-12 h-[2px] bg-primary rounded-full" />
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-display">
            {t("projects.title1")} <span className="gradient-text">{t("projects.title2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projectCards}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="heroOutline" size="lg" className="gap-2">
            {t("projects.viewAll")}
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Projects);
