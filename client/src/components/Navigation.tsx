import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location === "/";

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/products", label: t("nav.products") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/equipment", label: t("nav.equipment") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || !isHome
          ? "bg-[#2a2d3a] shadow-lg"
          : "bg-transparent",
      )}
    >
      {/* Top info bar - only visible when scrolled or not home */}
      <div
        className={cn(
          "border-b border-white/10 py-1.5 px-4 text-xs hidden md:block transition-all duration-300",
          scrolled || !isHome ? "opacity-100" : "opacity-70",
        )}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-6 text-gray-400">
            <span className="flex items-center gap-2">
              <Phone className="h-3 w-3 text-[#e8941a]" /> +30 231000000
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-3 w-3 text-[#e8941a]" /> info@yannos.gr
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-500">ISO 9001:2015 CERTIFIED</span>
            <button
              onClick={() => setLanguage(language === "en" ? "el" : "en")}
              className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
            >
              <Globe className="h-3 w-3" />
              <span>{language === "en" ? "GR" : "EN"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <img
            src="/images/logo.jpg"
            alt="Yannos Asfaltika"
            className="h-12 w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center space-x-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-base font-medium transition-colors duration-200",
                location === link.href
                  ? "text-[#e8941a] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-[#e8941a]"
                  : "text-gray-300 hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="default"
            size="default"
            className="ml-4 bg-[#e8941a] hover:bg-[#d4830f] text-white font-semibold rounded-sm px-6"
            asChild
          >
            <Link href="/contact">{t("nav.getQuote")}</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setLanguage(language === "en" ? "el" : "en")}
            className="p-2 text-gray-400"
          >
            <Globe className="h-5 w-5" />
          </button>
          <button
            className="p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#2a2d3a] absolute w-full shadow-lg">
          <nav className="flex flex-col p-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-3 text-sm font-medium rounded transition-colors",
                  location === link.href
                    ? "text-[#e8941a] bg-white/5"
                    : "text-gray-300 hover:bg-white/5 hover:text-white",
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 mt-2">
              <div className="flex flex-col space-y-2 text-sm text-gray-500 px-4">
                <span className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> +30 231000000
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> info@yannos.gr
                </span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
