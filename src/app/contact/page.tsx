"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faPaperPlane,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const serviceValue = watch("service");

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error("Failed to submit quote request");
      }
      setSubmitted(true);
      reset();
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col flex-1">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-500 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-3 text-lg text-white/80 max-w-2xl mx-auto">
            Ready for fresh laundry? Fill out the form and we&apos;ll get back
            to you within an hour.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="glass-card p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Request a Quote
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="h-16 w-16 text-primary mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold text-foreground">
                      Quote Request Received!
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Thank you for reaching out. We&apos;ll get back to you
                      within the hour.
                    </p>
                    <Button
                      className="mt-6"
                      variant="outline"
                      onClick={() => setSubmitted(false)}
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                    noValidate
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-1.5"
                        >
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          {...register("name")}
                          aria-invalid={!!errors.name}
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs text-destructive">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-1.5"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          {...register("email")}
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-destructive">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-foreground mb-1.5"
                        >
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          {...register("phone")}
                          aria-invalid={!!errors.phone}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-destructive">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-foreground mb-1.5"
                        >
                          Service Interested In
                        </label>
                        <Select
                          value={serviceValue || ""}
                          onValueChange={(v: string | null) =>
                            setValue("service", v || "")
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((s) => (
                              <SelectItem key={s.slug} value={s.slug}>
                                {s.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us about your laundry needs..."
                        {...register("message")}
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-destructive">
                          {errors.message.message}
                        </p>
                      )}
                    </div>
                    {error && (
                      <p className="text-sm text-destructive">{error}</p>
                    )}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto font-semibold"
                      disabled={submitting}
                    >
                      {submitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <FontAwesomeIcon
                            icon={faPaperPlane}
                            className="mr-2 h-4 w-4"
                          />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass-card p-6 sticky top-24 space-y-6">
                <h3 className="text-lg font-semibold text-foreground">
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="h-4 w-4 text-primary"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Phone
                      </p>
                      <a
                        href="tel:+15551234567"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="h-4 w-4 text-primary"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Email
                      </p>
                      <a
                        href="mailto:hello@freshpresslaundry.com"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        hello@freshpresslaundry.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="h-4 w-4 text-primary"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Address
                      </p>
                      <p className="text-sm text-muted-foreground">
                        123 Clean Street
                        <br />
                        Laundryville, LV 90210
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <FontAwesomeIcon
                        icon={faClock}
                        className="h-4 w-4 text-primary"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Hours
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Mon–Fri: 7 AM – 7 PM
                        <br />
                        Sat: 8 AM – 5 PM
                        <br />
                        Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
