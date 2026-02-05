import { Link } from "react-router-dom";
import { ClipboardCheck, Users, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/use-in-view";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Site Assessment",
    description:
      "We evaluate your property's layout, access points, and specific security needs to develop a comprehensive understanding.",
  },
  {
    number: "02",
    icon: Users,
    title: "Staffing Plan",
    description:
      "Based on our assessment, we create a tailored staffing schedule with trained personnel matched to your requirements.",
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "Reporting & Communication",
    description:
      "Receive daily activity reports and maintain open communication with our team throughout our partnership.",
  },
];

const HowItWorks = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-muted/30">
      <div className="container" ref={ref}>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-muted-foreground">
            A straightforward process to get your property secured
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative text-center ${
                isInView ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className="absolute top-8 hidden h-0.5 bg-border md:block"
                  style={{ left: "60%", width: "80%" }}
                  aria-hidden="true"
                />
              )}

              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <step.icon className="h-7 w-7" />
              </div>
              <div className="mt-2 text-xs font-medium text-muted-foreground">
                Step {step.number}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="gap-2">
            <Link to="/contact">
              Schedule Your Assessment
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
