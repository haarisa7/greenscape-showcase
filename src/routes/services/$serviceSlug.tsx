import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Clock3, Phone, Sparkles } from "lucide-react";

import { getProjectsForService, getServiceBySlug, type ServiceSlug } from "@/content/portfolio";

const PHONE = "0118 123 4567";
const PHONE_LINK = "tel:+441181234567";

export const Route = createFileRoute("/services/$serviceSlug")({
  component: ServicePage,
  loader: ({ params }) => {
    const service = getServiceBySlug(params.serviceSlug as ServiceSlug);

    if (!service) {
      throw notFound();
    }

    return { service };
  },
});

const processSteps = [
  { title: "Consultation", description: "We visit the site, review the brief and define the practical goals of the project." },
  { title: "Design", description: "The layout, materials and detail are refined into a buildable plan and fixed scope." },
  { title: "Installation", description: "Our team carries out the works with tidy sequencing and constant quality control." },
  { title: "Completion", description: "We hand over the finished garden, review the details and provide any aftercare guidance." },
];

function ServicePage() {
  const { service } = Route.useLoaderData();
  const relatedProjects = getProjectsForService(service.slug).slice(0, 3);

  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden">
        <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/90 via-forest-deep/55 to-charcoal/35" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="text-white">
            <div className="flex flex-wrap gap-3 text-sm font-semibold text-white/80">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="text-white/30">/</span>
              <Link to="/services" className="hover:text-white">Services</Link>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-accent" /> Premium service
            </span>
            <h1 className="mt-6 max-w-2xl text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">{service.title}</h1>
            <p className="mt-5 max-w-2xl text-lg text-white/82">{service.strapline}</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">{service.overview}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#service-cta" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-elegant">
                Request Free Quote <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/projects" search={{ category: service.slug }} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                View Similar Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 text-white backdrop-blur-xl ring-1 ring-white/15">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Service summary</div>
            <ul className="mt-5 space-y-3 text-sm text-white/82">
              <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{service.includes[0]}</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{service.includes[1]}</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{service.includes[2]}</li>
            </ul>
            <div className="mt-6 rounded-2xl bg-black/15 p-4">
              <div className="text-xs uppercase tracking-[0.18em] text-white/55">Typical timeline</div>
              <p className="mt-2 text-sm leading-6 text-white/85">{service.timelines[0]}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr]">
            <div className="space-y-8">
              <ContentBlock title="What this service includes" items={service.includes} />
              <ContentBlock title="Benefits" items={service.benefits} />
            </div>
            <div className="space-y-8">
              <ContentBlock title="Materials used" items={service.materials} />
              <ContentBlock title="Typical timelines" items={service.timelines} />
              <ContentBlock title="Suitable property types" items={service.propertyTypes} />
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-2xl bg-card p-6 shadow-card ring-1 ring-black/5">
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">0{index + 1}</div>
                  <Clock3 className="h-5 w-5 text-accent" />
                </div>
                <h2 className="mt-5 text-xl font-bold">{step.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Related projects</p>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Completed work for this service</h2>
            </div>
            <Link to="/projects" search={{ category: service.slug }} className="hidden items-center gap-2 text-sm font-semibold text-primary md:inline-flex">
              View all filtered projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {relatedProjects.map((project) => (
              <article key={project.slug} className="group overflow-hidden rounded-2xl bg-card shadow-card ring-1 ring-black/5">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={project.featuredImage} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/25 to-transparent" />
                </div>
                <div className="space-y-4 p-6">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{project.location}</div>
                    <h3 className="mt-1 text-2xl font-bold">{project.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.summary}</p>
                  </div>
                  <Link to="/projects/$projectSlug" params={{ projectSlug: project.slug }} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft">
                    View Project <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-deep py-20 text-white md:py-28" id="service-cta">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Service CTA</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Request a quote for {service.title.toLowerCase()}.</h2>
            <p className="mt-4 max-w-2xl text-white/75">Tell us about your site, your timeline and the finish you're aiming for. We'll come back with a clear, fixed-price conversation about next steps.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={PHONE_LINK} className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-elegant">
              Request Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a href={PHONE_LINK} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Call Now <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Service FAQ</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Questions we are asked about this service</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {service.faqs.map((faq: { question: string; answer: string }) => (
              <details key={faq.question} className="group rounded-2xl border border-border bg-card p-6 shadow-soft">
                <summary className="cursor-pointer list-none text-lg font-semibold">{faq.question}</summary>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ContentBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-2xl bg-card p-6 shadow-card ring-1 ring-black/5">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{title}</p>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}