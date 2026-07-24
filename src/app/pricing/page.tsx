import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { pricingPlans, faqs } from "@/lib/data";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for all FreshPress laundry services. Per-pound, weekly, family, and commercial plans available.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-500 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-3 text-lg text-white/80 max-w-2xl mx-auto">
            Choose the plan that fits your lifestyle. No hidden fees, no
            surprises — just fresh laundry.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`glass-card flex flex-col p-6 ${
                  plan.highlighted
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-[1.02]"
                    : ""
                }`}
              >
                {plan.highlighted && (
                  <span className="self-start mb-2 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
                    Popular
                  </span>
                )}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FontAwesomeIcon icon={plan.icon} className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-1 text-2xl font-bold text-primary">
                  {plan.price}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex mt-6 w-full">
                  <Button
                    className="w-full font-semibold"
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    {plan.name === "Commercial" ? "Contact Us" : "Get Started"}
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Everything you need to know about our laundry service.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="glass-card group overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-medium text-foreground list-none">
                  {faq.q}
                  <span className="ml-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
