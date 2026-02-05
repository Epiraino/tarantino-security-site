import Layout from "@/components/Layout";
import { useDocumentTitle } from "@/hooks/use-document-title";
import FinalCTA from "@/components/sections/FinalCTA";
import { Building2, CheckCircle2 } from "lucide-react";

const properties = [
  {
    icon: Building2,
    name: "Alpha Square Apartments",
    description:
      "Apartment community security in San Diego — dedicated officer presence keeping residents safe around the clock.",
    features: [
      "24/7 on-site security presence",
      "Access control & gate management",
      "Resident assistance & visitor logging",
      "Common area monitoring",
    ],
  },
  {
    icon: Building2,
    name: "Alpha Lofts (Lofts at Normal Heights)",
    description:
      "Loft-style residential security in Normal Heights — tailored coverage for a unique urban living community.",
    features: [
      "Evening & overnight security patrols",
      "Package and delivery management",
      "Parking enforcement support",
      "Incident reporting & documentation",
    ],
  },
  {
    icon: Building2,
    name: "Luther Tower",
    description:
      "High-rise residential security in downtown San Diego — access control and patrol services for a premier downtown property.",
    features: [
      "Lobby & front desk security",
      "Elevator and floor access control",
      "Visitor credentialing",
      "Emergency response coordination",
    ],
  },
];

const Properties = () => {
  useDocumentTitle("Properties");
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-amber-200 sm:text-4xl md:text-5xl">
              Properties We Protect
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Trusted security coverage for residential communities across San
              Diego.
            </p>
          </div>
        </div>
      </section>

      {/* Properties Cards */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {properties.map((property) => (
              <div
                key={property.name}
                className="rounded-xl border border-border bg-card p-6 card-elevated"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <property.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                </div>
                <h2 className="mt-4 text-xl font-bold tracking-tight">
                  {property.name}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {property.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {property.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </Layout>
  );
};

export default Properties;
