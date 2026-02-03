import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent",
      description:
        "Thank you for reaching out. We'll respond as soon as possible.",
    });

    setFormData({ name: "", phone: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
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
                    <a href="tel:+19513132638">
                      <Phone className="h-5 w-5" />
                      951-313-2638
                    </a>
                  </Button>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Address</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        2428 Monroe Ave
                        <br />
                        San Diego, CA 92116
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
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

                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your security needs..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
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
            <div className="mt-8 aspect-video rounded-xl bg-primary/5 border border-border" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
