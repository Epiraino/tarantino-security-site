import Layout from "@/components/Layout";
import FinalCTA from "@/components/sections/FinalCTA";
import { Shield, Target, Heart, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Reliability",
    description:
      "We show up on time, every time. Our clients count on consistent, dependable coverage without gaps or surprises.",
  },
  {
    icon: Target,
    title: "Professionalism",
    description:
      "Our officers are trained to handle situations with discretion and composure, representing your property positively.",
  },
  {
    icon: Heart,
    title: "Communication",
    description:
      "We maintain open lines of communication with clients, providing timely updates and responsive support.",
  },
];

const standards = [
  "Comprehensive background checks for all personnel",
  "De-escalation and conflict resolution training",
  "Customer service-oriented approach",
  "Professional appearance and conduct standards",
  "Ongoing training and performance evaluation",
  "Clear protocols for emergency situations",
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-amber-400 sm:text-4xl md:text-5xl">
              About Tarantino Security
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Professional security services built on reliability,
              communication, and discretion.
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
              To provide professional, reliable security services that protect
              people and property while maintaining a welcoming, approachable
              presence. We believe effective security is about creating safe
              environments—not intimidating ones.
            </p>
            <p className="mt-4 text-lg text-center text-muted-foreground leading-relaxed">
              Based in San Diego, we serve property managers, HOA communities,
              commercial facilities, and event organizers with tailored security
              solutions and clear communication.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/30">
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
      <section className="section-padding bg-background">
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

      {/* Discretion */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Discretion & Professionalism
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We understand that different properties have different needs. Our
              officers are trained to adapt their presence—visible when needed
              for deterrence, discreet when appropriate for your environment.
              Every interaction is handled with professionalism and respect.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We treat sensitive situations with confidentiality and work
              closely with property management to align with your community's
              standards and expectations.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </Layout>
  );
};

export default About;
