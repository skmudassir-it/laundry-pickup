import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Fresh Laundry, Delivered",
  description:
    "Premium laundry pickup and delivery. Wash & fold, dry cleaning, alterations, and commercial laundry services with next-day turnaround.",
};

export default function HomePage() {
  return <HomeClient />;
}
