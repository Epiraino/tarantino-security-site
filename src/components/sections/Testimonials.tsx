import { Quote } from "lucide-react";

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
  return (
    <section className="section-padding bg-muted/30">
      <div className="container">
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
            <div
              key={index}
              className="rounded-xl border border-border bg-card p-6 card-elevated"
            >
              <Quote className="h-8 w-8 text-primary/30" />
              <blockquote className="mt-4 text-foreground">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-6 border-t border-border pt-4">
                <div className="font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
