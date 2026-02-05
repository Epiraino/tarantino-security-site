import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { COMPANY } from "@/lib/constants";

// Form validation schema
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(
      /^[\d\s\-()+ ]+$/,
      "Phone number can only contain digits, spaces, and dashes"
    ),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  useDocumentTitle("Contact Us");
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  // TODO: Connect to backend API (e.g. SendGrid, Resend, or custom endpoint)
  // to actually deliver form submissions. Until then the form validates
  // client-side but does not transmit data.
  const onSubmit = async (_data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Received",
      description:
        "Thank you! We'll follow up shortly. For immediate assistance, please call us directly.",
    });

    reset();
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-amber-200 sm:text-4xl md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Get in touch for a quote or to discuss your security needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Call CTA */}
            <div>
              <div className="rounded-2xl border border-border bg-card p-8 card-elevated">
                <h2 className="text-2xl font-bold tracking-tight">
                  Call Us Directly
                </h2>
                <p className="mt-2 text-muted-foreground">
                  The fastest way to reach us. We're ready to discuss your
                  security requirements.
                </p>

                <div className="mt-8">
                  <Button asChild size="lg" className="w-full gap-2 text-lg">
                    <a href={COMPANY.phone.href}>
                      <Phone className="h-5 w-5" aria-hidden="true" />
                      {COMPANY.phone.display}
                    </a>
                  </Button>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Address</h3>
                      <address className="mt-1 text-sm text-muted-foreground not-italic">
                        {COMPANY.address.street}
                        <br />
                        {COMPANY.address.city}, {COMPANY.address.state}{" "}
                        {COMPANY.address.zip}
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Response Time
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        We respond to inquiries as soon as possible
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="rounded-2xl border border-border bg-card p-8">
                <h2 className="text-xl font-bold tracking-tight">
                  Send a Message
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Prefer to write? Fill out the form below and we'll get back to
                  you.
                </p>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-6 space-y-6"
                  aria-busy={isSubmitting}
                  noValidate
                >
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="Your name"
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        className="text-sm text-destructive"
                        role="alert"
                      >
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        placeholder="Your phone number"
                        aria-invalid={errors.phone ? "true" : "false"}
                        aria-describedby={
                          errors.phone ? "phone-error" : undefined
                        }
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && (
                        <p
                          id="phone-error"
                          className="text-sm text-destructive"
                          role="alert"
                        >
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="Your email address"
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p
                          id="email-error"
                          className="text-sm text-destructive"
                          role="alert"
                        >
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Tell us about your security needs..."
                      rows={5}
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        className="text-sm text-destructive"
                        role="alert"
                      >
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2
                          className="h-4 w-4 animate-spin"
                          aria-hidden="true"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-xl font-bold tracking-tight">
              Serving San Diego & Surrounding Areas
            </h2>
            <p className="mt-2 text-muted-foreground">
              Based in San Diego, we provide security services throughout the
              county and neighboring communities.
            </p>
            <div
              className="mt-8 aspect-video rounded-xl bg-primary/5 border border-border"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
