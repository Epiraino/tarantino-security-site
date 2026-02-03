import { MapPin } from "lucide-react";

const areas = [
  "San Diego",
  "La Jolla",
  "Pacific Beach",
  "Mission Valley",
  "Hillcrest",
  "North Park",
  "Downtown",
  "Chula Vista",
  "National City",
  "El Cajon",
  "La Mesa",
  "Santee",
];

const ServiceArea = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <MapPin className="h-7 w-7 text-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Service Area
          </h2>
          <p className="mt-4 text-muted-foreground">
            Proudly serving San Diego and surrounding communities
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-border bg-muted/50 px-4 py-2 text-sm font-medium text-foreground"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don't see your area listed? Contact us to discuss coverage options.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
