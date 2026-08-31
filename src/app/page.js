
"use client";

import Image from "next/image";
import {
  ArrowRight,
  Check,
  Clock3,
  Heart,
  Sparkles,
  Star,
} from "lucide-react";

import { Reveal } from "@/components/salon/Reveal";
import { SiteHeader } from "@/components/salon/SiteHeader";
import { SiteFooter } from "@/components/salon/SiteFooter";

const services = [
  {
    title: "Hair Styling",
    description:
      "Elegant cuts, styling, blow-drys and treatments designed around your look.",
    icon: Sparkles,
  },
  {
    title: "Makeup",
    description:
      "Soft glam and event-ready makeup with a polished, beautiful finish.",
    icon: Heart,
  },
  {
    title: "Bridal Beauty",
    description:
      "Complete bridal beauty services for your most memorable day.",
    icon: Star,
  },
];

const features = [
  "Professional beauty services",
  "Personalized consultation",
  "Premium products",
  "Comfortable salon environment",
];

const gallery = [
  {
    src: "/assets/gallery-hair.jpg",
    alt: "Hair styling at Fancy Beauty Salon",
  },
  {
    src: "/assets/gallery-makeup.jpg",
    alt: "Makeup service at Fancy Beauty Salon",
  },
  {
    src: "/assets/gallery-bridal.jpg",
    alt: "Bridal beauty at Fancy Beauty Salon",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* HERO */}
        <section
          id="home"
          className="relative min-h-screen overflow-hidden surface-soft"
        >
          <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pb-20 pt-32 lg:grid-cols-2 lg:pt-28">
            <Reveal>
              <div className="max-w-xl">
                <p className="eyebrow mb-5">
                  Beauty • Care • Confidence
                </p>

                <h1 className="text-5xl leading-[0.95] text-foreground sm:text-6xl lg:text-7xl">
                  Your beauty,
                  <span className="text-gold-gradient block">
                    beautifully
                  </span>
                  celebrated.
                </h1>

                <p className="mt-7 max-w-lg text-base leading-8 text-muted-foreground sm:text-lg">
                  Welcome to Fancy Beauty Salon — a warm and elegant space
                  where beauty, care and confidence come together.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#appointment"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
                  >
                    Book Appointment
                    <ArrowRight className="size-4" />
                  </a>

                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-full border border-border bg-background/50 px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    Explore Services
                  </a>
                </div>

                <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
                  <div>
                    <p className="font-display text-2xl text-foreground">
                      5+
                    </p>
                    <p>Beauty Services</p>
                  </div>

                  <div className="h-10 w-px bg-border" />

                  <div>
                    <p className="font-display text-2xl text-foreground">
                      100%
                    </p>
                    <p>Care &amp; Attention</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative mx-auto w-full max-w-lg">
                <div className="absolute -inset-5 rounded-[2rem] bg-primary/10 blur-2xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-2 shadow-[var(--shadow-card)]">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                    <Image
                      src="/assets/hero-bride.jpg"
                      alt="Bridal beauty at Fancy Beauty Salon"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="absolute -bottom-5 -left-4 rounded-2xl border border-border bg-background/90 p-4 shadow-[var(--shadow-card)] backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-secondary">
                      <Sparkles className="size-5 text-gold-deep" />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Feel beautiful
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Inside &amp; out
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="surface-soft py-24 sm:py-32">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="relative">
                <div className="overflow-hidden rounded-[2rem] border border-border bg-card p-2 shadow-[var(--shadow-card)]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                    <Image
                      src="/assets/salon-interior.jpg"
                      alt="Fancy Beauty Salon interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div>
                <p className="eyebrow">About Fancy Beauty Salon</p>

                <h2 className="mt-4 text-4xl leading-tight text-foreground sm:text-5xl">
                  A little luxury,
                  <span className="text-gold-gradient"> made for you.</span>
                </h2>

                <p className="mt-6 leading-8 text-muted-foreground">
                  At Fancy Beauty Salon, we believe beauty is more than a
                  service. It is about taking a moment for yourself, feeling
                  cared for and leaving with confidence.
                </p>

                <p className="mt-4 leading-8 text-muted-foreground">
                  Our goal is to create a comfortable and welcoming experience
                  while helping every client look and feel their best.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary">
                        <Check className="size-3.5 text-gold-deep" />
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="eyebrow">Our Services</p>

                <h2 className="mt-4 text-4xl text-foreground sm:text-5xl">
                  Beauty services for
                  <span className="text-gold-gradient"> every occasion.</span>
                </h2>

                <p className="mt-5 leading-7 text-muted-foreground">
                  From everyday beauty to special occasions, choose the
                  service that makes you feel your best.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <Reveal key={service.title} delay={index * 100}>
                    <article className="glass-card h-full rounded-[1.5rem] p-7 transition-transform duration-300 hover:-translate-y-2">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary">
                        <Icon className="size-6 text-gold-deep" />
                      </div>

                      <h3 className="mt-6 text-2xl text-foreground">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {service.description}
                      </p>

                      <a
                        href="#appointment"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
                      >
                        Book this service
                        <ArrowRight className="size-4" />
                      </a>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* BRIDAL */}
        <section id="bridal" className="surface-soft py-24 sm:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <p className="eyebrow">Bridal Beauty</p>

                <h2 className="mt-4 text-4xl leading-tight text-foreground sm:text-5xl">
                  Your special day deserves
                  <span className="text-gold-gradient">
                    {" "}
                    something special.
                  </span>
                </h2>

                <p className="mt-6 leading-8 text-muted-foreground">
                  Get ready for your big day with a beautiful bridal look
                  created with care and attention to detail.
                </p>

                <div className="mt-7 space-y-3">
                  {[
                    "Bridal makeup",
                    "Hair styling",
                    "Pre-event beauty preparation",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-foreground"
                    >
                      <Check className="size-4 text-gold-deep" />
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href="#appointment"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-1"
                >
                  Discuss Your Bridal Look
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/assets/bridal-feature.jpg"
                    alt="Bridal beauty feature"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/assets/gallery-bridal.jpg"
                    alt="Bridal styling"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div>
                  <p className="eyebrow">Our Gallery</p>

                  <h2 className="mt-4 text-4xl text-foreground sm:text-5xl">
                    A glimpse of
                    <span className="text-gold-gradient"> our work.</span>
                  </h2>
                </div>

                <a
                  href="#appointment"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary"
                >
                  Book your visit
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {gallery.map((item, index) => (
                <Reveal key={item.src} delay={index * 100}>
                  <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-border">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* APPOINTMENT */}
        <section id="appointment" className="px-5 pb-24 sm:pb-32">
          <Reveal>
            <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-primary px-7 py-14 text-center text-primary-foreground shadow-[var(--shadow-soft)] sm:px-12">
              <p className="eyebrow !text-primary-foreground/70">
                Ready for a little self-care?
              </p>

              <h2 className="mt-4 text-4xl sm:text-5xl">
                Let&apos;s make your beauty
                <span className="block">moment special.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-primary-foreground/80">
                Contact Fancy Beauty Salon to discuss your service and
                schedule your appointment.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="tel:03217289628"
                  className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-transform hover:-translate-y-1"
                >
                  Call 0300-1234567
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  Contact Us
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* CONTACT */}
        <section id="contact" className="surface-soft py-24">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="glass-card rounded-2xl p-6">
                  <Clock3 className="size-6 text-gold-deep" />
                  <h3 className="mt-4 text-xl text-foreground">
                    Appointments
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Contact us to discuss availability and book your visit.
                  </p>
                </div>

                <div className="glass-card rounded-2xl p-6">
                  <Heart className="size-6 text-gold-deep" />
                  <h3 className="mt-4 text-xl text-foreground">
                    Personalized Care
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Every beauty experience is designed around you.
                  </p>
                </div>

                <div className="glass-card rounded-2xl p-6">
                  <Sparkles className="size-6 text-gold-deep" />
                  <h3 className="mt-4 text-xl text-foreground">
                    Fancy Beauty
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Punjab Pakistan.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
