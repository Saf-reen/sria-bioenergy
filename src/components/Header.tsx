import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "About Us", href: "/about", dropdown: [{ name: "Our Story", href: "/our-story" }, { name: "Leadership", href: "/leadership" }] },
    { name: "Products", href: "/products" },
    { name: "Global Presence", href: "/global-presence" },
    { name: "Sustainability", href: "/sustainability", dropdown: [{ name: "Commitment", href: "/commitments" }, { name: "Certificates", href: "/certificates" }] },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" }
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("nav")) setActiveDropdown(null);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-muted backdrop-blur-md shadow-md py-3" : "bg-transparent py-5")}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex text-2xl font-bold text-green-600">
              <img src="/logo.png" alt="SRIA BIOENERGY Logo" className="w-8 h-auto" />
              SRIA BIOENERGY
            </div>
          </Link>

          <motion.nav className="hidden lg:flex items-center" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <motion.div key={item.name} className="relative" variants={{ hidden: { opacity: 0, y: -6 }, show: { opacity: 1, y: 0 } }}>
                  {item.dropdown ? (
                    <>
                      <div className="flex items-center space-x-2">
                        <Link to={item.href} className={cn("text-sm font-medium transition-colors", isScrolled ? "text-foreground hover:text-primary" : "text-primary-foreground hover:text-primary-foreground/50")} onClick={() => setActiveDropdown(null)}>
                          <span>{item.name}</span>
                        </Link>
                        <button onClick={(e) => { e.stopPropagation(); setActiveDropdown((prev) => (prev === item.name ? null : item.name)); }} onKeyDown={(e) => { if (e.key === "Escape") setActiveDropdown(null); }} className={cn("p-1 rounded-md transition-colors", isScrolled ? "text-foreground hover:text-primary" : "text-primary-foreground hover:text-primary-foreground/80")} aria-haspopup="menu" aria-expanded={activeDropdown === item.name} aria-label={`${item.name} menu toggle`}>
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      </div>

                      {activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg py-2 animate-fade-in" role="menu">
                          {item.dropdown.map((subItem) => (
                            <Link key={subItem.name} to={subItem.href} className="block px-4 py-2 text-sm text-foreground hover:underline transition-colors" onClick={() => setActiveDropdown(null)}>
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link to={item.href} className={cn("flex items-center space-x-1 text-sm font-medium transition-colors", isScrolled ? "text-foreground hover:text-primary" : "text-primary-foreground hover:text-primary-foreground/50")} onClick={() => setActiveDropdown(null)}>
                      <span>{item.name}</span>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.nav>

          <div className="hidden lg:block">
            <Button variant={isScrolled ? "default" : "hero"} size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2" aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-primary-foreground")} /> : <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 py-4 border-t border-border bg-background/95 backdrop-blur-md rounded-lg">
            {navigation.map((item) => (
              <div key={item.name} className="py-2">
                <Link to={item.href} className="block px-4 py-2 text-foreground hover:underline rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 mt-1 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <Link key={subItem.name} to={subItem.href} className="block px-4 py-2 text-sm text-muted-foreground hover:underline rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 mt-4">
              <Button variant="default" size="lg" className="w-full" asChild>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
 
