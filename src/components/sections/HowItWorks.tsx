import { ClipboardCheck, Users, MessageSquare } from "lucide-react";

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
  return (
    <section className="section-padding bg-muted/30">
      <div className="container">
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
            <div key={step.number} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-16 hidden h-0.5 w-full bg-border md:block" />
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
      </div>
    </section>
  );
};

export default HowItWorks;
