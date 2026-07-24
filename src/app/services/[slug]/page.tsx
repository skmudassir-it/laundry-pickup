import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheckCircle, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="flex flex-1 items-center justify-center py-32">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Service Not Found</h1>
          <p className="mt-2 text-muted-foreground">
            The service you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/services" className="inline-flex mt-6">
            <Button variant="outline">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2 h-4 w-4" />
              Back to Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-500 py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white mb-6 transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
            All Services
          </Link>
          <div className="max-w-2xl">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
              <FontAwesomeIcon icon={service.icon} className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 text-lg text-white/80">{service.description}</p>
            <Badge className="mt-4 bg-white/20 text-white border-white/30 text-sm px-3 py-1">
              {service.price}
            </Badge>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Features */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                What&apos;s Included
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="glass-card flex items-center gap-3 p-4"
                  >
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="h-5 w-5 text-primary shrink-0"
                    />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass-card p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-foreground">
                  Ready to Get Started?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Schedule a pickup and let us take care of your laundry —
                  fresh, clean, and delivered to your door.
                </p>
                <div className="mt-4 space-y-3">
                  <Link href="/contact" className="inline-flex w-full">
                    <Button className="w-full font-semibold">
                      Schedule Pickup
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/pricing" className="inline-flex w-full">
                    <Button variant="outline" className="w-full">
                      View Pricing
                    </Button>
                  </Link>
                </div>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Starting at </span>
                    {service.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
