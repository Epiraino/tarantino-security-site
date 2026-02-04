import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { COMPANY } from "@/lib/constants";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showStickyButton, setShowStickyButton] = useState(true);
  const location = useLocation();

  // Hide sticky button when near bottom of page to avoid overlapping footer
  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
      setShowStickyButton(!scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
              aria-current={location.pathname === link.href ? "page" : undefined}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <a href={COMPANY.phone.href} className="gap-2">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-foreground" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-b border-border bg-background md:hidden"
        >
          <nav className="container flex flex-col gap-4 py-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium transition-colors hover:text-primary ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                aria-current={location.pathname === link.href ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full">
              <a href={COMPANY.phone.href} className="gap-2">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now
              </a>
            </Button>
          </nav>
        </div>
      )}

      {/* Mobile Sticky Call Button - hides near footer */}
      <div
        className={`fixed bottom-4 left-4 right-4 z-40 md:hidden transition-all duration-300 ${
          showStickyButton
            ? "translate-y-0 opacity-100"
            : "translate-y-16 opacity-0 pointer-events-none"
        }`}
      >
        <Button asChild size="lg" className="w-full shadow-lg">
          <a href={COMPANY.phone.href} className="gap-2">
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call {COMPANY.phone.display}
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
