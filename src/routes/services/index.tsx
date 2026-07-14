import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Layers3, Leaf, Sparkles } from "lucide-react";

import { services, getProjectsForService } from "@/content/portfolio";

export const Route = createFileRoute("/services/")({
  component: ServicesIndexPage,
});

const serviceIconBySlug = {
  "garden-design": Leaf,
  "patios-paving": Layers3,
  driveways: Sparkles,
  "artificial-grass": Check,
  fencing: Check,
  decking: Layers3,
  "outdoor-living-spaces": Sparkles,
  "commercial-landscaping": Leaf,
} as const;

function ServicesIndexPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden bg-forest-deep text-white">
        <div className="absolute inset-0 bg-grid opacity-[0.06]" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> Services connected to completed projects
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Every service page leads directly to relevant case studies.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            Each service below is tied to real completed projects, so visitors can move from intent to proof without landing on generic filler pages.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-elegant">
              Explore projects <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Back home
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = serviceIconBySlug[service.slug];
              const relatedProjects = getProjectsForService(service.slug).slice(0, 3);

              return (
                <article key={service.slug} className="group overflow-hidden rounded-2xl bg-card shadow-card ring-1 ring-black/5 transition duration-500 hover:-translate-y-1 hover:shadow-elegant">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/35 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 backdrop-blur">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="text-2xl font-bold">{service.title}</h2>
                      <p className="mt-2 text-sm text-white/78">{service.strapline}</p>
                    </div>
                  </div>
                  <div className="space-y-4 p-6">
                    <p className="text-sm leading-6 text-muted-foreground">{service.overview}</p>
                    <div className="space-y-2">
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Related projects</div>
                      <ul className="space-y-1 text-sm text-foreground/80">
                        {relatedProjects.map((project) => (
                          <li key={project.slug}>• {project.title}</li>
                        ))}
                      </ul>
                    </div>
                    <Link to="/services/$serviceSlug" params={{ serviceSlug: service.slug }} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft">
                      View service <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}