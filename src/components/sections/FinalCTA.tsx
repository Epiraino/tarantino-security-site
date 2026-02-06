import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden hero-gradient text-primary-foreground">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      <div className="container relative py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-amber-200 sm:text-3xl md:text-4xl">
            Ready to Partner With a Security Team That Gets It?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80">
            Schedule an in-person consultation. We'll assess your property,
            learn your mission, and build a security plan that supports your
            residents and staff.
          </p>

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="gap-2 text-lg"
            >
              <a href={COMPANY.phone.href}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                {COMPANY.phone.display}
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-primary-foreground/60">
            Upper management available 24/7 by phone — no call trees, no delays
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
