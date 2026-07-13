import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, Leaf, Trees, Ruler, Hammer, Sparkles, Check, Star } from "lucide-react";

import heroImg from "@/assets/hero-garden.jpg";
import svcDesign from "@/assets/service-design.jpg";
import svcLawn from "@/assets/service-lawn.jpg";
import svcPaving from "@/assets/service-paving.jpg";
import svcFencing from "@/assets/service-fencing.jpg";
import proj1 from "@/assets/project-1.jpg";
import proj2 from "@/assets/project-2.jpg";
import proj3 from "@/assets/project-3.jpg";
import proj4 from "@/assets/project-4.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const services = [
  { title: "Garden Design", desc: "Bespoke 3D designs tailored to how you live outdoors.", img: svcDesign, icon: Ruler },
  { title: "Lawn & Turfing", desc: "New lawns, striping, aeration and year-round care.", img: svcLawn, icon: Leaf },
  { title: "Patios & Paving", desc: "Natural stone, porcelain and block-paved driveways.", img: svcPaving, icon: Hammer },
  { title: "Fencing & Structures", desc: "Fences, pergolas, decking and garden rooms.", img: svcFencing, icon: Trees },
];

const projects = [
  { title: "Twilight Terrace", location: "Surrey", tag: "Full transformation", img: proj1, span: "row-span-2" },
  { title: "Courtyard Calm", location: "London", tag: "Modern courtyard", img: proj2, span: "" },
  { title: "Cottage Bloom", location: "Cotswolds", tag: "Traditional planting", img: proj3, span: "" },
  { title: "The Family Lawn", location: "Kent", tag: "Lawn & outdoor kitchen", img: proj4, span: "row-span-2" },
];

const testimonials = [
  { name: "Sarah & James", location: "Guildford", quote: "From the first visit to the final planting, the team were meticulous. Our garden is now the favourite room of the house." },
  { name: "Priya M.", location: "Sevenoaks", quote: "Design, build and aftercare — all handled beautifully. The porcelain patio is flawless." },
  { name: "The Whitmores", location: "Reigate", quote: "They listened, drew, refined, and delivered exactly what we hoped for. Genuinely lovely people." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Trust />
      <Services />
      <Projects />
      <About />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="absolute top-0 z-30 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-primary-foreground">
        <a href="#" className="flex items-center gap-2 font-display text-xl tracking-tight">
          <Leaf className="h-5 w-5" strokeWidth={1.5} />
          <span>Everleaf</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </nav>
        <a href="tel:+441234567890" className="hidden items-center gap-2 text-sm md:flex">
          <Phone className="h-4 w-4" />
          01234 567 890
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[880px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Landscaped English garden at golden hour"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-20 pt-40 lg:grid-cols-12 lg:pt-48">
        <div className="lg:col-span-7 text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] backdrop-blur">
            <Sparkles className="h-3 w-3" /> Award-winning since 2004
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-balance sm:text-6xl lg:text-7xl">
            Gardens designed to be
            <span className="italic text-accent"> lived in.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Everleaf is a family-run landscape studio designing, building and caring for beautiful outdoor spaces across the UK.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:brightness-110">
              Explore our services <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white hover:bg-white/10">
              View recent projects
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
              <span className="ml-2">4.9 · 240+ reviews</span>
            </div>
            <span className="hidden h-4 w-px bg-white/30 sm:block" />
            <span>RHS Chelsea Silver-Gilt 2023</span>
          </div>
        </div>

        <div className="lg:col-span-5">
          <ContactCard />
        </div>
      </div>
    </section>
  );
}

function ContactCard() {
  const [sent, setSent] = useState(false);
  return (
    <div id="contact" className="rounded-sm bg-background p-8 shadow-elegant ring-1 ring-black/5">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Free consultation</p>
        <h2 className="mt-2 font-display text-2xl">Tell us about your garden</h2>
        <p className="mt-1 text-sm text-muted-foreground">We reply within one working day.</p>
      </div>
      {sent ? (
        <div className="flex flex-col items-center gap-3 py-8 text-center">
          <div className="rounded-full bg-primary/10 p-3 text-primary"><Check className="h-6 w-6" /></div>
          <p className="font-display text-lg">Thanks — we'll be in touch soon.</p>
        </div>
      ) : (
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="space-y-3"
        >
          <div className="grid grid-cols-2 gap-3">
            <Field label="Name" name="name" required />
            <Field label="Postcode" name="postcode" required />
          </div>
          <Field label="Email" name="email" type="email" required />
          <Field label="Phone" name="phone" type="tel" />
          <div>
            <label className="mb-1 block text-xs font-medium text-foreground/70">Project type</label>
            <select className="w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
              <option>Full garden design</option>
              <option>Patio or paving</option>
              <option>Lawn or turfing</option>
              <option>Fencing or structures</option>
              <option>Maintenance</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-foreground/70">Tell us a little more</label>
            <textarea rows={3} maxLength={1000} className="w-full resize-none rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
          </div>
          <button type="submit" className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:brightness-110">
            Book my free visit <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-center text-[11px] text-muted-foreground">No pressure, no obligation.</p>
        </form>
      )}
    </div>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-foreground/70">{label}{required && <span className="text-accent"> *</span>}</label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

function Trust() {
  const items = ["RHS Chelsea Winner", "APL Registered", "TrustMark Approved", "Marshalls Register", "10-Year Guarantee"];
  return (
    <section className="border-y border-border bg-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6 py-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {items.map(i => <span key={i}>{i}</span>)}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">What we do</p>
          <h2 className="mt-3 font-display text-4xl text-balance sm:text-5xl">
            End-to-end landscaping,<br />under one roof.
          </h2>
        </div>
        <p className="max-w-md text-muted-foreground">
          Design, build, plant and maintain — you'll work with the same team from first sketch to first bloom.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <article key={s.title} className="group relative overflow-hidden rounded-sm bg-card shadow-card ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-elegant">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={s.img} alt={s.title} width={1200} height={900} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                <s.icon className="mb-3 h-5 w-5" strokeWidth={1.5} />
                <h3 className="font-display text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-white/85">{s.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-accent">
                  Learn more <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Recent work</p>
            <h2 className="mt-3 font-display text-4xl text-balance sm:text-5xl">Gardens we've<br />brought to life.</h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm hover:bg-white/10">
            Start yours <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid auto-rows-[260px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) => (
            <article key={p.title} className={`group relative overflow-hidden rounded-sm ${p.span} ${i === 0 || i === 3 ? "lg:row-span-2" : ""}`}>
              <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-accent">{p.tag}</p>
                <h3 className="mt-1 font-display text-2xl">{p.title}</h3>
                <p className="text-xs text-white/70">{p.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Our approach</p>
          <h2 className="mt-3 font-display text-4xl text-balance sm:text-5xl">
            Twenty years of building gardens that get better with time.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Everleaf was founded in 2004 by a designer and a stonemason with one shared belief: a garden should feel like it has always been there. We work slowly, plan carefully, and build with materials chosen to age gracefully.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <Stat n="500+" l="Gardens built" />
            <Stat n="20" l="Years in craft" />
            <Stat n="4.9★" l="Client rating" />
          </div>
        </div>
        <ul className="space-y-6">
          {[
            { t: "One team, start to finish", d: "The person who designs your garden also visits during the build." },
            { t: "Honest, itemised quotes", d: "Fixed prices with no surprises. You'll always know what you're paying for." },
            { t: "Ten-year workmanship guarantee", d: "Because a garden should still be beautiful a decade later." },
            { t: "Aftercare that actually shows up", d: "Optional maintenance plans, seasonal check-ins and a real phone number." },
          ].map((v) => (
            <li key={v.t} className="flex gap-4 rounded-sm bg-cream p-6 ring-1 ring-black/5">
              <div className="mt-1 rounded-full bg-primary p-2 text-primary-foreground">
                <Check className="h-4 w-4" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-display text-xl">{v.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <p className="font-display text-4xl text-primary">{n}</p>
      <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</p>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Kind words</p>
          <h2 className="mt-3 font-display text-4xl text-balance sm:text-5xl">Trusted by families across the UK.</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-sm bg-background p-8 shadow-card ring-1 ring-black/5">
              <div className="mb-4 flex gap-0.5 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="font-display text-lg leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4 text-sm">
                <span className="font-medium">{t.name}</span>
                <span className="text-muted-foreground"> · {t.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 lg:grid-cols-2">
        <h2 className="font-display text-4xl text-balance sm:text-5xl">
          Ready to fall in love with your garden?
        </h2>
        <div className="flex flex-col gap-4 lg:items-end">
          <p className="max-w-md text-white/80 lg:text-right">
            Book a free on-site consultation. We'll walk your garden with you and talk through what's possible — no obligation.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:brightness-110">
              Book a visit <ArrowRight className="h-4 w-4" />
            </a>
            <a href="tel:+441234567890" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm hover:bg-white/10">
              <Phone className="h-4 w-4" /> 01234 567 890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-xl">
            <Leaf className="h-5 w-5" strokeWidth={1.5} /> Everleaf Landscapes
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            A family-run landscape design and build studio. Designing gardens that get better with time.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-medium uppercase tracking-widest text-foreground">Studio</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Guildford, Surrey</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> 01234 567 890</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@everleaf.co.uk</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-medium uppercase tracking-widest text-foreground">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#projects" className="hover:text-primary">Projects</a></li>
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Everleaf Landscapes. All rights reserved.
      </div>
    </footer>
  );
}
