"use client";

import { memo } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { SOCIAL_LINKS } from "@/config";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="text-xl font-bold gradient-text font-display">MSN</Link>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Malick Siguy Ndiaye. {t("footer.rights")}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith("mailto") ? undefined : "_blank"}
                rel={link.url.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                aria-label={link.ariaLabel}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <Link
            href="/privacy-policy"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("footer.privacyPolicy")}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
