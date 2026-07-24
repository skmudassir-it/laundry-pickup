import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Separator } from "@/components/ui/separator";

const footerServices = [
  { label: "Wash & Fold", href: "/services/wash-fold" },
  { label: "Dry Cleaning", href: "/services/dry-cleaning" },
  { label: "Ironing & Pressing", href: "/services/ironing-pressing" },
  { label: "Commercial Laundry", href: "/services/commercial-laundry" },
  { label: "Alterations & Repairs", href: "/services/alterations-repairs" },
  { label: "Stain Removal", href: "/services/stain-removal" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="glass border-t">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Company Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="size-3.5 text-primary"
                  />
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@freshpresslaundry.com"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="size-3.5 text-primary"
                  />
                  hello@freshpresslaundry.com
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="size-3.5 text-primary mt-0.5 shrink-0"
                />
                <span className="text-sm text-muted-foreground">
                  123 Clean Street, Suite 100
                  <br />
                  Laundryville, LV 90210
                </span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center size-9 rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="size-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center size-9 rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Bar */}
      <div className="mx-auto max-w-7xl px-4 py-5">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} FreshPress Laundry. All rights
            reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Premium Wash &amp; Fold — Same-Day Pickup Available
          </p>
        </div>
      </div>
    </footer>
  );
}
