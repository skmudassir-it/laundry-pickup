import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faTshirt, faSoap, faWandMagicSparkles, faBuilding, faScissors,
  faDroplet, faRing, faCouch, faShield, faClock,
  faTruck, faStar, faCheckCircle, faPhone, faEnvelope,
  faMapMarkerAlt, faQuoteLeft, faBolt, faHandSparkles,
} from "@fortawesome/free-solid-svg-icons";

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  icon: IconDefinition;
  image: string;
  features: string[];
  price: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  initials: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
  icon: IconDefinition;
}

export interface FaqItem {
  q: string;
  a: string;
}

// ── Services ────────────────────────────────────────────────
export const services: ServiceItem[] = [
  {
    slug: "wash-fold",
    title: "Wash & Fold",
    description: "Drop off your laundry and we'll wash, dry, fold, and bundle it — ready for pickup the next day.",
    icon: faTshirt,
    image: "/images/services/wash-fold.jpg",
    features: [
      "Next-day turnaround",
      "Premium hypoallergenic detergent",
      "Sorted by color and fabric type",
      "Folded and wrapped in bundles",
      "Socks paired and matched",
    ],
    price: "$2.25/lb",
  },
  {
    slug: "dry-cleaning",
    title: "Dry Cleaning",
    description: "Expert care for suits, dresses, silk, wool, and delicate fabrics using eco-friendly solvents.",
    icon: faSoap,
    image: "/images/services/dry-cleaning.jpg",
    features: [
      "Eco-friendly GreenEarth solvents",
      "Same-day service available",
      "Hand-inspected before bagging",
      "Button replacement included",
      "Garment bags for all items",
    ],
    price: "From $6.50/item",
  },
  {
    slug: "ironing-pressing",
    title: "Ironing & Pressing",
    description: "Crisp, wrinkle-free results on shirts, pants, linens, and formalwear with commercial-grade equipment.",
    icon: faWandMagicSparkles,
    image: "/images/services/ironing-pressing.jpg",
    features: [
      "Commercial steam presses",
      "Collar and cuff detailing",
      "Hanger-ready or folded",
      "Light starch available",
      "Bulk linen pressing",
    ],
    price: "From $2.00/item",
  },
  {
    slug: "commercial-laundry",
    title: "Commercial Laundry",
    description: "Reliable linen service for restaurants, hotels, salons, gyms, and medical offices with daily pickup.",
    icon: faBuilding,
    image: "/images/services/commercial-laundry.jpg",
    features: [
      "Daily pickup and delivery",
      "Linens, towels, uniforms, aprons",
      "Custom scheduling",
      "Volume discounts",
      "Sanitized & certified clean",
    ],
    price: "Custom quote",
  },
  {
    slug: "alterations-repairs",
    title: "Alterations & Repairs",
    description: "Hemming, resizing, zipper repair, and garment alterations by our in-house seamstress.",
    icon: faScissors,
    image: "/images/services/alterations-repairs.jpg",
    features: [
      "Hemming and resizing",
      "Zipper and button repair",
      "Tear and rip mending",
      "Wedding dress alterations",
      "Leather and denim repair",
    ],
    price: "From $12.00",
  },
  {
    slug: "stain-removal",
    title: "Stain Removal",
    description: "Specialized stain treatment for wine, oil, ink, grass, blood, and other tough stains.",
    icon: faDroplet,
    image: "/images/services/stain-removal.jpg",
    features: [
      "Wine, oil, ink, grass, blood",
      "Pre-treatment assessment",
      "Gentle fabric-safe methods",
      "Multiple pass guarantee",
      "No harsh chemicals",
    ],
    price: "From $5.00/item",
  },
  {
    slug: "wedding-dress-cleaning",
    title: "Wedding Dress Cleaning",
    description: "Preserve your precious wedding gown with museum-quality cleaning and archival packaging.",
    icon: faRing,
    image: "/images/services/wedding-dress-cleaning.jpg",
    features: [
      "Museum-quality cleaning",
      "Preservation boxing available",
      "Beading and lace specialist",
      "Yellowing reversal treatment",
      "Certificate of preservation",
    ],
    price: "From $149.00",
  },
  {
    slug: "leather-suede",
    title: "Leather & Suede Cleaning",
    description: "Professional cleaning, conditioning, and restoration for leather jackets, handbags, and suede items.",
    icon: faCouch,
    image: "/images/services/leather-suede.jpg",
    features: [
      "Leather conditioning treatment",
      "Color restoration",
      "Suede brushing & cleaning",
      "Handbag and jacket care",
      "Waterproofing available",
    ],
    price: "From $29.00",
  },
];

// ── Projects ────────────────────────────────────────────────
export const projects: ProjectItem[] = [
  {
    title: "The Grand Hotel Linen Contract",
    description: "Daily linen service for a 200-room luxury hotel — 2,000+ pieces processed weekly.",
    image: "/images/projects/project-1.jpg",
    category: "Commercial",
  },
  {
    title: "Bridal Gown Restoration",
    description: "Museum-quality cleaning and preservation of a 1950s heirloom wedding dress.",
    image: "/images/projects/project-2.jpg",
    category: "Specialty",
  },
  {
    title: "Restaurant Uniform Program",
    description: "Weekly uniform laundry and pressing for a 5-location restaurant group.",
    image: "/images/projects/project-3.jpg",
    category: "Commercial",
  },
  {
    title: "Yoga Studio Towel Service",
    description: "Fresh towel delivery and pickup 3x weekly for a boutique yoga studio.",
    image: "/images/projects/project-4.jpg",
    category: "Commercial",
  },
  {
    title: "Leather Jacket Restoration",
    description: "Full color restoration and conditioning of a vintage motorcycle jacket.",
    image: "/images/projects/project-5.jpg",
    category: "Specialty",
  },
  {
    title: "Salon Linen Subscription",
    description: "Ongoing towel and cape laundry for a high-end hair salon with same-day turnaround.",
    image: "/images/projects/project-6.jpg",
    category: "Commercial",
  },
];

// ── Testimonials ────────────────────────────────────────────
export const testimonials: TestimonialItem[] = [
  {
    name: "Sarah Mitchell",
    role: "Busy Mom of Three",
    quote: "FreshPress saved my sanity. I drop off three bags on Monday and pick up perfectly folded laundry on Tuesday. The stain removal is magic.",
    initials: "SM",
  },
  {
    name: "David Chen",
    role: "Restaurant Owner",
    quote: "Our linens have never looked better. Reliable daily pickup, crisp pressing, and they caught a wine stain our old service never could.",
    initials: "DC",
  },
  {
    name: "Rachel Okafor",
    role: "Attorney",
    quote: "My suits come back looking brand new every time. The dry cleaning is meticulous — they even replaced a missing button without me asking.",
    initials: "RO",
  },
  {
    name: "Mark & Jen Park",
    role: "Newlyweds",
    quote: "Jen's wedding dress came back looking better than the day she wore it. The preservation box is beautiful — a true keepsake.",
    initials: "MP",
  },
  {
    name: "Lisa Torres",
    role: "Salon Owner",
    quote: "Switched from an industrial service to FreshPress and the difference is night and day. Our towels are softer, cleaner, and always on time.",
    initials: "LT",
  },
];

// ── Pricing ─────────────────────────────────────────────────
export const pricingPlans: PricingPlan[] = [
  {
    name: "Per-Pound",
    price: "$2.25/lb",
    description: "Pay only for what you bring. Perfect for occasional drop-offs.",
    features: [
      "Wash, dry, fold, bundle",
      "Premium detergent included",
      "Next-day turnaround",
      "No minimum weight",
      "Socks paired & matched",
    ],
    highlighted: false,
    icon: faTshirt,
  },
  {
    name: "Weekly Plan",
    price: "$49/month",
    description: "Up to 20 lbs per week. Ideal for individuals and couples.",
    features: [
      "Up to 20 lbs/week",
      "Priority turnaround (24h)",
      "Free pickup & delivery",
      "Stain treatment included",
      "Rollover unused lbs",
    ],
    highlighted: true,
    icon: faClock,
  },
  {
    name: "Family Plan",
    price: "$89/month",
    description: "Up to 50 lbs per week. Built for families and busy households.",
    features: [
      "Up to 50 lbs/week",
      "Priority turnaround (24h)",
      "Free pickup & delivery",
      "Dry cleaning discount (20%)",
      "Dedicated account manager",
    ],
    highlighted: false,
    icon: faShield,
  },
  {
    name: "Commercial",
    price: "Custom",
    description: "Tailored plans for restaurants, hotels, salons, spas, and offices.",
    features: [
      "Daily/weekly schedules",
      "Volume-based pricing",
      "Dedicated route driver",
      "Sanitized & certified",
      "Itemized monthly billing",
    ],
    highlighted: false,
    icon: faBuilding,
  },
];

// ── FAQs ────────────────────────────────────────────────────
export const faqs: FaqItem[] = [
  {
    q: "How quickly can I get my laundry back?",
    a: "Standard turnaround is next-day by 5 PM. Same-day service is available for orders dropped off before 10 AM (additional $5 rush fee).",
  },
  {
    q: "What detergents do you use?",
    a: "We use premium hypoallergenic, dye-free, and fragrance-free detergents by default. You can request scented options or provide your own detergent at no extra charge.",
  },
  {
    q: "Do you offer pickup and delivery?",
    a: "Yes! Free pickup and delivery within 5 miles is included with all subscription plans. Per-pound customers can add pickup for $5 per trip.",
  },
  {
    q: "How do you handle delicate items?",
    a: "Delicates are hand-washed or processed on a gentle cycle in mesh bags. Items requiring dry cleaning are routed to our eco-friendly solvent process. You can flag delicates on your order form.",
  },
  {
    q: "What if something gets damaged?",
    a: "We take extraordinary care, but if damage occurs during our process, we'll repair it free of charge or reimburse you up to 10x the cleaning cost per our guarantee.",
  },
  {
    q: "Can I provide special instructions?",
    a: "Absolutely. Use the notes field on your order or chat with our team. Common requests: hang-dry, light starch, fold vs. hanger, separate whites, skip fabric softener.",
  },
];

// ── Nav Links ───────────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];
