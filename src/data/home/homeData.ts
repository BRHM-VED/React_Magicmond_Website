import type { Service, ProcessStep, Stat, CaseSlide, BrandTile } from "../common/types";

export const services: Service[] = [
  {
    icon: "Target",
    title: "Brand Identity Development",
    subtitle: "Standout Visually",
    description: "Craft a distinctive, memorable identity that captures your brand's essence across all touchpoints.",
    image: "/assets/images/home/service-brand-identity.webp",
    imageAlt: "Brand identity work samples",
    badge: "Recommended",
  },
  {
    icon: "Monitor",
    title: "Website Design & Development",
    subtitle: "Convert More Visitors",
    description: "Mobile-friendly and on-brand websites & landing pages that reflect brand values and convert clients/customers.",
    image: "/assets/images/home/service-website-design.webp",
    imageAlt: "Website design sample",
  },
  {
    icon: "Cpu",
    title: "ERP Solutions & App Development",
    subtitle: "Streamline Operations",
    description: "Build high-performance systems and streamline IT operations with tailored technology solutions, highlighted by our work on Onsite and ReidiusOne.",
    image: "/assets/images/home/service-erp-solutions.webp",
    imageAlt: "ERP and app development",
  },
  {
    icon: "TrendingUp",
    title: "Performance / Growth Marketing",
    subtitle: "Fuel Your Pipeline",
    description: "Attract, nurture, and convert your ideal audience through full-funnel, ROI-driven digital campaigns.",
    image: "/assets/images/home/service-growth-marketing.webp",
    imageAlt: "Growth marketing example",
  },
  {
    icon: "MessageSquare",
    title: "Content Marketing",
    subtitle: "Build Your Community",
    description: "Build communities through meaningful content and campaigns that resonate, inspire sharing, and drive organic reach.",
    image: "/assets/images/home/service-content-marketing.webp",
    imageAlt: "Content marketing videos",
  },
  {
    icon: "Palette",
    title: "Creative Strategy & Design",
    subtitle: "Elevate Every Touchpoint",
    description: "Creative strategies and designs crafted for every business objective, from brand brochures to high-impact ad campaigns.",
    image: "/assets/images/home/service-creative-strategy.webp",
    imageAlt: "Creative design samples",
  },
];

export const uspItems = [
  "<s>Services</s> Tailored solution",
  "results that, speak.",
  "conversion focused",
  "fullstack digital partner",
  "Omnichannel presence",
];

export const stats: Stat[] = [
  {
    value: "50+",
    label: "Partners Served",
    avatars: [
      "/assets/images/home/stat-avatar-1.webp",
      "/assets/images/home/stat-avatar-2.webp",
      "/assets/images/home/stat-avatar-3.webp",
    ],
  },
  { value: "500CR+", label: "Business Generated", icon: "Zap" },
  { value: "100M+", label: "Customers Acquired", icon: "Users" },
  { value: "120M+", label: "Video Views", icon: "Play" },
];

export const processSteps: ProcessStep[] = [
  {
    badge: "Step-1",
    title: "Book a free consulation",
    description: "We kick things off with a no‑obligation call to learn your goals, challenges, and vision for digital growth.",
  },
  {
    badge: "Step-2",
    title: "Gap Identification",
    description: "We map out key opportunities, where your competitors lead, what your audience expects, and how to bridge the divide.",
  },
  {
    badge: "Step-3",
    title: "Tailored Growth Plan 🚀",
    description: "With your roadmap in hand, we implement the strategy, optimize performance, and drive your digital growth.",
  },
];

export const caseSlides: CaseSlide[] = [
  {
    logo: "/assets/images/common/ShowMonkies.svg",
    logoText: "",
    logoClass: "shoemonkies-name",
    titleLines: ["ShoeMonkies:", "Amazon Business to"],
    serifLine: "D2C Brand",
    description: "A unique brand identity, an e-commerce website that converts, and digital Growth.",
    href: "/case-study-shoemonkies",
    metricLabel: "Building a Brand in",
    metric: "3 Months",
  },
  {
    logo: "/assets/images/common/AstroVedanshLogo.svg",
    titleLines: ["₹10 Crore Annual", "Revenue stream for"],
    serifLine: "AstroVedansh",
    description: "AstroVedansh sees 1200% Revenue growth in very second month with MagicMond.",
    href: "/case-study-astrovedansh",
    metricLabel: "Revenue Growth",
    metric: "1200%",
  },
  {
    logo: "/assets/images/common/ReidiusInfraLogo.svg",
    logoText: "",
    logoClass: "reidius-name",
    titleLines: ["Reidius Infra's", "Remarkable"],
    serifLine: "Online Growth",
    description: "Increased online revenue by 300% in 4 months through Strategic Marketing solution.",
    href: "/case-study-reidius-infra",
    metricLabel: "Revenue Growth",
    metric: "300%",
  },
  {
    logo: "/assets/images/common/OnsiteLogo.svg",
    logoText: "",
    logoClass: "onsite-name text-[#0055cc]",
    titleLines: ["Onsite: 2.5x", "Sales Revenue for"],
    serifLine: "Construction SaaS",
    description: "Scale marketing pipelines from 15L to 40L while cutting cost per sales.",
    href: "/case-study-onsite",
    metricLabel: "Revenue Growth",
    metric: "150%",
  },
  {
    logo: "/assets/images/common/ShriYamunaLogo.svg",
    logoText: "",
    logoClass: "shri-yamuna-name text-[#e08c00]",
    titleLines: ["Shri Yamuna:", "120+ Site Visits"],
    serifLine: "in 3 Months",
    description: "Building a high-demand pipeline reaching buyers from Delhi to the USA for newly launched residential projects.",
    href: "/case-study-shri-yamuna-infra",
    metricLabel: "Site Visits",
    metric: "120+",
  },
];

export const founderPills = [
  "You believe in the scope of online growth",
  "You’re passionate & ambitious",
  "You value high quality design & deep work",
  "You wanna focus on your core business",
];

export const brandRows: BrandTile[][] = [
  [
    { image: "/assets/images/common/RsInfra.svg", alt: "RS Infra" },
    { image: "/assets/images/common/ReidiusInfra.svg", alt: "Reidius Infra" },
    { image: "/assets/images/common/ShriYamunaInfra.svg", alt: "Shri Yamuna Infra" },
    { image: "/assets/images/common/PhysicsWallah.svg", alt: "Physics Wallah" },
    { image: "/assets/images/common/ReidiusInfraGlobal.svg", alt: "Reidius Infra Global" },
    { image: "/assets/images/common/OneCricket.svg", alt: "OneCricket" },
    { image: "/assets/images/common/Ashiana.svg", alt: "Ashiana" },
  ],
  [
    { image: "/assets/images/common/Parth.svg", alt: "Parth" },
    { image: "/assets/images/common/Velocity.svg", alt: "Velocity" },
    { image: "/assets/images/common/KR_Ayurveda.svg", alt: "KR Ayurveda" },
    { image: "/assets/images/common/Solrio.svg", alt: "Solrio" },
    { image: "/assets/images/common/Makelen.svg", alt: "Makelen" },
    { image: "/assets/images/common/MetaFur.svg", alt: "Meta Fur" },
    { image: "/assets/images/common/ShowMonkies.svg", alt: "ShoeMonkies" },
  ],
  [
    { image: "/assets/images/common/CricketExchangeFantasy.svg", alt: "Cricket Exchange Fantasy" },
    { image: "/assets/images/common/CryptoVivaan.svg", alt: "Crypto Vivaan" },
    { image: "/assets/images/common/Onsite.svg", alt: "Onsite" },
    { image: "/assets/images/common/AstroVedanshLogo.svg", alt: "AstroVedansh" },
    { image: "/assets/images/common/Crex.svg", alt: "CREX" },
    { image: "/assets/images/common/NirmaanWorks.svg", alt: "Nirmaan Works" },
    { image: "/assets/images/common/MaisonEvora.svg", alt: "Maison Evora" },
  ],
];
