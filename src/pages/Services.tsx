import Layout from "@/components/Layout";
import FinalCTA from "@/components/sections/FinalCTA";
import {
  UserCheck,
  Car,
  KeyRound,
  CalendarCheck,
  Building2,
  FileText,
  MapPin,
  Clock,
} from "lucide-react";

const services = [
  {
    icon: UserCheck,
    title: "On-Site Security",
    description:
      "Dedicated security personnel stationed at your property to maintain a visible presence, monitor activity, and respond to incidents in real-time.",
    features: [
      "Uniformed, trained officers",
      "Access point monitoring",
      "Visitor management",
      "Incident response and documentation",
      "Customer service-oriented approach",
    ],
  },
  {
    icon: Car,
    title: "Mobile Patrol",
    description:
      "Regular patrol routes covering multiple locations with documented check-ins, providing cost-effective coverage across larger areas.",
    features: [
      "Scheduled patrol routes",
      "Randomized timing options",
      "GPS-tracked check-ins",
      "Property inspection reports",
      "Emergency response capability",
    ],
  },
  {
    icon: KeyRound,
    title: "Access Control",
    description:
      "Manage entry points at your facility, verify credentials, and maintain secure access for authorized personnel and visitors.",
    features: [
      "Gate and entry management",
      "Credential verification",
      "Visitor logging",
      "Package and delivery handling",
      "Tailgating prevention",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Event Security",
    description:
      "Professional security staffing for corporate events, private functions, and public gatherings of all sizes.",
    features: [
      "Pre-event planning consultation",
      "Crowd management",
      "VIP protection services",
      "Parking lot security",
      "Emergency coordination",
    ],
  },
  {
    icon: Building2,
    title: "Property Security",
    description:
      "Specialized coverage for apartment complexes, HOA communities, and residential properties with consistent, reliable presence.",
    features: [
      "Apartment complex coverage",
      "HOA community patrols",
      "Common area monitoring",
      "Resident assistance",
      "Lease enforcement support",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Security Services
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Comprehensive security solutions tailored to commercial
              properties, HOAs, events, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid gap-8 md:grid-cols-2 md:items-center ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`rounded-2xl bg-muted/50 p-8 ${
                    index % 2 === 1 ? "md:col-start-1" : ""
                  }`}
                >
                  <div className="aspect-video rounded-lg bg-primary/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting Section */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <FileText className="h-7 w-7 text-primary" />
              </div>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-center sm:text-3xl">
              Professional Reporting
            </h2>
            <p className="mt-4 text-center text-muted-foreground">
              Stay informed with comprehensive documentation of all security
              activities
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">
                  Daily Activity Reports (DAR)
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Detailed documentation of officer activities, observations,
                  and any incidents during each shift. Available with
                  time-stamped entries.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">
                  Geo-Location Capable
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  GPS-verified patrol check-ins and incident reports available,
                  providing accountability and transparency for your records.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">
                  Incident Documentation
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thorough incident reports with photos when applicable,
                  witness information, and follow-up recommendations.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">
                  Regular Communication
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Open lines of communication with designated contacts for
                  real-time updates on significant events or concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-4 rounded-xl border border-border p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Flexible Scheduling
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Coverage available 24/7, weekends, holidays, or custom
                  schedules to fit your needs.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-border p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Local Focus</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Based in San Diego, we know the local communities and respond
                  quickly to client needs.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-border p-6 sm:col-span-2 lg:col-span-1">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <UserCheck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Trained Personnel
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  All officers receive training in de-escalation, customer
                  service, and emergency response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </Layout>
  );
};

export default Services;
