import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";
import CookieConsent from "@/components/CookieConsent";
import ScrollToTop from "@/components/common/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Malick Siguy Ndiaye - Full Stack Developer",
  description: "Portfolio of Malick Siguy Ndiaye, Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <Providers>
          <div className="min-h-screen bg-background">
            <ScrollToTop />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <BackToTop />
            <CookieConsent />
          </div>
        </Providers>
      </body>
    </html>
  );
}
