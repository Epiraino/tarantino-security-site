import { Shield, Headphones, Heart, FileText } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const trustItems = [
  {
    icon: Shield,
    title: "CA Licensed & Insured",
    description: "Private Patrol Operator, fully insured",
  },
  {
    icon: Headphones,
    title: "24/7 Live Dispatch",
    description: "Every call answered by a live professional",
  },
  {
    icon: Heart,
    title: "Trauma-Informed Training",
    description: "De-escalation and behavioral health awareness",
  },
  {
    icon: FileText,
    title: "GuardPro Digital Reports",
    description: "Time-stamped logs, photos, and client portal",
  },
];

const TrustBar = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="border-b border-border bg-muted/30 py-12 md:py-16">
      <div className="container" ref={ref}>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className={`flex items-start gap-4 text-center sm:text-left ${
                isInView ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 sm:mx-0">
                <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <div className="w-full sm:w-auto">
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
