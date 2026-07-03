import type { Service, ProcessStep, Stat, CaseSlide, BrandTile } from "./types";

export const services: Service[] = [
  {
    icon: "/assets/icons/svc-brand.svg",
    title: "Brand Identity Development",
    description: "Build a cohesive identity that reflects your brand’s values and resonates across every audience touchpoint.",
    image: "/assets/images/home/pg4jif6aL8oW8aTmLhhEiOwCMmU.png",
    imageAlt: "Brand identity work samples",
  },
  {
    icon: "/assets/icons/svc-web.svg",
    title: "Website Design & Development",
    description: "Mobile-friendly and on-brand websites & landing pages that reflect brand values and convert clients/customers.",
    image: "/assets/images/home/PQbMe8SJ3lh0Hj2naOly6vt7AJw.png",
    imageAlt: "Website design sample",
  },
  {
    icon: "/assets/icons/svc-content.svg",
    title: "Content Marketing",
    description: "Build communities through meaningful content and campaigns that resonate, inspire sharing, and drive organic reach.",
    image: "/assets/images/home/4bykHf3x0dbHwrmFHSKmqY0kP2k.png",
    imageAlt: "Content marketing videos",
  },
  {
    icon: "/assets/icons/svc-creative.svg",
    title: "Creative Strategy & Design",
    description: "Creative strategies and designs crafted for every business objective, from brand brochures to high-impact ad campaigns.",
    image: "/assets/images/home/DTEGZhN9Pgtdc7Di2ag47KBLm0.png",
    imageAlt: "Creative design samples",
  },
  {
    icon: "/assets/icons/svc-performance.svg",
    title: "Performance / Growth Marketing",
    description: "Attract, nurture, and convert your ideal audience through full-funnel, ROI-driven digital campaigns.",
    image: "/assets/images/home/cXqoqawDAtn5wQVuO5m5Lk2Y8.png",
    imageAlt: "Growth marketing example",
  },
  {
    icon: "/assets/icons/svc-erp.svg",
    title: "ERP Solutions & App Development",
    description: "Build high-performance systems and streamline IT operations with tailored technology solutions, highlighted by our work on Onsite and ReidiusOne.",
    image: "/assets/images/home/BlgszzHu8dK2LlViuVRd2Hc2yCE.png",
    imageAlt: "ERP and app development",
  },
];

export const uspItems = [
  "Tailored solution",
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
      "/assets/images/home/9081DHswUFB4nSmxFMR8q2zFA.png",
      "/assets/images/home/GCieHF4f52Vfv4s9DidFOiksE.png",
      "/assets/images/home/wBA6TlIQokADrYACyuQRZip0.png",
    ],
  },
  { value: "500CR+", label: "Business Generated", icon: "/assets/icons/stat-bolt-1.svg" },
  { value: "100M+", label: "Customers Acquired", icon: "/assets/icons/stat-bolt-2.svg" },
  { value: "120M+", label: "Video Views", icon: "/assets/icons/stat-bolt-3.svg" },
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
    logo: "/assets/icons/shoemonkies-mark.svg",
    logoText: "ShoeMonkies",
    logoClass: "shoemonkies-name",
    titleLines: ["ShoeMonkies:", "Amazon Business to"],
    serifLine: "D2C Brand",
    description: "A unique brand identity, an e-commerce website that converts, and digital Growth.",
    href: "/Case-study-1-sm",
    metricLabel: "Building a Brand in",
    metric: "3 Months",
  },
  {
    logo: "/assets/images/home/5AeP6g0tPZBpKHQ9LxvZEYk84kg.png",
    titleLines: ["₹10 Crore Annual", "Revenue stream for"],
    serifLine: "AstroVedansh",
    description: "AstroVedansh sees 1200% Revenue growth in very second month with MagicMond.",
    href: "/case-srudy-2-AV",
    metricLabel: "Revenue Growth",
    metric: "1200%",
  },
  {
    logo: "/assets/icons/reidius-mark.svg",
    logoText: "Reidius Infra",
    logoClass: "reidius-name",
    titleLines: ["Reidius Infra's", "Remarkable"],
    serifLine: "Online Growth",
    description: "Increased online revenue by 300% in 4 months through Strategic Marketing solution.",
    href: "/Case-study-ri",
    metricLabel: "Revenue Growth",
    metric: "300%",
  },
];

export const founderPills = [
  "You’re passionate & ambitious",
  "You believe in the scope of online growth",
  "You wanna focus on your core business",
  "You value high quality design & deep work",
];

export const brandRows: BrandTile[][] = [
  [
    { image: "/assets/images/home/NQD8hUNNe0CtRPHgxLXaB4Lg7M.svg", alt: "Meta", meta: true },
    { image: "/assets/icons/pw-logo.svg", alt: "Physics Wallah" },
    { image: "/assets/icons/kr-logo.svg", alt: "KR" },
    { image: "/assets/icons/brand-r1-extra.svg", alt: "" },
  ],
  [
    { image: "/assets/icons/parth-mark.svg", alt: "Parth" },
    { image: "/assets/icons/av-mark.svg", alt: "AstroVedansh" },
    { image: "/assets/icons/crex-mark.svg", alt: "CREX" },
    { image: "/assets/icons/crex-mark2.svg", alt: "" },
    { image: "/assets/icons/brand-r2-extra.svg", alt: "" },
  ],
  [
    { image: "/assets/icons/brand-makelen.svg", alt: "Makelen" },
    { image: "/assets/icons/brand-fur.svg", alt: "" },
    { image: "/assets/icons/shoemonkies-mark.svg", alt: "ShoeMonkies" },
    { image: "/assets/icons/brand-onsite.svg", alt: "Onsite" },
    { image: "/assets/icons/brand-r3-extra.svg", alt: "" },
  ],
];
