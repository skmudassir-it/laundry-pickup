import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTruck, faLeaf } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "FreshPress Laundry — premium laundry pickup and delivery with a mission to make laundry effortless, eco-friendly, and exceptional.",
};

const values = [
  {
    icon: faStar,
    title: "Quality",
    description:
      "Every garment is treated with the utmost care. From hand-inspection to premium detergents, we never compromise on quality.",
  },
  {
    icon: faTruck,
    title: "Convenience",
    description:
      "We come to you. Schedule a pickup, and we handle the rest — wash, fold, and deliver back fresh within 24 hours.",
  },
  {
    icon: faLeaf,
    title: "Sustainability",
    description:
      "Eco-friendly solvents, hypoallergenic detergents, and energy-efficient equipment. Clean clothes, cleaner planet.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-500 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About FreshPress
          </h1>
          <p className="mt-3 text-lg text-white/80 max-w-2xl mx-auto">
            Premium laundry care with a personal touch — making laundry
            effortless since 2018.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  FreshPress Laundry was born from a simple idea: laundry
                  shouldn&apos;t be a chore that consumes your weekends. In
                  2018, our founder set out to build a laundry service that
                  combines premium quality with genuine convenience.
                </p>
                <p>
                  What started as a small storefront with two washing machines
                  has grown into a full-service operation serving hundreds of
                  households and businesses across the city. We&apos;ve invested
                  in commercial-grade equipment, eco-friendly cleaning
                  solutions, and a dedicated team of laundry professionals who
                  treat every garment like it&apos;s their own.
                </p>
                <p>
                  Today, FreshPress is the trusted choice for busy families,
                  professionals, restaurants, hotels, and anyone who values
                  their time — and their clothes.
                </p>
              </div>
            </div>
            <div className="glass rounded-2xl p-10 text-center bg-gradient-to-br from-teal-50 to-emerald-50">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To make laundry the easiest part of your week — delivering
                freshness, quality, and peace of mind, one load at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="glass-card p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <FontAwesomeIcon icon={v.icon} className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Placeholder */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            A dedicated group of laundry professionals committed to making your
            clothes look and feel their best.
          </p>
          <div className="mt-12 glass-card p-12">
            <p className="text-muted-foreground">
              Team member profiles coming soon. We&apos;re busy making your
              laundry fresh!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
