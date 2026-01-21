"use client";

import { memo, useMemo, useCallback } from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { NAV_ITEMS } from "@/config";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();

  // Mémoriser les items de nav traduits
  const translatedNavItems = useMemo(
    () => NAV_ITEMS.map((item) => ({
      ...item,
      label: t(item.labelKey),
    })),
    [t]
  );

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  const renderNavLink = (item: typeof translatedNavItems[0], isMobile: boolean = false) => {
    const isActive = pathname === item.href;
    
    const baseClasses = isMobile 
      ? `text-lg font-medium transition-colors py-3 px-4 rounded-xl hover:bg-primary/10 ${
          isActive ? "text-primary bg-primary/5" : "text-muted-foreground"
        }`
      : `relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg hover:bg-primary/5 ${
          isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
        }`;

    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={closeMobileMenu}
        className={baseClasses}
      >
        {item.label}
        {!isMobile && isActive && (
          <motion.span
            layoutId="activeSection"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </Link>
    );
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-card-strong border-b border-border/50 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="container px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/" 
                className="relative group block"
                onClick={(e) => {
                  // Si on est déjà sur la page d'accueil, scroll vers le haut
                  if (pathname === "/") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                <span className="text-2xl font-bold gradient-text font-display">MSN</span>
                <motion.span
                  className="absolute -right-2 -top-1"
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-3 h-3 text-primary" />
                </motion.span>
              </Link>
            </motion.div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {translatedNavItems.map((item) => renderNavLink(item))}
            </div>

            {/* Right side: Language + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitcher />
              <Button variant="default" size="sm" asChild className="gap-2">
                <Link href="/contact">
                  {t("nav.getInTouch")}
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </Button>
            </div>

            {/* Mobile: Language + Menu */}
            <div className="flex lg:hidden items-center gap-3">
              <LanguageSwitcher />
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl glass-card hover:bg-primary/10 transition-colors"
                aria-label="Toggle menu"
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
              onClick={closeMobileMenu}
            />
            
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-4 top-20 z-50 lg:hidden glass-card-strong border border-border/50 rounded-2xl shadow-premium overflow-hidden"
            >
              <nav className="p-6">
                <div className="flex flex-col gap-2">
                  {translatedNavItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {renderNavLink(item, true)}
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 pt-6 border-t border-border"
                >
                  <Button variant="hero" className="w-full" asChild>
                    <Link href="/contact" onClick={closeMobileMenu}>
                      {t("nav.getInTouch")}
                    </Link>
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(Navbar);
