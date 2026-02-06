import Layout from "@/components/Layout";
import { useDocumentTitle } from "@/hooks/use-document-title";
import FinalCTA from "@/components/sections/FinalCTA";
import {
  UserCheck,
  KeyRound,
  Building2,
  FileText,
  Radio,
  DollarSign,
  CalendarCheck,
  GraduationCap,
  Headphones,
  Phone,
  Eye,
  Siren,
} from "lucide-react";

const services = [
  {
    icon: UserCheck,
    title: "On-Site Security Officers",
    description:
      "Personnel matched to your site by resident demographics, behavioral-health sensitivity, and community needs. Officers conduct welfare checks, assist with lockouts, collaborate with case managers, and wear approachable professional uniforms. If a prior conflict arises, we reassign — no questions asked.",
    features: [
      "Officers matched by site fit, not just availability",
      "Welfare checks and resident assistance",
      "Lockout support and case management collaboration",
      "Professional, approachable uniforms",
      "Prior-conflict reassignment policy",
    ],
  },
  {
    icon: KeyRound,
    title: "Access Control & Policy Enforcement",
    description:
      "Fair Housing-compliant access control built around lease-based policies and resident privacy. We enforce your community rules consistently and respectfully — never through intimidation or profiling.",
    features: [
      "Fair Housing-compliant procedures",
      "Lease-based policy enforcement",
      "Resident privacy protections",
      "Visitor management and logging",
      "Consistent, respectful enforcement",
    ],
  },
  {
    icon: Building2,
    title: "Affordable & Supportive Housing Security",
    description:
      "Specialized security for LIHTC, HOME, HTF, PSH, PBV, VASH, SBS, and MHSA-funded communities. We pay above-average wages for officer retention, hire from transitional workforce pipelines, and train specifically for the populations you serve.",
    features: [
      "LIHTC, HOME, HTF development experience",
      "PSH, PBV, VASH, SBS, MHSA community expertise",
      "Above-average wages for consistency",
      "Transitional workforce hiring",
      "Population-specific training",
    ],
  },
];

const dispatchFeatures = [
  {
    icon: Phone,
    title: "Live Call Answering",
    description:
      "Every call answered by a trained professional — no automated phone trees, no voicemail.",
  },
  {
    icon: Radio,
    title: "Centralized Command Hub",
    description:
      "Real-time DAR oversight and centralized coordination across all active sites.",
  },
  {
    icon: Eye,
    title: "Proactive Officer Monitoring",
    description:
      "Dispatch detects missed check-ins, irregular activity, and coverage gaps before they become problems.",
  },
  {
    icon: Siren,
    title: "Emergency Coordination",
    description:
      "Direct coordination with law enforcement, fire, and EMS when situations escalate.",
  },
];

const reportingCards = [
  {
    title: "GuardPro Digital Platform",
    description:
      "Time-stamped activity logs with photo and video documentation for every shift and incident.",
  },
  {
    title: "Secure Client Portal",
    description:
      "Online access to daily activity reports, incident history, and officer performance data.",
  },
  {
    title: "Live GPS Tracking",
    description:
      "GPS-verified patrol routes and checkpoint confirmations for full accountability and transparency.",
  },
  {
    title: "Proactive Monitoring",
    description:
      "Dispatch detects missed reports and irregular activity patterns, flagging issues before you need to ask.",
  },
];

const Services = () => {
  useDocumentTitle("Security Services");
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-amber-200 sm:text-4xl md:text-5xl">
              Security Services
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Purpose-built security services for affordable housing, permanent
              supportive housing, and voucher-based communities.
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

      {/* 24/7 Human Dispatch Center */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <Headphones className="h-7 w-7 text-primary" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              24/7 Human Dispatch Center
            </h2>
            <p className="mt-4 text-muted-foreground">
              A live command hub staffed around the clock — not an answering
              service
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dispatchFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting Section */}
      <section className="section-padding bg-background">
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
              {reportingCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <h3 className="font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Flat-Rate Pricing
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  No holiday premiums, no overtime surcharges, no emergency fees.
                  One predictable rate.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <CalendarCheck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Monthly Supervisor Meetings
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Performance review, site concerns, improvement plans, and
                  shared goals — every month.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 sm:col-span-2 lg:col-span-1">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Structured Onboarding
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Site-specific training completed before first assignment —
                  house rules, privacy protocols, and community expectations.
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
