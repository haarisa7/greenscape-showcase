import heroGarden from "@/assets/site/hero-garden.jpg";
import heroGreenfield from "@/assets/site/hero-greenfield.jpg";
import beforeImg from "@/assets/site/before.jpg";
import afterImg from "@/assets/site/after.jpg";
import teamImg from "@/assets/site/team.jpg";
import whyImg from "@/assets/site/why-choose.jpg";
import svcDesign from "@/assets/services/design.jpg";
import svcPaving from "@/assets/services/paving.jpg";
import svcDriveway from "@/assets/services/driveway.jpg";
import svcArtificial from "@/assets/services/artificial.jpg";
import svcFencing from "@/assets/services/fencing.jpg";
import svcDecking from "@/assets/services/decking.jpg";
import svcOutdoor from "@/assets/services/outdoor.jpg";
import svcCommercial from "@/assets/services/commercial.jpg";
import svcLawn from "@/assets/services/lawn.jpg";
import cdiAfter from "@/assets/projects/composite-decking-installation/after.jpg";
import cdiBefore from "@/assets/projects/composite-decking-installation/before.jpg";
import cdiConstruction from "@/assets/projects/composite-decking-installation/construction.jpg";
import cdiDetail from "@/assets/projects/composite-decking-installation/detail.jpg";
import cdiEvening from "@/assets/projects/composite-decking-installation/evening.jpg";
import flrAfter1 from "@/assets/projects/full-landscape-redesign/after-1.jpg";
import flrAfter2 from "@/assets/projects/full-landscape-redesign/after-2.jpg";
import flrBefore1 from "@/assets/projects/full-landscape-redesign/before-1.jpg";
import flrBefore2 from "@/assets/projects/full-landscape-redesign/before-2.jpg";
import flrConstruction1 from "@/assets/projects/full-landscape-redesign/construction-1.jpg";
import flrDetail from "@/assets/projects/full-landscape-redesign/detail.jpg";

import lgtAfter1 from "@/assets/projects/luxury-garden-transformation/after-1.jpg";
import lgtAfter2 from "@/assets/projects/luxury-garden-transformation/after-2.jpg";
import lgtAfter3 from "@/assets/projects/luxury-garden-transformation/after-3.jpg";
import lgtBefore1 from "@/assets/projects/luxury-garden-transformation/before-1.jpg";
import lgtBefore2 from "@/assets/projects/luxury-garden-transformation/before-2.jpg";
import lgtConstruction1 from "@/assets/projects/luxury-garden-transformation/construction-1.jpg";

import cppAfter from "@/assets/projects/contemporary-porcelain-patio/after.png";
import cppBefore from "@/assets/projects/contemporary-porcelain-patio/before.png";
import cppConstruction from "@/assets/projects/contemporary-porcelain-patio/construction.png";

import fgrAfter from "@/assets/projects/family-garden-renovation/after.png";
import fgrBefore from "@/assets/projects/family-garden-renovation/before.png";
import fgrConstruction from "@/assets/projects/family-garden-renovation/construction.jpg";

import mfgAfter from "@/assets/projects/modern-front-garden/after.png";
import mfgBefore from "@/assets/projects/modern-front-garden/before.png";
import mfgConstruction from "@/assets/projects/modern-front-garden/construction.png";

import oesAfter from "@/assets/projects/outdoor-entertainment-space/after.png";
import oesBefore from "@/assets/projects/outdoor-entertainment-space/before.png";
import oesConstruction from "@/assets/projects/outdoor-entertainment-space/construction.png";

import tspAfter from "@/assets/projects/traditional-sandstone-patio/after.png";
import tspBefore from "@/assets/projects/traditional-sandstone-patio/before.png";
import tspConstruction from "@/assets/projects/traditional-sandstone-patio/construction.png";

import aliAfter from "@/assets/projects/artificial-lawn-installation/after.png";
import aliBefore from "@/assets/projects/artificial-lawn-installation/before.png";
import aliConstruction from "@/assets/projects/artificial-lawn-installation/construction.png";

import ccuAfter1 from "@/assets/projects/commercial-courtyard-upgrade/after-1.jpg";
import ccuAfter2 from "@/assets/projects/commercial-courtyard-upgrade/after-2.jpg";
import ccuAfter3 from "@/assets/projects/commercial-courtyard-upgrade/after-3.jpg";
import ccuBefore1 from "@/assets/projects/commercial-courtyard-upgrade/before-1.jpg";
import ccuConstruction1 from "@/assets/projects/commercial-courtyard-upgrade/construction-1.jpg";

import okpAfter1 from "@/assets/projects/outdoor-kitchen-project/after-1.jpg";
import okpAfter2 from "@/assets/projects/outdoor-kitchen-project/after-2.jpg";
import okpAfter3 from "@/assets/projects/outdoor-kitchen-project/after-3.jpg";
import okpBefore1 from "@/assets/projects/outdoor-kitchen-project/before-1.jpg";
import okpBefore2 from "@/assets/projects/outdoor-kitchen-project/before-2.jpg";
import okpConstruction1 from "@/assets/projects/outdoor-kitchen-project/construction-1.jpg";

import prdAfter1 from "@/assets/projects/premium-resin-driveway/after-1.jpg";
import prdAfter2 from "@/assets/projects/premium-resin-driveway/after-2.jpg";
import prdBefore1 from "@/assets/projects/premium-resin-driveway/before-1.jpg";
import prdConstruction1 from "@/assets/projects/premium-resin-driveway/construction-1.jpg";

export type ServiceSlug =
  | "garden-design"
  | "patios-paving"
  | "driveways"
  | "artificial-grass"
  | "fencing"
  | "decking"
  | "outdoor-living-spaces"
  | "commercial-landscaping";

export type ProjectSlug =
  | "luxury-garden-transformation"
  | "contemporary-porcelain-patio"
  | "family-garden-renovation"
  | "premium-resin-driveway"
  | "outdoor-entertainment-space"
  | "modern-front-garden"
  | "commercial-courtyard-upgrade"
  | "composite-decking-installation"
  | "traditional-sandstone-patio"
  | "artificial-lawn-installation"
  | "outdoor-kitchen-project"
  | "full-landscape-redesign";

export interface ServiceDefinition {
  slug: ServiceSlug;
  title: string;
  strapline: string;
  image: string;
  overview: string;
  includes: string[];
  benefits: string[];
  materials: string[];
  timelines: string[];
  propertyTypes: string[];
  faqs: { question: string; answer: string }[];
  featuredProjectSlugs: ProjectSlug[];
}

export interface ProjectDefinition {
  slug: ProjectSlug;
  title: string;
  category: string;
  serviceSlug: ServiceSlug;
  servicesUsed: ServiceSlug[];
  location: string;
  budgetRange: string;
  completionDate: string;
  featuredImage: string;
  summary: string;
  description: string;
  clientObjectives: string[];
  challenges: string[];
  requirements: string[];
  designApproach: string[];
  delivered: string[];
  materialsUsed: string[];
  gallery: string[];
  beforeImages: string[];
  afterImages: string[];
  outcome: string;
}

const luxuryGardenGallery = [lgtAfter2, lgtAfter1, lgtAfter3, lgtConstruction1, lgtBefore1, lgtBefore2];
const porcelainGallery = [cppAfter, cppConstruction, cppBefore];
const renovationGallery = [fgrAfter, fgrConstruction, fgrBefore];
const drivewayGallery = [prdAfter1, prdAfter2, prdConstruction1, prdBefore1];
const outdoorGallery = [oesAfter, oesConstruction, oesBefore];
const frontGardenGallery = [mfgAfter, mfgConstruction, mfgBefore];
const commercialGallery = [ccuAfter1, ccuAfter2, ccuAfter3, ccuConstruction1, ccuBefore1];
const sandstoneGallery = [tspAfter, tspConstruction, tspBefore];
const artificialGallery = [aliAfter, aliConstruction, aliBefore];
const kitchenGallery = [okpAfter1, okpAfter2, okpAfter3, okpConstruction1, okpBefore1, okpBefore2];

const deckingGallery = [cdiAfter, cdiEvening, cdiDetail, cdiConstruction, cdiBefore];
const landscapeGallery = [flrAfter1, flrAfter2, flrDetail, flrConstruction1, flrBefore1, flrBefore2];

export const services: ServiceDefinition[] = [
  {
    slug: "garden-design",
    title: "Garden Design",
    strapline: "Bespoke planting plans, layouts and spatial flow designed around the way you live.",
    image: svcDesign,
    overview:
      "We shape gardens from first principles, balancing structure, planting, access and lifestyle so every square metre feels intentional. Garden design is where the project starts: it aligns the brief, the budget and the build sequence before any ground is broken.",
    includes: ["Site survey and measured brief", "Concept layouts and planting ideas", "Hard landscaping coordination", "Lighting and irrigation planning", "Fixed scope and build handover"],
    benefits: ["Clear direction before construction begins", "Better flow between outdoor zones", "Planting that suits the site and maintenance level", "A garden that grows in value over time"],
    materials: ["Specimen planting", "Natural stone edging", "Timber features", "Architectural lighting"],
    timelines: ["Concept design: 2-4 weeks", "Planning and specification: 1-2 weeks", "Build phase: 3-8 weeks", "Planting and detail finish: 1-2 weeks"],
    propertyTypes: ["New builds", "Period homes", "Large family gardens", "Compact urban plots"],
    faqs: [
      { question: "Do you create planting plans as part of the design?", answer: "Yes. Every garden design can include planting structure, species selection and maintenance guidance so the finished scheme works long after installation." },
      { question: "Can you design in stages?", answer: "Absolutely. We can phase the design so a project is built in logical stages without compromising the end result." },
      { question: "Is a garden design useful for smaller spaces?", answer: "Very much so. Smaller spaces benefit most from precise layout, proportion and material choices because every detail is visible." },
    ],
    featuredProjectSlugs: ["luxury-garden-transformation", "family-garden-renovation", "full-landscape-redesign"],
  },
  {
    slug: "patios-paving",
    title: "Patios & Paving",
    strapline: "Premium porcelain, sandstone and bespoke paving built for entertaining and everyday use.",
    image: svcPaving,
    overview:
      "Our patio and paving work is designed to feel architectural, durable and practical from the very first day. We manage the sub-base, drainage, levels and finish detail so the surface performs as well as it looks.",
    includes: ["Porcelain and natural stone paving", "Edging, setts and feature borders", "Drainage and correct falls", "Steps, seating walls and planters", "Lighting and outdoor dining zones"],
    benefits: ["Low-maintenance outdoor living", "A cleaner transition from house to garden", "Long-lasting surfaces that keep their finish", "Flexible enough for contemporary or traditional homes"],
    materials: ["Large-format porcelain", "Indian sandstone", "Limestone", "Granite sett details"],
    timelines: ["Survey and quote: 1 week", "Set-out and preparation: 3-7 days", "Installation: 1-3 weeks", "Finish and seal: 1-2 days"],
    propertyTypes: ["Terraced homes", "Detached homes", "Town gardens", "Courtyard spaces"],
    faqs: [
      { question: "Do you install drainage under paving?", answer: "Yes. Correct drainage and falls are always built into the specification to avoid standing water and future movement." },
      { question: "Can you match existing brickwork or walls?", answer: "We can source paving and edging that complements the existing house materials and landscape architecture." },
      { question: "Is porcelain slippery when wet?", answer: "We specify exterior-grade porcelain with the right slip resistance for patios, steps and dining terraces." },
    ],
    featuredProjectSlugs: ["contemporary-porcelain-patio", "traditional-sandstone-patio", "outdoor-kitchen-project"],
  },
  {
    slug: "driveways",
    title: "Driveways",
    strapline: "Resin, block paving and premium entrance renovations that set the tone from the street.",
    image: svcDriveway,
    overview:
      "Driveways need to be beautiful, but they also need to take constant use and heavy loads without failing. We design every driveway around the sub-base, drainage and edging detail so the result remains sharp and stable.",
    includes: ["Resin-bound and block-paved driveways", "Permeable construction and drainage", "Kerb appeal upgrades and thresholds", "Walling, gates and lighting coordination", "Surface repairs and full replacements"],
    benefits: ["Stronger first impression for the property", "Cleaner turning and parking layout", "Materials chosen for long-term durability", "Permeable options that manage surface water better"],
    materials: ["Resin bound aggregate", "Block paving", "Permeable sub-base", "Porcelain feature bands"],
    timelines: ["Survey and levels check: 1 week", "Groundworks: 2-4 days", "Build and finish: 1-2 weeks", "Curing and final clean: 24-48 hours"],
    propertyTypes: ["Front gardens", "Detached homes", "Commercial entrances", "Shared access roads"],
    faqs: [
      { question: "Do you handle dropped kerbs and access detail?", answer: "Yes. We plan access, thresholds and boundary transitions as part of the driveway package where required." },
      { question: "Can you install a permeable driveway?", answer: "Absolutely. We specify permeable systems wherever surface water management is important or required." },
      { question: "Will the driveway be suitable for electric vehicle charging points?", answer: "We can coordinate with electricians and make sure the layout accommodates charging points, lighting and future use." },
    ],
    featuredProjectSlugs: ["premium-resin-driveway", "modern-front-garden", "full-landscape-redesign"],
  },
  {
    slug: "artificial-grass",
    title: "Artificial Grass",
    strapline: "Pet-friendly, low-maintenance lawns that stay immaculate all year round.",
    image: svcArtificial,
    overview:
      "Artificial grass can be an elegant choice when the site needs dependable year-round finish with reduced maintenance. We build the base correctly, manage drainage and specify realistic turf so the result feels considered rather than synthetic.",
    includes: ["Pet-safe and child-friendly surfaces", "Ground preparation and weed control", "Drainage and edging detail", "Border integration with patios and paths", "Replacement of tired natural lawns"],
    benefits: ["Always green with minimal maintenance", "Good for shaded or heavily used gardens", "Cleaner for pets and family play zones", "Consistent finish through every season"],
    materials: ["Premium woven turf", "Permeable sub-base", "Bedding sand", "Timber or stone edging"],
    timelines: ["Survey and measure: 2-3 days", "Ground preparation: 1-2 days", "Installation: 1-3 days", "Final brushing and handover: same day"],
    propertyTypes: ["Family gardens", "Child play areas", "Rental properties", "Shaded gardens"],
    faqs: [
      { question: "Will artificial grass drain properly?", answer: "Yes, when the base and edging are built correctly the surface drains efficiently and stays usable after rainfall." },
      { question: "Can it be used with pets?", answer: "We specify turf and infill suitable for pets and can integrate the lawn with rinseable hardscape edges." },
      { question: "How realistic does it look?", answer: "We only specify premium turf with varied blade tones and pile structure so the finish reads naturally from normal viewing distance." },
    ],
    featuredProjectSlugs: ["artificial-lawn-installation", "family-garden-renovation", "modern-front-garden"],
  },
  {
    slug: "fencing",
    title: "Fencing",
    strapline: "Contemporary, secure and long-lasting fencing that balances privacy with design.",
    image: svcFencing,
    overview:
      "Fencing defines the garden as much as the planting does. We build screens, boundary lines and gates that give privacy, improve safety and sit comfortably with the rest of the landscape.",
    includes: ["Closeboard, featheredge and panel systems", "Slatted and architectural screening", "Gates, posts and concrete or timber footings", "Acoustic and privacy improvements", "Boundary repairs and replacements"],
    benefits: ["Better privacy for family gardens", "Sharper boundary definition", "A style that matches the architecture of the house", "A safer perimeter for pets and children"],
    materials: ["Pressure-treated timber", "Hardwood slats", "Composite screens", "Steel posts"],
    timelines: ["Survey and quotation: 3-5 days", "Materials procurement: 1 week", "Installation: 1-5 days", "Staining or finishing: optional"],
    propertyTypes: ["Family homes", "Side returns", "Boundary gardens", "Commercial edges"],
    faqs: [
      { question: "Can fencing be mixed with planting and retaining walls?", answer: "Yes. We often integrate fencing with raised beds, planters and masonry to create a more complete boundary scheme." },
      { question: "Do you replace damaged fence panels only?", answer: "We can repair individual sections or replace whole runs depending on the condition of the structure." },
      { question: "Can you add gates and access points?", answer: "Yes. Matching gates and secure access points are part of the service when required." },
    ],
    featuredProjectSlugs: ["family-garden-renovation", "modern-front-garden", "artificial-lawn-installation"],
  },
  {
    slug: "decking",
    title: "Decking",
    strapline: "Composite and timber decking built with clean structure, hidden fixings and lasting detail.",
    image: svcDecking,
    overview:
      "Decking is the bridge between house and garden, so the structure, subframe and finish have to be right. We build decks that feel crisp underfoot and work naturally with seating, planting and adjacent paving.",
    includes: ["Composite and hardwood decking", "Subframe design and moisture control", "Steps, balustrades and feature edges", "Integrated seating and planters", "Replacement of tired timber decks"],
    benefits: ["Adds usable space at house level", "Creates a soft transition over changes in level", "Composite options reduce maintenance", "Works especially well for entertainment zones"],
    materials: ["Composite boards", "Hardwood decking", "Aluminium trims", "Galvanised subframe supports"],
    timelines: ["Survey and design: 1 week", "Groundworks and frame: 2-4 days", "Deck installation: 1-2 weeks", "Finishing detail: 1-2 days"],
    propertyTypes: ["Raised gardens", "Family terraces", "Split-level plots", "Outdoor entertainment spaces"],
    faqs: [
      { question: "Is composite decking worth it?", answer: "For many clients it is. Composite decking is durable, low maintenance and well suited to high-use family areas." },
      { question: "Can you build steps and seating into the deck?", answer: "Yes. We design the deck as part of the wider outdoor layout so the structure feels integrated." },
      { question: "How do you prevent movement and rot?", answer: "We specify the subframe, fixings and ventilation details carefully to protect the deck over the long term." },
    ],
    featuredProjectSlugs: ["composite-decking-installation", "outdoor-entertainment-space", "full-landscape-redesign"],
  },
  {
    slug: "outdoor-living-spaces",
    title: "Outdoor Living Spaces",
    strapline: "Pergolas, kitchens, fire pits and seating areas built for year-round use.",
    image: svcOutdoor,
    overview:
      "Outdoor living schemes turn a garden into an extension of the house. We combine shade, warmth, surface materials and lighting so the space is genuinely usable for dining, relaxing and entertaining.",
    includes: ["Pergolas and covered seating zones", "Outdoor kitchens and dining terraces", "Fire pits, lighting and ambience", "Seating walls, storage and planting integration", "All-weather layouts and level changes"],
    benefits: ["Extends the usable season of the garden", "Creates a focal point for entertaining", "Makes the outdoor space feel like a true destination", "Blends hard landscaping with soft planting"],
    materials: ["Porcelain paving", "Composite decking", "Corten details", "Timber pergolas"],
    timelines: ["Concept and layout: 2-4 weeks", "Structure and groundworks: 1-2 weeks", "Joinery and finishes: 1-3 weeks", "Lighting and styling: 2-5 days"],
    propertyTypes: ["Entertaining gardens", "Family homes", "Bespoke terraces", "Hospitality spaces"],
    faqs: [
      { question: "Can you include heating and lighting?", answer: "Yes. We can coordinate heating, low-voltage lighting and other services as part of the design." },
      { question: "Do outdoor kitchens need special foundations?", answer: "They do, and we build the base and service route detail into the scheme from the start." },
      { question: "Can you design a covered area that still feels open?", answer: "That balance is exactly what we aim for, using proportion, sightlines and material contrast." },
    ],
    featuredProjectSlugs: ["luxury-garden-transformation", "outdoor-entertainment-space", "outdoor-kitchen-project"],
  },
  {
    slug: "commercial-landscaping",
    title: "Commercial Landscaping",
    strapline: "Practical, polished and scalable landscape solutions for workplaces, estates and developments.",
    image: svcCommercial,
    overview:
      "Commercial landscaping has to work for users, maintenance teams and stakeholders at the same time. We build outdoor environments that are professional, durable and simple to keep looking sharp.",
    includes: ["Corporate courtyards and reception approaches", "Hard landscaping and circulation routes", "Boundary, screening and planting schemes", "Drainage, access and service coordination", "Refurbishment and phased works"],
    benefits: ["Improves first impressions for staff and visitors", "Supports safer access and clear movement", "Can be phased around operational needs", "Keeps maintenance predictable and cost-effective"],
    materials: ["Commercial-grade paving", "Robust planting systems", "Permeable construction", "Steel and timber detailing"],
    timelines: ["Brief and survey: 1-2 weeks", "Specification and phasing: 1-2 weeks", "Delivery: staged to the site programme", "Handover and maintenance pack: included"],
    propertyTypes: ["Office courtyards", "Apartment developments", "Retail approaches", "Estate grounds"],
    faqs: [
      { question: "Can commercial works be phased around operations?", answer: "Yes. We regularly phase works to minimise disruption to tenants, staff and visitors." },
      { question: "Do you provide maintenance guidance?", answer: "We do, and can also arrange handover notes that help facilities teams keep the scheme looking good." },
      { question: "Can you work with a management company or main contractor?", answer: "Absolutely. We are used to working within wider project teams and programme constraints." },
    ],
    featuredProjectSlugs: ["commercial-courtyard-upgrade", "full-landscape-redesign", "modern-front-garden"],
  },
];

export const projects: ProjectDefinition[] = [
  {
    slug: "luxury-garden-transformation",
    title: "Luxury Garden Transformation",
    category: "Garden Design",
    serviceSlug: "garden-design",
    servicesUsed: ["garden-design", "patios-paving", "outdoor-living-spaces"],
    location: "Ascot, Berkshire",
    budgetRange: "£68,000 - £92,000",
    completionDate: "May 2026",
    featuredImage: lgtAfter2,
    summary: "A full redesign that brought together a porcelain terrace, layered planting and a sheltered entertaining zone.",
    description:
      "The client wanted a garden that felt refined, family-friendly and ready for year-round entertaining. We re-planned the entire layout so the house opened onto a generous terrace, while the planting and lighting softened the architecture and created depth into the plot.",
    clientObjectives: ["Create a high-end entertaining garden with defined zones", "Improve the connection between the house and the back garden", "Introduce a planting scheme that would mature gracefully"],
    challenges: ["A limited run-off area that needed precise drainage design", "Uneven existing levels across the rear lawn", "The need to keep the garden usable during the build"],
    requirements: ["Large-format porcelain terrace", "Built-in seating and planter lines", "Low-level lighting and soft planting", "A sheltered dining area close to the kitchen"],
    designApproach: ["We defined the terrace first so the main entertaining area would feel generous and balanced.", "A layered planting plan was used to pull the eye through the garden and soften the boundary edges.", "Lighting and detailing were specified to keep the garden atmospheric after dark without overcomplicating maintenance."],
    delivered: ["Excavation and spoil removal", "Drainage and level correction", "Porcelain paving", "Raised planters", "Planting and irrigation", "Feature lighting"],
    materialsUsed: ["Porcelain Tiles", "Natural Stone Edging", "Architectural Lighting", "Specimen Planting"],
    gallery: luxuryGardenGallery,
    beforeImages: [lgtBefore1, lgtBefore2],
    afterImages: [lgtAfter2, lgtAfter1],
    outcome:
      "The completed garden feels like a series of connected outdoor rooms rather than one large open lawn. The client now has a terrace for dining, a softer planting frame for privacy and a layout that will continue to improve as the planting matures.",
  },
  {
    slug: "contemporary-porcelain-patio",
    title: "Contemporary Porcelain Patio",
    category: "Patios & Paving",
    serviceSlug: "patios-paving",
    servicesUsed: ["patios-paving", "outdoor-living-spaces"],
    location: "Windsor, Berkshire",
    budgetRange: "£24,500 - £31,000",
    completionDate: "April 2026",
    featuredImage: cppAfter,
    summary: "A crisp porcelain terrace with subtle levels, integrated steps and space for evening dining.",
    description:
      "This project focused on creating a clean, modern patio that could handle daily family use and weekend entertaining. The finish needed to sit comfortably with the house while still feeling bold and contemporary.",
    clientObjectives: ["Upgrade the old paving with something more modern", "Add a usable dining space directly off the kitchen", "Make maintenance easier without losing warmth"],
    challenges: ["A tight side return access", "Existing drainage that needed correction", "Matching the patio edges to the rear door threshold"],
    requirements: ["Exterior-grade porcelain", "Wide-format stepped access", "Lighting to the perimeter", "Soft planting to frame the terrace"],
    designApproach: ["We kept the geometry calm and let the material quality do the work.", "The paving pattern was aligned to the house so the patio feels like part of the architecture.", "Subtle planting was added to break up the hard edges without making the space feel busy."],
    delivered: ["Excavation and base build", "Drainage correction", "Porcelain paving", "Step construction", "Lighting and jointing"],
    materialsUsed: ["Porcelain Tiles", "Granite Edging", "Outdoor Lighting", "Decorative Gravel"],
    gallery: porcelainGallery,
    beforeImages: [cppBefore],
    afterImages: [cppAfter],
    outcome:
      "The patio now reads as a neat extension of the home rather than an add-on. It gives the family a practical dining area and a polished backdrop for entertaining, while the materials will keep their crisp appearance with minimal upkeep.",
  },
  {
    slug: "family-garden-renovation",
    title: "Family Garden Renovation",
    category: "Garden Design",
    serviceSlug: "garden-design",
    servicesUsed: ["garden-design", "artificial-grass", "fencing", "decking"],
    location: "Reading, Berkshire",
    budgetRange: "£42,000 - £58,000",
    completionDate: "March 2026",
    featuredImage: fgrAfter,
    summary: "A practical family layout with a soft lawn, durable deck and secure fencing for everyday use.",
    description:
      "The brief was to create a family garden that looked polished but was still easy to live with. We zoned the space around play, relaxation and planting so it now works for children, adults and pets in equal measure.",
    clientObjectives: ["Build a garden that works for children and entertaining", "Replace the tired lawn with something easier to maintain", "Improve privacy around the boundary"],
    challenges: ["Heavy shade in one corner", "Poor existing lawn conditions", "Boundary treatment that needed to feel softer"],
    requirements: ["Artificial turf for the main play area", "Composite deck for seating", "New privacy fencing", "Planting that could soften the corners"],
    designApproach: ["We separated the garden into distinct but connected zones to make it feel bigger and easier to use.", "The deck and lawn were sized around the real use of the garden, not just the available footprint.", "Boundary planting was used to reduce the visual impact of the fence lines."],
    delivered: ["Excavation and ground preparation", "Artificial lawn installation", "Composite decking", "Fence replacement", "Planting and edging"],
    materialsUsed: ["Premium Turf", "Composite Decking", "Timber Fencing", "Planting Mulch"],
    gallery: renovationGallery,
    beforeImages: [fgrBefore],
    afterImages: [fgrAfter],
    outcome:
      "The garden now feels safe, open and easy to maintain. The family has a lawn that stays neat all year, a deck for seating and a boundary treatment that gives the whole plot a calmer, more finished feel.",
  },
  {
    slug: "premium-resin-driveway",
    title: "Premium Resin Driveway",
    category: "Driveways",
    serviceSlug: "driveways",
    servicesUsed: ["driveways", "garden-design", "fencing"],
    location: "Maidenhead, Berkshire",
    budgetRange: "£18,900 - £26,000",
    completionDate: "February 2026",
    featuredImage: prdAfter1,
    summary: "A resin-bound driveway that refreshed the frontage with sharper lines, drainage and planting balance.",
    description:
      "This entrance renovation was designed to make the property feel more composed from the street. The new driveway needed to deliver a cleaner parking layout while lifting the overall presentation of the front garden.",
    clientObjectives: ["Replace a worn tarmac surface", "Improve the entrance kerb appeal", "Introduce better drainage and edging"],
    challenges: ["Narrow frontage and turning space", "A surface that held water after rainfall", "Existing boundary details that needed rationalising"],
    requirements: ["Resin-bound finish", "Permeable construction", "Clean edging detail", "Front planting that would frame the entrance"],
    designApproach: ["We widened the perceived space with consistent lines and sharper boundary definition.", "Drainage and the sub-base were rebuilt so the surface would perform as well as it looked.", "Planting was used sparingly to keep the entrance elegant rather than cluttered."],
    delivered: ["Excavation and spoil removal", "Permeable sub-base", "Resin surfacing", "Edging and thresholds", "Front border planting"],
    materialsUsed: ["Resin Bound Aggregate", "Permeable MOT", "Granite Setts", "Architectural Planting"],
    gallery: drivewayGallery,
    beforeImages: [prdBefore1],
    afterImages: [prdAfter1, prdAfter2],
    outcome:
      "The house now has a more confident frontage and a driveway that feels tailored to the property rather than purely functional. The surface drains properly, the entrance looks sharper and the front garden now supports the architecture instead of fighting it.",
  },
  {
    slug: "outdoor-entertainment-space",
    title: "Outdoor Entertainment Space",
    category: "Outdoor Living",
    serviceSlug: "outdoor-living-spaces",
    servicesUsed: ["outdoor-living-spaces", "decking", "patios-paving"],
    location: "Bracknell, Berkshire",
    budgetRange: "£56,000 - £74,000",
    completionDate: "January 2026",
    featuredImage: oesAfter,
    summary: "A layered entertaining zone with a pergola, fire pit seating and a strong indoor-outdoor connection.",
    description:
      "The client wanted a garden that could be used beyond summer, so the design focused on shelter, warmth and comfort. We created a structured sequence of terrace, deck and seating areas that works for family evenings and social gatherings.",
    clientObjectives: ["Create a garden that works for hosting", "Add cover and shelter", "Make the space feel usable into the evening"],
    challenges: ["Multiple level changes", "Need to keep circulation easy around the property", "Balancing hardscape with enough planting"],
    requirements: ["Pergola structure", "Fire pit lounge", "Composite deck area", "Ambient lighting"],
    designApproach: ["We built the entertaining zones around clear pathways so the garden feels easy to move through.", "A warm material palette and layered lighting were used to keep the setting inviting after dark.", "The structure was detailed so furniture and circulation both feel deliberate."],
    delivered: ["Groundworks and levels", "Composite decking", "Pergola installation", "Fire pit seating", "Lighting and planting"],
    materialsUsed: ["Composite Decking", "Porcelain Paving", "Timber Pergola", "LED Garden Lighting"],
    gallery: outdoorGallery,
    beforeImages: [oesBefore],
    afterImages: [oesAfter],
    outcome:
      "The garden now behaves like a proper outdoor room. The family has a sheltered place to gather, the lighting extends the usable hours and the mix of materials keeps the scheme feeling premium rather than overbuilt.",
  },
  {
    slug: "modern-front-garden",
    title: "Modern Front Garden",
    category: "Garden Design",
    serviceSlug: "garden-design",
    servicesUsed: ["garden-design", "driveways", "fencing"],
    location: "Wokingham, Berkshire",
    budgetRange: "£21,000 - £34,000",
    completionDate: "January 2026",
    featuredImage: mfgAfter,
    summary: "A front garden redesign that combined paving, planting and boundary work for a cleaner arrival sequence.",
    description:
      "This project was all about sharpening the first impression. We reworked the boundary, parking and planting so the frontage feels more modern and better proportioned to the home.",
    clientObjectives: ["Improve street presence", "Make the parking area more practical", "Modernise the boundary treatment"],
    challenges: ["A fragmented existing layout", "Overgrown boundary planting", "The need to preserve access while the works were underway"],
    requirements: ["A simplified entrance layout", "Low-maintenance planting", "A fresh driveway surface", "A more contemporary boundary line"],
    designApproach: ["We stripped the frontage back to a few strong moves so the house could read more clearly from the street.", "The materials were kept restrained and precise to avoid visual clutter.", "Planting was used as structure rather than decoration so it supports the architecture."],
    delivered: ["Excavation and reshaping", "Driveway resurfacing", "Boundary fencing", "Planting and edging", "Lighting to the entrance"],
    materialsUsed: ["Block Paving", "Timber Fencing", "Decorative Planting", "Low-Level Lighting"],
    gallery: frontGardenGallery,
    beforeImages: [mfgBefore],
    afterImages: [mfgAfter],
    outcome:
      "The frontage now feels ordered, welcoming and much better suited to the house. The entrance sequence is clearer, the parking area is easier to use and the whole property benefits from a more polished arrival experience.",
  },
  {
    slug: "commercial-courtyard-upgrade",
    title: "Commercial Courtyard Upgrade",
    category: "Commercial",
    serviceSlug: "commercial-landscaping",
    servicesUsed: ["commercial-landscaping", "patios-paving", "outdoor-living-spaces"],
    location: "Slough, Berkshire",
    budgetRange: "£120,000 - £156,000",
    completionDate: "December 2025",
    featuredImage: ccuAfter1,
    summary: "A business courtyard upgrade that improved circulation, seating and visual quality for staff and visitors.",
    description:
      "The site needed to feel professional, durable and easy for the facilities team to manage. We delivered a refined courtyard scheme that supports circulation during the day and gives the building a more confident external presence.",
    clientObjectives: ["Refresh the courtyard for staff and visitors", "Improve drainage and layout", "Create more usable external seating"],
    challenges: ["Ongoing site operations", "Heavy pedestrian traffic", "A requirement for durable finishes"],
    requirements: ["Commercial-grade paving", "Staged delivery", "Seating and planting", "Clear access routes"],
    designApproach: ["We phased the work around the operational needs of the site.", "The material palette was selected for durability, simple cleaning and a premium appearance.", "Planting and seating were arranged to make the space feel calm rather than hard and institutional."],
    delivered: ["Site clearance", "Commercial paving", "Seat walls and planters", "Drainage improvements", "Soft landscaping"],
    materialsUsed: ["Commercial Paving", "Stainless Edging", "Architectural Planting", "Durable Seating Walls"],
    gallery: commercialGallery,
    beforeImages: [ccuBefore1],
    afterImages: [ccuAfter1, ccuAfter2],
    outcome:
      "The courtyard now feels like a proper part of the workplace experience. It is cleaner, more usable and much more aligned with the quality of the building itself.",
  },
  {
    slug: "composite-decking-installation",
    title: "Composite Decking Installation",
    category: "Decking",
    serviceSlug: "decking",
    servicesUsed: ["decking", "outdoor-living-spaces", "garden-design"],
    location: "Reading, Berkshire",
    budgetRange: "£19,500 - £28,500",
    completionDate: "November 2025",
    featuredImage: cdiAfter,
    summary: "A low-maintenance composite deck that creates a clean transition from the house into the garden.",
    description:
      "This scheme replaced an ageing timber deck with a better engineered composite structure. The new deck provides a sharper finish, cleaner detailing and a more usable platform for furniture and planting.",
    clientObjectives: ["Replace a weathered deck", "Reduce maintenance", "Make the outdoor seating area feel more refined"],
    challenges: ["Existing timber deterioration", "Moisture exposure at the back of the property", "Need to integrate the deck with adjacent planting"],
    requirements: ["Composite boards", "Hidden fixings", "Steps and edge detail", "Space for seating and planters"],
    designApproach: ["We rebuilt the substructure so the new deck would feel solid and predictable underfoot.", "The edge details were kept crisp to give the installation a high-end finish.", "The deck was proportioned to work with furniture rather than just fill the available space."],
    delivered: ["Old deck removal", "New subframe", "Composite board installation", "Steps and trim detail", "Finishing clean-up"],
    materialsUsed: ["Composite Decking", "Galvanised Subframe", "Hidden Fixings", "Powder-Coated Trims"],
    gallery: deckingGallery,
    beforeImages: [cdiBefore],
    afterImages: [cdiAfter],
    outcome:
      "The new deck gives the household a tidy, practical and much more durable outdoor platform. It now feels like a finished architectural element rather than a temporary add-on.",
  },
  {
    slug: "traditional-sandstone-patio",
    title: "Traditional Sandstone Patio",
    category: "Patios & Paving",
    serviceSlug: "patios-paving",
    servicesUsed: ["patios-paving", "garden-design"],
    location: "High Wycombe, Buckinghamshire",
    budgetRange: "£27,000 - £38,000",
    completionDate: "October 2025",
    featuredImage: tspAfter,
    summary: "A classic sandstone terrace with gentle detailing to suit a character property and mature garden.",
    description:
      "This patio was designed to feel like it had always belonged to the property. We matched the material palette to the house style and used restrained detailing to create a comfortable, timeless outdoor room.",
    clientObjectives: ["Replace a worn and uneven patio", "Respect the character of the property", "Create a better dining terrace"],
    challenges: ["Existing levels were inconsistent", "The garden had a formal but tired layout", "The new terrace needed to sit naturally with the house"],
    requirements: ["Natural sandstone", "Gentle step changes", "New edging and jointing", "A planted frame for softness"],
    designApproach: ["We used the paving format and the surrounding planting to keep the terrace feeling calm and established.", "Drainage and threshold detail were built in so the space is practical as well as pretty.", "The stone was laid to complement the property rather than compete with it."],
    delivered: ["Excavation and levels correction", "Sandstone paving", "Step detailing", "Jointing and edging", "Border planting"],
    materialsUsed: ["Natural Sandstone", "Brick Edging", "Planting Soil", "Outdoor Lighting"],
    gallery: sandstoneGallery,
    beforeImages: [tspBefore],
    afterImages: [tspAfter],
    outcome:
      "The patio now feels settled and authentic to the property. It offers the client a durable and attractive dining area while preserving the traditional character of the garden.",
  },
  {
    slug: "artificial-lawn-installation",
    title: "Artificial Lawn Installation",
    category: "Artificial Grass",
    serviceSlug: "artificial-grass",
    servicesUsed: ["artificial-grass", "fencing", "garden-design"],
    location: "Basingstoke, Hampshire",
    budgetRange: "£14,500 - £22,000",
    completionDate: "September 2025",
    featuredImage: aliAfter,
    summary: "A tidy, low-maintenance lawn installation that keeps the family garden looking fresh in every season.",
    description:
      "The brief was to solve a lawn that struggled with shade, wear and patchiness. By rebuilding the base and sharpening the edge details, the garden gained a reliable surface for children and pets without losing its sense of quality.",
    clientObjectives: ["Replace a failing lawn", "Reduce maintenance", "Keep the space safe for children and pets"],
    challenges: ["Poor drainage in the lawn area", "Shade from nearby boundaries", "The need for very neat perimeter detail"],
    requirements: ["Premium artificial turf", "New edging", "Improved drainage", "A softer boundary line"],
    designApproach: ["We rebuilt the lawn base so the finished turf would drain properly and sit level.", "The boundaries were cleaned up to make the garden feel larger and easier to read.", "We kept the layout simple to prioritise play space and maintenance ease."],
    delivered: ["Turf removal", "Ground preparation", "Artificial grass installation", "Edging and border clean-up", "Boundary tidy-up"],
    materialsUsed: ["Premium Turf", "Permeable Base", "Timber Edging", "Decorative Gravel"],
    gallery: artificialGallery,
    beforeImages: [aliBefore],
    afterImages: [aliAfter],
    outcome:
      "The garden now has a clean, dependable lawn that stays presentable year-round. The family gets the visual order they wanted, and the maintenance burden is dramatically lower.",
  },
  {
    slug: "outdoor-kitchen-project",
    title: "Outdoor Kitchen Project",
    category: "Outdoor Living",
    serviceSlug: "outdoor-living-spaces",
    servicesUsed: ["outdoor-living-spaces", "patios-paving", "garden-design"],
    location: "Ascot, Berkshire",
    budgetRange: "£72,000 - £96,000",
    completionDate: "August 2025",
    featuredImage: okpAfter1,
    summary: "A kitchen-led entertaining space with porcelain flooring, storage, lighting and room for guests.",
    description:
      "The outdoor kitchen needed to feel integrated rather than bolted onto the garden. We built the terrace, service routes and surrounding detailing together so the result functions like a true extension of the home.",
    clientObjectives: ["Create an outdoor cooking area", "Connect the kitchen to the terrace", "Keep the finish refined and easy to maintain"],
    challenges: ["Service coordination for utilities", "Heat and moisture exposure around the cooking zone", "Keeping the layout open for hosting"],
    requirements: ["Durable cooking surfaces", "Storage and prep zones", "Outdoor lighting", "Comfortable seating nearby"],
    designApproach: ["We treated the kitchen and terrace as one composition so the proportions stayed balanced.", "Materials were chosen to cope with cleaning, weather and frequent use.", "Lighting and seating were arranged to make the kitchen feel social rather than purely functional."],
    delivered: ["Utility coordination", "Porcelain terrace", "Outdoor kitchen install", "Lighting and seating", "Planting and detailing"],
    materialsUsed: ["Porcelain Tiles", "Stone Worktops", "Weatherproof Joinery", "LED Task Lighting"],
    gallery: kitchenGallery,
    beforeImages: [okpBefore1, okpBefore2],
    afterImages: [okpAfter1, okpAfter2],
    outcome:
      "The garden now has a serious entertaining centrepiece. The outdoor kitchen feels integrated into the space, the terrace is practical for guests and the whole area has a much stronger sense of purpose.",
  },
  {
    slug: "full-landscape-redesign",
    title: "Full Landscape Redesign",
    category: "Garden Design",
    serviceSlug: "garden-design",
    servicesUsed: ["garden-design", "patios-paving", "decking", "fencing", "outdoor-living-spaces"],
    location: "Reading, Berkshire",
    budgetRange: "£88,000 - £124,000",
    completionDate: "June 2025",
    featuredImage: flrAfter1,
    summary: "A complete landscape overhaul with layered materials, new boundaries and an improved garden flow.",
    description:
      "This was a comprehensive redesign rather than a surface refresh. Every part of the garden was reconsidered so the house, terraces, boundaries and planting all work together as one coherent scheme.",
    clientObjectives: ["Rework the whole garden from scratch", "Create better flow between the zones", "Bring the exterior finish up to the standard of the home"],
    challenges: ["A disconnected original layout", "Mixed levels and aging finishes", "The need to tie together several material types"],
    requirements: ["New terraces and circulation routes", "Decking and boundary works", "Planting structure", "Outdoor living features"],
    designApproach: ["We used a strong central route to connect the major areas of the garden.", "Material transitions were coordinated carefully so the scheme feels intentional rather than pieced together.", "The planting and lighting were planned as the finishing layer that ties everything together."],
    delivered: ["Full excavation", "New paving and decking", "Boundary fencing", "Planting and lighting", "Outdoor living zone"],
    materialsUsed: ["Porcelain Paving", "Composite Decking", "Timber Fencing", "Feature Lighting"],
    gallery: landscapeGallery,
    beforeImages: [flrBefore1],
    afterImages: [flrAfter1, flrAfter2],
    outcome:
      "The garden now feels coherent from end to end. Rather than several disconnected surfaces, the client has a finished landscape with rhythm, privacy and a clear sense of movement through the space.",
  },
];

const serviceLookup = new Map(services.map((service) => [service.slug, service]));
const projectLookup = new Map(projects.map((project) => [project.slug, project]));

export const serviceFilters = [
  { slug: "all", label: "All Projects" },
  { slug: "garden-design", label: "Garden Design" },
  { slug: "patios-paving", label: "Patios & Paving" },
  { slug: "driveways", label: "Driveways" },
  { slug: "artificial-grass", label: "Artificial Grass" },
  { slug: "fencing", label: "Fencing" },
  { slug: "decking", label: "Decking" },
  { slug: "outdoor-living-spaces", label: "Outdoor Living" },
  { slug: "commercial-landscaping", label: "Commercial" },
] as const;

export function getServiceBySlug(slug: ServiceSlug) {
  return serviceLookup.get(slug);
}

export function getProjectBySlug(slug: ProjectSlug) {
  return projectLookup.get(slug);
}

export function getProjectsForService(slug: ServiceSlug) {
  return projects.filter((project) => project.servicesUsed.includes(slug));
}

export function getRelatedProjects(project: ProjectDefinition, count = 3) {
  const ordered = projects
    .filter((candidate) => candidate.slug !== project.slug)
    .sort((left, right) => scoreRelatedProject(project, right) - scoreRelatedProject(project, left));

  return ordered.slice(0, count);
}

function scoreRelatedProject(source: ProjectDefinition, candidate: ProjectDefinition) {
  let score = 0;

  if (source.serviceSlug === candidate.serviceSlug) {
    score += 4;
  }

  const sharedServices = source.servicesUsed.filter((serviceSlug) => candidate.servicesUsed.includes(serviceSlug));
  score += sharedServices.length * 2;

  if (source.category === candidate.category) {
    score += 1;
  }

  return score;
}

export const heroImages = { heroGarden, heroGreenfield, beforeImg, afterImg, teamImg, whyImg };