import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Expand, Maximize2, X } from "lucide-react";

import { getProjectBySlug, getRelatedProjects, getServiceBySlug, type ProjectSlug } from "@/content/portfolio";

export const Route = createFileRoute("/projects/$projectSlug")({
  component: ProjectPage,
  loader: ({ params }) => {
    const project = getProjectBySlug(params.projectSlug as ProjectSlug);

    if (!project) {
      throw notFound();
    }

    return { project };
  },
});

const materialDescriptions: Record<string, string> = {
  "Porcelain Tiles": "Exterior-rated tiles chosen for crisp lines, durability and low maintenance.",
  "Natural Stone Edging": "Used to sharpen transitions and give the scheme a premium finish.",
  "Architectural Lighting": "Low-energy lighting that keeps the project elegant after dark.",
  "Specimen Planting": "Mature plants selected to create instant structure and depth.",
  "Granite Edging": "Hard-wearing borders that define the layout and protect the finish.",
  "Outdoor Lighting": "Discreet illumination for safety, ambience and evening use.",
  "Decorative Gravel": "Used to break up hard surfaces and improve drainage detail.",
  "Resin Bound Aggregate": "A seamless finish that delivers colour depth and good drainage.",
  "Permeable MOT": "A stable sub-base that helps manage rainwater and long-term movement.",
  "Granite Setts": "A premium edge detail that sharpens the frontage and frames access routes.",
  "Architectural Planting": "Planting chosen to create scale, movement and year-round structure.",
  "Premium Turf": "Selected for realistic texture and a dense, natural-looking finish.",
  "Permeable Base": "A drainage-friendly foundation that keeps the surface usable after rain.",
  "Timber Edging": "A clean perimeter treatment that helps keep the lawn geometry tidy.",
  "Composite Decking": "Low-maintenance boards that hold colour and resist weathering.",
  "Galvanised Subframe": "A durable structural base designed to stay stable and ventilated.",
  "Hidden Fixings": "Keeps the finished surface clean and uncluttered.",
  "Powder-Coated Trims": "A refined metal edge that completes the deck with precision.",
  "Timber Pergola": "Provides shelter and architectural rhythm within the entertaining area.",
  "LED Garden Lighting": "Ambient and task lighting that extends the space into the evening.",
  "Commercial Paving": "Heavy-duty paving specified for sustained public and staff use.",
  "Stainless Edging": "Protects the finish and gives the courtyard a crisp perimeter.",
  "Durable Seating Walls": "Built-in seating that reduces clutter and supports circulation.",
  "Stone Worktops": "Weather-resistant surfaces for cooking, prep and serving.",
  "Weatherproof Joinery": "Cabinetry and detailing that cope with exposed outdoor conditions.",
  "LED Task Lighting": "Light where it is needed without overwhelming the atmosphere.",
  "Block Paving": "A robust and flexible driveway or frontage surface.",
  "Low-Level Lighting": "Helps define edges and creates a welcoming approach.",
  "Natural Sandstone": "A character-rich stone surface with warmth and longevity.",
};

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const relatedProjects = useMemo(() => getRelatedProjects(project, 3), [project]);
  const service = getServiceBySlug(project.serviceSlug);
  const galleryRef = useRef<HTMLDivElement>(null);
  const beforeAfterRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [sliderPosition, setSliderPosition] = useState(52);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [fullscreen, setFullscreen] = useState(false);

  const moveSlider = (clientX: number) => {
    if (!beforeAfterRef.current) {
      return;
    }

    const rect = beforeAfterRef.current.getBoundingClientRect();
    const nextPosition = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, nextPosition)));
  };

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
        if (document.fullscreenElement) {
          void document.exitFullscreen();
          setFullscreen(false);
        }
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  useEffect(() => {
    const onMove = (event: MouseEvent) => draggingRef.current && moveSlider(event.clientX);
    const onTouchMove = (event: TouchEvent) => draggingRef.current && moveSlider(event.touches[0].clientX);
    const stopDragging = () => {
      draggingRef.current = false;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("touchend", stopDragging);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchend", stopDragging);
    };
  }, []);

  const toggleFullscreen = async () => {
    if (!beforeAfterRef.current || typeof document === "undefined") {
      return;
    }

    if (document.fullscreenElement) {
      await document.exitFullscreen();
      setFullscreen(false);
      return;
    }

    await beforeAfterRef.current.requestFullscreen();
    setFullscreen(true);
  };

  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden">
        <img src={project.featuredImage} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/90 via-forest-deep/45 to-charcoal/25" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="flex flex-wrap gap-3">
            <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/15">
              Home
            </Link>
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/15">
              <ArrowLeft className="h-4 w-4" /> Back to projects
            </Link>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="text-white">
              <div className="flex flex-wrap gap-3 text-sm font-semibold text-white/80">
                <Link to="/" className="hover:text-white">Home</Link>
                <span className="text-white/30">/</span>
                <Link to="/projects" className="hover:text-white">Projects</Link>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                <span>{project.category}</span>
                <span className="h-1 w-1 rounded-full bg-accent" />
                <span>{project.location}</span>
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">{project.title}</h1>
              <p className="mt-5 max-w-2xl text-lg text-white/78">{project.summary}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <HeroMeta label="Service type" value={service?.title ?? project.category} />
                <HeroMeta label="Project value" value={project.budgetRange} />
                <HeroMeta label="Completion" value={project.completionDate} />
                <HeroMeta label="Location" value={project.location} />
              </div>
            </div>
            <div className="rounded-3xl bg-white/10 p-6 text-white backdrop-blur-xl ring-1 ring-white/15">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Project services</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.servicesUsed.map((slug) => {
                  const relatedService = getServiceBySlug(slug);
                  return (
                    <Link key={slug} to="/services/$serviceSlug" params={{ serviceSlug: slug }} className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/20">
                      {relatedService?.title ?? slug}
                    </Link>
                  );
                })}
              </div>
              <div className="mt-6 rounded-2xl bg-black/15 p-4 text-sm leading-6 text-white/80">{project.description}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
            <article className="rounded-3xl bg-card p-8 shadow-card ring-1 ring-black/5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Project overview</p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">How the brief became the finished scheme</h2>
              <div className="mt-6 space-y-6 text-sm leading-7 text-muted-foreground">
                <DetailList title="Client objectives" items={project.clientObjectives} />
                <DetailList title="Challenges" items={project.challenges} />
                <DetailList title="Requirements" items={project.requirements} />
                <DetailList title="Design approach" items={project.designApproach} />
              </div>
            </article>

            <article className="rounded-3xl bg-card p-8 shadow-card ring-1 ring-black/5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Project outcome</p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">What the client gained</h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">{project.outcome}</p>
              <div className="mt-8 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60">What we delivered</p>
                <ul className="grid gap-3">
                  {project.delivered.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-xl bg-sand px-4 py-3 text-sm">
                      <Expand className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Project gallery</p>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Eight image case-study gallery</h2>
            </div>
            <button
              type="button"
              onClick={toggleFullscreen}
              className="hidden items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold hover:bg-secondary md:inline-flex"
            >
              <Maximize2 className="h-4 w-4" /> {fullscreen ? "Exit fullscreen" : "Fullscreen view"}
            </button>
          </div>

          <div ref={galleryRef} className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {project.gallery.map((image, index) => (
              <button key={`${project.slug}-${index}`} type="button" onClick={() => setActiveImage(image)} className="group overflow-hidden rounded-2xl bg-secondary shadow-soft">
                <img src={image} alt={`${project.title} gallery image ${index + 1}`} className="h-64 w-full object-cover transition duration-700 group-hover:scale-110" />
              </button>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {project.materialsUsed.map((material) => (
              <article key={material} className="rounded-full border border-border bg-card px-4 py-2 text-sm shadow-soft">
                <span className="font-semibold">{material}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <article className="rounded-3xl bg-card p-8 shadow-card ring-1 ring-black/5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Before & after</p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Transformation slider</h2>
              <div ref={beforeAfterRef} className="relative mt-8 aspect-[16/10] overflow-hidden rounded-3xl select-none shadow-elegant ring-1 ring-black/10">
                <img src={project.afterImages[0]} alt="After" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
                  <img src={project.beforeImages[0]} alt="Before" className="absolute inset-y-0 left-0 h-full w-full object-cover" />
                  <div className="absolute left-4 top-4 rounded-full bg-charcoal/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                    Before
                  </div>
                </div>
                <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground">
                  After
                </div>
                <div
                  className="absolute inset-y-0 z-10 w-1 cursor-ew-resize bg-white shadow-elegant"
                  style={{ left: `calc(${sliderPosition}% - 2px)` }}
                  onMouseDown={() => (draggingRef.current = true)}
                  onTouchStart={() => (draggingRef.current = true)}
                >
                  <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white shadow-elegant ring-2 ring-primary">
                    <div className="flex items-center gap-0.5 text-primary">
                      <ChevronLeft className="h-4 w-4" />
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                <button type="button" onClick={toggleFullscreen} className="absolute bottom-4 right-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-foreground shadow-soft">
                  {fullscreen ? "Exit fullscreen" : "Fullscreen"}
                </button>
              </div>
            </article>

            <article className="rounded-3xl bg-card p-8 shadow-card ring-1 ring-black/5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Materials used</p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Premium material cards</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.materialsUsed.map((material) => (
                  <article key={material} className="rounded-2xl bg-sand p-5 ring-1 ring-black/5">
                    <div className="text-lg font-bold">{material}</div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{materialDescriptions[material] ?? "Selected for its performance, finish and suitability to the scheme."}</p>
                  </article>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Related projects</p>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">More work with a similar feel</h2>
            </div>
            <Link to="/projects" className="hidden items-center gap-2 text-sm font-semibold text-primary md:inline-flex">
              See the full portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {relatedProjects.map((relatedProject) => (
              <article key={relatedProject.slug} className="group overflow-hidden rounded-2xl bg-card shadow-card ring-1 ring-black/5">
                <img src={relatedProject.featuredImage} alt={relatedProject.title} className="h-64 w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="space-y-4 p-6">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{relatedProject.location}</div>
                    <h3 className="mt-1 text-2xl font-bold">{relatedProject.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{relatedProject.summary}</p>
                  </div>
                  <Link to="/projects/$projectSlug" params={{ projectSlug: relatedProject.slug }} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft">
                    View Project <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-deep py-20 text-white md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Enquiry CTA</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Interested in a similar project?</h2>
            <p className="mt-4 max-w-2xl text-white/75">Request a free quote and we will talk through the brief, budget and likely next steps.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/#contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-elegant">
              Request Free Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a href="tel:+441181234567" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Call Today <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {activeImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 p-4 backdrop-blur-sm">
          <div className="mx-auto flex h-full max-w-6xl flex-col">
            <div className="flex items-center justify-between pb-4 text-white">
              <div className="text-sm font-semibold">{project.title}</div>
              <button type="button" onClick={() => setActiveImage(null)} className="rounded-full bg-white/10 p-2 hover:bg-white/20">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <img src={activeImage} alt={project.title} className="max-h-full max-w-full rounded-2xl object-contain shadow-elegant" />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function HeroMeta({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-2xl bg-white/10 p-4 backdrop-blur-xl ring-1 ring-white/15">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">{label}</div>
      <div className="mt-2 text-sm font-semibold text-white">{value}</div>
    </article>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{title}</p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}