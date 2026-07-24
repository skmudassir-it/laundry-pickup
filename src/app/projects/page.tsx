import type { Metadata } from "next";
import ProjectsClient from "@/components/ProjectsClient";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore our portfolio of laundry projects — from commercial linen contracts to specialty garment restoration.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-500 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our Work
          </h1>
          <p className="mt-3 text-lg text-white/80 max-w-2xl mx-auto">
            See how we help businesses and individuals keep their laundry fresh,
            clean, and professionally cared for.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectsClient />
        </div>
      </section>
    </div>
  );
}
