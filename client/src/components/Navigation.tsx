import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/projects", label: "Projects" },
    { href: "/equipment", label: "Equipment" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-sm">
      {/* Top Bar - Industrial/Corporate feel */}
      <div className="bg-secondary text-secondary-foreground py-2 px-4 text-xs font-medium hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2">
              <Phone className="h-3 w-3 text-primary" /> +30 231000000
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-3 w-3 text-primary" /> info@yannos.gr
            </span>
          </div>
          <div className="flex space-x-4">
            <span>ISO 9001:2015 CERTIFIED</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="h-10 w-10 bg-primary flex items-center justify-center font-display font-bold text-white text-xl rounded-sm shadow-md group-hover:bg-primary/90 transition-colors">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl leading-none tracking-tight text-secondary">
              Yannos
            </span>
            <span className="text-xs text-muted-foreground font-semibold tracking-widest">
              ASFALTIKA
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-all duration-200 uppercase tracking-wide rounded-sm hover:text-primary",
                location === link.href
                  ? "text-primary border-b-2 border-primary bg-primary/5"
                  : "text-secondary hover:bg-muted",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="default"
            size="sm"
            className="ml-4 bg-primary hover:bg-primary/90 text-white font-bold uppercase rounded-sm shadow-md"
            asChild
          >
            <Link href="/contact">Get Quote</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-secondary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background absolute w-full shadow-xl animate-in slide-in-from-top-5">
          <nav className="flex flex-col p-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-3 text-sm font-medium rounded-md transition-colors uppercase",
                  location === link.href
                    ? "bg-primary/10 text-primary font-bold"
                    : "hover:bg-muted text-foreground",
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border mt-2">
              <div className="flex flex-col space-y-2 text-sm text-muted-foreground px-4">
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
