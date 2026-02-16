import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Founders", href: "#founders" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background shadow-card">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home">
          <img src={logo} alt="Menorah Financial Services" className="h-12 md:h-14" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold tracking-wide text-primary hover:text-primary/70 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="gradient-brand text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X className="text-primary" />
          ) : (
            <Menu className="text-primary" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="flex flex-col gap-4 p-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground font-semibold text-base hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="gradient-brand text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold text-center"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
