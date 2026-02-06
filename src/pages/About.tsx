import Layout from "@/components/Layout";
import { useDocumentTitle } from "@/hooks/use-document-title";
import FinalCTA from "@/components/sections/FinalCTA";
import {
  Shield,
  Heart,
  Handshake,
  CheckCircle,
  Home,
  Building2,
  Landmark,
  LayoutGrid,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Presence & Consistency",
    description:
      "Above-average wages reduce turnover and keep the same trusted faces on your site. Residents and staff build real relationships with officers who show up every day.",
  },
  {
    icon: Heart,
    title: "Empathy & Accountability",
    description:
      "Every officer is trained in trauma-informed response, de-escalation, and behavioral health awareness. Professional conduct is coached, measured, and enforced.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We operate as an extension of your management team — monthly supervisor meetings, direct upper management access, and coordination with case managers and service providers.",
  },
];

const whoWeServe = [
  {
    icon: Home,
    title: "Affordable Housing",
    description: "LIHTC, HOME, and HTF developments",
  },
  {
    icon: Building2,
    title: "Permanent Supportive Housing",
    description: "PSH communities with wraparound services",
  },
  {
    icon: Landmark,
    title: "Voucher-Based Communities",
    description: "PBV, VASH, SBS, and MHSA-funded properties",
  },
  {
    icon: LayoutGrid,
    title: "Mixed-Use Residential",
    description: "Multi-use developments requiring flexible security",
  },
];

const standards = [
  "Comprehensive background checks for all personnel",
  "Site-specific onboarding before first assignment",
  "De-escalation and trauma-informed response training",
  "Fair Housing compliance and resident privacy training",
  "Collaboration protocols with case management teams",
  "Above-average wages for officer consistency and retention",
  "Conduct standards enforced — tone, posture, and engagement",
  "Professional uniforms — approachable, not militarized",
];

const About = () => {
  useDocumentTitle("About");
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-amber-200 sm:text-4xl md:text-5xl">
              About Tarantino Security
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80">
              A California-licensed Private Patrol Operator built to serve
              affordable, supportive, and voucher-based housing communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-center sm:text-3xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg text-center text-muted-foreground leading-relaxed">
              Security in affordable and Permanent Supportive Housing is not
              about intimidation, over-policing, or reactive enforcement. It is
              about presence, consistency, empathy, accountability, and
              partnership.
            </p>
            <p className="mt-4 text-lg text-center text-muted-foreground leading-relaxed">
              Tarantino Security was built specifically to serve low-income,
              voucher-based, and PSH communities. We do not simply place guards
              on a site — we integrate into your operations, align with your
              mission, and actively support property management and service
              providers.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Who We Serve
            </h2>
            <p className="mt-4 text-muted-foreground">
              Purpose-built security for communities that need more than a
              uniform at the door
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whoWeServe.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Our Values
            </h2>
            <p className="mt-4 text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Our Standards
              </h2>
              <p className="mt-4 text-muted-foreground">
                We maintain high standards for our personnel and operations to
                ensure you receive consistent, quality security services.
              </p>
              <ul className="mt-8 space-y-4">
                {standards.map((standard) => (
                  <li key={standard} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground">{standard}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-muted/50 p-8">
              <div className="aspect-square rounded-lg bg-primary/5" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Our Approach
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Our leadership brings military and law enforcement experience —
              combined with empathy, cultural sensitivity, and a deep
              understanding of the communities we serve. We know that effective
              security in supportive housing requires more than enforcement.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We actively hire from transitional workforce pipelines, outfit
              officers in professional but approachable uniforms, and coach
              engagement that builds trust with residents, staff, and service
              providers.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </Layout>
  );
};

export default About;
