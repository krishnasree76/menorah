import logo from "@/assets/logo.png";
import { Globe, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="gradient-navy py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <img 
              src={logo} 
              alt="Menorah" 
              className="h-12 mb-4 object-contain" 
            />
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Lighting Your Dream Home. We are there when you are needed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-secondary-foreground font-bold mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {["Home", "About", "Services", "Founders", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="block text-secondary-foreground/70 text-sm hover:text-primary transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
  <h4 className="text-secondary-foreground font-bold mb-4">
    Our Services
  </h4>
  <div className="space-y-2">
    <a href="/#services" className="block text-secondary-foreground/70 text-sm hover:text-primary transition-colors">
      Home Loans
    </a>
    <a href="/#services" className="block text-secondary-foreground/70 text-sm hover:text-primary transition-colors">
      Car Loans
    </a>
    <a href="/#services" className="block text-secondary-foreground/70 text-sm hover:text-primary transition-colors">
      Personal Loans
    </a>
    <a href="/#services" className="block text-secondary-foreground/70 text-sm hover:text-primary transition-colors">
      Business Loans
    </a>
  </div>
</div>


          {/* Social */}
          <div>
            <h4 className="text-secondary-foreground font-bold mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {[
                { icon: Globe, href: "https://www.menorahfinancialservices.com" },
                { icon: Instagram, href: "https://www.instagram.com/menorahfinancialservices?igsh=OXgzM2VmNXR3MDM1" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/menorah-financial-services/" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-secondary-foreground/20 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <s.icon className="w-4 h-4 text-secondary-foreground/70" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-6 text-center">
          <p className="text-secondary-foreground/50 text-sm">
            © {new Date().getFullYear()} Menorah Financial Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
