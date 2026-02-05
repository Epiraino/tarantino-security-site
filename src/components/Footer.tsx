import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";
import { COMPANY } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Professional security services for commercial properties, HOAs,
              and events throughout San Diego and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              <Link
                to="/"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Services
              </Link>
              <Link
                to="/about"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Contact
            </h4>
            <address className="flex flex-col gap-3 not-italic">
              <a
                href={COMPANY.phone.href}
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {COMPANY.phone.display}
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  {COMPANY.address.street}
                  <br />
                  {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
                </span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} {COMPANY.name}. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Services subject to availability. Licensing and insurance details
              available upon request.
            </p>
          </div>
        </div>
      </div>

      {/* Spacer for mobile sticky call button */}
      <div className="pb-[76px] md:pb-0" />
    </footer>
  );
};

export default Footer;
