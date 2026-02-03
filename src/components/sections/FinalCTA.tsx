import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden hero-gradient text-primary-foreground">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      <div className="container relative py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Ready to Secure Your Property?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80">
            Call us today for a quote or to schedule a coverage assessment. We
            respond promptly and work with your timeline.
          </p>

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="gap-2 text-lg"
            >
              <a href="tel:+19513132638">
                <Phone className="h-5 w-5" />
                951-313-2638
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-primary-foreground/60">
            Available for immediate consultation
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
