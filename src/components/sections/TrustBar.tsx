import { Shield, Clock, UserCheck, FileText } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully compliant and covered",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock coverage",
  },
  {
    icon: UserCheck,
    title: "Professional Presence",
    description: "Trained and presentable staff",
  },
  {
    icon: FileText,
    title: "Daily Activity Reports",
    description: "Detailed incident documentation",
  },
];

const TrustBar = () => {
  return (
    <section className="border-b border-border bg-muted/30 py-12 md:py-16">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 text-center sm:text-left"
            >
              <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 sm:mx-0">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="hidden sm:block">
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
              <div className="w-full sm:hidden">
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
