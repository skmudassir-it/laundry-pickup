import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "From everyday wash & fold to wedding dress preservation — explore our full range of professional laundry services.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-500 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-3 text-lg text-white/80 max-w-2xl mx-auto">
            Professional laundry care for every need — from everyday wash &amp;
            fold to specialized wedding dress preservation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.slug}
                className="glass-card flex flex-col h-full"
              >
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
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-1.5 mb-4">
                    {service.features.slice(0, 3).map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-muted-foreground pl-3.5">
                        +{service.features.length - 3} more
                      </li>
                    )}
                  </ul>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                    <span className="text-sm font-semibold text-primary">
                      {service.price}
                    </span>
                    <Link href={`/services/${service.slug}`}>
                      <Button variant="ghost" size="sm">
                        Learn More
                        <FontAwesomeIcon icon={faArrowRight} className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
