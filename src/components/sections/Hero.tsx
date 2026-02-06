import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

const Hero = () => {
  return (
    <section className="relative overflow-hidden hero-gradient text-primary-foreground">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      <div className="container relative py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="animate-fade-in text-4xl font-bold tracking-tight text-amber-200 sm:text-5xl md:text-6xl lg:text-7xl">
            Tarantino Security
          </h1>
          <p className="mt-4 animate-fade-in text-xl font-medium text-primary-foreground/90 sm:text-2xl md:text-3xl">
            Security for Affordable & Supportive Housing Communities
          </p>
          <p className="mx-auto mt-6 max-w-2xl animate-slide-up text-lg text-primary-foreground/70 md:text-xl">
            Presence. Consistency. Empathy. Accountability. A
            California-licensed Private Patrol Operator built to serve
            affordable housing, permanent supportive housing, and voucher-based
            communities across San Diego.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full gap-2 sm:w-auto"
            >
              <a href={COMPANY.phone.href}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"
            >
              <Link to="/services">
                View Services
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />
    </section>
  );
};

export default Hero;
