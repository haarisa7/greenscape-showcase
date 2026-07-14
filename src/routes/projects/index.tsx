import { Link, createFileRoute } from "@tanstack/react-router";
import { useDeferredValue, useMemo } from "react";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";

import { getServiceBySlug, projects, serviceFilters } from "@/content/portfolio";

export const Route = createFileRoute("/projects/")({
  validateSearch: (search: Record<string, unknown>) => {
    const value = typeof search.category === "string" ? search.category : "all";
    return { category: serviceFilters.some((filter) => filter.slug === value) ? value : "all" };
  },
  component: ProjectsPage,
});

function ProjectsPage() {
  const search = Route.useSearch();
  const deferredCategory = useDeferredValue(search.category);

  const visibleProjects = useMemo(() => {
    if (deferredCategory === "all") {
      return projects;
    }

    return projects.filter((project) => project.servicesUsed.includes(deferredCategory as never));
  }, [deferredCategory]);

  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden bg-forest-deep text-white">
        <div className="absolute inset-0 bg-grid opacity-[0.06]" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="flex flex-wrap gap-3 text-sm font-semibold text-white/80">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="text-white/30">/</span>
            <span>Projects</span>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> Premium project portfolio
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            A portfolio that filters like a modern landscaping showcase.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            Browse the full body of work, filter by service, and jump from any project to the service pages that generated it.
          </p>
        </div>
      </section>

      <section className="sticky top-16 z-30 border-b border-border/60 bg-background/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-5 py-4 md:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {serviceFilters.map((filter) => (
              <Link
                key={filter.slug}
                to="/projects"
                search={{ category: filter.slug }}
                className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition ${
                  search.category === filter.slug
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-secondary text-foreground/70 hover:bg-secondary/70"
                }`}
              >
                {filter.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Case studies</p>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">{visibleProjects.length} completed projects</h2>
            </div>
            {search.category !== "all" && (
              <p className="hidden text-sm text-muted-foreground md:block">
                Showing projects for {getServiceBySlug(search.category as never)?.title ?? "selected service"}
              </p>
            )}
          </div>

          <div className="columns-1 gap-6 md:columns-2 xl:columns-3">
            {visibleProjects.map((project, index) => (
              <article
                key={project.slug}
                className="mb-6 break-inside-avoid overflow-hidden rounded-3xl bg-card shadow-card ring-1 ring-black/5"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.featuredImage}
                    alt={project.title}
                    className="h-[320px] w-full object-cover transition duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-black/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                    {project.category}
                  </div>
                </div>
                <div className="space-y-4 p-6">
                  <div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-accent" /> {project.location}
                    </div>
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">{project.summary}</p>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    <span className="rounded-full bg-secondary px-3 py-1">{project.budgetRange}</span>
                    <span className="rounded-full bg-secondary px-3 py-1">{project.completionDate}</span>
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
    </main>
  );
}