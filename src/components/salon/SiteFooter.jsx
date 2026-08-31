import { MapPin, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Bridal", href: "#bridal" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="surface-soft border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl text-foreground">
            Fancy Beauty Salon
          </p>

          <p className="eyebrow mt-3">Beauty • Care • Confidence</p>
        </div>

        <div>
          <p className="mb-4 text-sm font-medium tracking-wide text-foreground">
            Quick Links
          </p>

          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-medium tracking-wide text-foreground">
            Contact
          </p>

          <p className="flex gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0 text-gold-deep" />
            Punjab Pakistan
          </p>

          <a
            href="tel:03238530464"
            className="mt-3 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="size-4 text-gold-deep" />
            0300-1234567
          </a>
        </div>

        <div>
          <p className="mb-4 text-sm font-medium tracking-wide text-foreground">
            Social
          </p>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <FaInstagram className="size-4 text-gold-deep" />
              Instagram
          </a>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-xs tracking-wide text-muted-foreground">
        © 2026 fancy Beauty Salon. All Rights Reserved.
      </div>
    </footer>
  );
}