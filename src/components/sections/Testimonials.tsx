import { Link } from "react-router-dom";
import { Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/use-in-view";

const testimonials = [
  {
    quote:
      "Tarantino Security has been an excellent partner for our apartment community. Their guards are professional and responsive, and the daily reports keep us informed.",
    author: "Property Manager",
    role: "Multi-Family Residential",
  },
  {
    quote:
      "We needed reliable security for our corporate events, and they delivered. Courteous staff who handled everything discreetly and professionally.",
    author: "Event Coordinator",
    role: "Corporate Events",
  },
  {
    quote:
      "The mobile patrol service gives our HOA peace of mind. Consistent coverage and great communication whenever there's an incident to report.",
    author: "HOA Board Member",
    role: "Residential Community",
  },
];

const Testimonials = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-muted/30">
      <div className="container" ref={ref}>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Client Feedback
          </h2>
          <p className="mt-4 text-muted-foreground">
            What our clients say about working with us
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <figure
              key={testimonial.author}
              className={`rounded-xl border border-border bg-card p-6 card-elevated ${
                isInView ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="h-8 w-8 text-primary/30" aria-hidden="true" />
              <blockquote className="mt-4 text-foreground">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <cite className="font-semibold text-foreground not-italic">
                  {testimonial.author}
                </cite>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/contact">
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
