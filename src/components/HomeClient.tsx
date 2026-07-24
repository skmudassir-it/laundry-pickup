"use client";

import { useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTshirt,
  faTruck,
  faClock,
  faCheckCircle,
  faArrowRight,
  faPhone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { services, testimonials } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const steps = [
  {
    number: "01",
    icon: faClock,
    title: "Schedule",
    description: "Choose your service, pick a pickup window, and we'll be there.",
  },
  {
    number: "02",
    icon: faTruck,
    title: "We Pick Up",
    description: "Our team collects your laundry right from your doorstep — no need to leave home.",
  },
  {
    number: "03",
    icon: faCheckCircle,
    title: "Delivered Fresh",
    description: "Your clothes come back washed, folded, and fresh within 24 hours.",
  },
];

const floatingCards = [
  {
    icon: faTshirt,
    label: "Wash & Fold",
    stat: "$2.25/lb",
  },
  {
    icon: faClock,
    label: "Turnaround",
    stat: "Next Day",
  },
  {
    icon: faStar,
    label: "Rating",
    stat: "4.9/5.0",
  },
  {
    icon: faCheckCircle,
    label: "Satisfaction",
    stat: "100% Guaranteed",
  },
];

export default function HomeClient() {
  const autoplayPlugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <div className="flex flex-col flex-1">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-500 py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-white"
            >
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                Premium Laundry Service
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Fresh Laundry,
                <br />
                Delivered
              </h1>
              <p className="mt-4 max-w-lg text-lg text-white/80">
                Premium wash &amp; fold, dry cleaning, and alterations with
                next-day turnaround. Eco-friendly care you can trust.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex">
                  <Button size="lg" className="bg-white text-teal-700 hover:bg-white/90 font-semibold px-6 h-11">
                    Get Started
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services" className="inline-flex">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/40 text-white hover:bg-white/10 font-semibold px-6 h-11"
                  >
                    Our Services
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" as const }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {floatingCards.map((card) => (
                <div
                  key={card.label}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <FontAwesomeIcon icon={card.icon} className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{card.label}</p>
                  <p className="text-xl font-bold text-foreground">{card.stat}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything your wardrobe needs — from everyday wash &amp; fold to
              specialized wedding dress preservation.
            </p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service, i) => (
              <motion.div
                key={service.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                custom={i}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="block h-full"
                >
                  <Card className="glass-card h-full hover:shadow-xl transition-shadow">
                    <div className="aspect-video w-full bg-gradient-to-br from-teal-100 to-emerald-50 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <FontAwesomeIcon
                          icon={service.icon}
                          className="h-7 w-7 text-primary"
                        />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-primary">
                          {service.price}
                        </span>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="h-4 w-4 text-muted-foreground"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              Fresh laundry in three simple steps — no hassle, just freshness.
            </p>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                custom={i}
                className="relative text-center"
              >
                <div className="glass-card p-8">
                  <span className="absolute -top-4 -left-2 text-6xl font-black text-primary/10 select-none">
                    {step.number}
                  </span>
                  <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <FontAwesomeIcon
                      icon={step.icon}
                      className="h-7 w-7 text-primary"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of happy customers who trust FreshPress with their laundry.
            </p>
          </motion.div>
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[autoplayPlugin.current]}
            className="mx-auto max-w-4xl"
          >
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
                  <div className="glass-card p-6 h-full flex flex-col">
                    <div className="mb-4 flex items-center gap-1 text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className="h-4 w-4" />
                      ))}
                    </div>
                    <blockquote className="flex-1 text-sm text-muted-foreground italic leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="mt-4 flex items-center gap-3 pt-4 border-t border-border/50">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="glass rounded-2xl p-10 sm:p-16 text-center bg-gradient-to-r from-teal-500/10 via-teal-500/5 to-emerald-500/10"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready for Fresh Laundry?
            </h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto">
              Schedule your first pickup today and get 20% off your first order.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex">
                <Button size="lg" className="font-semibold px-8 h-11">
                  <FontAwesomeIcon icon={faPhone} className="mr-2 h-4 w-4" />
                  Schedule Pickup
                </Button>
              </Link>
              <Link href="/pricing" className="inline-flex">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold px-8 h-11"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
