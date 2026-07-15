import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Leaf,
  Check,
  Star,
  Menu,
  X,
  Shield,
  Award,
  Users,
  Clock,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  MessageCircle,
  Sparkles,
  PencilRuler,
  Hammer,
  Trees,
  Sprout,
  Fence,
  SquareStack,
  Sofa,
  Building2,
  Car,
} from "lucide-react";

import hero from "@/assets/site/hero-greenfield.jpg";
import svcDesign from "@/assets/services/design.jpg";
import svcPaving from "@/assets/services/paving.jpg";
import svcDriveway from "@/assets/services/driveway.jpg";
import svcArtificial from "@/assets/services/artificial.jpg";
import svcFencing from "@/assets/services/fencing.jpg";
import svcDecking from "@/assets/services/decking.jpg";
import svcOutdoor from "@/assets/services/outdoor.jpg";
import svcCommercial from "@/assets/services/commercial.jpg";
import ctaBackground from "@/assets/site/hero-garden.jpg";
import teamImg from "@/assets/site/team.jpg";
import whyImg from "@/assets/site/why-choose.jpg";
import lgtAfter2 from "@/assets/projects/luxury-garden-transformation/after-2.jpg";
import cppAfter from "@/assets/projects/contemporary-porcelain-patio/after.png";
import fgrAfter from "@/assets/projects/family-garden-renovation/after.png";
import prdAfter1 from "@/assets/projects/premium-resin-driveway/after-1.jpg";
import oesAfter from "@/assets/projects/outdoor-entertainment-space/after.png";
import ccuAfter1 from "@/assets/projects/commercial-courtyard-upgrade/after-1.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const PHONE = "0118 123 4567";
const PHONE_LINK = "tel:+441181234567";
const WHATSAPP_LINK = "https://wa.me/441181234567";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Projects />
        <WhyChoose />
        <Process />
        <Testimonials />
        <Areas />
        <About />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      <MobileStickyCTA />
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const nav = [
    ["Home", "#home"],
    ["Services", "#services"],
    ["Projects", "#projects"],
    ["About", "#about"],
    ["Reviews", "#reviews"],
    ["Contact", "#contact"],
  ];
  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8 md:py-4">
        <a href="#home" className="flex items-center gap-3">
          <span
            className={`grid h-12 w-12 place-items-center rounded-xl transition-colors ${
              scrolled ? "bg-primary text-primary-foreground" : "bg-white/15 text-white backdrop-blur"
            }`}
          >
            <Leaf className="h-6 w-6" strokeWidth={2} />
          </span>
          <span
            className={`text-xl font-extrabold tracking-tight md:text-2xl ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            Greenfield<span className="text-accent">.</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={PHONE_LINK}
            className={`hidden items-center gap-2 text-sm font-semibold md:flex ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:brightness-110 md:inline-flex"
          >
            Get Free Quote
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className={`grid h-12 w-12 place-items-center rounded-xl lg:hidden ${
              scrolled ? "bg-secondary text-foreground" : "bg-white/15 text-white backdrop-blur"
            }`}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
    {open && (
      <div className="fixed inset-0 z-[60] bg-charcoal/95 backdrop-blur-lg lg:hidden">
        <div className="flex items-center justify-between px-5 py-4">
          <span className="text-xl font-extrabold text-white md:text-2xl">Greenfield<span className="text-accent">.</span></span>
          <button aria-label="Close" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-white">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="mt-8 flex flex-col gap-2 px-6">
          {nav.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 text-2xl font-semibold text-white">
              {label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-base font-semibold text-accent-foreground">
            Get Free Quote <ArrowRight className="h-4 w-4" />
          </a>
          <a href={PHONE_LINK} className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 text-base font-semibold text-white">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
        </nav>
      </div>
    )}
    </>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="home" className="relative min-h-[900px] w-full overflow-hidden lg:min-h-[860px]">
      <img
        src={hero}
        alt="Luxury back garden with pergola, fire pit and porcelain patio at dusk"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/90 via-forest-deep/60 to-charcoal/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-24 pt-32 md:px-8 md:pt-40 lg:grid-cols-12 lg:gap-12">
        <div className="text-white lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> Premium Landscaping · Est. 2010
          </span>
          <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.05] text-balance sm:text-5xl md:text-6xl lg:text-[64px]">
            Transform Your Outdoor Space Into Something{" "}
            <span className="text-accent">Extraordinary</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            We design and build beautiful gardens, driveways, patios and outdoor living spaces across Berkshire, Surrey and the Home Counties.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-elegant transition hover:brightness-110">
              Get My Free Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10">
              View Recent Projects
            </a>
          </div>

          <ul className="mt-10 grid max-w-xl grid-cols-2 gap-y-3 text-sm text-white/90 sm:grid-cols-4 sm:gap-x-4">
            {["Fully Insured", "5-Star Reviews", "Free Quotations", "Local Specialists"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-accent" strokeWidth={3} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <QuoteForm variant="hero" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Quote form ---------------- */
function QuoteForm({ variant = "hero" }: { variant?: "hero" | "contact" }) {
  const [sent, setSent] = useState(false);
  const isContact = variant === "contact";
  return (
    <div
      className={`rounded-2xl bg-background p-6 shadow-elegant ring-1 ring-black/5 md:p-8 ${
        isContact ? "" : ""
      }`}
    >
      <div className="mb-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          {isContact ? "Contact us" : "Free quote"}
        </p>
        <h3 className="mt-2 text-2xl font-extrabold">
          {isContact ? "Request your free quote" : "Get your free quote today"}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Fast reply · No obligation · Fixed prices
        </p>
      </div>
      {sent ? (
        <div className="flex flex-col items-center gap-3 py-10 text-center">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground">
            <Check className="h-6 w-6" strokeWidth={3} />
          </div>
          <p className="text-lg font-bold">Thanks — we'll be in touch shortly.</p>
          <p className="text-sm text-muted-foreground">We reply to every enquiry within 1 working day.</p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-3"
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Phone" name="phone" type="tel" required />
          </div>
          <Field label="Email" name="email" type="email" required />
          <SelectField
            label="Project Type"
            options={[
              "Garden Design",
              "Patios & Paving",
              "Driveways",
              "Artificial Grass",
              "Fencing",
              "Decking",
              "Outdoor Living",
              "Commercial",
            ]}
          />
          {isContact && (
            <SelectField
              label="Budget"
              options={[
                "Under £10,000",
                "£10,000 – £25,000",
                "£25,000 – £50,000",
                "£50,000 – £100,000",
                "£100,000+",
              ]}
            />
          )}
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-foreground/70">
              Message
            </label>
            <textarea
              rows={3}
              maxLength={1000}
              placeholder="Tell us a little about your project..."
              className="w-full resize-none rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <button
            type="submit"
            className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:brightness-110"
          >
            Request Free Quote <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-center text-[11px] text-muted-foreground">
            By submitting you agree to our privacy policy.
          </p>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-foreground/70">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-foreground/70">{label}</label>
      <select className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

/* ---------------- Social proof bar ---------------- */
function SocialProof() {
  const stats = [
    { n: "250+", l: "Projects Completed", Icon: Award },
    { n: "15", l: "Years Experience", Icon: Clock },
    { n: "4.9★", l: "5-Star Reviews", Icon: Star },
    { n: "£5M+", l: "Project Value Delivered", Icon: Shield },
  ];
  return (
    <section className="relative -mt-2 bg-forest-deep text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-white/10 px-5 md:grid-cols-4 md:divide-x md:divide-y-0 md:px-8">
        {stats.map(({ n, l, Icon }) => (
          <div key={l} className="flex items-center gap-4 px-2 py-8 md:px-6">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent/20 text-accent">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-2xl font-extrabold md:text-3xl">{n}</div>
              <div className="text-xs uppercase tracking-widest text-white/70">{l}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
const services = [
  { title: "Garden Design", desc: "Bespoke 3D designs tailored to your lifestyle.", img: svcDesign, Icon: PencilRuler },
  { title: "Patios & Paving", desc: "Porcelain, natural stone and Indian sandstone.", img: svcPaving, Icon: SquareStack },
  { title: "Driveways", desc: "Resin, block paving and premium finishes.", img: svcDriveway, Icon: Car },
  { title: "Artificial Grass", desc: "Premium, pet-friendly, always green.", img: svcArtificial, Icon: Sprout },
  { title: "Fencing", desc: "Contemporary slatted, hardwood and traditional.", img: svcFencing, Icon: Fence },
  { title: "Decking", desc: "Composite and hardwood decking, built to last.", img: svcDecking, Icon: Hammer },
  { title: "Outdoor Living", desc: "Pergolas, fire pits, kitchens and lighting.", img: svcOutdoor, Icon: Sofa },
  { title: "Commercial", desc: "Landscaping for offices, developments and estates.", img: svcCommercial, Icon: Building2 },
];

const serviceRoutes: Record<string, string> = {
  "Garden Design": "/services/garden-design",
  "Patios & Paving": "/services/patios-paving",
  Driveways: "/services/driveways",
  "Artificial Grass": "/services/artificial-grass",
  Fencing: "/services/fencing",
  Decking: "/services/decking",
  "Outdoor Living": "/services/outdoor-living-spaces",
  Commercial: "/services/commercial-landscaping",
};

function Services() {
  return (
    <section id="services" className="relative bg-sand py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="What we do"
          title="Our Landscaping Services"
          intro="End-to-end craftsmanship, from concept design to the final planted border. One team, one point of contact, one exceptional result."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.title}
              to={serviceRoutes[s.title] ?? "/services"}
              className="group relative block overflow-hidden rounded-2xl bg-card ring-1 ring-black/5 shadow-card transition duration-500 hover:-translate-y-1.5 hover:shadow-elegant"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-white/15 backdrop-blur">
                    <s.Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
                    Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */
const projectData = [
  { title: "Luxury Garden Transformation", location: "Ascot, Berkshire", tag: "Gardens", value: "£68,000", summary: "Full redesign with porcelain terrace, planted borders and outdoor kitchen.", img: lgtAfter2 },
  { title: "Modern Porcelain Patio", location: "Windsor", tag: "Patios", value: "£24,500", summary: "Contemporary porcelain patio with integrated seating and lighting.", img: cppAfter },
  { title: "Family-Friendly Garden Design", location: "Reading", tag: "Gardens", value: "£42,000", summary: "Playful zoning with lawn, decking and secure planted borders.", img: fgrAfter },
  { title: "Premium Resin Driveway", location: "Maidenhead", tag: "Driveways", value: "£18,900", summary: "Sleek resin-bound driveway with clipped topiary and lighting.", img: prdAfter1 },
  { title: "Outdoor Entertainment Area", location: "Bracknell", tag: "Gardens", value: "£56,000", summary: "Pergola, fire pit lounge and outdoor kitchen for year-round use.", img: oesAfter },
  { title: "Corporate HQ Landscape", location: "Slough", tag: "Commercial", value: "£120,000", summary: "Complete grounds renovation for a Grade-A office development.", img: ccuAfter1 },
];
const projectRoutes: Record<string, string> = {
  "Luxury Garden Transformation": "/projects/luxury-garden-transformation",
  "Modern Porcelain Patio": "/projects/contemporary-porcelain-patio",
  "Family-Friendly Garden Design": "/projects/family-garden-renovation",
  "Premium Resin Driveway": "/projects/premium-resin-driveway",
  "Outdoor Entertainment Area": "/projects/outdoor-entertainment-space",
  "Corporate HQ Landscape": "/projects/commercial-courtyard-upgrade",
};
const filters = ["All", "Patios", "Driveways", "Gardens", "Commercial"];

function Projects() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(
    () => (active === "All" ? projectData : projectData.filter((p) => p.tag === active)),
    [active],
  );
  return (
    <section id="projects" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Recent work"
          title="Featured Projects"
          intro="A small selection of gardens, driveways and outdoor spaces we've delivered across Berkshire and beyond."
        />
        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                active === f
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-secondary text-foreground/70 hover:bg-secondary/70"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid auto-rows-[280px] grid-cols-1 gap-5 md:grid-cols-6">
          {filtered.map((p, i) => {
            const patterns = [
              "md:col-span-4 md:row-span-2",
              "md:col-span-2",
              "md:col-span-2",
              "md:col-span-3",
              "md:col-span-3",
              "md:col-span-6",
            ];
            return (
              <Link
                key={p.title}
                to={projectRoutes[p.title] ?? "/projects"}
                className={`group relative block overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-card ${patterns[i % patterns.length]}`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent opacity-95" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-6 text-white">
                  <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    <span>{p.tag}</span>
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    <span className="text-white/70">{p.value}</span>
                  </div>
                  <h3 className="mt-1 text-2xl font-bold">{p.title}</h3>
                  <p className="text-sm text-white/70">{p.location}</p>
                  <p className="mt-2 max-w-md text-sm text-white/80 opacity-0 transition duration-500 group-hover:opacity-100">
                    {p.summary}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:brightness-110"
          >
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why choose ---------------- */
function WhyChoose() {
  const items = [
    "Fixed Quotes",
    "Fully Insured",
    "Experienced Team",
    "High Quality Materials",
    "Professional Design",
    "End-to-End Project Management",
    "Clean & Tidy Workmanship",
    "Local Trusted Company",
  ];
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <img
            src={whyImg}
            alt="Landscape designer at work"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-elegant"
          />
          <div className="absolute -bottom-6 -right-4 hidden max-w-xs rounded-2xl bg-primary p-6 text-primary-foreground shadow-elegant md:block">
            <div className="flex items-center gap-1 text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-3 font-serif text-lg leading-snug">
              "Genuinely exceptional work — the garden feels like an extension of the house."
            </p>
            <p className="mt-3 text-xs uppercase tracking-widest text-white/70">Emma & Tom · Ascot</p>
          </div>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Why choose us</p>
          <h2 className="mt-3 text-4xl font-extrabold text-balance sm:text-5xl">
            Premium craftsmanship, from concept to completion.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            We treat every garden like it was our own. Meticulous planning, honest fixed pricing and a small dedicated team from start to finish.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {items.map((i) => (
              <li key={i} className="flex items-center gap-3 rounded-xl bg-sand px-4 py-3.5 ring-1 ring-black/5">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm font-semibold">{i}</span>
              </li>
            ))}
          </ul>
          <a href="#contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft hover:brightness-110">
            Book a free consultation <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
function Process() {
  const steps = [
    { n: "01", t: "Free Consultation", d: "We visit your site, listen carefully, and understand exactly how you want to use your outdoor space.", Icon: MessageCircle },
    { n: "02", t: "Design & Planning", d: "Detailed drawings, 3D visuals and a fixed itemised quote — no surprises.", Icon: PencilRuler },
    { n: "03", t: "Build & Installation", d: "Our in-house team installs everything to the highest specification. Clean, tidy, on time.", Icon: Hammer },
    { n: "04", t: "Enjoy Your New Garden", d: "Handover, aftercare guidance and optional maintenance plans to keep it perfect.", Icon: Trees },
  ];
  return (
    <section className="relative bg-forest-deep py-24 text-white md:py-32">
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Our process"
          title="How It Works"
          intro="A calm, considered process designed to remove stress and deliver an exceptional finish."
          light
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-accent text-accent-foreground">
                <s.Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Step {s.n}</div>
              <h3 className="mt-1 text-xl font-bold">{s.t}</h3>
              <p className="mt-3 text-sm text-white/70">{s.d}</p>
              {i < steps.length - 1 && (
                <div className="absolute right-4 top-8 hidden text-white/20 lg:block">
                  <ArrowRight className="h-6 w-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
const reviews = [
  { name: "Emma & Tom Whitmore", location: "Ascot", project: "Full garden transformation", rating: 5, text: "From the very first meeting we knew we were in safe hands. The design was thoughtful, the build immaculate and the finish beyond our expectations." },
  { name: "Priya Menon", location: "Windsor", project: "Porcelain patio & pergola", rating: 5, text: "The Greenfield team were professional, punctual and produced a patio that gets compliments from every guest. Worth every penny." },
  { name: "James Harding", location: "Reading", project: "Resin driveway", rating: 5, text: "Flawless from quote to completion. Fixed price, no surprises, and the driveway looks incredible a year on." },
  { name: "The Coopers", location: "Maidenhead", project: "Family garden design", rating: 5, text: "They understood exactly what we needed — a garden the kids can play in that still looks stunning. Genuinely lovely people." },
  { name: "Rebecca Ford", location: "Bracknell", project: "Outdoor kitchen & terrace", rating: 5, text: "Best contractor we've ever worked with. The site was spotless every evening and the craftsmanship is second to none." },
  { name: "Marcus Delaney", location: "Slough", project: "Commercial grounds", rating: 5, text: "Managed a complex commercial job with zero fuss and finished ahead of schedule. Highly recommended for corporate work." },
  { name: "Sarah & David", location: "High Wycombe", project: "Complete garden renovation", rating: 5, text: "A dream to work with. Careful, tidy, communicative — and the finished garden is genuinely breathtaking." },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const perView = 1;
  const total = reviews.length;
  const go = (dir: number) => setI((v) => (v + dir + total) % total);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % total), 6500);
    return () => clearInterval(id);
  }, [total]);

  return (
    <section id="reviews" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Client stories"
          title="What Our Clients Say"
          intro="Rated 4.9 stars across Google, Houzz and Checkatrade. Every review below is from a completed project."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {[0, 1, 2].map((offset) => {
            const r = reviews[(i + offset) % total];
            return (
              <figure
                key={offset}
                className="flex h-full flex-col rounded-2xl bg-sand p-8 ring-1 ring-black/5 shadow-soft"
              >
                <div className="mb-4 flex gap-0.5 text-accent">
                  {[...Array(r.rating)].map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="flex-1 font-serif text-lg leading-relaxed text-foreground">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5 text-sm">
                  <div className="font-bold">{r.name}</div>
                  <div className="text-muted-foreground">
                    {r.location} · {r.project}
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            aria-label="Previous"
            onClick={() => go(-1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background hover:bg-secondary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="text-sm font-medium text-muted-foreground">
            {i + 1} / {total}
          </div>
          <button
            aria-label="Next"
            onClick={() => go(1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background hover:bg-secondary"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Areas ---------------- */
function Areas() {
  const towns = ["Reading", "Maidenhead", "Slough", "Windsor", "Bracknell", "Ascot", "High Wycombe"];
  return (
    <section className="bg-sand py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Coverage"
          title="Areas We Cover"
          intro="Proudly serving Berkshire and the surrounding Home Counties. Not sure if we cover your area? Just ask."
        />
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-3">
            {towns.map((t) => (
              <a
                key={t}
                href="#contact"
                className="group flex items-center justify-between rounded-xl bg-background px-5 py-5 ring-1 ring-black/5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card"
              >
                <span className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span className="font-semibold">{t}</span>
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
              </a>
            ))}
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-forest-deep p-8 text-white shadow-elegant lg:col-span-2">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
                <MapPin className="h-3.5 w-3.5" /> Based in Reading
              </div>
              <p className="mt-5 font-serif text-2xl leading-snug">
                We travel across Berkshire, Surrey and Buckinghamshire for the right project.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:brightness-110"
              >
                Check my postcode <ArrowRight className="h-4 w-4" />
              </a>
              <svg viewBox="0 0 200 100" className="mt-6 h-auto w-full opacity-70">
                <path
                  d="M10 70 Q40 20 80 40 T160 30 T195 60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-white/40"
                />
                {[
                  [30, 55], [70, 40], [95, 50], [120, 42], [145, 55], [170, 45], [55, 65],
                ].map(([x, y], k) => (
                  <g key={k}>
                    <circle cx={x} cy={y} r="1.5" className="fill-accent" />
                    <circle cx={x} cy={y} r="4" className="fill-accent/20" />
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <img
            src={teamImg}
            alt="The Greenfield Landscaping team"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-elegant"
          />
        </div>
        <div className="lg:col-span-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">About us</p>
          <h2 className="mt-3 text-4xl font-extrabold text-balance sm:text-5xl">
            Creating Exceptional Outdoor Spaces
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Greenfield Landscaping was founded in 2010 by a small team of designers and craftsmen with one shared belief: a garden should be as loved as any room inside the home. Fifteen years later, we've built more than 250 gardens across Berkshire — and we still work the same way, with the same care.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Every project is led by a director, built by our in-house team, and finished to a standard we're genuinely proud of.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
            <Stat n="250+" l="Projects delivered" />
            <Stat n="15+" l="Years experience" />
            <Stat n="98%" l="Customer satisfaction" />
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft hover:brightness-110">
              Start your project <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold">
              See our work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="text-3xl font-extrabold text-primary md:text-4xl">{n}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
    </div>
  );
}

/* ---------------- FAQ ---------------- */
const faqs = [
  { q: "How much does landscaping cost?", a: "Every garden is different, but most of our full garden projects sit between £15,000 and £100,000+. Smaller works like patios and driveways typically start from around £8,000. We always provide a detailed, fixed-price quote before any work begins." },
  { q: "How long does a project take?", a: "A patio or driveway typically takes 2–4 weeks. A full garden design and build usually takes 6–12 weeks depending on scope, planting and hard landscaping." },
  { q: "Do you offer free quotes?", a: "Yes — we offer a free, no-obligation on-site consultation and a detailed written quote for every enquiry." },
  { q: "Are you insured?", a: "Yes, we are fully insured with £5M public liability cover, and every project comes with a workmanship guarantee." },
  { q: "What areas do you cover?", a: "We cover Berkshire and the surrounding Home Counties including Reading, Windsor, Maidenhead, Slough, Bracknell, Ascot and High Wycombe." },
  { q: "Do you offer design services?", a: "Absolutely. We offer full 2D plans and 3D visualisations so you can see exactly how your garden will look before we build a thing." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-sand py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          intro="Everything you need to know before starting your project. Still unsure? Give us a call."
        />
        <div className="mt-14 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-xl bg-background ring-1 ring-black/5 shadow-soft">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-bold md:text-lg">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <img src={ctaBackground} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/95 via-forest-deep/80 to-forest-deep/50" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
        <div className="text-white">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            Ready when you are
          </p>
          <h2 className="mt-3 text-4xl font-extrabold text-balance sm:text-5xl md:text-6xl">
            Ready To Transform Your Garden?
          </h2>
          <p className="mt-6 max-w-lg text-lg text-white/85">
            Get your free, no-obligation quote today. We'll walk your garden with you and talk through exactly what's possible.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-elegant hover:brightness-110">
              Request Free Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a href={PHONE_LINK} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10">
              <Phone className="h-4 w-4" /> Call Us Today
            </a>
          </div>
        </div>
        <div className="rounded-2xl bg-white/[0.06] p-8 backdrop-blur-md ring-1 ring-white/15">
          <div className="grid grid-cols-2 gap-6 text-white">
            {[
              { Icon: Award, t: "Award-winning", d: "Recognised for design excellence" },
              { Icon: Shield, t: "£5M insured", d: "Fully insured & guaranteed" },
              { Icon: Users, t: "In-house team", d: "No subcontractors" },
              { Icon: Star, t: "4.9★ average", d: "Across 200+ reviews" },
            ].map((b) => (
              <div key={b.t}>
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/20 text-accent">
                  <b.Icon className="h-5 w-5" />
                </div>
                <div className="mt-3 font-bold">{b.t}</div>
                <div className="text-sm text-white/70">{b.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            Get in touch
          </p>
          <h2 className="mt-3 text-4xl font-extrabold text-balance sm:text-5xl">
            Let's plan your project.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Prefer to talk? Give us a call or send a message on WhatsApp. We reply to every enquiry within one working day.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { Icon: Phone, t: "Phone", d: PHONE, href: PHONE_LINK },
              { Icon: Mail, t: "Email", d: "hello@greenfield-landscaping.co.uk", href: "mailto:hello@greenfield-landscaping.co.uk" },
              { Icon: MapPin, t: "Service area", d: "Berkshire · Surrey · Buckinghamshire" },
              { Icon: Clock, t: "Opening hours", d: "Mon–Sat · 8am – 6pm" },
            ].map((c) => (
              <a
                key={c.t}
                href={c.href}
                className="flex items-start gap-4 rounded-xl bg-sand p-5 ring-1 ring-black/5 transition hover:-translate-y-0.5"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <c.Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {c.t}
                  </div>
                  <div className="text-base font-bold">{c.d}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7">
          <QuoteForm variant="contact" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="text-lg font-extrabold text-white">
              Greenfield<span className="text-accent">.</span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm">
            Premium landscape design and build across Berkshire and the Home Counties. Beautifully built gardens, delivered on time and on budget.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[11px] font-semibold uppercase tracking-widest text-white/50">
            <span>APL Registered</span>
            <span>TrustMark Approved</span>
            <span>Marshalls Register</span>
            <span>£5M Insured</span>
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {["Home", "Services", "Projects", "About", "Reviews", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-accent">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">
            Contact
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> {PHONE}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> hello@greenfield-landscaping.co.uk
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Reading, Berkshire
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> Mon–Sat · 8am – 6pm
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 text-xs text-white/50 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Greenfield Landscaping Ltd. All rights reserved.</p>
          <p>Designed & built with care in the UK.</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Floating actions ---------------- */
function FloatingActions() {
  return (
    <div className="fixed bottom-24 right-4 z-40 hidden flex-col gap-3 md:bottom-6 md:right-6 md:flex">
      <a
        href={WHATSAPP_LINK}
        aria-label="WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant transition hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={PHONE_LINK}
        aria-label="Call"
        className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-elegant transition hover:scale-105"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}

function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={PHONE_LINK}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-semibold"
        >
          <Phone className="h-4 w-4" /> Call
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-soft"
        >
          Get Free Quote
        </a>
      </div>
    </div>
  );
}

/* ---------------- Shared: Section header ---------------- */
function SectionHeader({
  eyebrow,
  title,
  intro,
  light = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${light ? "text-accent" : "text-accent"}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-4xl font-extrabold text-balance sm:text-5xl md:text-[52px] md:leading-[1.05] ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-lg ${light ? "text-white/70" : "text-muted-foreground"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
