import { Link } from "react-router-dom";
import {
  UserCheck,
  Headphones,
  Monitor,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/use-in-view";

const services = [
  {
    icon: UserCheck,
    title: "On-Site Security Officers",
    description:
      "Officers matched to your site by resident demographics, behavioral-health sensitivity, and community needs — not just availability.",
  },
  {
    icon: Headphones,
    title: "24/7 Live Dispatch Center",
    description:
      "Every call answered instantly by a trained professional. Real-time DAR oversight, proactive officer monitoring, and emergency coordination.",
  },
  {
    icon: Monitor,
    title: "Digital Reporting & Client Portal",
    description:
      "GuardPro platform with time-stamped activity logs, photo and video documentation, incident tracking, and secure online access.",
  },
];

const ServicesPreview = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-background">
      <div className="container" ref={ref}>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground">
            Purpose-built security for affordable and supportive housing communities
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group rounded-xl border border-border bg-card p-6 transition-all card-elevated ${
                isInView ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/services">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
